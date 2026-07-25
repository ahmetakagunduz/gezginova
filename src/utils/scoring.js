// GezgiNova - Rota Skorlama Algoritması
import { calculateTripCost, calculateClusterCost, BUDGET_RANGES } from './costCalculator';
import { clusters } from '../data/clusters';

// Tarz etiket eşleşme skoru (Jaccard benzeri)
function calculateStyleScore(countryTags, userTags) {
  if (!userTags || userTags.length === 0) return 0.5;
  if (!countryTags || countryTags.length === 0) return 0;
  const intersection = userTags.filter(t => countryTags.includes(t)).length;
  return intersection / userTags.length;
}

// Bütçe uygunluk skoru (Günlük maliyet üzerinden)
function calculateBudgetScore(totalCost, budgetLevel, days = 7) {
  const range = BUDGET_RANGES[budgetLevel];
  if (!range) return 0.5;
  
  const perDayCost = totalCost / days;
  
  if (perDayCost >= range.min && perDayCost <= range.max) {
    return 1.0; // Tam bütçe içinde
  }
  
  if (perDayCost < range.min) {
    return 0.8; // Bütçenin altında - tasarruf
  }
  
  // Bütçenin üzerinde
  const overPercent = ((perDayCost - range.max) / range.max) * 100;
  if (overPercent <= 20) return 0.5; // Biraz üstünde
  if (overPercent <= 50) return 0.2; // Epey üstünde
  return 0.05; // Çok üstünde
}

// Vize filtresi
function filterByVisa(countryList, visaPreference) {
  const allowed = {
    'sadece_vizesiz': ['vizesiz'],
    'vizesiz_evize': ['vizesiz', 'e_vize'],
    'hepsi': ['vizesiz', 'kapida_vize', 'e_vize'],
  };
  const validStatuses = allowed[visaPreference] || allowed['hepsi'];
  return countryList.filter(c => validStatuses.includes(c.visaStatus));
}

// Ana fonksiyon: En iyi rotaları bul
export async function getTopRoutes(countryList, preferences, count = 5) {
  const {
    departureCity = 'IST',
    tags = [],
    days = 7,
    budgetLevel = 'local',
    visaPreference = 'hepsi'
  } = preferences;

  // 1. Vize filtresi
  const eligible = filterByVisa(countryList, visaPreference);

  // 1.5. Dinamik uçuş fiyatlarını API'den çek (Simülasyon API'si)
  let dynamicFlights = null;
  try {
    const destinations = eligible.map(c => c.id);
    const res = await fetch('/api/flights', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        destinations, 
        departure: departureCity, 
        month: preferences.travelMonth || (new Date().getMonth() + 1), 
        budgetLevel 
      })
    });
    const data = await res.json();
    if (data && data.success) {
      dynamicFlights = data.prices;
    }
  } catch (err) {
    console.error("Flight API Hatası (Fallback kullanılacak):", err);
  }

  // 2. Her ülke için skor hesapla
  const scored = eligible.map(country => {
    const styleScore = calculateStyleScore(country.tags, tags);
    const cost = calculateTripCost(country, departureCity, days, budgetLevel, dynamicFlights);
    const budgetScore = calculateBudgetScore(cost.total, budgetLevel, days);
    const range = BUDGET_RANGES[budgetLevel];
    
    const finalScore = (styleScore * 0.5) + (budgetScore * 0.5);
    
    const perDayCost = cost.total / days;
    
    return {
      country,
      score: Math.round(finalScore * 100),
      styleScore: Math.round(styleScore * 100),
      budgetScore: Math.round(budgetScore * 100),
      cost,
      isOverBudget: perDayCost > (range?.max || Infinity),
      overBudgetPercent: range?.max ? Math.round(((perDayCost - range.max) / range.max) * 100) : 0,
      isCluster: false,
    };
  });

  // 3. Sırala
  scored.sort((a, b) => b.score - a.score);

  // 4. En iyi tekli rotalar
  const topSingle = scored.slice(0, count);

  // 5. Küme rotaları (Local ve Gezgin bütçe için)
  const clusterRoutes = [];
  for (const cluster of clusters) {
      const clusterCountries = countryList.filter(c => cluster.countries.includes(c.id));
      const eligibleCluster = filterByVisa(clusterCountries, visaPreference);
      
      if (eligibleCluster.length >= 2) {
        const clusterCost = calculateClusterCost(cluster, countryList, departureCity, days, budgetLevel, dynamicFlights);
        if (!clusterCost) continue;
        
        const avgStyleScore = eligibleCluster.reduce((sum, c) => sum + calculateStyleScore(c.tags, tags), 0) / eligibleCluster.length;
        const budgetScoreCluster = calculateBudgetScore(clusterCost.total, budgetLevel, days);
        const finalScore = (avgStyleScore * 0.5) + (budgetScoreCluster * 0.5);
        const range = BUDGET_RANGES[budgetLevel];
        
        const perDayCost = clusterCost.total / days;

        clusterRoutes.push({
          cluster,
          countries: eligibleCluster,
          score: Math.round(finalScore * 100),
          styleScore: Math.round(avgStyleScore * 100),
          budgetScore: Math.round(budgetScoreCluster * 100),
          cost: clusterCost,
          isOverBudget: perDayCost > (range?.max || Infinity),
          overBudgetPercent: range?.max ? Math.round(((perDayCost - range.max) / range.max) * 100) : 0,
          isCluster: true,
        });
      }
    }
    clusterRoutes.sort((a, b) => b.score - a.score);

  return {
    single: topSingle,
    cluster: clusterRoutes.slice(0, 3),
  };
}
