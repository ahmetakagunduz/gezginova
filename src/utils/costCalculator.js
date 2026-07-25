// GezgiNova - Maliyet Hesaplama
import { getFlightPrice } from '../data/flightPrices';

export function calculateTripCost(country, departureCity, days, budgetLevel) {
  const level = budgetLevel === "dusuk" ? "low" : budgetLevel === "orta" ? "mid" : "high";
  
  const flight = getFlightPrice(departureCity, country.id, budgetLevel);
  const accommodation = days * (country.dailyAccommodation?.[level] || 400);
  const living = days * (country.dailyCost?.[level] || 300);
  const visa = country.visaStatus === 'e_vize' ? (country.eVisaFee || 0) : 0;
  
  return {
    flight,
    accommodation,
    living,
    visa,
    total: flight + accommodation + living + visa,
    perDay: Math.round((accommodation + living) / days) || 0,
  };
}

export function calculateClusterCost(cluster, countries, departureCity, days, budgetLevel) {
  const clusterCountries = countries.filter(c => cluster.countries.includes(c.id));
  if (clusterCountries.length === 0) return null;
  
  const daysPerCountry = Math.floor(days / clusterCountries.length);
  const extraDays = days % clusterCountries.length;
  
  // İlk ülkeye uçuş fiyatı
  const entryCountry = clusterCountries[0];
  const flight = getFlightPrice(departureCity, entryCountry.id, budgetLevel);
  
  // Her ülke için konaklama ve yaşam maliyeti
  let accommodation = 0;
  let living = 0;
  let visa = 0;
  const level = budgetLevel === "dusuk" ? "low" : budgetLevel === "orta" ? "mid" : "high";
  
  clusterCountries.forEach((c, i) => {
    const countryDays = daysPerCountry + (i === 0 ? extraDays : 0);
    accommodation += countryDays * (c.dailyAccommodation?.[level] || 400);
    living += countryDays * (c.dailyCost?.[level] || 300);
    if (c.visaStatus === 'e_vize') visa += (c.eVisaFee || 0);
  });
  
  // Şehirler arası ulaşım maliyeti
  const interCityTotal = (clusterCountries.length - 1) * (cluster.interCityCost || 200);
  
  return {
    flight,
    accommodation,
    living,
    visa,
    interCity: interCityTotal,
    total: flight + accommodation + living + visa + interCityTotal,
    countries: clusterCountries,
    daysPerCountry,
  };
}

// Bütçe aralıkları (USD)
export const BUDGET_RANGES = {
  dusuk: { min: 0, max: 1500, label: "Düşük" },
  orta: { min: 1500, max: 3000, label: "Orta" },
  yuksek: { min: 3000, max: Infinity, label: "Yüksek" },
};
