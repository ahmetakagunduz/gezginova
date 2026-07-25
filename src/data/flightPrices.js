// GezgiNova - Mock Uçuş Fiyatları
// Gidiş-dönüş tahmini fiyatlar (TL cinsinden)
// İleride gerçek API (Kiwi, Aviationstack vb.) ile değiştirilecek

export const flightPrices = {
  IST: {
    // Balkanlar & Yakın Avrupa
    RS: { low: 175, mid: 308, high: 525 },
    BA: { low: 193, mid: 350, high: 571 },
    ME: { low: 221, mid: 368, high: 613 },
    XK: { low: 175, mid: 308, high: 483 },
    MK: { low: 175, mid: 308, high: 483 },
    AL: { low: 221, mid: 350, high: 571 },
    HR: { low: 263, mid: 438, high: 700 },
    BG: { low: 158, mid: 263, high: 438 },
    RO: { low: 175, mid: 308, high: 525 },
    GR: { low: 221, mid: 396, high: 658 },

    // Kafkasya
    GE: { low: 133, mid: 245, high: 396 },
    AZ: { low: 158, mid: 280, high: 438 },
    AM: { low: 175, mid: 308, high: 483 },

    // Doğu Avrupa
    UA: { low: 221, mid: 350, high: 571 },
    MD: { low: 245, mid: 396, high: 613 },
    BY: { low: 263, mid: 438, high: 700 },

    // Batı & Kuzey Avrupa (vize gerekli ama fiyat verisi)
    DE: { low: 308, mid: 525, high: 875 },
    FR: { low: 308, mid: 571, high: 963 },
    GB: { low: 350, mid: 613, high: 1050 },
    IT: { low: 263, mid: 483, high: 833 },
    ES: { low: 308, mid: 525, high: 875 },
    NL: { low: 308, mid: 525, high: 875 },
    SE: { low: 350, mid: 613, high: 963 },
    NO: { low: 396, mid: 658, high: 1050 },
    CH: { low: 350, mid: 613, high: 963 },

    // Orta Doğu
    QA: { low: 263, mid: 483, high: 788 },
    JO: { low: 221, mid: 396, high: 658 },
    KW: { low: 263, mid: 438, high: 746 },
    OM: { low: 308, mid: 525, high: 833 },
    BH: { low: 263, mid: 483, high: 788 },
    LB: { low: 175, mid: 308, high: 525 },
    IR: { low: 221, mid: 350, high: 571 },
    AE: { low: 263, mid: 483, high: 788 },
    SA: { low: 245, mid: 438, high: 746 },

    // Kuzey Afrika
    MA: { low: 263, mid: 483, high: 788 },
    TN: { low: 221, mid: 396, high: 658 },
    EG: { low: 221, mid: 396, high: 658 },

    // Doğu & Güney Afrika
    KE: { low: 525, mid: 875, high: 1400 },
    TZ: { low: 571, mid: 963, high: 1488 },
    RW: { low: 613, mid: 1050, high: 1575 },
    UG: { low: 613, mid: 1008, high: 1533 },
    ZA: { low: 613, mid: 1050, high: 1663 },
    ET: { low: 438, mid: 746, high: 1225 },
    MU: { low: 700, mid: 1225, high: 1925 },
    SC: { low: 700, mid: 1225, high: 1925 },
    MG: { low: 700, mid: 1138, high: 1750 },

    // Güneydoğu Asya
    TH: { low: 438, mid: 788, high: 1313 },
    MY: { low: 483, mid: 833, high: 1358 },
    SG: { low: 525, mid: 875, high: 1400 },
    ID: { low: 483, mid: 833, high: 1313 },
    PH: { low: 525, mid: 875, high: 1400 },
    VN: { low: 483, mid: 833, high: 1358 },
    KH: { low: 525, mid: 875, high: 1400 },
    LA: { low: 613, mid: 963, high: 1488 },
    MM: { low: 571, mid: 921, high: 1446 },
    MV: { low: 483, mid: 833, high: 1313 },
    LK: { low: 438, mid: 746, high: 1225 },
    NP: { low: 483, mid: 788, high: 1271 },

    // Doğu Asya
    JP: { low: 700, mid: 1225, high: 1925 },
    KR: { low: 658, mid: 1138, high: 1750 },
    HK: { low: 613, mid: 1050, high: 1663 },
    CN: { low: 571, mid: 963, high: 1575 },

    // Orta Asya
    KZ: { low: 263, mid: 483, high: 788 },
    KG: { low: 308, mid: 525, high: 833 },
    UZ: { low: 263, mid: 483, high: 788 },
    TJ: { low: 350, mid: 613, high: 963 },

    // Güney Amerika
    AR: { low: 1050, mid: 1750, high: 2800 },
    BR: { low: 963, mid: 1575, high: 2450 },
    CL: { low: 1138, mid: 1925, high: 2975 },
    CO: { low: 875, mid: 1488, high: 2275 },
    PE: { low: 963, mid: 1663, high: 2625 },
    EC: { low: 963, mid: 1575, high: 2450 },
    UY: { low: 1050, mid: 1750, high: 2800 },
    PY: { low: 1050, mid: 1663, high: 2625 },
    BO: { low: 1050, mid: 1750, high: 2713 },

    // Orta Amerika & Karayipler
    CR: { low: 875, mid: 1400, high: 2188 },
    PA: { low: 875, mid: 1488, high: 2275 },
    MX: { low: 788, mid: 1313, high: 2100 },
    DO: { low: 788, mid: 1313, high: 2100 },
    JM: { low: 875, mid: 1400, high: 2188 },
    GT: { low: 875, mid: 1488, high: 2275 },
    BZ: { low: 963, mid: 1575, high: 2450 },
    SV: { low: 875, mid: 1488, high: 2275 },
    HN: { low: 875, mid: 1488, high: 2275 },
    NI: { low: 875, mid: 1488, high: 2275 },
    BS: { low: 963, mid: 1575, high: 2450 },
    BB: { low: 963, mid: 1575, high: 2450 },
    TT: { low: 963, mid: 1575, high: 2450 },

    // Kuzey Amerika (vize gerekli)
    US: { low: 700, mid: 1225, high: 1925 },
    CA: { low: 746, mid: 1313, high: 2013 },

    // Okyanusya
    AU: { low: 1225, mid: 2100, high: 3325 },
    NZ: { low: 1313, mid: 2275, high: 3500 },

    // Hint Alt Kıtası
    IN: { low: 396, mid: 700, high: 1138 },
    PK: { low: 308, mid: 525, high: 875 },
  },

  // Ankara çıkışlı (genelde %10-15 daha pahalı)
  ANK: {
    RS: { low: 210, mid: 368, high: 613 },
    GE: { low: 158, mid: 280, high: 455 },
    AZ: { low: 175, mid: 315, high: 508 },
    JP: { low: 788, mid: 1358, high: 2100 },
    KR: { low: 746, mid: 1271, high: 1925 },
    TH: { low: 508, mid: 875, high: 1446 },
    DE: { low: 350, mid: 613, high: 1008 },
    MA: { low: 308, mid: 525, high: 875 },
    AR: { low: 1138, mid: 1925, high: 3063 },
  },

  // İzmir çıkışlı
  ADB: {
    RS: { low: 203, mid: 350, high: 595 },
    GE: { low: 175, mid: 308, high: 483 },
    JP: { low: 746, mid: 1313, high: 2058 },
    TH: { low: 483, mid: 833, high: 1400 },
    GR: { low: 175, mid: 308, high: 525 },
  },

  // Antalya çıkışlı
  AYT: {
    RS: { low: 221, mid: 378, high: 630 },
    GE: { low: 193, mid: 333, high: 525 },
    DE: { low: 263, mid: 483, high: 788 },
    GB: { low: 308, mid: 571, high: 963 },
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
