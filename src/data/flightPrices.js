// GezgiNova - Mock Uçuş Fiyatları
// Gidiş-dönüş tahmini fiyatlar (TL cinsinden)
// İleride gerçek API (Kiwi, Aviationstack vb.) ile değiştirilecek

export const flightPrices = {
  IST: {
    // Balkanlar & Yakın Avrupa
    RS: { low: 50, mid: 88, high: 150 },
    BA: { low: 55, mid: 100, high: 163 },
    ME: { low: 63, mid: 105, high: 175 },
    XK: { low: 50, mid: 88, high: 138 },
    MK: { low: 50, mid: 88, high: 138 },
    AL: { low: 63, mid: 100, high: 163 },
    HR: { low: 75, mid: 125, high: 200 },
    BG: { low: 45, mid: 75, high: 125 },
    RO: { low: 50, mid: 88, high: 150 },
    GR: { low: 63, mid: 113, high: 188 },

    // Kafkasya
    GE: { low: 38, mid: 70, high: 113 },
    AZ: { low: 45, mid: 80, high: 125 },
    AM: { low: 50, mid: 88, high: 138 },

    // Doğu Avrupa
    UA: { low: 63, mid: 100, high: 163 },
    MD: { low: 70, mid: 113, high: 175 },
    BY: { low: 75, mid: 125, high: 200 },

    // Batı & Kuzey Avrupa (vize gerekli ama fiyat verisi)
    DE: { low: 88, mid: 150, high: 250 },
    FR: { low: 88, mid: 163, high: 275 },
    GB: { low: 100, mid: 175, high: 300 },
    IT: { low: 75, mid: 138, high: 238 },
    ES: { low: 88, mid: 150, high: 250 },
    NL: { low: 88, mid: 150, high: 250 },
    SE: { low: 100, mid: 175, high: 275 },
    NO: { low: 113, mid: 188, high: 300 },
    CH: { low: 100, mid: 175, high: 275 },

    // Orta Doğu
    QA: { low: 75, mid: 138, high: 225 },
    JO: { low: 63, mid: 113, high: 188 },
    KW: { low: 75, mid: 125, high: 213 },
    OM: { low: 88, mid: 150, high: 238 },
    BH: { low: 75, mid: 138, high: 225 },
    LB: { low: 50, mid: 88, high: 150 },
    IR: { low: 63, mid: 100, high: 163 },
    AE: { low: 75, mid: 138, high: 225 },
    SA: { low: 70, mid: 125, high: 213 },

    // Kuzey Afrika
    MA: { low: 75, mid: 138, high: 225 },
    TN: { low: 63, mid: 113, high: 188 },
    EG: { low: 63, mid: 113, high: 188 },

    // Doğu & Güney Afrika
    KE: { low: 150, mid: 250, high: 400 },
    TZ: { low: 163, mid: 275, high: 425 },
    RW: { low: 175, mid: 300, high: 450 },
    UG: { low: 175, mid: 288, high: 438 },
    ZA: { low: 175, mid: 300, high: 475 },
    ET: { low: 125, mid: 213, high: 350 },
    MU: { low: 200, mid: 350, high: 550 },
    SC: { low: 200, mid: 350, high: 550 },
    MG: { low: 200, mid: 325, high: 500 },

    // Güneydoğu Asya
    TH: { low: 125, mid: 225, high: 375 },
    MY: { low: 138, mid: 238, high: 388 },
    SG: { low: 150, mid: 250, high: 400 },
    ID: { low: 138, mid: 238, high: 375 },
    PH: { low: 150, mid: 250, high: 400 },
    VN: { low: 138, mid: 238, high: 388 },
    KH: { low: 150, mid: 250, high: 400 },
    LA: { low: 175, mid: 275, high: 425 },
    MM: { low: 163, mid: 263, high: 413 },
    MV: { low: 138, mid: 238, high: 375 },
    LK: { low: 125, mid: 213, high: 350 },
    NP: { low: 138, mid: 225, high: 363 },

    // Doğu Asya
    JP: { low: 200, mid: 350, high: 550 },
    KR: { low: 188, mid: 325, high: 500 },
    HK: { low: 175, mid: 300, high: 475 },
    CN: { low: 163, mid: 275, high: 450 },

    // Orta Asya
    KZ: { low: 75, mid: 138, high: 225 },
    KG: { low: 88, mid: 150, high: 238 },
    UZ: { low: 75, mid: 138, high: 225 },
    TJ: { low: 100, mid: 175, high: 275 },

    // Güney Amerika
    AR: { low: 300, mid: 500, high: 800 },
    BR: { low: 275, mid: 450, high: 700 },
    CL: { low: 325, mid: 550, high: 850 },
    CO: { low: 250, mid: 425, high: 650 },
    PE: { low: 275, mid: 475, high: 750 },
    EC: { low: 275, mid: 450, high: 700 },
    UY: { low: 300, mid: 500, high: 800 },
    PY: { low: 300, mid: 475, high: 750 },
    BO: { low: 300, mid: 500, high: 775 },

    // Orta Amerika & Karayipler
    CR: { low: 250, mid: 400, high: 625 },
    PA: { low: 250, mid: 425, high: 650 },
    MX: { low: 225, mid: 375, high: 600 },
    DO: { low: 225, mid: 375, high: 600 },
    JM: { low: 250, mid: 400, high: 625 },
    GT: { low: 250, mid: 425, high: 650 },
    BZ: { low: 275, mid: 450, high: 700 },
    SV: { low: 250, mid: 425, high: 650 },
    HN: { low: 250, mid: 425, high: 650 },
    NI: { low: 250, mid: 425, high: 650 },
    BS: { low: 275, mid: 450, high: 700 },
    BB: { low: 275, mid: 450, high: 700 },
    TT: { low: 275, mid: 450, high: 700 },

    // Kuzey Amerika (vize gerekli)
    US: { low: 200, mid: 350, high: 550 },
    CA: { low: 213, mid: 375, high: 575 },

    // Okyanusya
    AU: { low: 350, mid: 600, high: 950 },
    NZ: { low: 375, mid: 650, high: 1000 },

    // Hint Alt Kıtası
    IN: { low: 113, mid: 200, high: 325 },
    PK: { low: 88, mid: 150, high: 250 },
  },

  // Ankara çıkışlı (genelde %10-15 daha pahalı)
  ANK: {
    RS: { low: 60, mid: 105, high: 175 },
    GE: { low: 45, mid: 80, high: 130 },
    AZ: { low: 50, mid: 90, high: 145 },
    JP: { low: 225, mid: 388, high: 600 },
    KR: { low: 213, mid: 363, high: 550 },
    TH: { low: 145, mid: 250, high: 413 },
    DE: { low: 100, mid: 175, high: 288 },
    MA: { low: 88, mid: 150, high: 250 },
    AR: { low: 325, mid: 550, high: 875 },
  },

  // İzmir çıkışlı
  ADB: {
    RS: { low: 58, mid: 100, high: 170 },
    GE: { low: 50, mid: 88, high: 138 },
    JP: { low: 213, mid: 375, high: 588 },
    TH: { low: 138, mid: 238, high: 400 },
    GR: { low: 50, mid: 88, high: 150 },
  },

  // Antalya çıkışlı
  AYT: {
    RS: { low: 63, mid: 108, high: 180 },
    GE: { low: 55, mid: 95, high: 150 },
    DE: { low: 75, mid: 138, high: 225 },
    GB: { low: 88, mid: 163, high: 275 },
  }
};

// Uçuş fiyatı al (fallback: İstanbul fiyatları)
export function getFlightPrice(departureCity, destinationCountryId, budgetLevel) {
  const level = budgetLevel === "dusuk" ? "low" : budgetLevel === "orta" ? "mid" : "high";
  const cityPrices = flightPrices[departureCity] || flightPrices["IST"];
  const countryPrices = cityPrices[destinationCountryId];
  
  if (!countryPrices) {
    // Fallback: İstanbul fiyatları veya tahmini
    const istPrices = flightPrices["IST"][destinationCountryId];
    if (istPrices) {
      const markup = departureCity === "IST" ? 1 : 1.12;
      return Math.round(istPrices[level] * markup);
    }
    // Bilinmeyen ülke: orta mesafe tahmini
    return level === "low" ? 5000 : level === "mid" ? 9000 : 375;
  }
  
  return countryPrices[level];
}
