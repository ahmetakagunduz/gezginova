import fs from 'fs';
import * as cheerio from 'cheerio';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function fetchCostsFromBudgetYourTrip() {
    let content = fs.readFileSync('src/data/countries.js', 'utf8');
    const countriesMatch = content.match(/export const countries = (\[[\s\S]*?\]);/);
    if (!countriesMatch) return;
    
    let countriesList = eval(countriesMatch[1]);
    
    console.log("Fetching actual travel costs from BudgetYourTrip...");
    
    for (let c of countriesList) {
        // BudgetYourTrip URL format: lowercase, spaces replaced by hyphens
        const countryNameForUrl = c.nameEn.toLowerCase().replace(/ /g, '-');
        const url = `https://www.budgetyourtrip.com/country/${countryNameForUrl}`;
        
        try {
            const response = await fetch(url, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36'
                }
            });
            
            if (response.ok) {
                const html = await response.text();
                const $ = cheerio.load(html);
                
                // BudgetYourTrip often has: 
                // "Average Daily Cost: $120"
                // Or tabs for Cheap, Mid-Range, Luxury.
                // It usually has <div class="price"> ... </div> or similar.
                // We'll search for specific text patterns if specific classes change.
                
                // 1. Find all numbers preceded by '$' in the main content area
                const text = $('body').text();
                
                // This is a naive but effective way if we can't find exact DOM nodes easily.
                // Let's try to find exact nodes first.
                // BudgetYourTrip has "cost-budget", "cost-mid", "cost-luxury" classes for the 3 tabs.
                // Cheap Tab: "budget"
                let localCost = null;
                let gezginCost = null;
                
                const midText = $('.cost-mid .price').first().text().replace(/[^\d.]/g, '');
                const cheapText = $('.cost-budget .price').first().text().replace(/[^\d.]/g, '');
                
                if (midText && cheapText) {
                    localCost = Math.round(parseFloat(cheapText));
                    gezginCost = Math.round(parseFloat(midText));
                } else {
                    // Fallback scraping logic
                    const match = text.match(/Average Daily Cost[\s\S]*?\$([\d,]+)/i);
                    if (match) {
                        const avg = parseFloat(match[1].replace(/,/g, ''));
                        localCost = Math.round(avg * 0.6); // Cheap is usually 60% of average
                        gezginCost = Math.round(avg * 1.2); // Mid is usually 120% of average
                    }
                }
                
                if (localCost && gezginCost) {
                    // Update country object
                    // In our new schema, mid = Local, high = Gezgin
                    c.dailyCost.mid = Math.round(localCost * 0.4); // 40% is living/food
                    c.dailyAccommodation.mid = Math.round(localCost * 0.6); // 60% is accommodation
                    
                    c.dailyCost.high = Math.round(gezginCost * 0.4);
                    c.dailyAccommodation.high = Math.round(gezginCost * 0.6);
                    
                    console.log(`✅ [${c.nameEn}] Fetched: Local $${localCost}, Gezgin $${gezginCost}`);
                } else {
                    console.log(`⚠️ [${c.nameEn}] Data not found, preserving existing.`);
                }
            } else {
                console.log(`❌ [${c.nameEn}] Failed to fetch (Status: ${response.status})`);
            }
        } catch (err) {
            console.log(`❌ [${c.nameEn}] Fetch error: ${err.message}`);
        }
        
        // Anti-rate-limit delay
        await delay(300);
    }
    
    // Write back
    const newArrayStr = JSON.stringify(countriesList, null, 2).replace(/"([^"]+)":/g, '$1:');
    const newContent = content.replace(countriesMatch[0], 'export const countries = ' + newArrayStr + ';');
    fs.writeFileSync('src/data/countries.js', newContent);
    console.log("✅ All travel costs updated based on real traveler data!");
}

fetchCostsFromBudgetYourTrip();
