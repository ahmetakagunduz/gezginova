import * as cheerio from 'cheerio';
import fs from 'fs';

async function fetchVisaData() {
  console.log("Fetching Wikipedia data...");
  const url = 'https://en.wikipedia.org/wiki/Visa_requirements_for_Turkish_citizens';
  const response = await fetch(url);
  const html = await response.text();
  
  const $ = cheerio.load(html);
  const visaData = {};

  // Find the table with "Visa requirement" in its header
  $('table.wikitable').each((i, table) => {
    const headers = $(table).find('th').map((_, th) => $(th).text().trim()).get();
    if (headers.includes('Visa requirement')) {
      $(table).find('tbody tr').each((_, tr) => {
        const tds = $(tr).find('td');
        if (tds.length >= 2) {
          const country = $(tds[0]).text().trim().replace(/\[.*?\]/g, '').split('(')[0].trim();
          const requirement = $(tds[1]).text().trim().replace(/\[.*?\]/g, '');
          const allowedStay = tds.length >= 3 ? $(tds[2]).text().trim().replace(/\[.*?\]/g, '') : '';
          
          let visaStatus = 'vize_gerekli';
          if (requirement.toLowerCase().includes('visa not required') || requirement.toLowerCase().includes('visa-free') || requirement.toLowerCase().includes('freedom of movement')) {
            visaStatus = 'vizesiz';
          } else if (requirement.toLowerCase().includes('evisa') || requirement.toLowerCase().includes('e-visa') || requirement.toLowerCase().includes('electronic')) {
            visaStatus = 'e_vize';
          } else if (requirement.toLowerCase().includes('visa on arrival')) {
            visaStatus = 'kapida_vize';
          } else if (requirement.toLowerCase().includes('eta') || requirement.toLowerCase().includes('electronic travel authorization')) {
             visaStatus = 'e_vize';
          }
          
          let days = 0;
          const daysMatch = allowedStay.match(/(\d+)\s*(days|months)/i);
          if (daysMatch) {
             days = parseInt(daysMatch[1], 10);
             if (daysMatch[2].toLowerCase() === 'months') days *= 30;
          } else if (requirement.match(/(\d+)\s*(days|months)/i)) {
             const m = requirement.match(/(\d+)\s*(days|months)/i);
             days = parseInt(m[1], 10);
             if (m[2].toLowerCase() === 'months') days *= 30;
          }
          
          visaData[country] = {
            visaStatus,
            allowedDays: days,
            rawRequirement: requirement,
            rawStay: allowedStay
          };
        }
      });
    }
  });

  fs.writeFileSync('visa-data.json', JSON.stringify(visaData, null, 2));
  console.log(`Saved ${Object.keys(visaData).length} countries to visa-data.json`);
}

fetchVisaData().catch(console.error);
