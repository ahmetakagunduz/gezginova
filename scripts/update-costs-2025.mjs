import fs from 'fs';
import path from 'path';

const file_path = "C:\\Users\\logar\\.gemini\\antigravity\\scratch\\gezginova\\src\\data\\countries.js";
let content = fs.readFileSync(file_path, 'utf8');

content = content.replace('TL (Türk Lirası)', 'USD (Amerikan Doları)');

const costData = {
  // SE Asia
  'TH': { cost: {local: 18, gezgin: 45}, acc: {local: 12, gezgin: 45} },
  'VN': { cost: {local: 14, gezgin: 30}, acc: {local: 8, gezgin: 35} },
  'ID': { cost: {local: 15, gezgin: 35}, acc: {local: 10, gezgin: 40} },
  'KH': { cost: {local: 16, gezgin: 35}, acc: {local: 8, gezgin: 35} },
  'MY': { cost: {local: 18, gezgin: 40}, acc: {local: 12, gezgin: 45} },
  'PH': { cost: {local: 18, gezgin: 38}, acc: {local: 12, gezgin: 42} },
  'SG': { cost: {local: 40, gezgin: 80}, acc: {local: 35, gezgin: 100} },
  'MM': { cost: {local: 14, gezgin: 32}, acc: {local: 10, gezgin: 35} },
  'LA': { cost: {local: 14, gezgin: 30}, acc: {local: 8, gezgin: 30} },
  'TL': { cost: {local: 16, gezgin: 35}, acc: {local: 10, gezgin: 40} },
  // East Asia
  'JP': { cost: {local: 35, gezgin: 70}, acc: {local: 30, gezgin: 85} },
  'KR': { cost: {local: 28, gezgin: 55}, acc: {local: 22, gezgin: 65} },
  'HK': { cost: {local: 35, gezgin: 65}, acc: {local: 30, gezgin: 90} },
  'TW': { cost: {local: 22, gezgin: 45}, acc: {local: 18, gezgin: 55} },
  'CN': { cost: {local: 20, gezgin: 45}, acc: {local: 15, gezgin: 55} },
  'MN': { cost: {local: 15, gezgin: 35}, acc: {local: 12, gezgin: 40} },
  // Balkans
  'RS': { cost: {local: 18, gezgin: 40}, acc: {local: 14, gezgin: 45} },
  'BA': { cost: {local: 16, gezgin: 35}, acc: {local: 12, gezgin: 40} },
  'ME': { cost: {local: 22, gezgin: 50}, acc: {local: 18, gezgin: 60} },
  'AL': { cost: {local: 16, gezgin: 35}, acc: {local: 12, gezgin: 40} },
  'MK': { cost: {local: 15, gezgin: 32}, acc: {local: 11, gezgin: 38} },
  'XK': { cost: {local: 14, gezgin: 30}, acc: {local: 10, gezgin: 35} },
  'HR': { cost: {local: 25, gezgin: 55}, acc: {local: 20, gezgin: 65} },
  'SI': { cost: {local: 25, gezgin: 50}, acc: {local: 20, gezgin: 60} },
  // Caucasus
  'GE': { cost: {local: 15, gezgin: 35}, acc: {local: 10, gezgin: 40} },
  'AZ': { cost: {local: 16, gezgin: 38}, acc: {local: 11, gezgin: 42} },
  'AM': { cost: {local: 15, gezgin: 34}, acc: {local: 10, gezgin: 38} },
  // Western Europe
  'FR': { cost: {local: 40, gezgin: 90}, acc: {local: 35, gezgin: 110} },
  'DE': { cost: {local: 38, gezgin: 80}, acc: {local: 32, gezgin: 95} },
  'GB': { cost: {local: 42, gezgin: 95}, acc: {local: 38, gezgin: 120} },
  'ES': { cost: {local: 32, gezgin: 70}, acc: {local: 28, gezgin: 85} },
  'IT': { cost: {local: 38, gezgin: 85}, acc: {local: 32, gezgin: 105} },
  'NL': { cost: {local: 40, gezgin: 90}, acc: {local: 40, gezgin: 125} },
  'BE': { cost: {local: 35, gezgin: 75}, acc: {local: 30, gezgin: 90} },
  'AT': { cost: {local: 35, gezgin: 75}, acc: {local: 30, gezgin: 90} },
  'CH': { cost: {local: 55, gezgin: 120}, acc: {local: 50, gezgin: 150} },
  'PT': { cost: {local: 28, gezgin: 60}, acc: {local: 22, gezgin: 70} },
  'GR': { cost: {local: 28, gezgin: 60}, acc: {local: 22, gezgin: 70} },
  'IE': { cost: {local: 40, gezgin: 85}, acc: {local: 35, gezgin: 110} },
  'LU': { cost: {local: 45, gezgin: 100}, acc: {local: 40, gezgin: 120} },
  'IS': { cost: {local: 50, gezgin: 110}, acc: {local: 45, gezgin: 130} },
  'NO': { cost: {local: 48, gezgin: 100}, acc: {local: 42, gezgin: 120} },
  'SE': { cost: {local: 42, gezgin: 90}, acc: {local: 38, gezgin: 110} },
  'DK': { cost: {local: 45, gezgin: 95}, acc: {local: 40, gezgin: 115} },
  'FI': { cost: {local: 40, gezgin: 85}, acc: {local: 35, gezgin: 100} },
  'MC': { cost: {local: 60, gezgin: 130}, acc: {local: 55, gezgin: 160} },
  'AD': { cost: {local: 35, gezgin: 75}, acc: {local: 30, gezgin: 85} },
  'LI': { cost: {local: 50, gezgin: 110}, acc: {local: 45, gezgin: 130} },
  'SM': { cost: {local: 35, gezgin: 80}, acc: {local: 30, gezgin: 90} },
  'MT': { cost: {local: 28, gezgin: 60}, acc: {local: 22, gezgin: 65} },
  'CY': { cost: {local: 28, gezgin: 60}, acc: {local: 22, gezgin: 65} },
  // Eastern Europe
  'PL': { cost: {local: 22, gezgin: 45}, acc: {local: 16, gezgin: 55} },
  'CZ': { cost: {local: 25, gezgin: 55}, acc: {local: 20, gezgin: 70} },
  'HU': { cost: {local: 24, gezgin: 50}, acc: {local: 18, gezgin: 65} },
  'RO': { cost: {local: 20, gezgin: 40}, acc: {local: 14, gezgin: 50} },
  'BG': { cost: {local: 18, gezgin: 35}, acc: {local: 12, gezgin: 45} },
  'SK': { cost: {local: 22, gezgin: 48}, acc: {local: 18, gezgin: 60} },
  'LT': { cost: {local: 22, gezgin: 45}, acc: {local: 16, gezgin: 55} },
  'LV': { cost: {local: 22, gezgin: 45}, acc: {local: 16, gezgin: 55} },
  'EE': { cost: {local: 24, gezgin: 50}, acc: {local: 18, gezgin: 60} },
  'UA': { cost: {local: 15, gezgin: 35}, acc: {local: 10, gezgin: 40} },
  'MD': { cost: {local: 14, gezgin: 30}, acc: {local: 10, gezgin: 35} },
  'BY': { cost: {local: 16, gezgin: 35}, acc: {local: 12, gezgin: 40} },
  'RU': { cost: {local: 22, gezgin: 50}, acc: {local: 18, gezgin: 60} },
  // South America
  'AR': { cost: {local: 21, gezgin: 45}, acc: {local: 14, gezgin: 55} },
  'BR': { cost: {local: 23, gezgin: 50}, acc: {local: 15, gezgin: 60} },
  'CO': { cost: {local: 18, gezgin: 38}, acc: {local: 10, gezgin: 42} },
  'PE': { cost: {local: 18, gezgin: 40}, acc: {local: 10, gezgin: 45} },
  'CL': { cost: {local: 27, gezgin: 55}, acc: {local: 18, gezgin: 65} },
  'EC': { cost: {local: 16, gezgin: 35}, acc: {local: 10, gezgin: 40} },
  'UY': { cost: {local: 25, gezgin: 50}, acc: {local: 16, gezgin: 60} },
  'PY': { cost: {local: 14, gezgin: 30}, acc: {local: 8, gezgin: 35} },
  'BO': { cost: {local: 12, gezgin: 28}, acc: {local: 8, gezgin: 30} },
  'VE': { cost: {local: 20, gezgin: 40}, acc: {local: 12, gezgin: 45} },
  'GY': { cost: {local: 18, gezgin: 38}, acc: {local: 12, gezgin: 42} },
  'SR': { cost: {local: 18, gezgin: 38}, acc: {local: 12, gezgin: 42} },
  // Central America & Caribbean
  'MX': { cost: {local: 21, gezgin: 45}, acc: {local: 14, gezgin: 55} },
  'CR': { cost: {local: 30, gezgin: 65}, acc: {local: 20, gezgin: 75} },
  'PA': { cost: {local: 22, gezgin: 45}, acc: {local: 14, gezgin: 55} },
  'GT': { cost: {local: 16, gezgin: 35}, acc: {local: 10, gezgin: 40} },
  'SV': { cost: {local: 16, gezgin: 35}, acc: {local: 10, gezgin: 40} },
  'HN': { cost: {local: 14, gezgin: 32}, acc: {local: 10, gezgin: 38} },
  'NI': { cost: {local: 14, gezgin: 30}, acc: {local: 8, gezgin: 35} },
  'BZ': { cost: {local: 20, gezgin: 45}, acc: {local: 14, gezgin: 55} },
  'DO': { cost: {local: 20, gezgin: 42}, acc: {local: 14, gezgin: 50} },
  'CU': { cost: {local: 22, gezgin: 45}, acc: {local: 15, gezgin: 50} },
  'JM': { cost: {local: 22, gezgin: 48}, acc: {local: 16, gezgin: 55} },
  'BS': { cost: {local: 30, gezgin: 65}, acc: {local: 22, gezgin: 80} },
  'BB': { cost: {local: 28, gezgin: 55}, acc: {local: 20, gezgin: 70} },
  'TT': { cost: {local: 22, gezgin: 45}, acc: {local: 15, gezgin: 55} },
  'HT': { cost: {local: 15, gezgin: 32}, acc: {local: 10, gezgin: 35} },
  // Middle East & North Africa
  'JO': { cost: {local: 29, gezgin: 75}, acc: {local: 16, gezgin: 65} },
  'MA': { cost: {local: 17, gezgin: 40}, acc: {local: 11, gezgin: 45} },
  'EG': { cost: {local: 16, gezgin: 35}, acc: {local: 9, gezgin: 40} },
  'TN': { cost: {local: 15, gezgin: 32}, acc: {local: 10, gezgin: 38} },
  'LB': { cost: {local: 25, gezgin: 55}, acc: {local: 18, gezgin: 65} },
  'IR': { cost: {local: 14, gezgin: 32}, acc: {local: 10, gezgin: 35} },
  'QA': { cost: {local: 35, gezgin: 80}, acc: {local: 30, gezgin: 100} },
  'KW': { cost: {local: 30, gezgin: 70}, acc: {local: 25, gezgin: 85} },
  'OM': { cost: {local: 25, gezgin: 55}, acc: {local: 20, gezgin: 65} },
  'BH': { cost: {local: 25, gezgin: 55}, acc: {local: 20, gezgin: 65} },
  'AE': { cost: {local: 35, gezgin: 80}, acc: {local: 30, gezgin: 100} },
  'SA': { cost: {local: 28, gezgin: 60}, acc: {local: 22, gezgin: 75} },
  'IL': { cost: {local: 40, gezgin: 85}, acc: {local: 35, gezgin: 100} },
  'PS': { cost: {local: 20, gezgin: 42}, acc: {local: 14, gezgin: 45} },
  'IQ': { cost: {local: 18, gezgin: 38}, acc: {local: 12, gezgin: 42} },
  'SY': { cost: {local: 15, gezgin: 32}, acc: {local: 10, gezgin: 35} },
  'YE': { cost: {local: 14, gezgin: 30}, acc: {local: 8, gezgin: 30} },
  'LY': { cost: {local: 18, gezgin: 38}, acc: {local: 12, gezgin: 42} },
  'DZ': { cost: {local: 16, gezgin: 35}, acc: {local: 10, gezgin: 40} },
  // Sub-Saharan Africa
  'ZA': { cost: {local: 24, gezgin: 55}, acc: {local: 16, gezgin: 60} },
  'KE': { cost: {local: 20, gezgin: 60}, acc: {local: 15, gezgin: 65} },
  'TZ': { cost: {local: 18, gezgin: 55}, acc: {local: 14, gezgin: 60} },
  'ET': { cost: {local: 14, gezgin: 32}, acc: {local: 10, gezgin: 35} },
  'RW': { cost: {local: 16, gezgin: 35}, acc: {local: 10, gezgin: 40} },
  'UG': { cost: {local: 15, gezgin: 32}, acc: {local: 10, gezgin: 38} },
  'MZ': { cost: {local: 16, gezgin: 35}, acc: {local: 10, gezgin: 40} },
  'MG': { cost: {local: 14, gezgin: 30}, acc: {local: 8, gezgin: 35} },
  'GH': { cost: {local: 16, gezgin: 35}, acc: {local: 10, gezgin: 40} },
  'SN': { cost: {local: 16, gezgin: 35}, acc: {local: 10, gezgin: 40} },
  'CI': { cost: {local: 16, gezgin: 35}, acc: {local: 10, gezgin: 40} },
  'NG': { cost: {local: 16, gezgin: 35}, acc: {local: 10, gezgin: 40} },
  'CM': { cost: {local: 14, gezgin: 30}, acc: {local: 8, gezgin: 35} },
  'NA': { cost: {local: 22, gezgin: 50}, acc: {local: 16, gezgin: 55} },
  'BW': { cost: {local: 22, gezgin: 50}, acc: {local: 16, gezgin: 55} },
  'MU': { cost: {local: 25, gezgin: 55}, acc: {local: 18, gezgin: 65} },
  'SC': { cost: {local: 30, gezgin: 65}, acc: {local: 22, gezgin: 80} },
  'CV': { cost: {local: 20, gezgin: 42}, acc: {local: 14, gezgin: 50} },
  // Central Asia
  'UZ': { cost: {local: 13, gezgin: 30}, acc: {local: 12, gezgin: 40} },
  'KG': { cost: {local: 12, gezgin: 28}, acc: {local: 10, gezgin: 35} },
  'KZ': { cost: {local: 18, gezgin: 40}, acc: {local: 14, gezgin: 50} },
  'TJ': { cost: {local: 12, gezgin: 28}, acc: {local: 8, gezgin: 30} },
  'TM': { cost: {local: 15, gezgin: 32}, acc: {local: 10, gezgin: 38} },
  // South Asia
  'IN': { cost: {local: 12, gezgin: 30}, acc: {local: 8, gezgin: 35} },
  'NP': { cost: {local: 12, gezgin: 28}, acc: {local: 8, gezgin: 30} },
  'LK': { cost: {local: 16, gezgin: 35}, acc: {local: 10, gezgin: 40} },
  'BD': { cost: {local: 10, gezgin: 25}, acc: {local: 6, gezgin: 28} },
  'PK': { cost: {local: 12, gezgin: 28}, acc: {local: 8, gezgin: 30} },
  'MV': { cost: {local: 35, gezgin: 80}, acc: {local: 30, gezgin: 120} },
  'BT': { cost: {local: 25, gezgin: 55}, acc: {local: 20, gezgin: 60} },
  // Oceania
  'AU': { cost: {local: 45, gezgin: 95}, acc: {local: 35, gezgin: 110} },
  'NZ': { cost: {local: 40, gezgin: 85}, acc: {local: 32, gezgin: 100} },
  'FJ': { cost: {local: 22, gezgin: 48}, acc: {local: 16, gezgin: 55} },
  'PG': { cost: {local: 20, gezgin: 42}, acc: {local: 14, gezgin: 48} },
  // North America
  'US': { cost: {local: 45, gezgin: 100}, acc: {local: 40, gezgin: 120} },
  'CA': { cost: {local: 40, gezgin: 85}, acc: {local: 35, gezgin: 105} }
};

