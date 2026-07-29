// GezgiNova - Maliyet Hesaplama
import { getFlightPrice } from '../data/flightPrices';

export function calculateTripCost(country, departureCity, days, budgetLevel, dynamicFlights = null) {
  // budgetLevel is 'local' or 'gezgin' — used directly as key
  const flight = dynamicFlights && dynamicFlights[country.id] 
                 ? dynamicFlights[country.id] 
                 : getFlightPrice(departureCity, country.id, budgetLevel);
  const accommodation = days * (country.dailyAccommodation?.[budgetLevel] || 30);
  const living = days * (country.dailyCost?.[budgetLevel] || 20);
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

export function calculateClusterCost(cluster, countries, departureCity, days, budgetLevel, dynamicFlights = null) {
  const clusterCountries = countries.filter(c => cluster.countries.includes(c.id));
  if (clusterCountries.length === 0) return null;
  
  const daysPerCountry = Math.floor(days / clusterCountries.length);
  const extraDays = days % clusterCountries.length;
  
  // İlk ülkeye uçuş fiyatı
  const entryCountry = clusterCountries[0];
  const flight = dynamicFlights && dynamicFlights[entryCountry.id] 
                 ? dynamicFlights[entryCountry.id] 
                 : getFlightPrice(departureCity, entryCountry.id, budgetLevel);
  
  // Her ülke için konaklama ve yaşam maliyeti
  let accommodation = 0;
  let living = 0;
  let visa = 0;
  
  clusterCountries.forEach((c, i) => {
    const countryDays = daysPerCountry + (i === 0 ? extraDays : 0);
    accommodation += countryDays * (c.dailyAccommodation?.[budgetLevel] || 30);
    living += countryDays * (c.dailyCost?.[budgetLevel] || 20);
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

// Bütçe aralıkları (USD cinsinden günlük kişi başı limit)
export const BUDGET_RANGES = {
  local: { min: 0, max: 120, label: "Local" }, // Maksimum 120 USD/günlük toplam
  gezgin: { min: 120, max: Infinity, label: "Gezgin" },
};
