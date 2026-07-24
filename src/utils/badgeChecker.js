// GezgiNova - Rozet Kontrol Motoru
import { badges } from '../data/badges';
import { calculateLifetimeStats, calculateWrappedStats } from './wrappedCalculator';

export function checkBadges(trips, year = new Date().getFullYear()) {
  const lifetime = calculateLifetimeStats(trips);
  const yearly = calculateWrappedStats(trips, year);

  const stats = {
    ...lifetime,
    yearlyTripCount: yearly.tripCount,
    yearlyVisaFreeCount: new Set(
      trips
        .filter(t => {
          const d = new Date(t.startDate);
          return d.getFullYear() === year && !t.planned;
        })
        .map(t => t.countryId)
    ).size,
    yearlyDaysAbroad: yearly.totalDaysAbroad,
    hasNewYearTrip: trips.some(t => {
      const start = new Date(t.startDate);
      const end = new Date(t.endDate);
      const newYear = new Date(year, 0, 1);
      return start <= newYear && end >= newYear && !t.planned;
    }),
    summerCountries: new Set(
      trips
        .filter(t => {
          const d = new Date(t.startDate);
          return d.getFullYear() === year && d.getMonth() >= 5 && d.getMonth() <= 7 && !t.planned;
        })
        .map(t => t.countryId)
    ).size,
  };

  return badges.filter(badge => {
    try {
      return badge.condition(stats);
    } catch {
      return false;
    }
  });
}
