import { NextResponse } from 'next/server';
import { flightPrices } from '../../../src/data/flightPrices';

/**
 * Mevsimsellik Çarpanı (Seasonality Multiplier)
 * Aylar (1-12) arasında. Kuzey yarımküre yazın (Temmuz-Ağustos) en pahalıdır.
 * Kışın (Ocak-Şubat) genelde daha ucuzdur.
 */
const getSeasonalityMultiplier = (month) => {
    switch(parseInt(month)) {
        case 1: case 2: return 0.85; // Low season (except ski)
        case 3: case 4: return 0.95; // Spring shoulder
        case 5: return 1.0; // Early summer
        case 6: return 1.15; // Summer start
        case 7: case 8: return 1.4; // Peak Summer
        case 9: return 1.05; // Late summer
        case 10: case 11: return 0.9; // Autumn shoulder
        case 12: return 1.2; // Holiday season peak
        default: return 1.0;
    }
};

/**
 * Canlı Bilet Fiyatı Simülasyonu
 * İleride Amadeus, Skyscanner, Kiwi API'leri ile değiştirilecektir.
 * Şu an için mesafeye ve mevsime dayalı gerçekçi bir fiyat (USD) döner.
 */
export async function POST(request) {
    try {
        const body = await request.json();
        const { destinations, departure = 'IST', month = 1, budgetLevel = 'local' } = body;
        
        if (!destinations || !Array.isArray(destinations)) {
            return NextResponse.json({ error: "Gidilecek ülkeler (destinations) dizisi gerekli." }, { status: 400 });
        }

        const seasonMultiplier = getSeasonalityMultiplier(month);
        const level = budgetLevel === "local" ? "mid" : "high"; // local(mid) vs gezgin(high)
        
        const cityPrices = flightPrices[departure] || flightPrices['IST'];
        
        const results = {};
        
        for (const dest of destinations) {
            let basePrice = 400; // Varsayılan fiyat
            if (cityPrices[dest]) {
                basePrice = cityPrices[dest][level] || cityPrices[dest].mid;
            } else if (flightPrices['IST'][dest]) {
                const markup = departure === 'IST' ? 1 : 1.12;
                basePrice = Math.round(flightPrices['IST'][dest][level] * markup);
            } else {
                // Bilinmeyen ülke tahmini
                basePrice = level === 'mid' ? 600 : 900;
            }
            
            // Dinamik mevsimsellik ve ufak randomize ekleme (+/- 5%)
            const randomFactor = 0.95 + (Math.random() * 0.1);
            let finalPrice = Math.round(basePrice * seasonMultiplier * randomFactor);
            
            // Her halükarda uçuş fiyatı 100 USD'den az olamaz (vergiler vs)
            if (finalPrice < 100) finalPrice = 100;
            
            results[dest] = finalPrice;
        }

        // Mock network delay (0.5s - 1.5s)
        await new Promise(r => setTimeout(r, 500 + Math.random() * 1000));

        return NextResponse.json({
            success: true,
            month: parseInt(month),
            seasonMultiplier,
            prices: results
        });
        
    } catch (error) {
        console.error("Flight API Error:", error);
        return NextResponse.json({ error: "Sunucu hatası" }, { status: 500 });
    }
}
