// GezgiNova - Coğrafi Kümeler
// Çoklu ülke rotası önerileri için küme tanımları

export const clusters = [
  {
    id: "balkan",
    name: "Balkan Rotası",
    countries: ["RS", "BA", "ME", "XK", "MK", "AL"],
    entryCity: "Belgrad",
    interCityCost: 200,
    description: "Tamamı vizesiz, bütçe dostu Balkan turu. Otobüs ve trenle kolayca gezilebilir."
  },
  {
    id: "kafkas",
    name: "Kafkas Rotası",
    countries: ["GE", "AZ", "AM"],
    entryCity: "Tiflis",
    interCityCost: 150,
    description: "Komşu kapısı, kimlikle bile girilebilen rota. Doğa, tarih ve gastronomi bir arada."
  },
  {
    id: "guneydogu_asya",
    name: "Güneydoğu Asya Rotası",
    countries: ["TH", "KH", "LA", "MY", "SG", "ID", "PH"],
    entryCity: "Bangkok",
    interCityCost: 300,
    description: "Tropikal cennet, ucuz yaşam maliyeti, zengin kültür. Backpacker'ların gözdesi."
  },
  {
    id: "dogu_asya",
    name: "Doğu Asya Rotası",
    countries: ["JP", "KR", "HK"],
    entryCity: "Tokyo",
    interCityCost: 500,
    description: "Modern metropoller, benzersiz mutfak ve teknoloji harikası şehirler."
  },
  {
    id: "guney_amerika_kuzey",
    name: "Güney Amerika Kuzey",
    countries: ["CO", "EC", "PE"],
    entryCity: "Bogota",
    interCityCost: 400,
    description: "And Dağları, Amazon, antik uygarlıklar ve canlı şehir kültürü."
  },
  {
    id: "guney_amerika_guney",
    name: "Güney Amerika Güney",
    countries: ["AR", "CL", "UY", "PY", "BR"],
    entryCity: "Buenos Aires",
    interCityCost: 500,
    description: "Tango, Patagonya, buzullar ve dünyanın en güzel doğası."
  },
  {
    id: "orta_amerika",
    name: "Orta Amerika Rotası",
    countries: ["CR", "PA", "GT", "BZ"],
    entryCity: "San Jose",
    interCityCost: 300,
    description: "Tropikal yağmur ormanları, Maya kalıntıları ve Karayip sahilleri."
  },
  {
    id: "korfez",
    name: "Körfez Rotası",
    countries: ["QA", "KW", "OM", "BH", "JO"],
    entryCity: "Doha",
    interCityCost: 350,
    description: "Modern mimarinin ve antik tarihin kesiştiği lüks destinasyonlar."
  },
  {
    id: "kuzey_afrika",
    name: "Kuzey Afrika Rotası",
    countries: ["MA", "TN", "EG"],
    entryCity: "Kazablanka",
    interCityCost: 250,
    description: "Medina sokakları, çöl maceraları ve antik medeniyetler."
  },
  {
    id: "dogu_afrika",
    name: "Doğu Afrika Safari",
    countries: ["KE", "TZ", "RW", "UG"],
    entryCity: "Nairobi",
    interCityCost: 350,
    description: "Safari, Kilimanjaro, goril trekking. Hayat boyu unutulmaz deneyimler."
  }
];

export function getClusterById(clusterId) {
  return clusters.find(c => c.id === clusterId);
}

export function getClusterForCountry(countryId) {
  return clusters.find(c => c.countries.includes(countryId));
}
