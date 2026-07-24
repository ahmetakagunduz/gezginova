// GezgiNova - Rozet Sistemi
// Seyahat başarıları için kural tabanlı rozet tanımları

export const badges = [
  // ---- Ülke Sayısı Rozetleri ----
  {
    id: "ilk_adim",
    name: "İlk Adım",
    icon: "👣",
    description: "İlk yurt dışı seyahatini yaptın!",
    condition: (stats) => stats.totalCountries >= 1
  },
  {
    id: "5_ulke",
    name: "5 Ülke Kulübü",
    icon: "✋",
    description: "5 farklı ülke ziyaret ettin",
    condition: (stats) => stats.totalCountries >= 5
  },
  {
    id: "10_ulke",
    name: "10 Ülke Kulübü",
    icon: "🔟",
    description: "10 farklı ülke ziyaret ettin",
    condition: (stats) => stats.totalCountries >= 10
  },
  {
    id: "25_ulke",
    name: "25 Ülke Kulübü",
    icon: "🌟",
    description: "25 farklı ülke ziyaret ettin. Harika!",
    condition: (stats) => stats.totalCountries >= 25
  },
  {
    id: "50_ulke",
    name: "50 Ülke Kulübü",
    icon: "👑",
    description: "50 farklı ülke! Gerçek bir dünya gezgini.",
    condition: (stats) => stats.totalCountries >= 50
  },

  // ---- Kıta Rozetleri ----
  {
    id: "kita_koleksiyoncusu",
    name: "Kıta Koleksiyoncusu",
    icon: "🌍",
    description: "5 veya daha fazla kıtayı ziyaret ettin",
    condition: (stats) => stats.continentsVisited >= 5
  },
  {
    id: "dunya_vatandasi",
    name: "Dünya Vatandaşı",
    icon: "🌐",
    description: "6 kıtanın hepsini gezdin!",
    condition: (stats) => stats.continentsVisited >= 6
  },
  {
    id: "avrupali",
    name: "Avrupa Kaşifi",
    icon: "🏰",
    description: "5+ Avrupa ülkesi ziyaret ettin",
    condition: (stats) => (stats.continentCounts?.["Avrupa"] || 0) >= 5
  },
  {
    id: "asyali",
    name: "Asya Kaşifi",
    icon: "🎌",
    description: "5+ Asya ülkesi ziyaret ettin",
    condition: (stats) => (stats.continentCounts?.["Asya"] || 0) >= 5
  },
  {
    id: "amerikali",
    name: "Amerika Kaşifi",
    icon: "🗽",
    description: "3+ Amerika kıtası ülkesi ziyaret ettin",
    condition: (stats) => ((stats.continentCounts?.["Güney Amerika"] || 0) + (stats.continentCounts?.["Kuzey Amerika"] || 0)) >= 3
  },
  {
    id: "afrikali",
    name: "Afrika Kaşifi",
    icon: "🦁",
    description: "3+ Afrika ülkesi ziyaret ettin",
    condition: (stats) => (stats.continentCounts?.["Afrika"] || 0) >= 3
  },

  // ---- Bölgesel Rozetler ----
  {
    id: "balkan_gezgini",
    name: "Balkan Gezgini",
    icon: "🏔️",
    description: "5+ Balkan ülkesini gezdin",
    condition: (stats) => {
      const balkan = ["RS", "BA", "ME", "XK", "MK", "AL", "HR", "SI", "BG", "RO", "GR"];
      return (stats.visitedCountryIds || []).filter(id => balkan.includes(id)).length >= 5;
    }
  },
  {
    id: "kafkas_gezgini",
    name: "Kafkas Gezgini",
    icon: "⛰️",
    description: "Gürcistan, Azerbaycan ve Ermenistan'ı gezdin",
    condition: (stats) => {
      const kafkas = ["GE", "AZ", "AM"];
      return kafkas.every(id => (stats.visitedCountryIds || []).includes(id));
    }
  },
  {
    id: "uzakdogu_ustasi",
    name: "Uzak Doğu Ustası",
    icon: "🏯",
    description: "Japonya, Güney Kore ve bir Güneydoğu Asya ülkesi gezdin",
    condition: (stats) => {
      const ids = stats.visitedCountryIds || [];
      const sea = ["TH", "VN", "KH", "LA", "MY", "SG", "ID", "PH", "MM"];
      return ids.includes("JP") && ids.includes("KR") && sea.some(id => ids.includes(id));
    }
  },

  // ---- Seyahat Tarzı Rozetleri ----
  {
    id: "plaj_avcisi",
    name: "Plaj Avcısı",
    icon: "🏖️",
    description: "3+ deniz/plaj ülkesi ziyaret ettin",
    condition: (stats) => (stats.tagCounts?.["deniz_plaj"] || 0) >= 3
  },
  {
    id: "sehir_kasifi",
    name: "Şehir Kaşifi",
    icon: "🏙️",
    description: "5+ şehir/kültür ülkesi ziyaret ettin",
    condition: (stats) => (stats.tagCounts?.["sehir_kultur"] || 0) >= 5
  },
  {
    id: "gurme_gezgin",
    name: "Gurme Gezgin",
    icon: "🍽️",
    description: "3+ gastronomi ülkesi ziyaret ettin",
    condition: (stats) => (stats.tagCounts?.["yemek_gastronomi"] || 0) >= 3
  },
  {
    id: "maceraci",
    name: "Maceracı",
    icon: "🧗",
    description: "3+ macera/spor ülkesi ziyaret ettin",
    condition: (stats) => (stats.tagCounts?.["macera_spor"] || 0) >= 3
  },

  // ---- Sıklık / Süre Rozetleri ----
  {
    id: "sik_ucan",
    name: "Sık Uçan",
    icon: "✈️",
    description: "Bir yılda 6+ seyahat yaptın",
    condition: (stats) => stats.yearlyTripCount >= 6
  },
  {
    id: "maraton_gezgin",
    name: "Maraton Gezgin",
    icon: "🗓️",
    description: "Tek seyahatte 14+ gün geçirdin",
    condition: (stats) => stats.longestTripDays >= 14
  },
  {
    id: "durmak_yok",
    name: "Durmak Yok!",
    icon: "🚀",
    description: "Tek seyahatte 30+ gün geçirdin",
    condition: (stats) => stats.longestTripDays >= 30
  },
  {
    id: "hafta_sonu_kacisi",
    name: "Hafta Sonu Kaçışı",
    icon: "⚡",
    description: "3 günlük kısa bir seyahat yaptın",
    condition: (stats) => stats.shortestTripDays <= 3 && stats.shortestTripDays > 0
  },

  // ---- Vize Rozetleri ----
  {
    id: "vize_ozgurlugu",
    name: "Vize Özgürlüğü",
    icon: "🆓",
    description: "Bir yılda 5+ vizesiz ülke ziyaret ettin",
    condition: (stats) => stats.yearlyVisaFreeCount >= 5
  },
  {
    id: "pasaport_ustasi",
    name: "Pasaport Ustası",
    icon: "📘",
    description: "Bir yılda 100+ gün yurt dışında geçirdin",
    condition: (stats) => stats.yearlyDaysAbroad >= 100
  },

  // ---- Özel Rozetler ----
  {
    id: "yeni_yil_gezgini",
    name: "Yeni Yıl Gezgini",
    icon: "🎆",
    description: "Yeni yılı yurt dışında karşıladın",
    condition: (stats) => stats.hasNewYearTrip
  },
  {
    id: "yaz_kacisi",
    name: "Yaz Kaçışı",
    icon: "☀️",
    description: "Yazın (Haziran-Ağustos) 3+ ülke gezdin",
    condition: (stats) => stats.summerCountries >= 3
  },
  {
    id: "ilk_wrapped",
    name: "İlk Wrapped'ım",
    icon: "🎁",
    description: "İlk Pasaport Wrapped'ını oluşturdun!",
    condition: (stats) => stats.totalCountries >= 1
  }
];
