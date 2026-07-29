import { NextResponse } from 'next/server';

// Ülke kodlarını ana havalimanı IATA kodlarına eşleyen yardımcı bir tablo
const COUNTRY_TO_AIRPORT = {
  // Avrupa
  HU: 'BUD', AT: 'VIE', FR: 'CDG', DE: 'FRA', IT: 'FCO', ES: 'MAD',
  GB: 'LHR', NL: 'AMS', TR: 'IST', GR: 'ATH', PT: 'LIS', BE: 'BRU',
  CH: 'ZRH', CZ: 'PRG', PL: 'WAW', SE: 'ARN', NO: 'OSL', DK: 'CPH',
  FI: 'HEL', IE: 'DUB', RO: 'OTP', BG: 'SOF', RS: 'BEG', HR: 'ZAG',
  
  // Asya
  JP: 'NRT', KR: 'ICN', CN: 'PEK', TH: 'BKK', ID: 'CGK', MY: 'KUL',
  SG: 'SIN', VN: 'SGN', PH: 'MNL', IN: 'DEL', AE: 'DXB', QA: 'DOH',
  
  // Amerika
  US: 'JFK', CA: 'YYZ', BR: 'GRU', AR: 'EZE', MX: 'MEX', CO: 'BOG',
  CL: 'SCL', PE: 'LIM',
  
  // Afrika
  ZA: 'JNB', EG: 'CAI', MA: 'CMN', KE: 'NBO', NG: 'LOS',

  // Diğer (Geri kalanlar için genel bir fallback kullanılacak)
};

export async function POST(request) {
    try {
        const body = await request.json();
        const { destinations, departure = 'IST', month = 1, budgetLevel = 'local' } = body;
        
        if (!destinations || !Array.isArray(destinations)) {
            return NextResponse.json({ error: "Gidilecek ülkeler (destinations) dizisi gerekli." }, { status: 400 });
        }

        const apiKey = process.env.SERPAPI_KEY;
        if (!apiKey) {
            // Hata mesajını frontend'in anlayabileceği şekilde dönüyoruz.
            return NextResponse.json({ 
                success: false, 
                error: "SERPAPI_KEY bulunamadı. Lütfen .env.local dosyasına API anahtarınızı ekleyin." 
            });
        }

        const results = {};
        
        // Bu yılki veya önümüzdeki yılki seçilen ay için yaklaşık bir tarih (ay'ın 15'i)
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth() + 1;
        const targetYear = parseInt(month) < currentMonth ? currentYear + 1 : currentYear;
        const outBoundDate = `${targetYear}-${String(month).padStart(2, '0')}-15`;

        for (const destCountry of destinations) {
            const arrivalCode = COUNTRY_TO_AIRPORT[destCountry] || destCountry; // Bulamazsa ülke kodunu yollamayı dener

            // SerpApi - Google Flights API İsteği
            // out_date ve return_date zorunludur. (Gidiş-dönüş fiyatı çekiyoruz)
            const params = new URLSearchParams({
              engine: 'google_flights',
              departure_id: departure,
              arrival_id: arrivalCode,
              outbound_date: outBoundDate,
              return_date: `${targetYear}-${String(month).padStart(2, '0')}-22`, // 7 gün sonrası
              currency: 'USD',
              hl: 'tr',
              api_key: apiKey
            });

            try {
              const res = await fetch(`https://serpapi.com/search.json?${params.toString()}`);
              const data = await res.json();

              if (data.best_flights && data.best_flights.length > 0) {
                // En iyi (genelde en ucuz) uçuşun fiyatı
                results[destCountry] = data.best_flights[0].price;
              } else if (data.other_flights && data.other_flights.length > 0) {
                results[destCountry] = data.other_flights[0].price;
              } else {
                // Uçuş bulunamadıysa tahmini 500 USD döner
                results[destCountry] = 500;
              }
            } catch (err) {
              console.error(`SerpApi fetch hatası (${destCountry}):`, err);
              results[destCountry] = 500;
            }
        }

        return NextResponse.json({
            success: true,
            prices: results
        });
        
    } catch (error) {
        console.error("Flight API Error:", error);
        return NextResponse.json({ success: false, error: "Sunucu hatası" }, { status: 500 });
    }
}
