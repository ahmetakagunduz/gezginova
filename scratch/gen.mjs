import fs from 'fs';
import isoNumericToAlpha2 from '../src/data/isoNumericToAlpha2.js';

const existingContent = fs.readFileSync('src/data/countries.js', 'utf8');
const existingIds = new Set();
let match;
const regex = /id:\s*['"]([A-Z]{2})['"]/g;
while ((match = regex.exec(existingContent)) !== null) {
  existingIds.add(match[1]);
}

const geoDataStr = fs.readFileSync('src/data/countries-110m.json', 'utf8');
const geoData = JSON.parse(geoDataStr);
const geometries = geoData.objects.countries.geometries;

let newCountriesStr = '';

Object.entries(isoNumericToAlpha2).forEach(([numCode, alpha2]) => {
  if (alpha2 === 'TR' || existingIds.has(alpha2)) return;
  
  const geo = geometries.find(g => String(g.id) === numCode);
  const nameEn = geo ? geo.properties.name : alpha2;
  const nameTr = nameEn; // We just use the english name as fallback
  
  const capital = 'Bilinmeyen';
  const continent = 'Bilinmeyen';
  const currencyStr = 'Bilinmeyen';
  const flag = '';
  
  const entry = `  {
    id: "${alpha2}",
    name: "${nameTr.replace(/"/g, '\\"')}",
    nameEn: "${nameEn.replace(/"/g, '\\"')}",
    capital: "${capital}",
    continent: "${continent}",
    currency: "${currencyStr}",
    flag: "${flag}",
    visaStatus: "vize_gerekli",
    allowedDays: 0,
    allowedDaysNote: "Vize gerekli",
    eVisaFee: 0,
    dailyCost: { low: 400, mid: 800, high: 1500 },
    dailyAccommodation: { low: 300, mid: 600, high: 1200 },
    tags: ["sehir_kultur"],
    clusterId: null,
    popularCities: ["${capital}"]
  },
`;
  newCountriesStr += entry;
});

const newFileContent = existingContent.replace('];\n\n// Yardımcı', newCountriesStr + '];\n\n// Yardımcı');
fs.writeFileSync('src/data/countries.js', newFileContent);
console.log('Added new countries from topojson.');
