import fs from 'fs';

function fixFlights() {
    let content = fs.readFileSync('src/data/flightPrices.js', 'utf8');
    
    const newContent = content.replace(/low:\s*(\d+),\s*mid:\s*(\d+),\s*high:\s*(\d+)/g, (match, p1, p2, p3) => {
        const l = Math.round(parseInt(p1, 10) * 3.5);
        const m = Math.round(parseInt(p2, 10) * 3.5);
        const h = Math.round(parseInt(p3, 10) * 3.5);
        return `low: ${l}, mid: ${m}, high: ${h}`;
    });
    
    fs.writeFileSync('src/data/flightPrices.js', newContent);
    console.log("Flight prices multiplied by 3.5");
}

function fixCountries() {
    let content = fs.readFileSync('src/data/countries.js', 'utf8');
    const countriesMatch = content.match(/export const countries = (\[[\s\S]*?\]);/);
    if (countriesMatch) {
        let countriesList = eval(countriesMatch[1]);
        
        countriesList.forEach(c => {
            c.dailyCost.low = Math.round(c.dailyCost.low * 1.5);
            c.dailyCost.mid = Math.round(c.dailyCost.mid * 1.5);
            c.dailyCost.high = Math.round(c.dailyCost.high * 1.5);
            
            c.dailyAccommodation.low = Math.round(c.dailyAccommodation.low * 1.5);
            c.dailyAccommodation.mid = Math.round(c.dailyAccommodation.mid * 1.5);
            c.dailyAccommodation.high = Math.round(c.dailyAccommodation.high * 1.5);
        });
        
        const newArrayStr = JSON.stringify(countriesList, null, 2).replace(/"([^"]+)":/g, '$1:');
        const newContent = content.replace(countriesMatch[0], 'export const countries = ' + newArrayStr + ';');
        fs.writeFileSync('src/data/countries.js', newContent);
        console.log('Countries costs multiplied by 1.5');
    }
}

fixFlights();
fixCountries();
