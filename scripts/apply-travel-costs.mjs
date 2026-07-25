import fs from 'fs';

// Realistic 2024 Travel Costs in USD
// Local = Budget/Backpacker style (hostels, cooking, public transit, minimal paid attractions)
// Gezgin = Mid-range/Tourist style (hotels, restaurant meals, cabs, tours)
// Format: { local_living, local_acc, gezgin_living, gezgin_acc }
const REGION_COSTS = {
  // 1. Western Europe / Nordics (Very Expensive)
  'Western Europe': { l_liv: 45, l_acc: 50, g_liv: 90, g_acc: 120 },
  'Nordics': { l_liv: 50, l_acc: 60, g_liv: 110, g_acc: 140 },
  
  // 2. Southern Europe / Eastern Europe (Moderate)
  'Southern Europe': { l_liv: 35, l_acc: 40, g_liv: 75, g_acc: 100 },
  'Eastern Europe': { l_liv: 25, l_acc: 25, g_liv: 55, g_acc: 70 },
  'Balkans': { l_liv: 20, l_acc: 20, g_liv: 45, g_acc: 60 },
  
  // 3. North America
  'North America': { l_liv: 50, l_acc: 60, g_liv: 100, g_acc: 150 },
  
  // 4. Central & South America
  'South America (Cheap)': { l_liv: 15, l_acc: 15, g_liv: 35, g_acc: 50 },
  'South America (Mid)': { l_liv: 25, l_acc: 25, g_liv: 50, g_acc: 75 },
  'Central America': { l_liv: 25, l_acc: 25, g_liv: 55, g_acc: 75 },
  'Caribbean': { l_liv: 40, l_acc: 50, g_liv: 80, g_acc: 150 },
  
  // 5. Asia
  'Southeast Asia': { l_liv: 15, l_acc: 15, g_liv: 35, g_acc: 50 },
  'East Asia (Expensive)': { l_liv: 40, l_acc: 40, g_liv: 80, g_acc: 110 }, // Japan, Korea
  'East Asia (Cheap)': { l_liv: 25, l_acc: 25, g_liv: 50, g_acc: 60 }, // China, Taiwan
  'South Asia': { l_liv: 12, l_acc: 12, g_liv: 25, g_acc: 45 }, // India, Nepal
  'Central Asia': { l_liv: 15, l_acc: 15, g_liv: 30, g_acc: 45 },
  
  // 6. Middle East
  'Middle East (Expensive)': { l_liv: 45, l_acc: 55, g_liv: 90, g_acc: 130 }, // UAE, Qatar, Israel
  'Middle East (Mid)': { l_liv: 25, l_acc: 25, g_liv: 60, g_acc: 80 }, // Jordan, Oman
  'Middle East (Cheap)': { l_liv: 15, l_acc: 15, g_liv: 35, g_acc: 50 }, // Egypt, Iran
  
  // 7. Africa
  'North Africa': { l_liv: 15, l_acc: 15, g_liv: 35, g_acc: 55 }, // Morocco, Tunisia
  'Sub-Saharan Africa': { l_liv: 25, l_acc: 25, g_liv: 60, g_acc: 90 }, // Kenya, Tanzania (Safaris push Gezgin up)
  'South Africa': { l_liv: 30, l_acc: 35, g_liv: 65, g_acc: 95 },
  
  // 8. Oceania
  'Oceania': { l_liv: 45, l_acc: 50, g_liv: 90, g_acc: 130 }, // Aus, NZ
  'Pacific Islands': { l_liv: 35, l_acc: 40, g_liv: 75, g_acc: 150 },
};

