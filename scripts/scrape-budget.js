import * as cheerio from 'cheerio';

async function testScrape() {
  try {
    const res = await fetch('https://www.budgetyourtrip.com/countrylist.php', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    const text = await res.text();
    const $ = cheerio.load(text);
    
    let countries = [];
    $('table tr').each((i, el) => {
      const cols = $(el).find('td');
      if (cols.length > 0) {
        const name = $(cols[0]).text().trim();
        const costStr = $(cols[2]).text().trim(); // 3rd column is average daily cost
        const costMatch = costStr.match(/\$([0-9,]+)/);
        if (costMatch) {
            const cost = parseInt(costMatch[1].replace(',', ''), 10);
            countries.push({ name, cost });
        }
      }
    });
    
    console.log(countries.slice(0, 10));
    console.log("Total found: " + countries.length);
  } catch(e) {
    console.error(e);
  }
}
testScrape();
