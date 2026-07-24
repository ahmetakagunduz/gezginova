// GezgiNova - Wrapped İstatistik Hesaplama
import { countries } from '../data/countries';

const CONTINENT_COLORS = {
  'Avrupa': '#3b82f6',
  'Asya': '#ef4444',
  'Afrika': '#f59e0b',
  'Güney Amerika': '#10b981',
  'Kuzey Amerika': '#8b5cf6',
  'Okyanusya': '#ec4899',
};

function getCountryById(id) {
  return countries.find(c => c.id === id);
}

function daysBetween(start, end) {
  const s = new Date(start);
  const e = new Date(end);
  return Math.max(1, Math.ceil((e - s) / (1000 * 60 * 60 * 24)));
}

export function calculateWrappedStats(trips, year) {
  const yearTrips = trips.filter(t => {
    const d = new Date(t.giristarihi || t.startDate);
    return d.getFullYear() === year && !t.planned;
  });

  const lastYearTrips = trips.filter(t => {
    const d = new Date(t.startDate);
    return d.getFullYear() === year - 1 && !t.planned;
  });

  // Toplam ülke ve şehir
  const countrySet = new Set(yearTrips.map(t => t.countryId));
  const citySet = new Set(yearTrips.map(t => t.city).filter(Boolean));
  const totalCountries = countrySet.size;
  const totalCities = citySet.size;

  // En çok zaman geçirilen yer
  const countryDays = {};
  const cityDays = {};
  let totalDaysAbroad = 0;
  let visaFreeDays = 0;

  yearTrips.forEach(t => {
    const days = daysBetween(t.startDate, t.endDate);
    totalDaysAbroad += days;
    countryDays[t.countryId] = (countryDays[t.countryId] || 0) + days;
    if (t.city) cityDays[t.city] = (cityDays[t.city] || 0) + days;
    
    const country = getCountryById(t.countryId);
    if (country && country.visaStatus === 'vizesiz') {
      visaFreeDays += days;
    }
  });

  let topDestination = { country: null, city: null, days: 0 };
  Object.entries(countryDays).forEach(([id, days]) => {
    if (days > topDestination.days) {
      const c = getCountryById(id);
      topDestination = { country: c, countryId: id, days };
    }
  });
  // En çok şehir
  let topCity = null;
  let topCityDays = 0;
  Object.entries(cityDays).forEach(([city, days]) => {
    if (days > topCityDays) { topCity = city; topCityDays = days; }
  });
  topDestination.city = topCity;

  // En uzun seyahat (rota)
  let longestTrip = { countries: [], days: 0, startDate: null, endDate: null };
  // Seyahatleri tarihe göre sırala ve ardışık olanları grupla
  const sorted = [...yearTrips].sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
  let currentTrip = [];
  sorted.forEach((t, i) => {
    if (currentTrip.length === 0) {
      currentTrip = [t];
    } else {
      const lastEnd = new Date(currentTrip[currentTrip.length - 1].endDate);
      const thisStart = new Date(t.startDate);
      const gap = (thisStart - lastEnd) / (1000 * 60 * 60 * 24);
      if (gap <= 2) {
        currentTrip.push(t);
      } else {
        checkLongestTrip(currentTrip);
        currentTrip = [t];
      }
    }
    if (i === sorted.length - 1) checkLongestTrip(currentTrip);
  });

  function checkLongestTrip(group) {
    if (group.length === 0) return;
    const days = daysBetween(group[0].startDate, group[group.length - 1].endDate);
    if (days > longestTrip.days) {
      longestTrip = {
        countries: [...new Set(group.map(t => t.countryId))].map(id => getCountryById(id)).filter(Boolean),
        days,
        startDate: group[0].startDate,
        endDate: group[group.length - 1].endDate,
      };
    }
  }

  // Kıta dağılımı
  const continentCounts = {};
  countrySet.forEach(id => {
    const c = getCountryById(id);
    if (c) {
      continentCounts[c.continent] = (continentCounts[c.continent] || 0) + 1;
    }
  });
  const continentDistribution = Object.entries(continentCounts).map(([name, value]) => ({
    name,
    value,
    color: CONTINENT_COLORS[name] || '#64748b',
  }));

  // Yıl karşılaştırma
  const lastYearCountries = new Set(lastYearTrips.map(t => t.countryId)).size;
  const changePercent = lastYearCountries > 0 
    ? Math.round(((totalCountries - lastYearCountries) / lastYearCountries) * 100)
    : totalCountries > 0 ? 100 : 0;

  return {
    year,
    totalCountries,
    totalCities,
    topDestination,
    visaFreeDays,
    totalDaysAbroad,
    longestTrip,
    continentDistribution,
    continentCounts,
    yearComparison: {
      thisYear: totalCountries,
      lastYear: lastYearCountries,
      changePercent,
    },
    tripCount: yearTrips.length,
  };
}

export function calculateLifetimeStats(trips) {
  const allTrips = trips.filter(t => !t.planned);
  const countrySet = new Set(allTrips.map(t => t.countryId));
  const continentSet = new Set();
  const continentCounts = {};
  const visitedCountryIds = [...countrySet];
  const tagCounts = {};

  countrySet.forEach(id => {
    const c = getCountryById(id);
    if (c) {
      continentSet.add(c.continent);
      continentCounts[c.continent] = (continentCounts[c.continent] || 0) + 1;
      (c.tags || []).forEach(tag => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      });
    }
  });

  const totalCountries = countrySet.size;
  const totalPossible = 197;
  const lifetimePercentage = Math.round((totalCountries / totalPossible) * 100);

  // Seyahat süreleri
  let longestTripDays = 0;
  let shortestTripDays = Infinity;
  allTrips.forEach(t => {
    const days = daysBetween(t.startDate, t.endDate);
    if (days > longestTripDays) longestTripDays = days;
    if (days < shortestTripDays) shortestTripDays = days;
  });
  if (shortestTripDays === Infinity) shortestTripDays = 0;

  return {
    totalCountries,
    lifetimePercentage,
    continentsVisited: continentSet.size,
    continentCounts,
    visitedCountryIds,
    tagCounts,
    longestTripDays,
    shortestTripDays,
    totalTrips: allTrips.length,
  };
}