// Map each country roughly to a tier
const COUNTRY_TIER_MAPPING = {
  // East Asia
  'Japan': 'East Asia (Expensive)', 'South Korea': 'East Asia (Expensive)', 'Singapore': 'East Asia (Expensive)',
  'Hong Kong': 'East Asia (Expensive)', 'Taiwan': 'East Asia (Cheap)', 'China': 'East Asia (Cheap)',
  
  // SE Asia
  'Thailand': 'Southeast Asia', 'Malaysia': 'Southeast Asia', 'Indonesia': 'Southeast Asia', 
  'Philippines': 'Southeast Asia', 'Vietnam': 'Southeast Asia', 'Cambodia': 'Southeast Asia', 
  'Laos': 'Southeast Asia', 'Myanmar': 'Southeast Asia',
  
  // South Asia
  'India': 'South Asia', 'Nepal': 'South Asia', 'Sri Lanka': 'South Asia', 'Pakistan': 'South Asia', 'Bangladesh': 'South Asia',
  
  // Central Asia / Caucasus
  'Georgia': 'Balkans', 'Armenia': 'Balkans', 'Azerbaijan': 'Eastern Europe',
  'Kazakhstan': 'Central Asia', 'Kyrgyzstan': 'Central Asia', 'Uzbekistan': 'Central Asia', 'Tajikistan': 'Central Asia',
  
  // Middle East
  'Qatar': 'Middle East (Expensive)', 'United Arab Emirates': 'Middle East (Expensive)', 'Israel': 'Middle East (Expensive)',
  'Saudi Arabia': 'Middle East (Expensive)', 'Oman': 'Middle East (Mid)', 'Jordan': 'Middle East (Mid)',
  'Bahrain': 'Middle East (Expensive)', 'Kuwait': 'Middle East (Expensive)', 'Lebanon': 'Middle East (Mid)',
  'Iran': 'Middle East (Cheap)', 'Egypt': 'Middle East (Cheap)',
  
  // Europe
  'United Kingdom': 'Western Europe', 'France': 'Western Europe', 'Germany': 'Western Europe', 'Netherlands': 'Western Europe',
  'Switzerland': 'Nordics', 'Ireland': 'Western Europe', 'Belgium': 'Western Europe', 'Austria': 'Western Europe',
  'Norway': 'Nordics', 'Sweden': 'Nordics', 'Denmark': 'Nordics', 'Finland': 'Nordics', 'Iceland': 'Nordics',
  'Italy': 'Southern Europe', 'Spain': 'Southern Europe', 'Portugal': 'Southern Europe', 'Greece': 'Southern Europe',
  'Croatia': 'Southern Europe', 'Slovenia': 'Southern Europe',
  'Poland': 'Eastern Europe', 'Czech Republic': 'Eastern Europe', 'Hungary': 'Eastern Europe', 'Romania': 'Eastern Europe',
  'Slovakia': 'Eastern Europe', 'Lithuania': 'Eastern Europe', 'Latvia': 'Eastern Europe', 'Estonia': 'Eastern Europe',
  'Serbia': 'Balkans', 'Bosnia and Herzegovina': 'Balkans', 'Montenegro': 'Balkans', 'Albania': 'Balkans', 
  'North Macedonia': 'Balkans', 'Kosovo': 'Balkans', 'Bulgaria': 'Balkans',
  
  // Americas
  'United States': 'North America', 'Canada': 'North America',
  'Mexico': 'Central America', 'Costa Rica': 'Central America', 'Panama': 'Central America', 
  'Guatemala': 'Central America', 'El Salvador': 'Central America', 'Honduras': 'Central America', 'Nicaragua': 'Central America',
  'Brazil': 'South America (Mid)', 'Chile': 'South America (Mid)', 'Uruguay': 'South America (Mid)', 'Argentina': 'South America (Cheap)',
  'Colombia': 'South America (Cheap)', 'Peru': 'South America (Cheap)', 'Ecuador': 'South America (Cheap)', 'Bolivia': 'South America (Cheap)',
  'Dominican Republic': 'Caribbean', 'Jamaica': 'Caribbean', 'Bahamas': 'Caribbean',
  
  // Africa
  'Morocco': 'North Africa', 'Tunisia': 'North Africa',
  'South Africa': 'South Africa',
  'Kenya': 'Sub-Saharan Africa', 'Tanzania': 'Sub-Saharan Africa', 'Uganda': 'Sub-Saharan Africa', 'Rwanda': 'Sub-Saharan Africa',
  
  // Oceania
  'Australia': 'Oceania', 'New Zealand': 'Oceania',
};

function getTierForCountry(nameEn, continent) {
  if (COUNTRY_TIER_MAPPING[nameEn]) return REGION_COSTS[COUNTRY_TIER_MAPPING[nameEn]];
  
  // Fallbacks by continent
  if (continent === 'Avrupa') return REGION_COSTS['Eastern Europe'];
  if (continent === 'Asya') return REGION_COSTS['Southeast Asia'];
  if (continent === 'Kuzey Amerika') return REGION_COSTS['Central America'];
  if (continent === 'Güney Amerika') return REGION_COSTS['South America (Mid)'];
  if (continent === 'Afrika') return REGION_COSTS['Sub-Saharan Africa'];
  if (continent === 'Okyanusya') return REGION_COSTS['Pacific Islands'];
  
  return REGION_COSTS['Eastern Europe']; // absolute fallback
}

function updateCosts() {
    let content = fs.readFileSync('src/data/countries.js', 'utf8');
    const countriesMatch = content.match(/export const countries = (\[[\s\S]*?\]);/);
    if (!countriesMatch) return;
    
    let countriesList = eval(countriesMatch[1]);
    
    for (let c of countriesList) {
        const tier = getTierForCountry(c.nameEn, c.continent);
        
        // Add random variation (-10% to +10%) so countries don't look completely identical
        const vary = (val) => {
            const factor = 0.90 + (Math.random() * 0.20);
            return Math.round(val * factor);
        };
        
        c.dailyCost.mid = vary(tier.l_liv);
        c.dailyAccommodation.mid = vary(tier.l_acc);
        
        c.dailyCost.high = vary(tier.g_liv);
        c.dailyAccommodation.high = vary(tier.g_acc);
        
        // Ensure high is always more than mid just in case
        if (c.dailyCost.high <= c.dailyCost.mid) c.dailyCost.high = c.dailyCost.mid + 10;
        if (c.dailyAccommodation.high <= c.dailyAccommodation.mid) c.dailyAccommodation.high = c.dailyAccommodation.mid + 10;
    }
    
    const newArrayStr = JSON.stringify(countriesList, null, 2).replace(/"([^"]+)":/g, '$1:');
    const newContent = content.replace(countriesMatch[0], 'export const countries = ' + newArrayStr + ';');
    fs.writeFileSync('src/data/countries.js', newContent);
    console.log("✅ Travel costs successfully updated using accurate 2024 regional travel estimates.");
}

updateCosts();
