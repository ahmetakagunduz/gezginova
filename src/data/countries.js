// GezgiNova - Ülke Veritabanı
// Türk pasaportu sahipleri için vize bilgileri ve seyahat verileri
// Tüm fiyatlar USD (Amerikan Doları) cinsindendir

export const countries = [
  {
    id: "JP",
    name: "Japonya",
    nameEn: "Japan",
    capital: "Tokyo",
    continent: "Asya",
    currency: "JPY (Japon Yeni)",
    flag: "🇯🇵",
    visaStatus: "vizesiz",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 0,
    dailyCost: {
      local: 35,
      gezgin: 70
    },
    dailyAccommodation: {
      local: 30,
      gezgin: 85
    },
    tags: [
      "sehir_kultur",
      "yemek_gastronomi",
      "doga_dag",
      "sakin_dinlenme"
    ],
    clusterId: "dogu_asya",
    popularCities: [
      "Tokyo",
      "Kyoto",
      "Osaka",
      "Hiroshima"
    ],
    description: "Geleneksel kültür ile modern teknolojiyi harmanlayan büyüleyici ada ülkesi. Tapınaklar, sakura çiçekleri ve eşsiz mutfağıyla ünlü.",
    interestingFact: "Japonya'da geç kalan trenler için istasyon şefi yolculara resmi bir özür belgesi (Chien shoumeisho) dağıtır."
  },
  {
    id: "KR",
    name: "Güney Kore",
    nameEn: "South Korea",
    capital: "Seul",
    continent: "Asya",
    currency: "KRW (Güney Kore Wonu)",
    flag: "🇰🇷",
    visaStatus: "e_vize",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 0,
    dailyCost: {
      local: 28,
      gezgin: 55
    },
    dailyAccommodation: {
      local: 22,
      gezgin: 65
    },
    tags: [
      "sehir_kultur",
      "yemek_gastronomi",
      "gece_hayati",
      "macera_spor"
    ],
    clusterId: "dogu_asya",
    popularCities: [
      "Seul",
      "Busan",
      "Jeju",
      "Incheon"
    ],
    description: "K-pop, K-drama ve lezzetli mutfağıyla dünya çapında popüler olan dinamik Doğu Asya ülkesi.",
    interestingFact: "Güney Kore'de yaş sistemi farklıdır; doğduğunuzda 1 yaşında kabul edilirsiniz ve her yeni yılda yaşınız bir artar."
  },
  {
    id: "SG",
    name: "Singapur",
    nameEn: "Singapore",
    capital: "Singapur",
    continent: "Asya",
    currency: "SGD (Singapur Doları)",
    flag: "🇸🇬",
    visaStatus: "vizesiz",
    allowedDays: 30,
    allowedDaysNote: "30 days",
    eVisaFee: 0,
    dailyCost: {
      local: 40,
      gezgin: 80
    },
    dailyAccommodation: {
      local: 35,
      gezgin: 100
    },
    tags: [
      "sehir_kultur",
      "yemek_gastronomi",
      "gece_hayati"
    ],
    clusterId: "guneydogu_asya",
    popularCities: [
      "Singapur"
    ],
    description: "Güneydoğu Asya'nın finans ve gastronomi merkezi. Temiz sokakları, çok kültürlü yapısı ve muhteşem sokak lezzetleriyle ünlü.",
    interestingFact: "Singapur'da sakız satmak ve ülkeye sakız sokmak, tıbbi nedenler dışında kesinlikle yasaktır."
  },
  {
    id: "MY",
    name: "Malezya",
    nameEn: "Malaysia",
    capital: "Kuala Lumpur",
    continent: "Asya",
    currency: "MYR (Malezya Ringgiti)",
    flag: "🇲🇾",
    visaStatus: "vizesiz",
    allowedDays: 90,
    allowedDaysNote: "3 months",
    eVisaFee: 0,
    dailyCost: {
      local: 18,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 12,
      gezgin: 45
    },
    tags: [
      "deniz_plaj",
      "sehir_kultur",
      "yemek_gastronomi",
      "doga_dag"
    ],
    clusterId: "guneydogu_asya",
    popularCities: [
      "Kuala Lumpur",
      "Langkawi",
      "Penang",
      "Malakka"
    ],
    description: "Tropik ormanlar, muhteşem plajlar ve çok kültürlü mutfağıyla Güneydoğu Asya'nın en çeşitli ülkelerinden biri.",
    interestingFact: "Malezya'daki dünyanın en büyük çiçeklerinden biri olan Rafflesia arnoldii, çürüyen et gibi kokar."
  },
  {
    id: "TH",
    name: "Tayland",
    nameEn: "Thailand",
    capital: "Bangkok",
    continent: "Asya",
    currency: "THB (Tayland Bahtı)",
    flag: "🇹🇭",
    visaStatus: "vizesiz",
    allowedDays: 60,
    allowedDaysNote: "60 days",
    eVisaFee: 0,
    dailyCost: {
      local: 18,
      gezgin: 45
    },
    dailyAccommodation: {
      local: 12,
      gezgin: 45
    },
    tags: [
      "deniz_plaj",
      "yemek_gastronomi",
      "gece_hayati",
      "macera_spor",
      "sakin_dinlenme"
    ],
    clusterId: "guneydogu_asya",
    popularCities: [
      "Bangkok",
      "Chiang Mai",
      "Phuket",
      "Pattaya",
      "Koh Samui"
    ],
    description: "Gülümsemeler ülkesi. Altın tapınaklar, tropik adalar, sokak yemekleri ve uygun fiyatlarıyla dijital göçebelerin favorisi.",
    interestingFact: "Tayland'da insanların başı kutsal kabul edilir, bu yüzden birinin -özellikle de çocukların- başına dokunmak büyük saygısızlıktır."
  },
  {
    id: "HK",
    name: "Hong Kong",
    nameEn: "Hong Kong",
    capital: "Hong Kong",
    continent: "Asya",
    currency: "HKD (Hong Kong Doları)",
    flag: "🇭🇰",
    visaStatus: "vizesiz",
    allowedDays: 90,
    allowedDaysNote: "90 gün vizesiz kalış hakkı",
    eVisaFee: 0,
    dailyCost: {
      local: 35,
      gezgin: 65
    },
    dailyAccommodation: {
      local: 30,
      gezgin: 90
    },
    tags: [
      "sehir_kultur",
      "yemek_gastronomi",
      "gece_hayati"
    ],
    clusterId: "dogu_asya",
    popularCities: [
      "Hong Kong",
      "Kowloon",
      "Lantau"
    ],
    description: "Doğu ile Batı'nın buluştuğu dinamik şehir. Gökdelenler, dim sum ve Victoria Limanı manzarasıyla büyüleyici.",
    interestingFact: "Hong Kong, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "QA",
    name: "Katar",
    nameEn: "Qatar",
    capital: "Doha",
    continent: "Asya",
    currency: "QAR (Katar Riyali)",
    flag: "🇶🇦",
    visaStatus: "vizesiz",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 0,
    dailyCost: {
      local: 35,
      gezgin: 80
    },
    dailyAccommodation: {
      local: 30,
      gezgin: 100
    },
    tags: [
      "sehir_kultur",
      "yemek_gastronomi"
    ],
    clusterId: "korfez",
    popularCities: [
      "Doha"
    ],
    description: "Zengin Körfez ülkesi. Modern mimari, lüks alışveriş merkezleri ve çöl safarileriyle tanınır.",
    interestingFact: "Katar, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "AR",
    name: "Arjantin",
    nameEn: "Argentina",
    capital: "Buenos Aires",
    continent: "Güney Amerika",
    currency: "ARS (Arjantin Pesosu)",
    flag: "🇦🇷",
    visaStatus: "vizesiz",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 0,
    dailyCost: {
      local: 21,
      gezgin: 45
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 55
    },
    tags: [
      "sehir_kultur",
      "yemek_gastronomi",
      "gece_hayati",
      "doga_dag",
      "macera_spor"
    ],
    clusterId: "guney_amerika_guney",
    popularCities: [
      "Buenos Aires",
      "Mendoza",
      "Bariloche",
      "Ushuaia"
    ],
    description: "Tango, biftek ve Patagonya'nın vahşi doğasıyla Latin Amerika'nın en tutkulu ülkesi.",
    interestingFact: "Arjantin, radyo yayıncılığını başlatan ülkelerden biridir; 1920'de 20 kişi tarafından dinlenen ilk yayını yapmışlardır."
  },
  {
    id: "BR",
    name: "Brezilya",
    nameEn: "Brazil",
    capital: "Brasília",
    continent: "Güney Amerika",
    currency: "BRL (Brezilya Reali)",
    flag: "🇧🇷",
    visaStatus: "vizesiz",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 0,
    dailyCost: {
      local: 23,
      gezgin: 50
    },
    dailyAccommodation: {
      local: 15,
      gezgin: 60
    },
    tags: [
      "deniz_plaj",
      "gece_hayati",
      "doga_dag",
      "macera_spor",
      "sehir_kultur"
    ],
    clusterId: "guney_amerika_guney",
    popularCities: [
      "Rio de Janeiro",
      "São Paulo",
      "Salvador",
      "Florianópolis"
    ],
    description: "Samba, karnaval, Amazon yağmur ormanları ve Copacabana plajıyla dünyanın en renkli ülkelerinden biri.",
    interestingFact: "Brezilya, dünyadaki en fazla sayıda izole kabileye (henüz modern dünya ile temasa geçmemiş) ev sahipliği yapan ülkedir."
  },
  {
    id: "CL",
    name: "Şili",
    nameEn: "Chile",
    capital: "Santiago",
    continent: "Güney Amerika",
    currency: "CLP (Şili Pesosu)",
    flag: "🇨🇱",
    visaStatus: "vizesiz",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 0,
    dailyCost: {
      local: 27,
      gezgin: 55
    },
    dailyAccommodation: {
      local: 18,
      gezgin: 65
    },
    tags: [
      "doga_dag",
      "macera_spor",
      "yemek_gastronomi",
      "sakin_dinlenme"
    ],
    clusterId: "guney_amerika_guney",
    popularCities: [
      "Santiago",
      "Valparaíso",
      "San Pedro de Atacama",
      "Torres del Paine"
    ],
    description: "Atacama Çölü'nden Patagonya buzullarına, şarap bağlarından Paskalya Adası'na uzanan ince uzun ülke.",
    interestingFact: "Şili'deki Atacama Çölü o kadar kurudur ki, çölün bazı bölgelerine tarih boyunca hiç yağmur yağdığı kaydedilmemiştir."
  },
  {
    id: "CO",
    name: "Kolombiya",
    nameEn: "Colombia",
    capital: "Bogota",
    continent: "Güney Amerika",
    currency: "COP (Kolombiya Pesosu)",
    flag: "🇨🇴",
    visaStatus: "vizesiz",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 0,
    dailyCost: {
      local: 18,
      gezgin: 38
    },
    dailyAccommodation: {
      local: 10,
      gezgin: 42
    },
    tags: [
      "sehir_kultur",
      "deniz_plaj",
      "gece_hayati",
      "macera_spor",
      "yemek_gastronomi"
    ],
    clusterId: "guney_amerika_kuzey",
    popularCities: [
      "Bogota",
      "Medellín",
      "Cartagena",
      "Cali"
    ],
    description: "Karayip kıyıları, And Dağları, renkli koloniyal şehirler ve sıcak insanlarıyla büyüleyici Latin ülkesi.",
    interestingFact: "Kolombiya, dünyadaki kelebek türlerinin %20'sine ev sahipliği yaparak bu alanda dünya birincisidir."
  },
  {
    id: "EC",
    name: "Ekvador",
    nameEn: "Ecuador",
    capital: "Quito",
    continent: "Güney Amerika",
    currency: "USD (Amerikan Doları)",
    flag: "🇪🇨",
    visaStatus: "vizesiz",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 0,
    dailyCost: {
      local: 16,
      gezgin: 35
    },
    dailyAccommodation: {
      local: 10,
      gezgin: 40
    },
    tags: [
      "doga_dag",
      "macera_spor",
      "deniz_plaj",
      "sakin_dinlenme"
    ],
    clusterId: "guney_amerika_kuzey",
    popularCities: [
      "Quito",
      "Guayaquil",
      "Cuenca",
      "Galápagos"
    ],
    description: "Galápagos Adaları, Amazon ormanları, And volkanları ve ekvator çizgisinin geçtiği küçük ama zengin ülke.",
    interestingFact: "Ekvador, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "PE",
    name: "Peru",
    nameEn: "Peru",
    capital: "Lima",
    continent: "Güney Amerika",
    currency: "PEN (Peru Solu)",
    flag: "🇵🇪",
    visaStatus: "vizesiz",
    allowedDays: 183,
    allowedDaysNote: "183 days",
    eVisaFee: 0,
    dailyCost: {
      local: 18,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 10,
      gezgin: 45
    },
    tags: [
      "sehir_kultur",
      "doga_dag",
      "macera_spor",
      "yemek_gastronomi"
    ],
    clusterId: "guney_amerika_kuzey",
    popularCities: [
      "Lima",
      "Cusco",
      "Machu Picchu",
      "Arequipa"
    ],
    description: "İnka İmparatorluğu'nun mirası Machu Picchu, dünya mutfak başkenti Lima ve Amazon ormanlarıyla eşsiz bir deneyim.",
    interestingFact: "Peru'daki gizemli Nazca Çizgileri, sadece gökyüzünden bakıldığında anlaşılabilecek kadar devasa figürlerdir."
  },
  {
    id: "UY",
    name: "Uruguay",
    nameEn: "Uruguay",
    capital: "Montevideo",
    continent: "Güney Amerika",
    currency: "UYU (Uruguay Pesosu)",
    flag: "🇺🇾",
    visaStatus: "vizesiz",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 0,
    dailyCost: {
      local: 25,
      gezgin: 50
    },
    dailyAccommodation: {
      local: 16,
      gezgin: 60
    },
    tags: [
      "deniz_plaj",
      "sakin_dinlenme",
      "yemek_gastronomi",
      "sehir_kultur"
    ],
    clusterId: "guney_amerika_guney",
    popularCities: [
      "Montevideo",
      "Punta del Este",
      "Colonia del Sacramento"
    ],
    description: "Güney Amerika'nın en güvenli ve en gelişmiş ülkesi. Sakin plajlar, asado kültürü ve mate çayıyla tanınır.",
    interestingFact: "Uruguay, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "PY",
    name: "Paraguay",
    nameEn: "Paraguay",
    capital: "Asunción",
    continent: "Güney Amerika",
    currency: "PYG (Paraguay Guaranisi)",
    flag: "🇵🇾",
    visaStatus: "vizesiz",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 0,
    dailyCost: {
      local: 14,
      gezgin: 30
    },
    dailyAccommodation: {
      local: 8,
      gezgin: 35
    },
    tags: [
      "doga_dag",
      "sakin_dinlenme",
      "sehir_kultur"
    ],
    clusterId: "guney_amerika_guney",
    popularCities: [
      "Asunción",
      "Ciudad del Este",
      "Encarnación"
    ],
    description: "Güney Amerika'nın kalbinde, doğal güzellikleri ve Guaraní kültürüyle keşfedilmeyi bekleyen saklı hazine.",
    interestingFact: "Paraguay, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "BO",
    name: "Bolivya",
    nameEn: "Bolivia",
    capital: "La Paz / Sucre",
    continent: "Güney Amerika",
    currency: "BOB (Bolivya Bolivyanosu)",
    flag: "🇧🇴",
    visaStatus: "vizesiz",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 0,
    dailyCost: {
      local: 12,
      gezgin: 28
    },
    dailyAccommodation: {
      local: 8,
      gezgin: 30
    },
    tags: [
      "doga_dag",
      "macera_spor",
      "sehir_kultur"
    ],
    clusterId: "guney_amerika_kuzey",
    popularCities: [
      "La Paz",
      "Uyuni",
      "Sucre",
      "Cochabamba"
    ],
    description: "Uyuni Tuz Gölü, yüksek rakımlı şehirler ve yerli kültürleriyle Güney Amerika'nın en otantik deneyimlerini sunan ülke.",
    interestingFact: "Bolivya, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "CR",
    name: "Kosta Rika",
    nameEn: "Costa Rica",
    capital: "San José",
    continent: "Kuzey Amerika",
    currency: "CRC (Kosta Rika Kolonu)",
    flag: "🇨🇷",
    visaStatus: "vizesiz",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 0,
    dailyCost: {
      local: 30,
      gezgin: 65
    },
    dailyAccommodation: {
      local: 20,
      gezgin: 75
    },
    tags: [
      "doga_dag",
      "macera_spor",
      "deniz_plaj",
      "sakin_dinlenme"
    ],
    clusterId: "orta_amerika",
    popularCities: [
      "San José",
      "Monteverde",
      "Manuel Antonio",
      "La Fortuna"
    ],
    description: "Biyolojik çeşitlilik cenneti. Yağmur ormanları, volkanlar, tropik plajlar ve 'Pura Vida' yaşam felsefesiyle ünlü.",
    interestingFact: "Kosta Rika, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "PA",
    name: "Panama",
    nameEn: "Panama",
    capital: "Panama City",
    continent: "Kuzey Amerika",
    currency: "PAB/USD (Panama Balboası)",
    flag: "🇵🇦",
    visaStatus: "vizesiz",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 0,
    dailyCost: {
      local: 22,
      gezgin: 45
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 55
    },
    tags: [
      "sehir_kultur",
      "deniz_plaj",
      "doga_dag",
      "macera_spor"
    ],
    clusterId: "orta_amerika",
    popularCities: [
      "Panama City",
      "Bocas del Toro",
      "San Blas",
      "Boquete"
    ],
    description: "İki okyanusu birbirine bağlayan kanal ülkesi. Modern şehir yaşamı ile tropik ada cennetini bir arada sunar.",
    interestingFact: "Panama, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "DO",
    name: "Dominik Cumhuriyeti",
    nameEn: "Dominican Republic",
    capital: "Santo Domingo",
    continent: "Kuzey Amerika",
    currency: "DOP (Dominik Pesosu)",
    flag: "🇩🇴",
    visaStatus: "vizesiz",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 42
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 50
    },
    tags: [
      "deniz_plaj",
      "gece_hayati",
      "sakin_dinlenme"
    ],
    clusterId: null,
    popularCities: [
      "Punta Cana",
      "Santo Domingo",
      "Puerto Plata"
    ],
    description: "Karayipler'in en popüler tatil destinasyonu. Beyaz kumlu plajlar, her şey dahil tatil köyleri ve merengue müziğiyle ünlü.",
    interestingFact: "Dominik Cumhuriyeti, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "AL",
    name: "Arnavutluk",
    nameEn: "Albania",
    capital: "Tiran",
    continent: "Avrupa",
    currency: "ALL (Arnavut Leki)",
    flag: "🇦🇱",
    visaStatus: "vizesiz",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 0,
    dailyCost: {
      local: 16,
      gezgin: 35
    },
    dailyAccommodation: {
      local: 12,
      gezgin: 40
    },
    tags: [
      "deniz_plaj",
      "sehir_kultur",
      "doga_dag",
      "yemek_gastronomi"
    ],
    clusterId: "balkan",
    popularCities: [
      "Tiran",
      "Sarandë",
      "Berat",
      "Gjirokastër"
    ],
    description: "Balkanlar'ın saklı cenneti. Bozulmamış plajlar, UNESCO miras şehirleri ve uygun fiyatlarıyla yükselen bir destinasyon.",
    interestingFact: "Arnavutluk, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "BA",
    name: "Bosna Hersek",
    nameEn: "Bosnia and Herzegovina",
    capital: "Saraybosna",
    continent: "Avrupa",
    currency: "BAM (Bosna Hersek Markı)",
    flag: "🇧🇦",
    visaStatus: "vizesiz",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 0,
    dailyCost: {
      local: 16,
      gezgin: 35
    },
    dailyAccommodation: {
      local: 12,
      gezgin: 40
    },
    tags: [
      "sehir_kultur",
      "doga_dag",
      "yemek_gastronomi",
      "sakin_dinlenme"
    ],
    clusterId: "balkan",
    popularCities: [
      "Saraybosna",
      "Mostar",
      "Travnik",
      "Jajce"
    ],
    description: "Osmanlı ve Avusturya-Macaristan mirasının iç içe geçtiği, Mostar Köprüsü ve Saraybosna'nın büyülediği Balkan ülkesi.",
    interestingFact: "Bosna Hersek, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "XK",
    name: "Kosova",
    nameEn: "Kosovo",
    capital: "Priştine",
    continent: "Avrupa",
    currency: "EUR (Euro)",
    flag: "🇽🇰",
    visaStatus: "vizesiz",
    allowedDays: 90,
    allowedDaysNote: "90 gün vizesiz kalış hakkı",
    eVisaFee: 0,
    dailyCost: {
      local: 14,
      gezgin: 30
    },
    dailyAccommodation: {
      local: 10,
      gezgin: 35
    },
    tags: [
      "sehir_kultur",
      "doga_dag",
      "yemek_gastronomi"
    ],
    clusterId: "balkan",
    popularCities: [
      "Priştine",
      "Prizren",
      "Peć"
    ],
    description: "Genç ve enerjik Balkan ülkesi. Osmanlı mirası, Prizren'in tarihi dokusu ve sıcak misafirperverliğiyle tanınır.",
    interestingFact: "Kosova, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "ME",
    name: "Karadağ",
    nameEn: "Montenegro",
    capital: "Podgorica",
    continent: "Avrupa",
    currency: "EUR (Euro)",
    flag: "🇲🇪",
    visaStatus: "vizesiz",
    allowedDays: 30,
    allowedDaysNote: "30 days",
    eVisaFee: 0,
    dailyCost: {
      local: 22,
      gezgin: 50
    },
    dailyAccommodation: {
      local: 18,
      gezgin: 60
    },
    tags: [
      "deniz_plaj",
      "doga_dag",
      "sehir_kultur",
      "sakin_dinlenme"
    ],
    clusterId: "balkan",
    popularCities: [
      "Kotor",
      "Budva",
      "Tivat",
      "Podgorica"
    ],
    description: "Adriyatik kıyısındaki küçük ama güzel ülke. Kotor Körfezi, ortaçağ kasabaları ve muhteşem kıyı şeridiyle büyüleyici.",
    interestingFact: "Karadağ, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "MK",
    name: "Kuzey Makedonya",
    nameEn: "North Macedonia",
    capital: "Üsküp",
    continent: "Avrupa",
    currency: "MKD (Makedon Dinarı)",
    flag: "🇲🇰",
    visaStatus: "vizesiz",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 0,
    dailyCost: {
      local: 15,
      gezgin: 32
    },
    dailyAccommodation: {
      local: 11,
      gezgin: 38
    },
    tags: [
      "sehir_kultur",
      "doga_dag",
      "yemek_gastronomi",
      "sakin_dinlenme"
    ],
    clusterId: "balkan",
    popularCities: [
      "Üsküp",
      "Ohrid",
      "Bitola"
    ],
    description: "Ohrid Gölü, Üsküp'ün Osmanlı çarşısı ve doğal güzellikleriyle Balkanlar'ın keşfedilmeyi bekleyen mücevheri.",
    interestingFact: "Kuzey Makedonya, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "RS",
    name: "Sırbistan",
    nameEn: "Serbia",
    capital: "Belgrad",
    continent: "Avrupa",
    currency: "RSD (Sırp Dinarı)",
    flag: "🇷🇸",
    visaStatus: "vizesiz",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 0,
    dailyCost: {
      local: 18,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur",
      "gece_hayati",
      "yemek_gastronomi",
      "doga_dag"
    ],
    clusterId: "balkan",
    popularCities: [
      "Belgrad",
      "Novi Sad",
      "Niš"
    ],
    description: "Avrupa'nın en hareketli gece hayatına sahip Belgrad, festivalleri ve et ağırlıklı Balkan mutfağıyla tanınan ülke.",
    interestingFact: "Sırbistan, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "GE",
    name: "Gürcistan",
    nameEn: "Georgia",
    capital: "Tiflis",
    continent: "Asya",
    currency: "GEL (Gürcistan Larisi)",
    flag: "🇬🇪",
    visaStatus: "vizesiz",
    allowedDays: 360,
    allowedDaysNote: "360 days",
    eVisaFee: 0,
    dailyCost: {
      local: 15,
      gezgin: 35
    },
    dailyAccommodation: {
      local: 10,
      gezgin: 40
    },
    tags: [
      "sehir_kultur",
      "yemek_gastronomi",
      "doga_dag",
      "macera_spor",
      "sakin_dinlenme"
    ],
    clusterId: "kafkas",
    popularCities: [
      "Tiflis",
      "Batum",
      "Kazbegi",
      "Kutaisi"
    ],
    description: "Şarabın anavatanı, muhteşem Kafkas dağları, lezzetli hinkali ve haçapuri ile dijital göçebelerin yeni gözdesi.",
    interestingFact: "Gürcistan, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "AZ",
    name: "Azerbaycan",
    nameEn: "Azerbaijan",
    capital: "Bakü",
    continent: "Asya",
    currency: "AZN (Azerbaycan Manatı)",
    flag: "🇦🇿",
    visaStatus: "vizesiz",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 0,
    dailyCost: {
      local: 16,
      gezgin: 38
    },
    dailyAccommodation: {
      local: 11,
      gezgin: 42
    },
    tags: [
      "sehir_kultur",
      "doga_dag",
      "yemek_gastronomi"
    ],
    clusterId: "kafkas",
    popularCities: [
      "Bakü",
      "Şeki",
      "Quba",
      "Qəbələ"
    ],
    description: "Ateşler ülkesi. Modern Bakü silüeti, tarihi İçerişehir, Hazar Denizi kıyıları ve kardeş ülke sıcaklığıyla tanınır.",
    interestingFact: "Azerbaycan, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "MD",
    name: "Moldova",
    nameEn: "Moldova",
    capital: "Kişinev",
    continent: "Avrupa",
    currency: "MDL (Moldova Leyi)",
    flag: "🇲🇩",
    visaStatus: "vizesiz",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 0,
    dailyCost: {
      local: 14,
      gezgin: 30
    },
    dailyAccommodation: {
      local: 10,
      gezgin: 35
    },
    tags: [
      "sehir_kultur",
      "yemek_gastronomi",
      "sakin_dinlenme"
    ],
    clusterId: null,
    popularCities: [
      "Kişinev",
      "Orheiul Vechi"
    ],
    description: "Avrupa'nın en az keşfedilmiş ülkelerinden biri. Şarap mahzenleri, kırsal güzellikler ve otantik atmosferiyle ilgi çekici.",
    interestingFact: "Moldova, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "MA",
    name: "Fas",
    nameEn: "Morocco",
    capital: "Rabat",
    continent: "Afrika",
    currency: "MAD (Fas Dirhemi)",
    flag: "🇲🇦",
    visaStatus: "vizesiz",
    allowedDays: 90,
    allowedDaysNote: "3 months",
    eVisaFee: 0,
    dailyCost: {
      local: 17,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 11,
      gezgin: 45
    },
    tags: [
      "sehir_kultur",
      "yemek_gastronomi",
      "macera_spor",
      "doga_dag"
    ],
    clusterId: "kuzey_afrika",
    popularCities: [
      "Marakeş",
      "Fes",
      "Şefşauen",
      "Kazablanka"
    ],
    description: "Renkli medina sokakları, Sahra Çölü, Atlas Dağları ve tagine lezzetiyle Kuzey Afrika'nın en büyüleyici ülkesi.",
    interestingFact: "Fas'ta bulunan Al Quaraouiyine Üniversitesi, 859 yılında kurulmuş olup dünyanın halen eğitim veren en eski üniversitesidir."
  },
  {
    id: "TN",
    name: "Tunus",
    nameEn: "Tunisia",
    capital: "Tunus",
    continent: "Afrika",
    currency: "TND (Tunus Dinarı)",
    flag: "🇹🇳",
    visaStatus: "vizesiz",
    allowedDays: 90,
    allowedDaysNote: "3 months",
    eVisaFee: 0,
    dailyCost: {
      local: 15,
      gezgin: 32
    },
    dailyAccommodation: {
      local: 10,
      gezgin: 38
    },
    tags: [
      "deniz_plaj",
      "sehir_kultur",
      "macera_spor",
      "sakin_dinlenme"
    ],
    clusterId: "kuzey_afrika",
    popularCities: [
      "Tunus",
      "Sidi Bou Said",
      "Hammamet",
      "Djerba"
    ],
    description: "Akdeniz kıyıları, antik Kartaca kalıntıları, Sahra Çölü ve Star Wars çekim mekanlarıyla çeşitlilik sunan ülke.",
    interestingFact: "Tunus, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "ZA",
    name: "Güney Afrika",
    nameEn: "South Africa",
    capital: "Pretoria / Cape Town",
    continent: "Afrika",
    currency: "ZAR (Güney Afrika Randı)",
    flag: "🇿🇦",
    visaStatus: "vizesiz",
    allowedDays: 30,
    allowedDaysNote: "30 days",
    eVisaFee: 0,
    dailyCost: {
      local: 24,
      gezgin: 55
    },
    dailyAccommodation: {
      local: 16,
      gezgin: 60
    },
    tags: [
      "doga_dag",
      "macera_spor",
      "deniz_plaj",
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Cape Town",
      "Johannesburg",
      "Durban",
      "Kruger Parkı"
    ],
    description: "Afrika'nın en gelişmiş ülkesi. Safari deneyimi, Cape Town'un güzelliği, şarap bağları ve çeşitli kültürüyle büyüleyici.",
    interestingFact: "Güney Afrika Cumhuriyeti'nin üç farklı başkenti vardır: Pretoria (yürütme), Bloemfontein (yargı) ve Cape Town (yasama)."
  },
  {
    id: "BW",
    name: "Botsvana",
    nameEn: "Botswana",
    capital: "Gaborone",
    continent: "Afrika",
    currency: "BWP (Botsvana Pulası)",
    flag: "🇧🇼",
    visaStatus: "vizesiz",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 0,
    dailyCost: {
      local: 22,
      gezgin: 50
    },
    dailyAccommodation: {
      local: 16,
      gezgin: 55
    },
    tags: [
      "doga_dag",
      "macera_spor",
      "sakin_dinlenme"
    ],
    clusterId: null,
    popularCities: [
      "Gaborone",
      "Maun",
      "Kasane"
    ],
    description: "Okavango Deltası ve Chobe Milli Parkı ile Afrika'nın en iyi safari destinasyonlarından biri.",
    interestingFact: "Botsvana, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "PH",
    name: "Filipinler",
    nameEn: "Philippines",
    capital: "Manila",
    continent: "Asya",
    currency: "PHP (Filipin Pesosu)",
    flag: "🇵🇭",
    visaStatus: "vizesiz",
    allowedDays: 30,
    allowedDaysNote: "30 days",
    eVisaFee: 0,
    dailyCost: {
      local: 18,
      gezgin: 38
    },
    dailyAccommodation: {
      local: 12,
      gezgin: 42
    },
    tags: [
      "deniz_plaj",
      "macera_spor",
      "doga_dag",
      "sakin_dinlenme"
    ],
    clusterId: "guneydogu_asya",
    popularCities: [
      "Manila",
      "Boracay",
      "El Nido",
      "Cebu",
      "Siargao"
    ],
    description: "7.000'den fazla adadan oluşan tropik cennet. Turkuaz lagünler, beyaz kumlu plajlar ve sıcakkanlı insanlarıyla ünlü.",
    interestingFact: "Filipinler, dünyada boşanmanın (Vatikan dışında) yasa dışı olduğu tek ülkedir."
  },
  {
    id: "ID",
    name: "Endonezya",
    nameEn: "Indonesia",
    capital: "Cakarta",
    continent: "Asya",
    currency: "IDR (Endonezya Rupisi)",
    flag: "🇮🇩",
    visaStatus: "vizesiz",
    allowedDays: 30,
    allowedDaysNote: "30 days",
    eVisaFee: 0,
    dailyCost: {
      local: 15,
      gezgin: 35
    },
    dailyAccommodation: {
      local: 10,
      gezgin: 40
    },
    tags: [
      "deniz_plaj",
      "doga_dag",
      "macera_spor",
      "sakin_dinlenme",
      "yemek_gastronomi"
    ],
    clusterId: "guneydogu_asya",
    popularCities: [
      "Bali",
      "Cakarta",
      "Yogyakarta",
      "Lombok",
      "Komodo"
    ],
    description: "Bali'nin pirinç terasları, Komodo ejderhaları, tropik dalış noktaları ve zengin kültürel mirasıyla büyüleyici takımadalar ülkesi.",
    interestingFact: "Endonezya, 17.000'den fazla adadan oluşur ve dünyadaki tüm bitki ve hayvan türlerinin %17'sine ev sahipliği yapar."
  },
  {
    id: "KZ",
    name: "Kazakistan",
    nameEn: "Kazakhstan",
    capital: "Astana",
    continent: "Asya",
    currency: "KZT (Kazak Tengesi)",
    flag: "🇰🇿",
    visaStatus: "vizesiz",
    allowedDays: 30,
    allowedDaysNote: "30 days",
    eVisaFee: 0,
    dailyCost: {
      local: 18,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 50
    },
    tags: [
      "sehir_kultur",
      "doga_dag",
      "macera_spor"
    ],
    clusterId: null,
    popularCities: [
      "Astana",
      "Almatı",
      "Türkistan",
      "Çarın Kanyonu"
    ],
    description: "Orta Asya'nın en büyük ve en gelişmiş ülkesi. Modern Astana, Almatı'nın dağları ve uçsuz bucaksız bozkırlarıyla etkileyici.",
    interestingFact: "Kazakistan, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "KG",
    name: "Kırgızistan",
    nameEn: "Kyrgyzstan",
    capital: "Bişkek",
    continent: "Asya",
    currency: "KGS (Kırgız Somu)",
    flag: "🇰🇬",
    visaStatus: "vizesiz",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 0,
    dailyCost: {
      local: 12,
      gezgin: 28
    },
    dailyAccommodation: {
      local: 10,
      gezgin: 35
    },
    tags: [
      "doga_dag",
      "macera_spor",
      "sakin_dinlenme"
    ],
    clusterId: null,
    popularCities: [
      "Bişkek",
      "Issık Göl",
      "Karakol",
      "Oş"
    ],
    description: "Orta Asya'nın İsviçresi. Issık Göl, yaylalar, at biniciliği ve yurt konaklamasıyla doğa tutkunlarının cenneti.",
    interestingFact: "Kırgızistan, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "UZ",
    name: "Özbekistan",
    nameEn: "Uzbekistan",
    capital: "Taşkent",
    continent: "Asya",
    currency: "UZS (Özbek Somu)",
    flag: "🇺🇿",
    visaStatus: "vizesiz",
    allowedDays: 30,
    allowedDaysNote: "30 days",
    eVisaFee: 0,
    dailyCost: {
      local: 13,
      gezgin: 30
    },
    dailyAccommodation: {
      local: 12,
      gezgin: 40
    },
    tags: [
      "sehir_kultur",
      "yemek_gastronomi",
      "sakin_dinlenme"
    ],
    clusterId: null,
    popularCities: [
      "Taşkent",
      "Semerkant",
      "Buhara",
      "Hiva"
    ],
    description: "İpek Yolu'nun kalbi. Semerkant'ın turkuaz kubbeleri, Buhara'nın tarihi dokusu ve zengin Orta Asya mutfağıyla büyüleyici.",
    interestingFact: "Özbekistan, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "BY",
    name: "Belarus",
    nameEn: "Belarus",
    capital: "Minsk",
    continent: "Avrupa",
    currency: "BYN (Belarus Rublesi)",
    flag: "🇧🇾",
    visaStatus: "vizesiz",
    allowedDays: 30,
    allowedDaysNote: "30 days",
    eVisaFee: 0,
    dailyCost: {
      local: 16,
      gezgin: 35
    },
    dailyAccommodation: {
      local: 12,
      gezgin: 40
    },
    tags: [
      "sehir_kultur",
      "doga_dag",
      "sakin_dinlenme"
    ],
    clusterId: null,
    popularCities: [
      "Minsk",
      "Brest",
      "Grodno"
    ],
    description: "Sovyet mirasını koruyan, ormanlar ve göllerle dolu Doğu Avrupa ülkesi. Belovezhskaya Pushcha ormanlarıyla ünlü.",
    interestingFact: "Belarus, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "UA",
    name: "Ukrayna",
    nameEn: "Ukraine",
    capital: "Kiev",
    continent: "Avrupa",
    currency: "UAH (Ukrayna Grivnası)",
    flag: "🇺🇦",
    visaStatus: "vizesiz",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 0,
    dailyCost: {
      local: 15,
      gezgin: 35
    },
    dailyAccommodation: {
      local: 10,
      gezgin: 40
    },
    tags: [
      "sehir_kultur",
      "yemek_gastronomi",
      "doga_dag"
    ],
    clusterId: null,
    popularCities: [
      "Kiev",
      "Lviv",
      "Odessa"
    ],
    description: "Avrupa'nın en büyük ülkesi. Kiev'in altın kubbeli kiliseleri, Lviv'in Avrupai atmosferi ve zengin mutfağıyla dikkat çekici.",
    interestingFact: "Ukrayna, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "JM",
    name: "Jamaika",
    nameEn: "Jamaica",
    capital: "Kingston",
    continent: "Kuzey Amerika",
    currency: "JMD (Jamaika Doları)",
    flag: "🇯🇲",
    visaStatus: "vizesiz",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 0,
    dailyCost: {
      local: 22,
      gezgin: 48
    },
    dailyAccommodation: {
      local: 16,
      gezgin: 55
    },
    tags: [
      "deniz_plaj",
      "gece_hayati",
      "sakin_dinlenme",
      "yemek_gastronomi"
    ],
    clusterId: null,
    popularCities: [
      "Kingston",
      "Montego Bay",
      "Negril",
      "Ocho Rios"
    ],
    description: "Reggae müziğin, jerk chicken'ın ve Karayip ruhunun anavatanı. Muhteşem plajlar ve rahat yaşam tarzıyla tanınır.",
    interestingFact: "Jamaika, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "BS",
    name: "Bahamalar",
    nameEn: "Bahamas",
    capital: "Nassau",
    continent: "Kuzey Amerika",
    currency: "BSD (Bahama Doları)",
    flag: "🇧🇸",
    visaStatus: "vizesiz",
    allowedDays: 240,
    allowedDaysNote: "8 months",
    eVisaFee: 0,
    dailyCost: {
      local: 30,
      gezgin: 65
    },
    dailyAccommodation: {
      local: 22,
      gezgin: 80
    },
    tags: [
      "deniz_plaj",
      "sakin_dinlenme",
      "macera_spor"
    ],
    clusterId: null,
    popularCities: [
      "Nassau",
      "Paradise Island",
      "Exuma"
    ],
    description: "700 adadan oluşan Karayip cenneti. Yüzen domuzlar, kristal berraklığında sular ve lüks tatil köyleriyle ünlü.",
    interestingFact: "Bahamalar, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "BB",
    name: "Barbados",
    nameEn: "Barbados",
    capital: "Bridgetown",
    continent: "Kuzey Amerika",
    currency: "BBD (Barbados Doları)",
    flag: "🇧🇧",
    visaStatus: "vizesiz",
    allowedDays: 180,
    allowedDaysNote: "6 months",
    eVisaFee: 0,
    dailyCost: {
      local: 28,
      gezgin: 55
    },
    dailyAccommodation: {
      local: 20,
      gezgin: 70
    },
    tags: [
      "deniz_plaj",
      "sakin_dinlenme",
      "gece_hayati",
      "yemek_gastronomi"
    ],
    clusterId: null,
    popularCities: [
      "Bridgetown",
      "Holetown",
      "Bathsheba"
    ],
    description: "Karayipler'in en gelişmiş adası. Rum, kriket, tropik plajlar ve İngiliz kolonyal mimarisiyle dikkat çekici.",
    interestingFact: "Barbados, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "TT",
    name: "Trinidad ve Tobago",
    nameEn: "Trinidad and Tobago",
    capital: "Port of Spain",
    continent: "Kuzey Amerika",
    currency: "TTD (Trinidad ve Tobago Doları)",
    flag: "🇹🇹",
    visaStatus: "vizesiz",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 0,
    dailyCost: {
      local: 22,
      gezgin: 45
    },
    dailyAccommodation: {
      local: 15,
      gezgin: 55
    },
    tags: [
      "deniz_plaj",
      "gece_hayati",
      "doga_dag",
      "yemek_gastronomi"
    ],
    clusterId: null,
    popularCities: [
      "Port of Spain",
      "Scarborough"
    ],
    description: "Karayip karnavalının anavatanı. Calypso müziği, çeşitli mutfağı ve tropikal yağmur ormanlarıyla renkli ada ülkesi.",
    interestingFact: "Trinidad ve Tobago, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "SV",
    name: "El Salvador",
    nameEn: "El Salvador",
    capital: "San Salvador",
    continent: "Kuzey Amerika",
    currency: "USD (Amerikan Doları)",
    flag: "🇸🇻",
    visaStatus: "vizesiz",
    allowedDays: 90,
    allowedDaysNote: "3 months",
    eVisaFee: 0,
    dailyCost: {
      local: 16,
      gezgin: 35
    },
    dailyAccommodation: {
      local: 10,
      gezgin: 40
    },
    tags: [
      "deniz_plaj",
      "macera_spor",
      "sehir_kultur"
    ],
    clusterId: "orta_amerika",
    popularCities: [
      "San Salvador",
      "El Tunco",
      "Santa Ana"
    ],
    description: "Orta Amerika'nın en küçük ülkesi. Sörf plajları, volkanlar ve Maya kalıntılarıyla keşfedilmeyi bekliyor.",
    interestingFact: "El Salvador, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "GT",
    name: "Guatemala",
    nameEn: "Guatemala",
    capital: "Guatemala City",
    continent: "Kuzey Amerika",
    currency: "GTQ (Guatemala Quetzalı)",
    flag: "🇬🇹",
    visaStatus: "vizesiz",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 0,
    dailyCost: {
      local: 16,
      gezgin: 35
    },
    dailyAccommodation: {
      local: 10,
      gezgin: 40
    },
    tags: [
      "sehir_kultur",
      "doga_dag",
      "macera_spor"
    ],
    clusterId: "orta_amerika",
    popularCities: [
      "Antigua",
      "Guatemala City",
      "Tikal",
      "Atitlán Gölü"
    ],
    description: "Maya medeniyetinin kalbi. Tikal piramitleri, renkli Antigua sokakları ve Atitlán Gölü'nün güzelliğiyle büyüleyici.",
    interestingFact: "Guatemala, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "HN",
    name: "Honduras",
    nameEn: "Honduras",
    capital: "Tegucigalpa",
    continent: "Kuzey Amerika",
    currency: "HNL (Honduras Lempirası)",
    flag: "🇭🇳",
    visaStatus: "vizesiz",
    allowedDays: 90,
    allowedDaysNote: "3 months",
    eVisaFee: 0,
    dailyCost: {
      local: 14,
      gezgin: 32
    },
    dailyAccommodation: {
      local: 10,
      gezgin: 38
    },
    tags: [
      "deniz_plaj",
      "macera_spor",
      "doga_dag"
    ],
    clusterId: "orta_amerika",
    popularCities: [
      "Tegucigalpa",
      "Roatán",
      "Copán"
    ],
    description: "Karayip adaları, Maya kalıntıları ve dünyanın en iyi dalış noktalarından Roatán ile macera dolu bir destinasyon.",
    interestingFact: "Honduras, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "NI",
    name: "Nikaragua",
    nameEn: "Nicaragua",
    capital: "Managua",
    continent: "Kuzey Amerika",
    currency: "NIO (Nikaragua Kórdobası)",
    flag: "🇳🇮",
    visaStatus: "vizesiz",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 0,
    dailyCost: {
      local: 14,
      gezgin: 30
    },
    dailyAccommodation: {
      local: 8,
      gezgin: 35
    },
    tags: [
      "doga_dag",
      "macera_spor",
      "deniz_plaj",
      "sakin_dinlenme"
    ],
    clusterId: "orta_amerika",
    popularCities: [
      "Granada",
      "León",
      "San Juan del Sur"
    ],
    description: "Orta Amerika'nın en uygun fiyatlı ülkesi. Koloniyal şehirler, volkan tırmanışları ve sörf plajlarıyla cezbedici.",
    interestingFact: "Nikaragua, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "HT",
    name: "Haiti",
    nameEn: "Haiti",
    capital: "Port-au-Prince",
    continent: "Kuzey Amerika",
    currency: "HTG (Haiti Gourdesi)",
    flag: "🇭🇹",
    visaStatus: "vizesiz",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 0,
    dailyCost: {
      local: 15,
      gezgin: 32
    },
    dailyAccommodation: {
      local: 10,
      gezgin: 35
    },
    tags: [
      "sehir_kultur",
      "deniz_plaj"
    ],
    clusterId: null,
    popularCities: [
      "Port-au-Prince",
      "Cap-Haïtien",
      "Jacmel"
    ],
    description: "Karayipler'in ilk bağımsız cumhuriyeti. Zengin tarihi, canlı sanat sahası ve doğal güzellikleriyle dikkat çekici.",
    interestingFact: "Haiti, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "BZ",
    name: "Belize",
    nameEn: "Belize",
    capital: "Belmopan",
    continent: "Kuzey Amerika",
    currency: "BZD (Belize Doları)",
    flag: "🇧🇿",
    visaStatus: "vizesiz",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 45
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 55
    },
    tags: [
      "deniz_plaj",
      "macera_spor",
      "doga_dag",
      "sakin_dinlenme"
    ],
    clusterId: "orta_amerika",
    popularCities: [
      "Belize City",
      "San Pedro",
      "Caye Caulker",
      "Placencia"
    ],
    description: "Karayip sahilleri, Büyük Mavi Delik, Maya tapınakları ve yağmur ormanlarıyla macera severlerin cenneti.",
    interestingFact: "Belize, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "JO",
    name: "Ürdün",
    nameEn: "Jordan",
    capital: "Amman",
    continent: "Asya",
    currency: "JOD (Ürdün Dinarı)",
    flag: "🇯🇴",
    visaStatus: "vizesiz",
    allowedDays: 90,
    allowedDaysNote: "3 months",
    eVisaFee: 1200,
    dailyCost: {
      local: 29,
      gezgin: 75
    },
    dailyAccommodation: {
      local: 16,
      gezgin: 65
    },
    tags: [
      "sehir_kultur",
      "macera_spor",
      "doga_dag"
    ],
    clusterId: "korfez",
    popularCities: [
      "Amman",
      "Petra",
      "Wadi Rum",
      "Ölü Deniz",
      "Akabe"
    ],
    description: "Antik Petra şehri, Wadi Rum çölü, Ölü Deniz ve zengin tarihi mirasıyla Ortadoğu'nun en güvenli destinasyonu.",
    interestingFact: "Ürdün, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "LB",
    name: "Lübnan",
    nameEn: "Lebanon",
    capital: "Beyrut",
    continent: "Asya",
    currency: "LBP (Lübnan Lirası)",
    flag: "🇱🇧",
    visaStatus: "kapida_vize",
    allowedDays: 30,
    allowedDaysNote: "Kapıda ücretsiz vize ile 30 gün",
    eVisaFee: 0,
    dailyCost: {
      local: 25,
      gezgin: 55
    },
    dailyAccommodation: {
      local: 18,
      gezgin: 65
    },
    tags: [
      "sehir_kultur",
      "yemek_gastronomi",
      "gece_hayati"
    ],
    clusterId: null,
    popularCities: [
      "Beyrut",
      "Byblos",
      "Baalbek",
      "Harissa"
    ],
    description: "Ortadoğu'nun Paris'i olarak anılan Beyrut, efsanevi mutfağı, antik kalıntıları ve canlı gece hayatıyla büyüleyici.",
    interestingFact: "Lübnan, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "NP",
    name: "Nepal",
    nameEn: "Nepal",
    capital: "Katmandu",
    continent: "Asya",
    currency: "NPR (Nepal Rupisi)",
    flag: "🇳🇵",
    visaStatus: "kapida_vize",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 800,
    dailyCost: {
      local: 12,
      gezgin: 28
    },
    dailyAccommodation: {
      local: 8,
      gezgin: 30
    },
    tags: [
      "doga_dag",
      "macera_spor",
      "sehir_kultur",
      "sakin_dinlenme"
    ],
    clusterId: null,
    popularCities: [
      "Katmandu",
      "Pokhara",
      "Everest Base Camp",
      "Chitwan"
    ],
    description: "Dünyanın çatısı Himalayalar, Everest Dağı, Budist tapınaklar ve trekking rotalarıyla macera tutkunlarının hayali.",
    interestingFact: "Nepal, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "KH",
    name: "Kamboçya",
    nameEn: "Cambodia",
    capital: "Phnom Penh",
    continent: "Asya",
    currency: "KHR (Kamboçya Rieli)",
    flag: "🇰🇭",
    visaStatus: "e_vize",
    allowedDays: 30,
    allowedDaysNote: "30 days",
    eVisaFee: 1000,
    dailyCost: {
      local: 16,
      gezgin: 35
    },
    dailyAccommodation: {
      local: 8,
      gezgin: 35
    },
    tags: [
      "sehir_kultur",
      "deniz_plaj",
      "macera_spor",
      "sakin_dinlenme"
    ],
    clusterId: "guneydogu_asya",
    popularCities: [
      "Siem Reap",
      "Phnom Penh",
      "Sihanoukville",
      "Koh Rong"
    ],
    description: "Angkor Wat tapınağı, Khmer İmparatorluğu mirası, uygun fiyatları ve sıcakkanlı halkıyla Güneydoğu Asya'nın gizli cevheri.",
    interestingFact: "Kamboçya, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "LA",
    name: "Laos",
    nameEn: "Laos",
    capital: "Vientiane",
    continent: "Asya",
    currency: "LAK (Laos Kipi)",
    flag: "🇱🇦",
    visaStatus: "e_vize",
    allowedDays: 30,
    allowedDaysNote: "30 days",
    eVisaFee: 1000,
    dailyCost: {
      local: 14,
      gezgin: 30
    },
    dailyAccommodation: {
      local: 8,
      gezgin: 30
    },
    tags: [
      "doga_dag",
      "sakin_dinlenme",
      "macera_spor",
      "sehir_kultur"
    ],
    clusterId: "guneydogu_asya",
    popularCities: [
      "Luang Prabang",
      "Vientiane",
      "Vang Vieng"
    ],
    description: "Mekong Nehri kıyısında sakin tapınak şehirleri, doğal mağaralar ve bozulmamış doğasıyla Güneydoğu Asya'nın huzur cenneti.",
    interestingFact: "Laos, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "MV",
    name: "Maldivler",
    nameEn: "Maldives",
    capital: "Malé",
    continent: "Asya",
    currency: "MVR (Maldiv Rufiyası)",
    flag: "🇲🇻",
    visaStatus: "kapida_vize",
    allowedDays: 30,
    allowedDaysNote: "30 days",
    eVisaFee: 0,
    dailyCost: {
      local: 35,
      gezgin: 80
    },
    dailyAccommodation: {
      local: 30,
      gezgin: 120
    },
    tags: [
      "deniz_plaj",
      "sakin_dinlenme",
      "macera_spor"
    ],
    clusterId: null,
    popularCities: [
      "Malé",
      "Maafushi",
      "Hulhumalé"
    ],
    description: "Hint Okyanusu'ndaki cennet. Su üstü bungalovları, mercan resifleri, turkuaz sular ve balayı deneyimleriyle efsanevi.",
    interestingFact: "Maldivler, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "IR",
    name: "İran",
    nameEn: "Iran",
    capital: "Tahran",
    continent: "Asya",
    currency: "IRR (İran Riyali)",
    flag: "🇮🇷",
    visaStatus: "vizesiz",
    allowedDays: 90,
    allowedDaysNote: "3 months",
    eVisaFee: 750,
    dailyCost: {
      local: 14,
      gezgin: 32
    },
    dailyAccommodation: {
      local: 10,
      gezgin: 35
    },
    tags: [
      "sehir_kultur",
      "yemek_gastronomi",
      "doga_dag"
    ],
    clusterId: null,
    popularCities: [
      "Tahran",
      "Isfahan",
      "Şiraz",
      "Yezd",
      "Tebriz"
    ],
    description: "Persepolis harabeleri, Isfahan'ın muhteşem camileri, çay bahçeleri ve binlerce yıllık medeniyetiyle Ortadoğu'nun en derin kültürü.",
    interestingFact: "İran, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "KW",
    name: "Kuveyt",
    nameEn: "Kuwait",
    capital: "Kuveyt",
    continent: "Asya",
    currency: "KWD (Kuveyt Dinarı)",
    flag: "🇰🇼",
    visaStatus: "e_vize",
    allowedDays: 90,
    allowedDaysNote: "3 months",
    eVisaFee: 500,
    dailyCost: {
      local: 30,
      gezgin: 70
    },
    dailyAccommodation: {
      local: 25,
      gezgin: 85
    },
    tags: [
      "sehir_kultur",
      "yemek_gastronomi"
    ],
    clusterId: "korfez",
    popularCities: [
      "Kuveyt",
      "Al Jahra"
    ],
    description: "Zengin Körfez ülkesi. Modern mimari, Arap gelenekleri ve çöl safarileriyle kısa ziyaretler için ideal.",
    interestingFact: "Kuveyt, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "OM",
    name: "Umman",
    nameEn: "Oman",
    capital: "Maskat",
    continent: "Asya",
    currency: "OMR (Umman Riyali)",
    flag: "🇴🇲",
    visaStatus: "vizesiz",
    allowedDays: 30,
    allowedDaysNote: "30 days",
    eVisaFee: 600,
    dailyCost: {
      local: 25,
      gezgin: 55
    },
    dailyAccommodation: {
      local: 20,
      gezgin: 65
    },
    tags: [
      "doga_dag",
      "macera_spor",
      "sehir_kultur",
      "deniz_plaj"
    ],
    clusterId: "korfez",
    popularCities: [
      "Maskat",
      "Salalah",
      "Nizwa",
      "Sur"
    ],
    description: "Arap Yarımadası'nın en doğal güzelliklere sahip ülkesi. Çöller, vadiler, fjordlar ve otantik Arap kültürüyle büyüleyici.",
    interestingFact: "Umman, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "MG",
    name: "Madagaskar",
    nameEn: "Madagascar",
    capital: "Antananarivo",
    continent: "Afrika",
    currency: "MGA (Madagaskar Ariarisi)",
    flag: "🇲🇬",
    visaStatus: "e_vize",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 1000,
    dailyCost: {
      local: 14,
      gezgin: 30
    },
    dailyAccommodation: {
      local: 8,
      gezgin: 35
    },
    tags: [
      "doga_dag",
      "macera_spor",
      "deniz_plaj",
      "sakin_dinlenme"
    ],
    clusterId: null,
    popularCities: [
      "Antananarivo",
      "Nosy Be",
      "Andasibe"
    ],
    description: "Dünyanın en benzersiz biyoçeşitliliğine sahip ada ülkesi. Lemurlar, baobab ağaçları ve tropikal plajlarıyla eşsiz.",
    interestingFact: "Madagaskar, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "RW",
    name: "Ruanda",
    nameEn: "Rwanda",
    capital: "Kigali",
    continent: "Afrika",
    currency: "RWF (Ruanda Frangı)",
    flag: "🇷🇼",
    visaStatus: "e_vize",
    allowedDays: 30,
    allowedDaysNote: "30 days",
    eVisaFee: 900,
    dailyCost: {
      local: 16,
      gezgin: 35
    },
    dailyAccommodation: {
      local: 10,
      gezgin: 40
    },
    tags: [
      "doga_dag",
      "macera_spor",
      "sehir_kultur"
    ],
    clusterId: "dogu_afrika",
    popularCities: [
      "Kigali",
      "Volkanlar Milli Parkı"
    ],
    description: "Afrika'nın en temiz ve en güvenli ülkelerinden biri. Dağ gorilleri, yeşil tepeler ve mucizevi dönüşüm hikayesiyle ilham verici.",
    interestingFact: "Ruanda, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "SC",
    name: "Seyşeller",
    nameEn: "Seychelles",
    capital: "Victoria",
    continent: "Afrika",
    currency: "SCR (Seyşel Rupisi)",
    flag: "🇸🇨",
    visaStatus: "e_vize",
    allowedDays: 90,
    allowedDaysNote: "3 months",
    eVisaFee: 0,
    dailyCost: {
      local: 30,
      gezgin: 65
    },
    dailyAccommodation: {
      local: 22,
      gezgin: 80
    },
    tags: [
      "deniz_plaj",
      "sakin_dinlenme",
      "doga_dag"
    ],
    clusterId: null,
    popularCities: [
      "Victoria",
      "Mahé",
      "Praslin",
      "La Digue"
    ],
    description: "Hint Okyanusu'ndaki tropikal cennet. Dev kaplumbağalar, benzersiz granit kayalıklı plajlar ve kristal berrak sularıyla balayı favorisi.",
    interestingFact: "Seyşeller, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "MU",
    name: "Mauritius",
    nameEn: "Mauritius",
    capital: "Port Louis",
    continent: "Afrika",
    currency: "MUR (Mauritius Rupisi)",
    flag: "🇲🇺",
    visaStatus: "vizesiz",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 0,
    dailyCost: {
      local: 25,
      gezgin: 55
    },
    dailyAccommodation: {
      local: 18,
      gezgin: 65
    },
    tags: [
      "deniz_plaj",
      "sakin_dinlenme",
      "macera_spor",
      "yemek_gastronomi"
    ],
    clusterId: null,
    popularCities: [
      "Port Louis",
      "Grand Baie",
      "Flic en Flac"
    ],
    description: "Hint Okyanusu'ndaki lüks tatil adası. Mercan resifleri, tropikal ormanlar ve çok kültürlü mutfağıyla rüya gibi.",
    interestingFact: "Mauritius, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "KM",
    name: "Komorlar",
    nameEn: "Comoros",
    capital: "Moroni",
    continent: "Afrika",
    currency: "KMF (Komor Frangı)",
    flag: "🇰🇲",
    visaStatus: "kapida_vize",
    allowedDays: 45,
    allowedDaysNote: "45 days",
    eVisaFee: 800,
    dailyCost: {
      local: 15,
      gezgin: 32
    },
    dailyAccommodation: {
      local: 10,
      gezgin: 38
    },
    tags: [
      "deniz_plaj",
      "doga_dag",
      "sakin_dinlenme"
    ],
    clusterId: null,
    popularCities: [
      "Moroni",
      "Mutsamudu"
    ],
    description: "Afrika'nın en az ziyaret edilen ülkelerinden biri. Volkanik adalar, baharat plantasyonları ve bozulmamış doğasıyla keşif rotası.",
    interestingFact: "Komorlar, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "CV",
    name: "Yeşil Burun Adaları",
    nameEn: "Cape Verde",
    capital: "Praia",
    continent: "Afrika",
    currency: "CVE (Yeşil Burun Eskudosu)",
    flag: "🇨🇻",
    visaStatus: "vize_gerekli",
    allowedDays: 30,
    allowedDaysNote: "Kapıda vize ile 30 gün",
    eVisaFee: 1000,
    dailyCost: {
      local: 20,
      gezgin: 42
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 50
    },
    tags: [
      "deniz_plaj",
      "macera_spor",
      "sakin_dinlenme"
    ],
    clusterId: null,
    popularCities: [
      "Praia",
      "Mindelo",
      "Sal",
      "Boa Vista"
    ],
    description: "Atlantik Okyanusu'ndaki volkanik takımadalar. Sörf plajları, Kreol kültürü ve morna müziğiyle Afrika'nın Karayipleri.",
    interestingFact: "Yeşil Burun Adaları, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "MZ",
    name: "Mozambik",
    nameEn: "Mozambique",
    capital: "Maputo",
    continent: "Afrika",
    currency: "MZN (Mozambik Metikali)",
    flag: "🇲🇿",
    visaStatus: "e_vize",
    allowedDays: 30,
    allowedDaysNote: "30 days",
    eVisaFee: 1500,
    dailyCost: {
      local: 16,
      gezgin: 35
    },
    dailyAccommodation: {
      local: 10,
      gezgin: 40
    },
    tags: [
      "deniz_plaj",
      "macera_spor",
      "doga_dag"
    ],
    clusterId: null,
    popularCities: [
      "Maputo",
      "Tofo",
      "Bazaruto Adaları"
    ],
    description: "Hint Okyanusu kıyısında bozulmamış plajlar, dalış noktaları ve Afrika'nın en az keşfedilmiş sahil şeritlerinden birine sahip ülke.",
    interestingFact: "Mozambik, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "TZ",
    name: "Tanzanya",
    nameEn: "Tanzania",
    capital: "Dodoma",
    continent: "Afrika",
    currency: "TZS (Tanzanya Şilini)",
    flag: "🇹🇿",
    visaStatus: "e_vize",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 1500,
    dailyCost: {
      local: 18,
      gezgin: 55
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 60
    },
    tags: [
      "doga_dag",
      "macera_spor",
      "deniz_plaj"
    ],
    clusterId: "dogu_afrika",
    popularCities: [
      "Dar es Salaam",
      "Zanzibar",
      "Serengeti",
      "Kilimanjaro"
    ],
    description: "Kilimanjaro Dağı, Serengeti safari deneyimi ve Zanzibar'ın baharat adası ile Afrika'nın en ikonik destinasyonu.",
    interestingFact: "Tanzanya'daki Kilimanjaro Dağı, dünyanın en yüksek serbest duran (bir sıradağ parçası olmayan) dağıdır."
  },
  {
    id: "UG",
    name: "Uganda",
    nameEn: "Uganda",
    capital: "Kampala",
    continent: "Afrika",
    currency: "UGX (Uganda Şilini)",
    flag: "🇺🇬",
    visaStatus: "e_vize",
    allowedDays: 90,
    allowedDaysNote: "3 months",
    eVisaFee: 1500,
    dailyCost: {
      local: 15,
      gezgin: 32
    },
    dailyAccommodation: {
      local: 10,
      gezgin: 38
    },
    tags: [
      "doga_dag",
      "macera_spor",
      "sakin_dinlenme"
    ],
    clusterId: "dogu_afrika",
    popularCities: [
      "Kampala",
      "Bwindi",
      "Jinja",
      "Entebbe"
    ],
    description: "Afrika'nın incisi. Dağ gorilleri, Nil Nehri'nin kaynağı, Victoria Gölü ve vahşi yaşam deneyimiyle doğa cenneti.",
    interestingFact: "Uganda, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "AM",
    name: "Ermenistan",
    nameEn: "Armenia",
    capital: "Erivan",
    continent: "Asya",
    currency: "AMD (Ermeni Dramı)",
    flag: "🇦🇲",
    visaStatus: "e_vize",
    allowedDays: 120,
    allowedDaysNote: "120 days",
    eVisaFee: 0,
    dailyCost: {
      local: 15,
      gezgin: 34
    },
    dailyAccommodation: {
      local: 10,
      gezgin: 38
    },
    tags: [
      "sehir_kultur",
      "yemek_gastronomi",
      "doga_dag",
      "sakin_dinlenme"
    ],
    clusterId: "kafkas",
    popularCities: [
      "Erivan",
      "Dilijan",
      "Sevan Gölü",
      "Tatev"
    ],
    description: "Kafkaslar'ın en eski Hristiyan ülkesi. Ararat Dağı manzarası, antik manastırlar ve zengin mutfağıyla etkileyici.",
    interestingFact: "Ermenistan, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "TL",
    name: "Doğu Timor",
    nameEn: "Timor-Leste",
    capital: "Dili",
    continent: "Asya",
    currency: "USD (Amerikan Doları)",
    flag: "🇹🇱",
    visaStatus: "kapida_vize",
    allowedDays: 30,
    allowedDaysNote: "30 days",
    eVisaFee: 900,
    dailyCost: {
      local: 16,
      gezgin: 35
    },
    dailyAccommodation: {
      local: 10,
      gezgin: 40
    },
    tags: [
      "deniz_plaj",
      "macera_spor",
      "doga_dag"
    ],
    clusterId: null,
    popularCities: [
      "Dili",
      "Atauro Adası"
    ],
    description: "Güneydoğu Asya'nın en genç ülkesi. Bozulmamış dalış noktaları ve doğal güzellikleriyle keşif rotası.",
    interestingFact: "Doğu Timor, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "WS",
    name: "Samoa",
    nameEn: "Samoa",
    capital: "Apia",
    continent: "Okyanusya",
    currency: "WST (Samoa Talası)",
    flag: "🇼🇸",
    visaStatus: "vize_gerekli",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 0,
    dailyCost: {
      local: 25,
      gezgin: 50
    },
    dailyAccommodation: {
      local: 18,
      gezgin: 55
    },
    tags: [
      "deniz_plaj",
      "sakin_dinlenme",
      "doga_dag"
    ],
    clusterId: null,
    popularCities: [
      "Apia",
      "Savai'i"
    ],
    description: "Güney Pasifik'in bozulmamış doğal güzelliğine sahip Polinezya adaları. Tropik plajlar ve geleneksel fa'a Samoa kültürü.",
    interestingFact: "Samoa, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "TV",
    name: "Tuvalu",
    nameEn: "Tuvalu",
    capital: "Funafuti",
    continent: "Okyanusya",
    currency: "AUD (Avustralya Doları)",
    flag: "🇹🇻",
    visaStatus: "kapida_vize",
    allowedDays: 30,
    allowedDaysNote: "Varışta ücretsiz vize ile 30 gün",
    eVisaFee: 0,
    dailyCost: {
      local: 25,
      gezgin: 50
    },
    dailyAccommodation: {
      local: 18,
      gezgin: 55
    },
    tags: [
      "deniz_plaj",
      "sakin_dinlenme"
    ],
    clusterId: null,
    popularCities: [
      "Funafuti"
    ],
    description: "Dünyanın en küçük ve en az ziyaret edilen ülkelerinden biri. Pasifik mercan atollerinin huzurlu dünyası.",
    interestingFact: "Tuvalu, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "PW",
    name: "Palau",
    nameEn: "Palau",
    capital: "Ngerulmud",
    continent: "Okyanusya",
    currency: "USD (Amerikan Doları)",
    flag: "🇵🇼",
    visaStatus: "kapida_vize",
    allowedDays: 30,
    allowedDaysNote: "30 days",
    eVisaFee: 0,
    dailyCost: {
      local: 25,
      gezgin: 50
    },
    dailyAccommodation: {
      local: 18,
      gezgin: 55
    },
    tags: [
      "deniz_plaj",
      "macera_spor",
      "doga_dag"
    ],
    clusterId: null,
    popularCities: [
      "Koror",
      "Rock Islands"
    ],
    description: "Dünyanın en iyi dalış destinasyonlarından biri. Jellyfish Lake, Rock Islands ve zengin sualtı yaşamıyla büyüleyici.",
    interestingFact: "Palau, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "FM",
    name: "Mikronezya",
    nameEn: "Micronesia",
    capital: "Palikir",
    continent: "Okyanusya",
    currency: "USD (Amerikan Doları)",
    flag: "🇫🇲",
    visaStatus: "vizesiz",
    allowedDays: 30,
    allowedDaysNote: "30 days",
    eVisaFee: 0,
    dailyCost: {
      local: 25,
      gezgin: 50
    },
    dailyAccommodation: {
      local: 18,
      gezgin: 55
    },
    tags: [
      "deniz_plaj",
      "macera_spor",
      "sakin_dinlenme"
    ],
    clusterId: null,
    popularCities: [
      "Palikir",
      "Chuuk",
      "Pohnpei"
    ],
    description: "Pasifik'in gizli cenneti. İkinci Dünya Savaşı batıkları, mercan atoller ve Nan Madol antik kentiyle büyüleyici.",
    interestingFact: "Mikronezya, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "MH",
    name: "Marshall Adaları",
    nameEn: "Marshall Islands",
    capital: "Majuro",
    continent: "Okyanusya",
    currency: "USD (Amerikan Doları)",
    flag: "🇲🇭",
    visaStatus: "kapida_vize",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 0,
    dailyCost: {
      local: 25,
      gezgin: 50
    },
    dailyAccommodation: {
      local: 18,
      gezgin: 55
    },
    tags: [
      "deniz_plaj",
      "sakin_dinlenme"
    ],
    clusterId: null,
    popularCities: [
      "Majuro",
      "Kwajalein"
    ],
    description: "Pasifik Okyanusu'ndaki mercan atollerden oluşan ülke. Dalış, balıkçılık ve bozulmamış doğasıyla keşif rotası.",
    interestingFact: "Marshall Adaları, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "LK",
    name: "Sri Lanka",
    nameEn: "Sri Lanka",
    capital: "Kolombo",
    continent: "Asya",
    currency: "LKR (Sri Lanka Rupisi)",
    flag: "🇱🇰",
    visaStatus: "kapida_vize",
    allowedDays: 30,
    allowedDaysNote: "30 days",
    eVisaFee: 1100,
    dailyCost: {
      local: 16,
      gezgin: 35
    },
    dailyAccommodation: {
      local: 10,
      gezgin: 40
    },
    tags: [
      "deniz_plaj",
      "sehir_kultur",
      "doga_dag",
      "yemek_gastronomi",
      "sakin_dinlenme"
    ],
    clusterId: null,
    popularCities: [
      "Kolombo",
      "Kandy",
      "Galle",
      "Ella",
      "Sigiriya"
    ],
    description: "Hindistan'ın gözyaşı. Çay plantasyonları, antik tapınaklar, vahşi yaşam ve altın plajlarıyla kompakt bir cennet.",
    interestingFact: "Sri Lanka, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "IN",
    name: "Hindistan",
    nameEn: "India",
    capital: "Yeni Delhi",
    continent: "Asya",
    currency: "INR (Hint Rupisi)",
    flag: "🇮🇳",
    visaStatus: "vize_gerekli",
    allowedDays: 30,
    allowedDaysNote: "e-Vize ile 30 gün (çift giriş)",
    eVisaFee: 850,
    dailyCost: {
      local: 12,
      gezgin: 30
    },
    dailyAccommodation: {
      local: 8,
      gezgin: 35
    },
    tags: [
      "sehir_kultur",
      "yemek_gastronomi",
      "doga_dag",
      "macera_spor",
      "sakin_dinlenme"
    ],
    clusterId: null,
    popularCities: [
      "Delhi",
      "Mumbai",
      "Agra",
      "Jaipur",
      "Varanasi",
      "Goa"
    ],
    description: "Tac Mahal, kaotik şehirler, renkli festivaller, baharatlı mutfak ve derin spiritüel geleneklerle dolu devasa alt kıta.",
    interestingFact: "Hindistan'da 2 milyondan fazla Hindu tapınağı bulunur ve her birinin kendine özgü bir hikayesi vardır."
  },
  {
    id: "AU",
    name: "Avustralya",
    nameEn: "Australia",
    capital: "Canberra",
    continent: "Okyanusya",
    currency: "AUD (Avustralya Doları)",
    flag: "🇦🇺",
    visaStatus: "vize_gerekli",
    allowedDays: 90,
    allowedDaysNote: "ETA (e-Vize) ile 90 gün",
    eVisaFee: 700,
    dailyCost: {
      local: 45,
      gezgin: 95
    },
    dailyAccommodation: {
      local: 35,
      gezgin: 110
    },
    tags: [
      "doga_dag",
      "macera_spor",
      "deniz_plaj",
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Sydney",
      "Melbourne",
      "Brisbane",
      "Perth",
      "Gold Coast"
    ],
    description: "Büyük Set Resifi, Ayers Rock, kangurular ve koalalarıyla dolu koca kıta. Sörf, doğa ve şehir yaşamı bir arada.",
    interestingFact: "Avustralya o kadar büyüktür ki, genişliği Ay'ın çapından daha fazladır."
  },
  {
    id: "MX",
    name: "Meksika",
    nameEn: "Mexico",
    capital: "Mexico City",
    continent: "Kuzey Amerika",
    currency: "MXN (Meksika Pesosu)",
    flag: "🇲🇽",
    visaStatus: "e_vize",
    allowedDays: 180,
    allowedDaysNote: "180 days",
    eVisaFee: 0,
    dailyCost: {
      local: 21,
      gezgin: 45
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 55
    },
    tags: [
      "sehir_kultur",
      "deniz_plaj",
      "yemek_gastronomi",
      "macera_spor",
      "gece_hayati"
    ],
    clusterId: null,
    popularCities: [
      "Mexico City",
      "Cancún",
      "Playa del Carmen",
      "Oaxaca",
      "Tulum"
    ],
    description: "Maya piramitleri, tacos ve tequila, Karayip sahilleri ve renkli Día de los Muertos festivaliyle dolu büyüleyici ülke.",
    interestingFact: "Meksika'da bulunan Chicxulub krateri, 66 milyon yıl önce dinozorların yok olmasına neden olan göktaşının çarptığı yerdir."
  },
  {
    id: "KE",
    name: "Kenya",
    nameEn: "Kenya",
    capital: "Nairobi",
    continent: "Afrika",
    currency: "KES (Kenya Şilini)",
    flag: "🇰🇪",
    visaStatus: "e_vize",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 1500,
    dailyCost: {
      local: 20,
      gezgin: 60
    },
    dailyAccommodation: {
      local: 15,
      gezgin: 65
    },
    tags: [
      "doga_dag",
      "macera_spor",
      "deniz_plaj"
    ],
    clusterId: "dogu_afrika",
    popularCities: [
      "Nairobi",
      "Masai Mara",
      "Mombasa",
      "Nakuru"
    ],
    description: "Safari deneyiminin başkenti. Büyük Göç, Masai kültürü, Hint Okyanusu kıyıları ve çay plantasyonlarıyla Afrika'nın kalbi.",
    interestingFact: "Kenya'da tek bir mevsimde (Temmuz-Eylül) 1.5 milyondan fazla antilobun Büyük Göç'üne şahit olabilirsiniz."
  },
  {
    id: "ET",
    name: "Etiyopya",
    nameEn: "Ethiopia",
    capital: "Addis Ababa",
    continent: "Afrika",
    currency: "ETB (Etiyopya Birri)",
    flag: "🇪🇹",
    visaStatus: "e_vize",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 1600,
    dailyCost: {
      local: 14,
      gezgin: 32
    },
    dailyAccommodation: {
      local: 10,
      gezgin: 35
    },
    tags: [
      "sehir_kultur",
      "doga_dag",
      "macera_spor"
    ],
    clusterId: "dogu_afrika",
    popularCities: [
      "Addis Ababa",
      "Lalibela",
      "Gondar",
      "Axum"
    ],
    description: "Afrika'nın hiç sömürgeleştirilmemiş ülkesi. Lalibela kaya kiliseleri, kahvenin anavatanı ve kendine özgü takvim sistemiyle benzersiz.",
    interestingFact: "Etiyopya, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "MM",
    name: "Myanmar",
    nameEn: "Myanmar",
    capital: "Naypyidaw",
    continent: "Asya",
    currency: "MMK (Myanmar Kyatı)",
    flag: "🇲🇲",
    visaStatus: "e_vize",
    allowedDays: 28,
    allowedDaysNote: "28 days",
    eVisaFee: 1500,
    dailyCost: {
      local: 14,
      gezgin: 32
    },
    dailyAccommodation: {
      local: 10,
      gezgin: 35
    },
    tags: [
      "sehir_kultur",
      "doga_dag",
      "sakin_dinlenme"
    ],
    clusterId: "guneydogu_asya",
    popularCities: [
      "Yangon",
      "Bagan",
      "Mandalay",
      "Inle Gölü"
    ],
    description: "Bagan'ın binlerce tapınağı, altın pagodalar, Inle Gölü ve bozulmamış gelenekleriyle Güneydoğu Asya'nın mistik ülkesi.",
    interestingFact: "Myanmar, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "PK",
    name: "Pakistan",
    nameEn: "Pakistan",
    capital: "İslamabad",
    continent: "Asya",
    currency: "PKR (Pakistan Rupisi)",
    flag: "🇵🇰",
    visaStatus: "e_vize",
    allowedDays: 90,
    allowedDaysNote: "3 months",
    eVisaFee: 500,
    dailyCost: {
      local: 12,
      gezgin: 28
    },
    dailyAccommodation: {
      local: 8,
      gezgin: 30
    },
    tags: [
      "doga_dag",
      "macera_spor",
      "sehir_kultur",
      "yemek_gastronomi"
    ],
    clusterId: null,
    popularCities: [
      "İslamabad",
      "Lahor",
      "Hunza",
      "Karaçi"
    ],
    description: "Karakurum Dağları, Hunza Vadisi, Lahor'un Mughal mirası ve enfes mutfağıyla keşfedilmeyi bekleyen büyük bir ülke.",
    interestingFact: "Pakistan, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "VN",
    name: "Vietnam",
    nameEn: "Vietnam",
    capital: "Hanoi",
    continent: "Asya",
    currency: "VND (Vietnam Dongu)",
    flag: "🇻🇳",
    visaStatus: "e_vize",
    allowedDays: 30,
    allowedDaysNote: "e-Vize ile 30 gün (tek giriş)",
    eVisaFee: 850,
    dailyCost: {
      local: 14,
      gezgin: 30
    },
    dailyAccommodation: {
      local: 8,
      gezgin: 35
    },
    tags: [
      "yemek_gastronomi",
      "sehir_kultur",
      "deniz_plaj",
      "macera_spor",
      "doga_dag"
    ],
    clusterId: "guneydogu_asya",
    popularCities: [
      "Hanoi",
      "Ho Chi Minh",
      "Hoi An",
      "Ha Long",
      "Da Nang"
    ],
    description: "Pho çorbası, Ha Long Körfezi, renkli fenerler ve motosiklet dolu sokakları ile Güneydoğu Asya'nın en lezzetli ülkesi.",
    interestingFact: "Vietnam'da yaklaşık 45 milyon motosiklet bulunur ve trafik kuralları büyük ölçüde \"akışa ayak uydurmak\" üzerinedir."
  },
  {
    id: "BH",
    name: "Bahreyn",
    nameEn: "Bahrain",
    capital: "Manama",
    continent: "Asya",
    currency: "BHD (Bahreyn Dinarı)",
    flag: "🇧🇭",
    visaStatus: "e_vize",
    allowedDays: 14,
    allowedDaysNote: "14 days",
    eVisaFee: 400,
    dailyCost: {
      local: 25,
      gezgin: 55
    },
    dailyAccommodation: {
      local: 20,
      gezgin: 65
    },
    tags: [
      "sehir_kultur",
      "yemek_gastronomi",
      "gece_hayati"
    ],
    clusterId: "korfez",
    popularCities: [
      "Manama",
      "Muharraq"
    ],
    description: "Körfez'in en liberal ülkesi. Modern alışveriş merkezleri, Formula 1 yarışları ve zengin ticaret tarihiyle kısa tatiller için ideal.",
    interestingFact: "Bahreyn, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "EG",
    name: "Mısır",
    nameEn: "Egypt",
    capital: "Kahire",
    continent: "Afrika",
    currency: "EGP (Mısır Lirası)",
    flag: "🇪🇬",
    visaStatus: "kapida_vize",
    allowedDays: 30,
    allowedDaysNote: "e-Vize ile 30 gün (tek veya çoklu giriş)",
    eVisaFee: 850,
    dailyCost: {
      local: 16,
      gezgin: 35
    },
    dailyAccommodation: {
      local: 9,
      gezgin: 40
    },
    tags: [
      "sehir_kultur",
      "macera_spor",
      "deniz_plaj",
      "doga_dag"
    ],
    clusterId: "kuzey_afrika",
    popularCities: [
      "Kahire",
      "Luksor",
      "Aswan",
      "Şarm el-Şeyh",
      "Hurghada"
    ],
    description: "Piramitler, Sfenks, Nil Nehri, Vadilerin Kralları ve Kızıldeniz dalışlarıyla insanlık tarihinin beşiği.",
    interestingFact: "Mısır'daki Büyük Gize Piramidi, günümüzde hala ayakta kalan tek Antik Dünyanın Yedi Harikası'dır."
  },
  {
    id: "TJ",
    name: "Tacikistan",
    nameEn: "Tajikistan",
    capital: "Duşanbe",
    continent: "Asya",
    currency: "TJS (Tacik Somonisi)",
    flag: "🇹🇯",
    visaStatus: "vize_gerekli",
    allowedDays: 45,
    allowedDaysNote: "e-Vize ile 45 gün",
    eVisaFee: 500,
    dailyCost: {
      local: 12,
      gezgin: 28
    },
    dailyAccommodation: {
      local: 8,
      gezgin: 30
    },
    tags: [
      "doga_dag",
      "macera_spor",
      "sakin_dinlenme"
    ],
    clusterId: null,
    popularCities: [
      "Duşanbe",
      "Khorog",
      "Pamir"
    ],
    description: "Pamir Dağları ve Pamir Otoyolu ile dünyanın en zorlu ve en güzel yol gezisi rotalarından birine sahip ülke.",
    interestingFact: "Tacikistan, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "US",
    name: "Amerika Birleşik Devletleri",
    nameEn: "United States",
    capital: "Washington D.C.",
    continent: "Kuzey Amerika",
    currency: "USD (Amerikan Doları)",
    flag: "🇺🇸",
    visaStatus: "vize_gerekli",
    allowedDays: 180,
    allowedDaysNote: "B1/B2 vizesi ile 180 güne kadar",
    eVisaFee: 0,
    dailyCost: {
      local: 45,
      gezgin: 100
    },
    dailyAccommodation: {
      local: 40,
      gezgin: 120
    },
    tags: [
      "sehir_kultur",
      "macera_spor",
      "doga_dag",
      "gece_hayati",
      "yemek_gastronomi"
    ],
    clusterId: null,
    popularCities: [
      "New York",
      "Los Angeles",
      "Las Vegas",
      "San Francisco",
      "Miami"
    ],
    description: "50 eyaletten oluşan dev ülke. New York gökdelenleri, Grand Canyon, Hollywood ve çeşitli kültürel deneyimleriyle sınırsız.",
    interestingFact: "ABD'nin Alaska eyaleti, ülkenin hem en batı hem en kuzey hem de (Aleut Adaları nedeniyle) en doğu noktasıdır."
  },
  {
    id: "GB",
    name: "Birleşik Krallık",
    nameEn: "United Kingdom",
    capital: "Londra",
    continent: "Avrupa",
    currency: "GBP (İngiliz Sterlini)",
    flag: "🇬🇧",
    visaStatus: "vize_gerekli",
    allowedDays: 180,
    allowedDaysNote: "Standard Visitor vizesi ile 6 ay",
    eVisaFee: 0,
    dailyCost: {
      local: 42,
      gezgin: 95
    },
    dailyAccommodation: {
      local: 38,
      gezgin: 120
    },
    tags: [
      "sehir_kultur",
      "yemek_gastronomi",
      "gece_hayati",
      "doga_dag"
    ],
    clusterId: null,
    popularCities: [
      "Londra",
      "Edinburgh",
      "Manchester",
      "Oxford",
      "Bath"
    ],
    description: "Big Ben, Buckingham Sarayı, İskoç yaylaları ve pub kültürüyle dolu tarihi ada ülkesi.",
    interestingFact: "İngiltere Kraliçesi'nin pasaportu yoktur, çünkü tüm İngiliz pasaportları zaten Kraliçe (veya Kral) adına düzenlenir."
  },
  {
    id: "CA",
    name: "Kanada",
    nameEn: "Canada",
    capital: "Ottawa",
    continent: "Kuzey Amerika",
    currency: "CAD (Kanada Doları)",
    flag: "🇨🇦",
    visaStatus: "vize_gerekli",
    allowedDays: 180,
    allowedDaysNote: "Turist vizesi ile 6 aya kadar",
    eVisaFee: 0,
    dailyCost: {
      local: 40,
      gezgin: 85
    },
    dailyAccommodation: {
      local: 35,
      gezgin: 105
    },
    tags: [
      "doga_dag",
      "sehir_kultur",
      "macera_spor",
      "sakin_dinlenme"
    ],
    clusterId: null,
    popularCities: [
      "Toronto",
      "Vancouver",
      "Montreal",
      "Banff",
      "Quebec City"
    ],
    description: "Niagara Şelalesi, Rocky Dağları, çok kültürlü şehirler ve uçsuz bucaksız doğasıyla kuzey cenneti.",
    interestingFact: "Kanada, dünyadaki tüm göllerin yarısından fazlasına ev sahipliği yapar; yaklaşık 3 milyondan fazla göl bulunur."
  },
  {
    id: "DE",
    name: "Almanya",
    nameEn: "Germany",
    capital: "Berlin",
    continent: "Avrupa",
    currency: "EUR (Euro)",
    flag: "🇩🇪",
    visaStatus: "vize_gerekli",
    allowedDays: 90,
    allowedDaysNote: "Schengen vizesi ile 180 gün içinde 90 gün",
    eVisaFee: 0,
    dailyCost: {
      local: 38,
      gezgin: 80
    },
    dailyAccommodation: {
      local: 32,
      gezgin: 95
    },
    tags: [
      "sehir_kultur",
      "yemek_gastronomi",
      "gece_hayati",
      "doga_dag"
    ],
    clusterId: null,
    popularCities: [
      "Berlin",
      "Münih",
      "Hamburg",
      "Frankfurt",
      "Köln"
    ],
    description: "Oktoberfest, ortaçağ kaleleri, otomotiv endüstrisi ve zengin kültürel mirası ile Avrupa'nın kalbi.",
    interestingFact: "Almanya'da otobanlarda (Autobahn) yakıtınızın bitmesi yasa dışıdır ve ceza almanıza neden olur."
  },
  {
    id: "FR",
    name: "Fransa",
    nameEn: "France",
    capital: "Paris",
    continent: "Avrupa",
    currency: "EUR (Euro)",
    flag: "🇫🇷",
    visaStatus: "vize_gerekli",
    allowedDays: 90,
    allowedDaysNote: "Schengen vizesi ile 180 gün içinde 90 gün",
    eVisaFee: 0,
    dailyCost: {
      local: 40,
      gezgin: 90
    },
    dailyAccommodation: {
      local: 35,
      gezgin: 110
    },
    tags: [
      "sehir_kultur",
      "yemek_gastronomi",
      "doga_dag",
      "sakin_dinlenme"
    ],
    clusterId: null,
    popularCities: [
      "Paris",
      "Nice",
      "Lyon",
      "Marsilya",
      "Bordeaux"
    ],
    description: "Eyfel Kulesi, Louvre Müzesi, şarap bölgeleri ve haute cuisine ile dünyanın en çok ziyaret edilen ülkesi.",
    interestingFact: "Fransa'da yasal olarak bir domuzu \"Napolyon\" olarak adlandırmak, eski bir yasa yüzünden uzun süre yasaklanmıştı."
  },
  {
    id: "IT",
    name: "İtalya",
    nameEn: "Italy",
    capital: "Roma",
    continent: "Avrupa",
    currency: "EUR (Euro)",
    flag: "🇮🇹",
    visaStatus: "vize_gerekli",
    allowedDays: 90,
    allowedDaysNote: "Schengen vizesi ile 180 gün içinde 90 gün",
    eVisaFee: 0,
    dailyCost: {
      local: 38,
      gezgin: 85
    },
    dailyAccommodation: {
      local: 32,
      gezgin: 105
    },
    tags: [
      "sehir_kultur",
      "yemek_gastronomi",
      "deniz_plaj",
      "doga_dag"
    ],
    clusterId: null,
    popularCities: [
      "Roma",
      "Venedik",
      "Floransa",
      "Milano",
      "Napoli",
      "Amalfi"
    ],
    description: "Kolezyum, pizza, pasta, Rönesans sanatı ve Amalfi kıyıları ile dünyanın en romantik ve lezzetli ülkesi.",
    interestingFact: "İtalya'da sabah 11:00'den sonra Cappuccino sipariş etmek turist olduğunuzu ele veren en büyük işarettir."
  },
  {
    id: "ES",
    name: "İspanya",
    nameEn: "Spain",
    capital: "Madrid",
    continent: "Avrupa",
    currency: "EUR (Euro)",
    flag: "🇪🇸",
    visaStatus: "vize_gerekli",
    allowedDays: 90,
    allowedDaysNote: "Schengen vizesi ile 180 gün içinde 90 gün",
    eVisaFee: 0,
    dailyCost: {
      local: 32,
      gezgin: 70
    },
    dailyAccommodation: {
      local: 28,
      gezgin: 85
    },
    tags: [
      "sehir_kultur",
      "deniz_plaj",
      "yemek_gastronomi",
      "gece_hayati"
    ],
    clusterId: null,
    popularCities: [
      "Barcelona",
      "Madrid",
      "Sevilla",
      "Granada",
      "İbiza"
    ],
    description: "Sagrada Familia, flamenco, tapas, siesta kültürü ve Akdeniz plajlarıyla Avrupa'nın en tutkulu ülkesi.",
    interestingFact: "İspanya milli marşı \"La Marcha Real\", dünyada resmi sözleri olmayan dört milli marştan biridir."
  },
  {
    id: "NL",
    name: "Hollanda",
    nameEn: "Netherlands",
    capital: "Amsterdam",
    continent: "Avrupa",
    currency: "EUR (Euro)",
    flag: "🇳🇱",
    visaStatus: "vize_gerekli",
    allowedDays: 90,
    allowedDaysNote: "Schengen vizesi ile 180 gün içinde 90 gün",
    eVisaFee: 0,
    dailyCost: {
      local: 40,
      gezgin: 90
    },
    dailyAccommodation: {
      local: 40,
      gezgin: 125
    },
    tags: [
      "sehir_kultur",
      "gece_hayati",
      "yemek_gastronomi"
    ],
    clusterId: null,
    popularCities: [
      "Amsterdam",
      "Rotterdam",
      "Utrecht",
      "Lahey"
    ],
    description: "Kanallar, bisikletler, laleler, Van Gogh müzesi ve liberal yaşam tarzıyla Avrupa'nın en özgür şehirlerinden birine ev sahipliği yapıyor.",
    interestingFact: "Hollanda'da bisiklet sayısı insan sayısından daha fazladır; 17 milyon insana karşılık yaklaşık 23 milyon bisiklet vardır."
  },
  {
    id: "RU",
    name: "Rusya",
    nameEn: "Russia",
    capital: "Moskova",
    continent: "Avrupa",
    currency: "RUB (Rus Rublesi)",
    flag: "🇷🇺",
    visaStatus: "e_vize",
    allowedDays: 30,
    allowedDaysNote: "30 days",
    eVisaFee: 0,
    dailyCost: {
      local: 22,
      gezgin: 50
    },
    dailyAccommodation: {
      local: 18,
      gezgin: 60
    },
    tags: [
      "sehir_kultur",
      "doga_dag",
      "yemek_gastronomi"
    ],
    clusterId: null,
    popularCities: [
      "Moskova",
      "St. Petersburg",
      "Kazan",
      "Soçi"
    ],
    description: "Kremlin, Hermitage Müzesi, Trans-Sibirya treni ve uçsuz bucaksız topraklarıyla dünyanın en büyük ülkesi.",
    interestingFact: "Rusya, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "CN",
    name: "Çin",
    nameEn: "China",
    capital: "Pekin",
    continent: "Asya",
    currency: "CNY (Çin Yuanı)",
    flag: "🇨🇳",
    visaStatus: "vize_gerekli",
    allowedDays: 30,
    allowedDaysNote: "Turist vizesi ile 30 gün",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 45
    },
    dailyAccommodation: {
      local: 15,
      gezgin: 55
    },
    tags: [
      "sehir_kultur",
      "yemek_gastronomi",
      "doga_dag",
      "macera_spor"
    ],
    clusterId: null,
    popularCities: [
      "Pekin",
      "Şanghay",
      "Xi'an",
      "Guilin",
      "Chengdu"
    ],
    description: "Çin Seddi, Yasak Şehir, panda ayıları, dim sum ve binlerce yıllık medeniyetiyle insanlık tarihinin en derin köklerinden biri.",
    interestingFact: "Çin o kadar büyüktür ki coğrafi olarak 5 farklı zaman dilimini kapsamasına rağmen tüm ülke Pekin saatini (UTC+8) kullanır."
  },
  {
    id: "NZ",
    name: "Yeni Zelanda",
    nameEn: "New Zealand",
    capital: "Wellington",
    continent: "Okyanusya",
    currency: "NZD (Yeni Zelanda Doları)",
    flag: "🇳🇿",
    visaStatus: "vize_gerekli",
    allowedDays: 90,
    allowedDaysNote: "Visitor vizesi ile 9 aya kadar",
    eVisaFee: 0,
    dailyCost: {
      local: 40,
      gezgin: 85
    },
    dailyAccommodation: {
      local: 32,
      gezgin: 100
    },
    tags: [
      "doga_dag",
      "macera_spor",
      "sakin_dinlenme"
    ],
    clusterId: null,
    popularCities: [
      "Auckland",
      "Queenstown",
      "Rotorua",
      "Wellington",
      "Milford Sound"
    ],
    description: "Yüzüklerin Efendisi diyarı. Fjordlar, buzullar, jeotermal kaynaklar ve macera sporlarıyla doğa tutkunlarının cenneti.",
    interestingFact: "Yeni Zelanda'da her bir insana karşılık yaklaşık 5 koyun düşmektedir."
  },
  {
    id: "IE",
    name: "İrlanda",
    nameEn: "Ireland",
    capital: "Dublin",
    continent: "Avrupa",
    currency: "EUR (Euro)",
    flag: "🇮🇪",
    visaStatus: "vize_gerekli",
    allowedDays: 90,
    allowedDaysNote: "Short-stay vizesi ile 90 gün",
    eVisaFee: 0,
    dailyCost: {
      local: 40,
      gezgin: 85
    },
    dailyAccommodation: {
      local: 35,
      gezgin: 110
    },
    tags: [
      "sehir_kultur",
      "doga_dag",
      "yemek_gastronomi",
      "gece_hayati"
    ],
    clusterId: null,
    popularCities: [
      "Dublin",
      "Galway",
      "Cork",
      "Killarney"
    ],
    description: "Yeşil çayırlar, ortaçağ kaleleri, Guinness birası, canlı pub müziği ve sıcak İrlandalı misafirperverliğiyle büyüleyici ada.",
    interestingFact: "İrlanda'da hiç yılan bulunmaz; efsaneye göre Aziz Patrick hepsini denize dökmüştür (aslında buzul çağından beri yokturlar)."
  },
  {
    id: "CH",
    name: "İsviçre",
    nameEn: "Switzerland",
    capital: "Bern",
    continent: "Avrupa",
    currency: "CHF (İsviçre Frangı)",
    flag: "🇨🇭",
    visaStatus: "vize_gerekli",
    allowedDays: 90,
    allowedDaysNote: "Schengen vizesi ile 180 gün içinde 90 gün",
    eVisaFee: 0,
    dailyCost: {
      local: 55,
      gezgin: 120
    },
    dailyAccommodation: {
      local: 50,
      gezgin: 150
    },
    tags: [
      "doga_dag",
      "sehir_kultur",
      "macera_spor",
      "sakin_dinlenme"
    ],
    clusterId: null,
    popularCities: [
      "Zürih",
      "Cenevre",
      "Interlaken",
      "Lucerne",
      "Zermatt"
    ],
    description: "Alp dağları, çikolata, saat endüstrisi ve muhteşem göl manzaralarıyla Avrupa'nın en pahalı ama en güzel ülkelerinden biri.",
    interestingFact: "İsviçre'de akşam saat 10'dan sonra apartmanda sifon çekmek, gürültü kuralları (Ruhestörung) nedeniyle yasaktır."
  },
  {
    id: "NO",
    name: "Norveç",
    nameEn: "Norway",
    capital: "Oslo",
    continent: "Avrupa",
    currency: "NOK (Norveç Kronu)",
    flag: "🇳🇴",
    visaStatus: "vize_gerekli",
    allowedDays: 90,
    allowedDaysNote: "Schengen vizesi ile 180 gün içinde 90 gün",
    eVisaFee: 0,
    dailyCost: {
      local: 48,
      gezgin: 100
    },
    dailyAccommodation: {
      local: 42,
      gezgin: 120
    },
    tags: [
      "doga_dag",
      "macera_spor",
      "sakin_dinlenme"
    ],
    clusterId: null,
    popularCities: [
      "Oslo",
      "Bergen",
      "Tromsø",
      "Lofoten"
    ],
    description: "Fjordlar, Kuzey Işıkları, gece yarısı güneşi ve Viking mirası ile Skandinavya'nın en dramatik doğa manzaraları.",
    interestingFact: "Norveç'te bir penguen olan Sir Nils Olav, Norveç Kraliyet Muhafızları'nın onursal albayı ve maskotudur."
  },
  {
    id: "SE",
    name: "İsveç",
    nameEn: "Sweden",
    capital: "Stockholm",
    continent: "Avrupa",
    currency: "SEK (İsveç Kronu)",
    flag: "🇸🇪",
    visaStatus: "vize_gerekli",
    allowedDays: 90,
    allowedDaysNote: "Schengen vizesi ile 180 gün içinde 90 gün",
    eVisaFee: 0,
    dailyCost: {
      local: 42,
      gezgin: 90
    },
    dailyAccommodation: {
      local: 38,
      gezgin: 110
    },
    tags: [
      "sehir_kultur",
      "doga_dag",
      "sakin_dinlenme"
    ],
    clusterId: null,
    popularCities: [
      "Stockholm",
      "Göteborg",
      "Malmö",
      "Kiruna"
    ],
    description: "ABBA, IKEA, köfteler, takımadalar üzerindeki Stockholm ve Laponya'nın Kuzey Işıkları ile modern İskandinav yaşamı.",
    interestingFact: "İsveç, atıkların çoğunu geri dönüştürdüğü için o kadar az çöp üretir ki, bazen diğer ülkelerden çöp ithal etmek zorunda kalır."
  },
  {
    id: "DK",
    name: "Danimarka",
    nameEn: "Denmark",
    capital: "Kopenhag",
    continent: "Avrupa",
    currency: "DKK (Danimarka Kronu)",
    flag: "🇩🇰",
    visaStatus: "vize_gerekli",
    allowedDays: 90,
    allowedDaysNote: "Schengen vizesi ile 180 gün içinde 90 gün",
    eVisaFee: 0,
    dailyCost: {
      local: 45,
      gezgin: 95
    },
    dailyAccommodation: {
      local: 40,
      gezgin: 115
    },
    tags: [
      "sehir_kultur",
      "yemek_gastronomi",
      "sakin_dinlenme"
    ],
    clusterId: null,
    popularCities: [
      "Kopenhag",
      "Aarhus",
      "Odense"
    ],
    description: "Hygge kültürü, Tivoli bahçeleri, bisiklet dostu şehirler ve dünya çapında ünlü Noma restoranıyla mutluluk diyarı.",
    interestingFact: "Danimarka bayrağı (Dannebrog), 1219 yılından beri kullanılarak dünyadaki en eski sürekli kullanılan ulusal bayrak ünvanına sahiptir."
  },
  {
    id: "FI",
    name: "Finlandiya",
    nameEn: "Finland",
    capital: "Helsinki",
    continent: "Avrupa",
    currency: "EUR (Euro)",
    flag: "🇫🇮",
    visaStatus: "vize_gerekli",
    allowedDays: 90,
    allowedDaysNote: "Schengen vizesi ile 180 gün içinde 90 gün",
    eVisaFee: 0,
    dailyCost: {
      local: 40,
      gezgin: 85
    },
    dailyAccommodation: {
      local: 35,
      gezgin: 100
    },
    tags: [
      "doga_dag",
      "sakin_dinlenme",
      "sehir_kultur",
      "macera_spor"
    ],
    clusterId: null,
    popularCities: [
      "Helsinki",
      "Rovaniemi",
      "Tampere",
      "Turku"
    ],
    description: "Noel Baba'nın ülkesi, bin göller diyarı, sauna kültürü, Kuzey Işıkları ve cam igloolarıyla kış cenneti.",
    interestingFact: "Finlandiya, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "BE",
    name: "Belçika",
    nameEn: "Belgium",
    capital: "Brüksel",
    continent: "Avrupa",
    currency: "EUR (Euro)",
    flag: "🇧🇪",
    visaStatus: "vize_gerekli",
    allowedDays: 90,
    allowedDaysNote: "Schengen vizesi ile 180 gün içinde 90 gün",
    eVisaFee: 0,
    dailyCost: {
      local: 35,
      gezgin: 75
    },
    dailyAccommodation: {
      local: 30,
      gezgin: 90
    },
    tags: [
      "sehir_kultur",
      "yemek_gastronomi",
      "gece_hayati"
    ],
    clusterId: null,
    popularCities: [
      "Brüksel",
      "Brugge",
      "Gent",
      "Antwerp"
    ],
    description: "Çikolata, waffle, bira ve Brugge'nin ortaçağ kanallarıyla Avrupa'nın gastronomi başkentlerinden biri.",
    interestingFact: "Belçika, saniyede 12 miligram hızla ışık saçan dünyanın en büyük çikolata satış noktası olan Brüksel Havalimanı'na sahiptir."
  },
  {
    id: "AT",
    name: "Avusturya",
    nameEn: "Austria",
    capital: "Viyana",
    continent: "Avrupa",
    currency: "EUR (Euro)",
    flag: "🇦🇹",
    visaStatus: "vize_gerekli",
    allowedDays: 90,
    allowedDaysNote: "Schengen vizesi ile 180 gün içinde 90 gün",
    eVisaFee: 0,
    dailyCost: {
      local: 35,
      gezgin: 75
    },
    dailyAccommodation: {
      local: 30,
      gezgin: 90
    },
    tags: [
      "sehir_kultur",
      "doga_dag",
      "yemek_gastronomi",
      "sakin_dinlenme"
    ],
    clusterId: null,
    popularCities: [
      "Viyana",
      "Salzburg",
      "Innsbruck",
      "Hallstatt"
    ],
    description: "Mozart, Strauss, Viyana operası, Alp köyleri ve Sachertorte ile klasik Avrupa zarafetinin başkenti.",
    interestingFact: "Avusturya, dünyanın sürekli çalışan en eski hayvanat bahçesi olan Tiergarten Schönbrunn'a (1752) ev sahipliği yapar."
  },
  {
    id: "PT",
    name: "Portekiz",
    nameEn: "Portugal",
    capital: "Lizbon",
    continent: "Avrupa",
    currency: "EUR (Euro)",
    flag: "🇵🇹",
    visaStatus: "vize_gerekli",
    allowedDays: 90,
    allowedDaysNote: "Schengen vizesi ile 180 gün içinde 90 gün",
    eVisaFee: 0,
    dailyCost: {
      local: 28,
      gezgin: 60
    },
    dailyAccommodation: {
      local: 22,
      gezgin: 70
    },
    tags: [
      "sehir_kultur",
      "deniz_plaj",
      "yemek_gastronomi",
      "gece_hayati",
      "sakin_dinlenme"
    ],
    clusterId: null,
    popularCities: [
      "Lizbon",
      "Porto",
      "Algarve",
      "Sintra"
    ],
    description: "Pastel de nata, fado müziği, tramvaylar, sörf plajları ve uygun fiyatlarıyla Batı Avrupa'nın en sevimli ülkesi.",
    interestingFact: "Portekiz, 1755 Lizbon depreminden sonra dünyanın ilk modern sismoloji araştırmalarına ev sahipliği yapmıştır."
  },
  {
    id: "GR",
    name: "Yunanistan",
    nameEn: "Greece",
    capital: "Atina",
    continent: "Avrupa",
    currency: "EUR (Euro)",
    flag: "🇬🇷",
    visaStatus: "vize_gerekli",
    allowedDays: 90,
    allowedDaysNote: "Schengen vizesi ile 180 gün içinde 90 gün",
    eVisaFee: 0,
    dailyCost: {
      local: 28,
      gezgin: 60
    },
    dailyAccommodation: {
      local: 22,
      gezgin: 70
    },
    tags: [
      "deniz_plaj",
      "sehir_kultur",
      "yemek_gastronomi",
      "sakin_dinlenme"
    ],
    clusterId: null,
    popularCities: [
      "Atina",
      "Santorini",
      "Mykonos",
      "Girit",
      "Rodos"
    ],
    description: "Antik Akropolis, beyaz-mavi Kiklad adaları, zeytinyağlı mutfak ve Akdeniz yaşam tarzıyla medeniyetin beşiği.",
    interestingFact: "Yunanistan'da o kadar çok arkeolojik alan vardır ki, Atina'da metro kazısı yaparken yüzlerce antik eser bulunmuştur."
  },
  {
    id: "PL",
    name: "Polonya",
    nameEn: "Poland",
    capital: "Varşova",
    continent: "Avrupa",
    currency: "PLN (Polonya Zlotisi)",
    flag: "🇵🇱",
    visaStatus: "vize_gerekli",
    allowedDays: 90,
    allowedDaysNote: "Schengen vizesi ile 180 gün içinde 90 gün",
    eVisaFee: 0,
    dailyCost: {
      local: 22,
      gezgin: 45
    },
    dailyAccommodation: {
      local: 16,
      gezgin: 55
    },
    tags: [
      "sehir_kultur",
      "yemek_gastronomi",
      "gece_hayati",
      "doga_dag"
    ],
    clusterId: null,
    popularCities: [
      "Varşova",
      "Krakow",
      "Gdańsk",
      "Wrocław"
    ],
    description: "Krakow'un tarihi meydanı, Auschwitz anıtı, tuz madenleri ve uygun fiyatlı şehir kaçamağıyla Doğu Avrupa'nın yıldızı.",
    interestingFact: "Polonya, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "CZ",
    name: "Çekya",
    nameEn: "Czech Republic",
    capital: "Prag",
    continent: "Avrupa",
    currency: "CZK (Çek Korunası)",
    flag: "🇨🇿",
    visaStatus: "vize_gerekli",
    allowedDays: 90,
    allowedDaysNote: "Schengen vizesi ile 180 gün içinde 90 gün",
    eVisaFee: 0,
    dailyCost: {
      local: 25,
      gezgin: 55
    },
    dailyAccommodation: {
      local: 20,
      gezgin: 70
    },
    tags: [
      "sehir_kultur",
      "yemek_gastronomi",
      "gece_hayati"
    ],
    clusterId: null,
    popularCities: [
      "Prag",
      "Český Krumlov",
      "Brno",
      "Karlovy Vary"
    ],
    description: "Prag'ın masalsı köprüleri, gotik katedralleri, dünya çapında ünlü biraları ve ortaçağ atmosferiyle Avrupa'nın gizli mücevheri.",
    interestingFact: "Çekya, kişi başına düşen bira tüketiminde dünyanın bir numaralı ülkesidir."
  },
  {
    id: "HU",
    name: "Macaristan",
    nameEn: "Hungary",
    capital: "Budapeşte",
    continent: "Avrupa",
    currency: "HUF (Macar Forinti)",
    flag: "🇭🇺",
    visaStatus: "vize_gerekli",
    allowedDays: 90,
    allowedDaysNote: "Schengen vizesi ile 180 gün içinde 90 gün",
    eVisaFee: 0,
    dailyCost: {
      local: 24,
      gezgin: 50
    },
    dailyAccommodation: {
      local: 18,
      gezgin: 65
    },
    tags: [
      "sehir_kultur",
      "yemek_gastronomi",
      "gece_hayati",
      "sakin_dinlenme"
    ],
    clusterId: null,
    popularCities: [
      "Budapeşte",
      "Eger",
      "Debrecen",
      "Balaton Gölü"
    ],
    description: "Tuna Nehri kıyısındaki Budapeşte, termal kaplıcaları, gulaş çorbası ve ruin barlarıyla Orta Avrupa'nın en büyüleyici şehri.",
    interestingFact: "Macaristan'daki Budapeşte metrosu, Londra'dan sonra dünyanın en eski ikinci yeraltı ulaşım sistemidir (1896)."
  },
  {
    id: "RO",
    name: "Romanya",
    nameEn: "Romania",
    capital: "Bükreş",
    continent: "Avrupa",
    currency: "RON (Romanya Leyi)",
    flag: "🇷🇴",
    visaStatus: "vize_gerekli",
    allowedDays: 90,
    allowedDaysNote: "Schengen vizesi ile 180 gün içinde 90 gün",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 50
    },
    tags: [
      "sehir_kultur",
      "doga_dag",
      "macera_spor",
      "yemek_gastronomi"
    ],
    clusterId: null,
    popularCities: [
      "Bükreş",
      "Braşov",
      "Sibiu",
      "Sighișoara",
      "Bran"
    ],
    description: "Drakula'nın Transilvanya'sı, Karpat Dağları, ortaçağ kaleleri ve kırsal güzellikleriyle Doğu Avrupa'nın en gizemli ülkesi.",
    interestingFact: "Romanya, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "BG",
    name: "Bulgaristan",
    nameEn: "Bulgaria",
    capital: "Sofya",
    continent: "Avrupa",
    currency: "BGN (Bulgar Levası)",
    flag: "🇧🇬",
    visaStatus: "vize_gerekli",
    allowedDays: 90,
    allowedDaysNote: "Schengen vizesi ile 180 gün içinde 90 gün",
    eVisaFee: 0,
    dailyCost: {
      local: 18,
      gezgin: 35
    },
    dailyAccommodation: {
      local: 12,
      gezgin: 45
    },
    tags: [
      "deniz_plaj",
      "doga_dag",
      "sehir_kultur",
      "macera_spor",
      "sakin_dinlenme"
    ],
    clusterId: null,
    popularCities: [
      "Sofya",
      "Plovdiv",
      "Varna",
      "Bansko"
    ],
    description: "Karadeniz sahilleri, kayak merkezleri, Trakya şarapları ve Osmanlı mirasıyla uygun fiyatlı Avrupa tatili.",
    interestingFact: "Bulgaristan, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "HR",
    name: "Hırvatistan",
    nameEn: "Croatia",
    capital: "Zagreb",
    continent: "Avrupa",
    currency: "EUR (Euro)",
    flag: "🇭🇷",
    visaStatus: "vize_gerekli",
    allowedDays: 90,
    allowedDaysNote: "Schengen vizesi ile 180 gün içinde 90 gün",
    eVisaFee: 0,
    dailyCost: {
      local: 25,
      gezgin: 55
    },
    dailyAccommodation: {
      local: 20,
      gezgin: 65
    },
    tags: [
      "deniz_plaj",
      "sehir_kultur",
      "doga_dag",
      "yemek_gastronomi"
    ],
    clusterId: null,
    popularCities: [
      "Dubrovnik",
      "Split",
      "Zagreb",
      "Hvar",
      "Plitvice"
    ],
    description: "Game of Thrones'un Dubrovnik'i, Plitvice Gölleri, bin adalı kıyı şeridi ve Adriyatik'in berrak sularıyla Akdeniz cenneti.",
    interestingFact: "Hırvatistan, Game of Thrones dizisindeki \"King's Landing\" (Dubrovnik) şehriyle ününe ün katmıştır."
  },
  {
    id: "SI",
    name: "Slovenya",
    nameEn: "Slovenia",
    capital: "Ljubljana",
    continent: "Avrupa",
    currency: "EUR (Euro)",
    flag: "🇸🇮",
    visaStatus: "vize_gerekli",
    allowedDays: 90,
    allowedDaysNote: "Schengen vizesi ile 180 gün içinde 90 gün",
    eVisaFee: 0,
    dailyCost: {
      local: 25,
      gezgin: 50
    },
    dailyAccommodation: {
      local: 20,
      gezgin: 60
    },
    tags: [
      "doga_dag",
      "sehir_kultur",
      "macera_spor",
      "sakin_dinlenme"
    ],
    clusterId: null,
    popularCities: [
      "Ljubljana",
      "Bled",
      "Piran",
      "Postojna"
    ],
    description: "Bled Gölü, yeşil başkent Ljubljana, Alp dağları ve damla mağaralarıyla Avrupa'nın en küçük doğa cennetlerinden biri.",
    interestingFact: "Slovenya, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "SK",
    name: "Slovakya",
    nameEn: "Slovakia",
    capital: "Bratislava",
    continent: "Avrupa",
    currency: "EUR (Euro)",
    flag: "🇸🇰",
    visaStatus: "vize_gerekli",
    allowedDays: 90,
    allowedDaysNote: "Schengen vizesi ile 180 gün içinde 90 gün",
    eVisaFee: 0,
    dailyCost: {
      local: 22,
      gezgin: 48
    },
    dailyAccommodation: {
      local: 18,
      gezgin: 60
    },
    tags: [
      "sehir_kultur",
      "doga_dag",
      "macera_spor"
    ],
    clusterId: null,
    popularCities: [
      "Bratislava",
      "Yüksek Tatras",
      "Košice"
    ],
    description: "Tatra Dağları, ortaçağ kaleleri, termal kaplıcaları ve uygun fiyatlarıyla Orta Avrupa'nın keşfedilmemiş güzelliği.",
    interestingFact: "Slovakya, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "LT",
    name: "Litvanya",
    nameEn: "Lithuania",
    capital: "Vilnius",
    continent: "Avrupa",
    currency: "EUR (Euro)",
    flag: "🇱🇹",
    visaStatus: "vize_gerekli",
    allowedDays: 90,
    allowedDaysNote: "Schengen vizesi ile 180 gün içinde 90 gün",
    eVisaFee: 0,
    dailyCost: {
      local: 22,
      gezgin: 45
    },
    dailyAccommodation: {
      local: 16,
      gezgin: 55
    },
    tags: [
      "sehir_kultur",
      "doga_dag",
      "yemek_gastronomi"
    ],
    clusterId: null,
    popularCities: [
      "Vilnius",
      "Kaunas",
      "Trakai",
      "Kuron Burnu"
    ],
    description: "Barok başkent Vilnius, Trakai Kalesi, kehribar kıyıları ve Baltık kültürüyle Kuzey Avrupa'nın saklı hazinesi.",
    interestingFact: "Litvanya, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "LV",
    name: "Letonya",
    nameEn: "Latvia",
    capital: "Riga",
    continent: "Avrupa",
    currency: "EUR (Euro)",
    flag: "🇱🇻",
    visaStatus: "vize_gerekli",
    allowedDays: 90,
    allowedDaysNote: "Schengen vizesi ile 180 gün içinde 90 gün",
    eVisaFee: 0,
    dailyCost: {
      local: 22,
      gezgin: 45
    },
    dailyAccommodation: {
      local: 16,
      gezgin: 55
    },
    tags: [
      "sehir_kultur",
      "doga_dag",
      "sakin_dinlenme"
    ],
    clusterId: null,
    popularCities: [
      "Riga",
      "Jūrmala",
      "Sigulda"
    ],
    description: "Art Nouveau başkent Riga, Baltık plajları, çam ormanları ve ortaçağ şövalye kaleleriyle Baltık'ın kalbi.",
    interestingFact: "Letonya, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "EE",
    name: "Estonya",
    nameEn: "Estonia",
    capital: "Tallinn",
    continent: "Avrupa",
    currency: "EUR (Euro)",
    flag: "🇪🇪",
    visaStatus: "vize_gerekli",
    allowedDays: 90,
    allowedDaysNote: "Schengen vizesi ile 180 gün içinde 90 gün",
    eVisaFee: 0,
    dailyCost: {
      local: 24,
      gezgin: 50
    },
    dailyAccommodation: {
      local: 18,
      gezgin: 60
    },
    tags: [
      "sehir_kultur",
      "doga_dag",
      "sakin_dinlenme"
    ],
    clusterId: null,
    popularCities: [
      "Tallinn",
      "Tartu",
      "Pärnu"
    ],
    description: "Dijital devlet, ortaçağ Tallinn eski şehri, Baltık kıyıları ve sauna kültürüyle Kuzey Avrupa'nın en modern küçük ülkesi.",
    interestingFact: "Estonya, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "IS",
    name: "İzlanda",
    nameEn: "Iceland",
    capital: "Reykjavik",
    continent: "Avrupa",
    currency: "ISK (İzlanda Kronası)",
    flag: "🇮🇸",
    visaStatus: "vize_gerekli",
    allowedDays: 90,
    allowedDaysNote: "Schengen vizesi ile 180 gün içinde 90 gün",
    eVisaFee: 0,
    dailyCost: {
      local: 50,
      gezgin: 110
    },
    dailyAccommodation: {
      local: 45,
      gezgin: 130
    },
    tags: [
      "doga_dag",
      "macera_spor",
      "sakin_dinlenme"
    ],
    clusterId: null,
    popularCities: [
      "Reykjavik",
      "Vik",
      "Akureyri",
      "Altın Çember"
    ],
    description: "Ateş ve buzun ülkesi. Gayzerler, buzullar, volkanlar, Kuzey Işıkları ve Blue Lagoon ile dünya dışı manzaralar.",
    interestingFact: "İzlanda, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "LU",
    name: "Lüksemburg",
    nameEn: "Luxembourg",
    capital: "Lüksemburg",
    continent: "Avrupa",
    currency: "EUR (Euro)",
    flag: "🇱🇺",
    visaStatus: "vize_gerekli",
    allowedDays: 90,
    allowedDaysNote: "Schengen vizesi ile 180 gün içinde 90 gün",
    eVisaFee: 0,
    dailyCost: {
      local: 45,
      gezgin: 100
    },
    dailyAccommodation: {
      local: 40,
      gezgin: 120
    },
    tags: [
      "sehir_kultur",
      "yemek_gastronomi",
      "sakin_dinlenme"
    ],
    clusterId: null,
    popularCities: [
      "Lüksemburg",
      "Vianden",
      "Echternach"
    ],
    description: "Avrupa'nın en zengin ülkelerinden biri. Ortaçağ kaleleri, vadi manzaraları ve kozmopolit gastronomi sahnesiyle kompakt bir mücevher.",
    interestingFact: "Lüksemburg, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "MT",
    name: "Malta",
    nameEn: "Malta",
    capital: "Valletta",
    continent: "Avrupa",
    currency: "EUR (Euro)",
    flag: "🇲🇹",
    visaStatus: "vize_gerekli",
    allowedDays: 90,
    allowedDaysNote: "Schengen vizesi ile 180 gün içinde 90 gün",
    eVisaFee: 0,
    dailyCost: {
      local: 28,
      gezgin: 60
    },
    dailyAccommodation: {
      local: 22,
      gezgin: 65
    },
    tags: [
      "deniz_plaj",
      "sehir_kultur",
      "doga_dag"
    ],
    clusterId: null,
    popularCities: [
      "Valletta",
      "Mdina",
      "Gozo",
      "St. Julian's"
    ],
    description: "Akdeniz'in ortasındaki küçük ada ülkesi. Şövalye kaleleri, turkuaz koylar ve İngilizce konuşulan sıcak atmosferiyle çekici.",
    interestingFact: "Malta, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "CY",
    name: "Kıbrıs (Güney)",
    nameEn: "Cyprus",
    capital: "Lefkoşa",
    continent: "Avrupa",
    currency: "EUR (Euro)",
    flag: "🇨🇾",
    visaStatus: "vize_gerekli",
    allowedDays: 90,
    allowedDaysNote: "Ulusal vize gerekli (Schengen kapsamında değil)",
    eVisaFee: 0,
    dailyCost: {
      local: 28,
      gezgin: 60
    },
    dailyAccommodation: {
      local: 22,
      gezgin: 65
    },
    tags: [
      "deniz_plaj",
      "sehir_kultur",
      "yemek_gastronomi",
      "sakin_dinlenme"
    ],
    clusterId: null,
    popularCities: [
      "Lefkoşa",
      "Limasol",
      "Larnaka",
      "Baf"
    ],
    description: "Afrodit'in doğduğu ada. Antik kalıntılar, altın plajlar, Akdeniz mutfağı ve bölünmüş başkent Lefkoşa ile ilgi çekici.",
    interestingFact: "Kıbrıs (Güney), zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "LI",
    name: "Lihtenştayn",
    nameEn: "Liechtenstein",
    capital: "Vaduz",
    continent: "Avrupa",
    currency: "CHF (İsviçre Frangı)",
    flag: "🇱🇮",
    visaStatus: "vize_gerekli",
    allowedDays: 90,
    allowedDaysNote: "Schengen vizesi ile 180 gün içinde 90 gün",
    eVisaFee: 0,
    dailyCost: {
      local: 50,
      gezgin: 110
    },
    dailyAccommodation: {
      local: 45,
      gezgin: 130
    },
    tags: [
      "doga_dag",
      "sakin_dinlenme",
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Vaduz",
      "Malbun"
    ],
    description: "Alpler'deki minik prenslik. Vaduz Kalesi, pul koleksiyonu müzesi ve kayak pistleriyle kompakt bir Alp deneyimi.",
    interestingFact: "Lihtenştayn, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "MC",
    name: "Monako",
    nameEn: "Monaco",
    capital: "Monako",
    continent: "Avrupa",
    currency: "EUR (Euro)",
    flag: "🇲🇨",
    visaStatus: "vize_gerekli",
    allowedDays: 90,
    allowedDaysNote: "Schengen vizesi ile giriş (Fransa üzerinden)",
    eVisaFee: 0,
    dailyCost: {
      local: 60,
      gezgin: 130
    },
    dailyAccommodation: {
      local: 55,
      gezgin: 160
    },
    tags: [
      "sehir_kultur",
      "gece_hayati",
      "yemek_gastronomi"
    ],
    clusterId: null,
    popularCities: [
      "Monte Carlo"
    ],
    description: "Dünyanın en küçük ülkelerinden biri. Formula 1, Monte Carlo kumarhanesi ve lüks yaşam tarzıyla zenginlerin oyun alanı.",
    interestingFact: "Monako, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "BI",
    name: "Burundi",
    nameEn: "Burundi",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "kapida_vize",
    allowedDays: 0,
    allowedDaysNote: "Vize gerekli",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Burundi, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "CM",
    name: "Cameroon",
    nameEn: "Cameroon",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "e_vize",
    allowedDays: 0,
    allowedDaysNote: "Vize gerekli",
    eVisaFee: 0,
    dailyCost: {
      local: 14,
      gezgin: 30
    },
    dailyAccommodation: {
      local: 8,
      gezgin: 35
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Cameroon, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "CF",
    name: "Central African Rep.",
    nameEn: "Central African Rep.",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "vize_gerekli",
    allowedDays: 0,
    allowedDaysNote: "Vize gerekli",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Central African Rep., zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "TD",
    name: "Chad",
    nameEn: "Chad",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "e_vize",
    allowedDays: 0,
    allowedDaysNote: "Vize gerekli",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Chad, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "TW",
    name: "Taiwan",
    nameEn: "Taiwan",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "vize_gerekli",
    allowedDays: 0,
    allowedDaysNote: "Vize gerekli",
    eVisaFee: 0,
    dailyCost: {
      local: 22,
      gezgin: 45
    },
    dailyAccommodation: {
      local: 18,
      gezgin: 55
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Taiwan, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "CG",
    name: "Congo",
    nameEn: "Congo",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "vize_gerekli",
    allowedDays: 0,
    allowedDaysNote: "Vize gerekli",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Congo, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "CD",
    name: "Dem. Rep. Congo",
    nameEn: "Dem. Rep. Congo",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "e_vize",
    allowedDays: 0,
    allowedDaysNote: "Vize gerekli",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Dem. Rep. Congo, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "CU",
    name: "Cuba",
    nameEn: "Cuba",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "e_vize",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 0,
    dailyCost: {
      local: 22,
      gezgin: 45
    },
    dailyAccommodation: {
      local: 15,
      gezgin: 50
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Cuba, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "BJ",
    name: "Benin",
    nameEn: "Benin",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "e_vize",
    allowedDays: 30,
    allowedDaysNote: "30 days",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Benin, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "DM",
    name: "DM",
    nameEn: "DM",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "vizesiz",
    allowedDays: 0,
    allowedDaysNote: "Vize gerekli",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "DM, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "GQ",
    name: "Eq. Guinea",
    nameEn: "Eq. Guinea",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "vizesiz",
    allowedDays: 0,
    allowedDaysNote: "Vize gerekli",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Eq. Guinea, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "ER",
    name: "Eritrea",
    nameEn: "Eritrea",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "vize_gerekli",
    allowedDays: 0,
    allowedDaysNote: "Vize gerekli",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Eritrea, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "FJ",
    name: "Fiji",
    nameEn: "Fiji",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "vizesiz",
    allowedDays: 120,
    allowedDaysNote: "4 months",
    eVisaFee: 0,
    dailyCost: {
      local: 22,
      gezgin: 48
    },
    dailyAccommodation: {
      local: 16,
      gezgin: 55
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Fiji, Pasifik Okyanusu'nda 332 adadan oluşur ancak insanların sadece üçte birinde yaşadığı bilinmektedir."
  },
  {
    id: "DJ",
    name: "Djibouti",
    nameEn: "Djibouti",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "e_vize",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Djibouti, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "GA",
    name: "Gabon",
    nameEn: "Gabon",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "e_vize",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Gabon, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "GM",
    name: "Gambia",
    nameEn: "Gambia",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "vizesiz",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Gambia, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "PS",
    name: "Palestine",
    nameEn: "Palestine",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "vize_gerekli",
    allowedDays: 0,
    allowedDaysNote: "Vize gerekli",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 42
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Palestine, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "GH",
    name: "Ghana",
    nameEn: "Ghana",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "vize_gerekli",
    allowedDays: 0,
    allowedDaysNote: "Vize gerekli",
    eVisaFee: 0,
    dailyCost: {
      local: 16,
      gezgin: 35
    },
    dailyAccommodation: {
      local: 10,
      gezgin: 40
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Ghana, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "KI",
    name: "KI",
    nameEn: "KI",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "vize_gerekli",
    allowedDays: 0,
    allowedDaysNote: "Vize gerekli",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "KI, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "GD",
    name: "GD",
    nameEn: "GD",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "vize_gerekli",
    allowedDays: 0,
    allowedDaysNote: "Vize gerekli",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "GD, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "GN",
    name: "Guinea",
    nameEn: "Guinea",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "e_vize",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Guinea, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "GY",
    name: "Guyana",
    nameEn: "Guyana",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "e_vize",
    allowedDays: 0,
    allowedDaysNote: "Vize gerekli",
    eVisaFee: 0,
    dailyCost: {
      local: 18,
      gezgin: 38
    },
    dailyAccommodation: {
      local: 12,
      gezgin: 42
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Guyana, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "IQ",
    name: "Iraq",
    nameEn: "Iraq",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "vizesiz",
    allowedDays: 30,
    allowedDaysNote: "30 days",
    eVisaFee: 0,
    dailyCost: {
      local: 18,
      gezgin: 38
    },
    dailyAccommodation: {
      local: 12,
      gezgin: 42
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Iraq, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "IL",
    name: "Israel",
    nameEn: "Israel",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "vize_gerekli",
    allowedDays: 0,
    allowedDaysNote: "Vize gerekli",
    eVisaFee: 0,
    dailyCost: {
      local: 40,
      gezgin: 85
    },
    dailyAccommodation: {
      local: 35,
      gezgin: 100
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Israel, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "CI",
    name: "Côte d'Ivoire",
    nameEn: "Côte d'Ivoire",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "e_vize",
    allowedDays: 90,
    allowedDaysNote: "3 months",
    eVisaFee: 0,
    dailyCost: {
      local: 16,
      gezgin: 35
    },
    dailyAccommodation: {
      local: 10,
      gezgin: 40
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Côte d'Ivoire, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "KP",
    name: "North Korea",
    nameEn: "North Korea",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "vize_gerekli",
    allowedDays: 0,
    allowedDaysNote: "Vize gerekli",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "North Korea, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "LS",
    name: "Lesotho",
    nameEn: "Lesotho",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "vize_gerekli",
    allowedDays: 0,
    allowedDaysNote: "Vize gerekli",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Lesotho, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "LR",
    name: "Liberia",
    nameEn: "Liberia",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "vize_gerekli",
    allowedDays: 90,
    allowedDaysNote: "3 months",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Liberia, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "LY",
    name: "Libya",
    nameEn: "Libya",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "vizesiz",
    allowedDays: 0,
    allowedDaysNote: "Vize gerekli",
    eVisaFee: 0,
    dailyCost: {
      local: 18,
      gezgin: 38
    },
    dailyAccommodation: {
      local: 12,
      gezgin: 42
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Libya, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "MW",
    name: "Malawi",
    nameEn: "Malawi",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "e_vize",
    allowedDays: 30,
    allowedDaysNote: "30 days",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Malawi, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "ML",
    name: "Mali",
    nameEn: "Mali",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "vize_gerekli",
    allowedDays: 0,
    allowedDaysNote: "Vize gerekli",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Mali, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "MR",
    name: "Mauritania",
    nameEn: "Mauritania",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "e_vize",
    allowedDays: 30,
    allowedDaysNote: "30 days",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Mauritania, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "MN",
    name: "Mongolia",
    nameEn: "Mongolia",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "vizesiz",
    allowedDays: 30,
    allowedDaysNote: "30 days",
    eVisaFee: 0,
    dailyCost: {
      local: 15,
      gezgin: 35
    },
    dailyAccommodation: {
      local: 12,
      gezgin: 40
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Mongolia, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "NA",
    name: "Namibia",
    nameEn: "Namibia",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "e_vize",
    allowedDays: 90,
    allowedDaysNote: "3 months / 90 days",
    eVisaFee: 0,
    dailyCost: {
      local: 22,
      gezgin: 50
    },
    dailyAccommodation: {
      local: 16,
      gezgin: 55
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Namibia, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "NR",
    name: "NR",
    nameEn: "NR",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "vize_gerekli",
    allowedDays: 0,
    allowedDaysNote: "Vize gerekli",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "NR, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "NC",
    name: "New Caledonia",
    nameEn: "New Caledonia",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "vize_gerekli",
    allowedDays: 0,
    allowedDaysNote: "Vize gerekli",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "New Caledonia, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "VU",
    name: "Vanuatu",
    nameEn: "Vanuatu",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "vizesiz",
    allowedDays: 120,
    allowedDaysNote: "120 days",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Vanuatu, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "NE",
    name: "Niger",
    nameEn: "Niger",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "vize_gerekli",
    allowedDays: 0,
    allowedDaysNote: "Vize gerekli",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Niger, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "NG",
    name: "Nigeria",
    nameEn: "Nigeria",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "e_vize",
    allowedDays: 30,
    allowedDaysNote: "30 days",
    eVisaFee: 0,
    dailyCost: {
      local: 16,
      gezgin: 35
    },
    dailyAccommodation: {
      local: 10,
      gezgin: 40
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Nigeria, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "PG",
    name: "Papua New Guinea",
    nameEn: "Papua New Guinea",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "e_vize",
    allowedDays: 60,
    allowedDaysNote: "60 days",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 42
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 48
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Papua New Guinea, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "GW",
    name: "Guinea-Bissau",
    nameEn: "Guinea-Bissau",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "kapida_vize",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Guinea-Bissau, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "PR",
    name: "Puerto Rico",
    nameEn: "Puerto Rico",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "vize_gerekli",
    allowedDays: 0,
    allowedDaysNote: "Vize gerekli",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Puerto Rico, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "KN",
    name: "KN",
    nameEn: "KN",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "e_vize",
    allowedDays: 0,
    allowedDaysNote: "Vize gerekli",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "KN, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "LC",
    name: "LC",
    nameEn: "LC",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "vizesiz",
    allowedDays: 0,
    allowedDaysNote: "Vize gerekli",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "LC, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "VC",
    name: "VC",
    nameEn: "VC",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "vizesiz",
    allowedDays: 0,
    allowedDaysNote: "Vize gerekli",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "VC, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "SM",
    name: "SM",
    nameEn: "SM",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "vize_gerekli",
    allowedDays: 0,
    allowedDaysNote: "Vize gerekli",
    eVisaFee: 0,
    dailyCost: {
      local: 35,
      gezgin: 80
    },
    dailyAccommodation: {
      local: 30,
      gezgin: 90
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "SM, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "ST",
    name: "ST",
    nameEn: "ST",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "vizesiz",
    allowedDays: 0,
    allowedDaysNote: "Vize gerekli",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "ST, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "SA",
    name: "Saudi Arabia",
    nameEn: "Saudi Arabia",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "e_vize",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 0,
    dailyCost: {
      local: 28,
      gezgin: 60
    },
    dailyAccommodation: {
      local: 22,
      gezgin: 75
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Saudi Arabia, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "SN",
    name: "Senegal",
    nameEn: "Senegal",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "kapida_vize",
    allowedDays: 0,
    allowedDaysNote: "Vize gerekli",
    eVisaFee: 0,
    dailyCost: {
      local: 16,
      gezgin: 35
    },
    dailyAccommodation: {
      local: 10,
      gezgin: 40
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Senegal, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "SL",
    name: "Sierra Leone",
    nameEn: "Sierra Leone",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "e_vize",
    allowedDays: 90,
    allowedDaysNote: "3 months / 30 days",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Sierra Leone, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "SO",
    name: "Somalia",
    nameEn: "Somalia",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "e_vize",
    allowedDays: 30,
    allowedDaysNote: "30 days",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Somalia, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "ZW",
    name: "Zimbabwe",
    nameEn: "Zimbabwe",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "e_vize",
    allowedDays: 0,
    allowedDaysNote: "Vize gerekli",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Zimbabwe, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "YE",
    name: "YE",
    nameEn: "YE",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "vize_gerekli",
    allowedDays: 0,
    allowedDaysNote: "Vize gerekli",
    eVisaFee: 0,
    dailyCost: {
      local: 14,
      gezgin: 30
    },
    dailyAccommodation: {
      local: 8,
      gezgin: 30
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "YE, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "SS",
    name: "S. Sudan",
    nameEn: "S. Sudan",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "e_vize",
    allowedDays: 0,
    allowedDaysNote: "Vize gerekli",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "S. Sudan, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "SD",
    name: "Sudan",
    nameEn: "Sudan",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "kapida_vize",
    allowedDays: 0,
    allowedDaysNote: "Vize gerekli",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Sudan, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "SR",
    name: "Suriname",
    nameEn: "Suriname",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "vizesiz",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 0,
    dailyCost: {
      local: 18,
      gezgin: 38
    },
    dailyAccommodation: {
      local: 12,
      gezgin: 42
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Suriname, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "SZ",
    name: "eSwatini",
    nameEn: "eSwatini",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "vizesiz",
    allowedDays: 0,
    allowedDaysNote: "Vize gerekli",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "eSwatini, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "SY",
    name: "Syria",
    nameEn: "Syria",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "vizesiz",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 0,
    dailyCost: {
      local: 15,
      gezgin: 32
    },
    dailyAccommodation: {
      local: 10,
      gezgin: 35
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Syria, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "TG",
    name: "Togo",
    nameEn: "Togo",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "e_vize",
    allowedDays: 15,
    allowedDaysNote: "15 days",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Togo, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "TO",
    name: "TO",
    nameEn: "TO",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "kapida_vize",
    allowedDays: 0,
    allowedDaysNote: "Vize gerekli",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "TO, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "AE",
    name: "United Arab Emirates",
    nameEn: "United Arab Emirates",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "vize_gerekli",
    allowedDays: 0,
    allowedDaysNote: "Vize gerekli",
    eVisaFee: 0,
    dailyCost: {
      local: 35,
      gezgin: 80
    },
    dailyAccommodation: {
      local: 30,
      gezgin: 100
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "United Arab Emirates, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "TM",
    name: "Turkmenistan",
    nameEn: "Turkmenistan",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "vize_gerekli",
    allowedDays: 0,
    allowedDaysNote: "Vize gerekli",
    eVisaFee: 0,
    dailyCost: {
      local: 15,
      gezgin: 32
    },
    dailyAccommodation: {
      local: 10,
      gezgin: 38
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Turkmenistan, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "BF",
    name: "Burkina Faso",
    nameEn: "Burkina Faso",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "e_vize",
    allowedDays: 0,
    allowedDaysNote: "Vize gerekli",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Burkina Faso, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "VE",
    name: "Venezuela",
    nameEn: "Venezuela",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "vizesiz",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 12,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Venezuela, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "YE",
    name: "Yemen",
    nameEn: "Yemen",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "vize_gerekli",
    allowedDays: 0,
    allowedDaysNote: "Vize gerekli",
    eVisaFee: 0,
    dailyCost: {
      low: 69,
      mid: 25,
      high: 53
    },
    dailyAccommodation: {
      low: 51,
      mid: 23,
      high: 67
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Yemen, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "ZM",
    name: "Zambia",
    nameEn: "Zambia",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "vizesiz",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Zambia, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "AF",
    name: "Afghanistan",
    nameEn: "Afghanistan",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "vize_gerekli",
    allowedDays: 0,
    allowedDaysNote: "Vize gerekli",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Afghanistan, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "DZ",
    name: "Algeria",
    nameEn: "Algeria",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "vize_gerekli",
    allowedDays: 0,
    allowedDaysNote: "Vize gerekli",
    eVisaFee: 0,
    dailyCost: {
      local: 16,
      gezgin: 35
    },
    dailyAccommodation: {
      local: 10,
      gezgin: 40
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Algeria, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "AD",
    name: "AD",
    nameEn: "AD",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "vize_gerekli",
    allowedDays: 0,
    allowedDaysNote: "Vize gerekli",
    eVisaFee: 0,
    dailyCost: {
      local: 35,
      gezgin: 75
    },
    dailyAccommodation: {
      local: 30,
      gezgin: 85
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "AD, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "AO",
    name: "Angola",
    nameEn: "Angola",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "vizesiz",
    allowedDays: 30,
    allowedDaysNote: "30 days",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Angola, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "AG",
    name: "AG",
    nameEn: "AG",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "vizesiz",
    allowedDays: 0,
    allowedDaysNote: "Vize gerekli",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "AG, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "BD",
    name: "Bangladesh",
    nameEn: "Bangladesh",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "kapida_vize",
    allowedDays: 30,
    allowedDaysNote: "30 days",
    eVisaFee: 0,
    dailyCost: {
      local: 10,
      gezgin: 25
    },
    dailyAccommodation: {
      local: 6,
      gezgin: 28
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Bangladesh, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "BM",
    name: "BM",
    nameEn: "BM",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "vize_gerekli",
    allowedDays: 0,
    allowedDaysNote: "Vize gerekli",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "BM, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "BT",
    name: "Bhutan",
    nameEn: "Bhutan",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "e_vize",
    allowedDays: 90,
    allowedDaysNote: "90 days",
    eVisaFee: 0,
    dailyCost: {
      local: 25,
      gezgin: 55
    },
    dailyAccommodation: {
      local: 20,
      gezgin: 60
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Bhutan, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "SB",
    name: "Solomon Is.",
    nameEn: "Solomon Is.",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "vize_gerekli",
    allowedDays: 0,
    allowedDaysNote: "Vize gerekli",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Solomon Is., zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  },
  {
    id: "BN",
    name: "Brunei",
    nameEn: "Brunei",
    capital: "Bilinmeyen",
    continent: "Bilinmeyen",
    currency: "Bilinmeyen",
    flag: "",
    visaStatus: "vizesiz",
    allowedDays: 30,
    allowedDaysNote: "30 days",
    eVisaFee: 0,
    dailyCost: {
      local: 20,
      gezgin: 40
    },
    dailyAccommodation: {
      local: 14,
      gezgin: 45
    },
    tags: [
      "sehir_kultur"
    ],
    clusterId: null,
    popularCities: [
      "Bilinmeyen"
    ],
    interestingFact: "Brunei, zengin kültürü ve tarihiyle gezginleri büyüleyen benzersiz bir destinasyondur."
  }
];

// Yardımcı fonksiyonlar
export const getCountryById = (id) => countries.find(c => c.id === id);
export const getCountriesByVisa = (status) => countries.filter(c => c.visaStatus === status);
export const getCountriesByContinent = (continent) => countries.filter(c => c.continent === continent);
export const getCountriesByCluster = (clusterId) => countries.filter(c => c.clusterId === clusterId);
export const getCountriesByTag = (tag) => countries.filter(c => c.tags.includes(tag));
export const searchCountries = (query) => {
  const q = query.toLowerCase();
  return countries.filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.nameEn.toLowerCase().includes(q) ||
    c.capital.toLowerCase().includes(q)
  );
};

export default countries;
