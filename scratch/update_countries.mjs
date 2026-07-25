import fs from 'fs';
import countries from 'i18n-iso-countries';
import en from 'i18n-iso-countries/langs/en.json' with { type: "json" };
countries.registerLocale(en);

const wikiData = JSON.parse(fs.readFileSync('wiki_parsed.json', 'utf8'));

// Some Wikipedia names differ from standard ISO names
const customMap = {
  'Bahamas': 'BS',
  'Brunei': 'BN',
  'Cape Verde': 'CV',
  'Republic of the Congo': 'CG',
  'Democratic Republic of the Congo': 'CD',
  'Czech Republic': 'CZ',
  'Eswatini': 'SZ',
  'Gambia': 'GM',
  'North Korea': 'KP',
  'South Korea': 'KR',
  'Laos': 'LA',
  'Micronesia': 'FM',
  'North Macedonia': 'MK',
  'Palau': 'PW',
  'Russia': 'RU',
  'São Tomé and Príncipe': 'ST',
  'Syria': 'SY',
  'Timor-Leste': 'TL',
  'Vatican City': 'VA',
  'Vietnam': 'VN'
};

const updates = {};
for (const [name, status] of Object.entries(wikiData)) {
  let alpha2 = customMap[name] || countries.getAlpha2Code(name, 'en');
  if (alpha2) {
    updates[alpha2] = status;
  } else {
    console.log(`Could not find ISO code for: ${name}`);
  }
}

// Update countries.js
let content = fs.readFileSync('src/data/countries.js', 'utf8');

// Match blocks: id: 'TR', ... visaStatus: '...',
// Since it's a huge array of objects, we can regex replace per id
for (const [id, status] of Object.entries(updates)) {
  const regex = new RegExp(`(id:\\s*['"]${id}['"][\\s\\S]*?visaStatus:\\s*['"])[^'"]+(['"])`, 'g');
  if (regex.test(content)) {
    content = content.replace(regex, `$1${status}$2`);
  } else {
    console.log(`ID ${id} not found in countries.js`);
  }
}

fs.writeFileSync('src/data/countries.js', content);
console.log('Successfully updated countries.js!');
