import fs from 'fs';
import * as cheerio from 'cheerio';
import path from 'path';

async function run() {
  console.log('Fetching Wikipedia data...');
  const res = await fetch('https://en.wikipedia.org/w/api.php?action=parse&page=Visa_requirements_for_Turkish_citizens&format=json');
  const json = await res.json();
  const html = json.parse.text['*'];

  const $ = cheerio.load(html);
  
  // The first sortable table is usually the main one
  const rows = $('table.sortable').first().find('tbody tr');
  console.log(`Found ${rows.length} rows in the main table.`);

  const wikiData = {};

  rows.each((i, el) => {
    // The country name is usually in the first TH or TD
    const countryEl = $(el).find('th, td').first();
    const countryText = countryEl.text().replace(/\[.*?\]/g, '').trim();
    
    if (!countryText || countryText === 'Country') return;
    
    // The visa requirement is usually in the second TD (which might be the next element)
    const visaEl = countryEl.next();
    const visaText = visaEl.text().replace(/\[.*?\]/g, '').trim().toLowerCase();
    
    let status = 'vize_gerekli';
    if (visaText.includes('visa not required') || visaText.includes('freedom of movement') || visaText.includes('visa-free')) {
      status = 'vizesiz';
    } else if (visaText.includes('visa on arrival')) {
      status = 'kapida_vize';
    } else if (visaText.includes('evisa') || visaText.includes('e-visa') || visaText.includes('electronic')) {
      status = 'e_vize';
    } else if (visaText.includes('visa required')) {
      status = 'vize_gerekli';
    } else {
      // Check for some edge cases
      if (visaText.includes('not required')) status = 'vizesiz';
      if (visaText.includes('free')) status = 'vizesiz';
    }

    // Map some Wikipedia names to our iso list if they differ
    wikiData[countryText] = status;
  });

  console.log('Parsed WikiData for', Object.keys(wikiData).length, 'countries.');
  
  // Count stats to verify
  let counts = { vizesiz: 0, kapida_vize: 0, e_vize: 0, vize_gerekli: 0 };
  for (let c in wikiData) counts[wikiData[c]]++;
  console.log(counts);

  fs.writeFileSync('wiki_parsed.json', JSON.stringify(wikiData, null, 2));
}

run().catch(console.error);
