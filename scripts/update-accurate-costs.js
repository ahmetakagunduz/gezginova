import * as cheerio from 'cheerio';
import fs from 'fs';

// Baseline costs for a country with Cost of Living Index = 100 (e.g., USA/New York)
const BASE_DAILY_COST = {
  low: 80,
  mid: 160,
  high: 300
};
const BASE_ACC_COST = {
  low: 60,
  mid: 120,
  high: 250
};

async function updateBudgets() {
  try {
    console.log("Numbeo'dan güncel Yaşam Maliyeti İndeksi (Cost of Living Index) çekiliyor...");
    const res = await fetch('https://www.numbeo.com/cost-of-living/rankings_by_country.jsp', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    if (!res.ok) {
        throw new Error("Numbeo API failed");
    }
    
    const text = await res.text();
    const $ = cheerio.load(text);
    
    const indexMap = {};
    $('table#t2 tbody tr').each((i, el) => {
      const cols = $(el).find('td');
      if (cols.length >= 3) {
        const countryName = $(cols[1]).text().trim();
        const indexVal = parseFloat($(cols[2]).text().trim());
        indexMap[countryName] = indexVal;
      }
    });
    
    console.log(`Başarıyla ${Object.keys(indexMap).length} ülkenin yaşam endeksi çekildi.`);
    if(Object.keys(indexMap).length === 0) {
        console.log("Could not find table rows. Maybe Numbeo blocked us or changed HTML.");
        return;
    }

    // Harita Eşleştirmesi (Numbeo isimleri ile GezgiNova isimleri)
    // Örn: Numbeo'da "United States" -> Bizde "United States of America"
    const nameMap = {
      "United States": "United States of America",
      "United Kingdom": "United Kingdom",
      "South Korea": "South Korea",
      "Czech Republic": "Czech Republic",
      "Russia": "Russian Federation",
      "Turkey": "Turkey",
      "Vietnam": "Viet Nam"
    };

    let content = fs.readFileSync('src/data/countries.js', 'utf8');
    const countriesMatch = content.match(/export const countries = (\[[\s\S]*?\]);/);
    if (!countriesMatch) {
      console.error("Could not find countries array in file");
      process.exit(1);
    }
    
    let countriesList = eval(countriesMatch[1]);
    
    let updatedCount = 0;
    countriesList.forEach(c => {
      const lookupName = Object.keys(nameMap).find(k => nameMap[k] === c.nameEn) || c.nameEn;
      
      let colIndex = indexMap[lookupName];
      
      if (!colIndex) {
        // Fallbacks for regions if exact match not found
        if (c.continent === 'Avrupa') colIndex = 60;
        else if (c.continent === 'Asya') colIndex = 40;
        else if (c.continent === 'Afrika') colIndex = 35;
        else if (c.continent === 'Güney Amerika') colIndex = 45;
        else colIndex = 50;
      } else {
        updatedCount++;
      }
      
      // Calculate realistic costs based on Numbeo Index (Index 100 = BASE_COST)
      const ratio = colIndex / 100;
      
      c.dailyCost = {
        low: Math.round(BASE_DAILY_COST.low * ratio),
        mid: Math.round(BASE_DAILY_COST.mid * ratio),
        high: Math.round(BASE_DAILY_COST.high * ratio)
      };
      
      c.dailyAccommodation = {
        low: Math.round(BASE_ACC_COST.low * ratio),
        mid: Math.round(BASE_ACC_COST.mid * ratio),
        high: Math.round(BASE_ACC_COST.high * ratio)
      };
    });
    
    const newArrayStr = JSON.stringify(countriesList, null, 2).replace(/"([^"]+)":/g, '$1:');
    const newContent = content.replace(countriesMatch[0], `export const countries = ${newArrayStr};`);
    fs.writeFileSync('src/data/countries.js', newContent);
    
    console.log(`Başarıyla ${updatedCount} ülkenin günlük bütçe verisi Numbeo güncel endeksine göre hesaplandı ve güncellendi!`);

  } catch(e) {
    console.error(e);
  }
}
updateBudgets();
