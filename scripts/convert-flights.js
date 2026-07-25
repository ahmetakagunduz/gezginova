import fs from 'fs';

let content = fs.readFileSync('src/data/flightPrices.js', 'utf8');

// Replace all numbers in the object. We can use a replacer function on regex match.
const newContent = content.replace(/: { low: (\d+), mid: (\d+), high: (\d+) }/g, (match, p1, p2, p3) => {
  const low = Math.round(parseInt(p1) / 40);
  const mid = Math.round(parseInt(p2) / 40);
  const high = Math.round(parseInt(p3) / 40);
  return `: { low: ${low}, mid: ${mid}, high: ${high} }`;
}).replace(/15000;/g, '375;').replace(/9000;/g, '225;').replace(/5000;/g, '125;'); // fallbacks

fs.writeFileSync('src/data/flightPrices.js', newContent);
console.log("flightPrices.js updated to USD");