const defaults = {
  'Afrika': { cost: {local: 15, gezgin: 32}, acc: {local: 10, gezgin: 38} },
  'Asya': { cost: {local: 16, gezgin: 35}, acc: {local: 12, gezgin: 40} },
  'Avrupa': { cost: {local: 30, gezgin: 65}, acc: {local: 25, gezgin: 75} },
  'Güney Amerika': { cost: {local: 20, gezgin: 42}, acc: {local: 14, gezgin: 50} },
  'Kuzey Amerika': { cost: {local: 20, gezgin: 42}, acc: {local: 14, gezgin: 50} },
  'Okyanusya': { cost: {local: 25, gezgin: 50}, acc: {local: 18, gezgin: 55} },
  'Orta Amerika': { cost: {local: 20, gezgin: 42}, acc: {local: 14, gezgin: 50} },
  'Diğer': { cost: {local: 20, gezgin: 40}, acc: {local: 14, gezgin: 45} }
};

let matchCount = 0;
let newContent = content;

const idRegex = /id:\s*"([A-Z]{2})"/g;
let match;
const ids = [];
while ((match = idRegex.exec(content)) !== null) {
  ids.push(match[1]);
}

for (const id of ids) {
  const blockStartIdx = newContent.indexOf(`id: "${id}"`);
  if (blockStartIdx === -1) continue;
  
  const continentMatch = newContent.slice(blockStartIdx, blockStartIdx + 500).match(/continent:\s*"([^"]+)"/);
  const continent = continentMatch ? continentMatch[1] : 'Diğer';
  
  const data = costData[id] || defaults[continent] || defaults['Diğer'];
  
  const costStartIdx = newContent.indexOf('dailyCost: {', blockStartIdx);
  const costEndIdx = newContent.indexOf('}', costStartIdx);
  
  const accStartIdx = newContent.indexOf('dailyAccommodation: {', costEndIdx);
  const accEndIdx = newContent.indexOf('}', accStartIdx);
  
  if (costStartIdx !== -1 && accStartIdx !== -1 && costStartIdx < blockStartIdx + 1500) {
    const accNew = `dailyAccommodation: {\n      local: ${data.acc.local},\n      gezgin: ${data.acc.gezgin}\n    }`;
    newContent = newContent.substring(0, accStartIdx) + accNew + newContent.substring(accEndIdx + 1);
    
    const costNew = `dailyCost: {\n      local: ${data.cost.local},\n      gezgin: ${data.cost.gezgin}\n    }`;
    newContent = newContent.substring(0, costStartIdx) + costNew + newContent.substring(costEndIdx + 1);
    
    matchCount++;
  }
}

fs.writeFileSync(file_path, newContent, 'utf8');
console.log(`Updated ${matchCount} countries.`);
