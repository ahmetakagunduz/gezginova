import { useState, useEffect, useMemo } from 'react';
import { Loader2 } from 'lucide-react';

export default function CostBreakdown({ stops, countries, budgetLevel, month, exchangeRate }) {
  const [flightPrices, setFlightPrices] = useState({});
  const [loading, setLoading] = useState(false);

  // Sadece dolu durakları filtrele
  const validStops = stops.filter(s => s.countryId);

  // Uçuş fiyatlarını API'den çek
  useEffect(() => {
    if (validStops.length === 0) return;

    const fetchFlights = async () => {
      setLoading(true);
      try {
        const dests = validStops.map(s => s.countryId);
        const res = await fetch('/api/flights', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ destinations: dests, departure: 'IST', month, budgetLevel })
        });
        const data = await res.json();
        if (data.success) {
          setFlightPrices(data.prices);
        }
      } catch (err) {
        console.error("Uçuş fiyatları alınamadı", err);
      } finally {
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(fetchFlights, 800);
    return () => clearTimeout(timeoutId);
  }, [stops, month, budgetLevel]); 

  // Ulaşım maliyeti mantığı
  const getTransportCost = (type, countryId, isFirstLeg) => {
    if (type === 'flight') {
      const roundTrip = flightPrices[countryId] || 250;
      if (isFirstLeg) {
        // Türkiye'den tek yön (gidiş-dönüşün ~%60'ı)
        return Math.round(roundTrip * 0.6);
      } else {
        // Avrupa içi / Bölge içi tek yön uçuş tahmini
        return 90;
      }
    }
    if (type === 'train') return 60; 
    if (type === 'bus') return 35;
    return 0;
  };

  // Tüm maliyetleri hesapla (useMemo ile render optimizasyonu ve pure function)
  const breakdownData = useMemo(() => {
    let totalUSD = 0;
    let hasMissingData = false;
    const items = [];

    validStops.forEach((stop, index) => {
      const country = countries.find(c => c.id === stop.countryId);
      if (!country) return;

      const isFirstLeg = index === 0;
      const transportCost = getTransportCost(stop.transportFromPrev, stop.countryId, isFirstLeg);
      
      const nightCost = country.dailyAccommodation?.[budgetLevel] || 0;
      const dailyCost = country.dailyCost?.[budgetLevel] || 0;
      
      if (nightCost === 0 || dailyCost === 0) hasMissingData = true;

      const stopAccTotal = nightCost * stop.nights;
      const stopDailyTotal = dailyCost * stop.nights;
      const stopTotal = transportCost + stopAccTotal + stopDailyTotal;
      
      totalUSD += stopTotal;

      items.push({
        stop,
        country,
        transportCost,
        stopAccTotal,
        stopDailyTotal,
        isFirstLeg
      });
    });

    let returnCost = 0;
    if (validStops.length > 0) {
      const lastStop = validStops[validStops.length - 1];
      const roundTrip = flightPrices[lastStop.countryId] || 250;
      returnCost = Math.round(roundTrip * 0.6); // Dönüş tek yön tahmini
      totalUSD += returnCost;
    }

    return { totalUSD, hasMissingData, items, returnCost };
  }, [validStops, countries, budgetLevel, flightPrices]);

  const formatUSD = (val) => `$${val.toLocaleString('en-US')}`;

  return (
    <div className="cost-breakdown">
      <h3 className="cost-breakdown-title">Maliyet Dökümü</h3>
      
      {validStops.length === 0 ? (
        <p className="text-secondary text-center py-4">Hesaplama için durak ekleyin.</p>
      ) : (
        <div className="breakdown-list">
          {breakdownData.items.map((item, index) => (
            <div key={item.stop.id} className="breakdown-subtotal" style={{ borderTop: index === 0 ? 'none' : undefined, marginTop: index === 0 ? 0 : undefined, paddingTop: index === 0 ? 0 : undefined }}>
              <div className="font-medium mb-2">{index + 1}. {item.country.name}</div>
              
              <div className="breakdown-item">
                <div className="breakdown-item-label">
                  {item.stop.transportFromPrev === 'flight' ? '✈️ Uçuş' : item.stop.transportFromPrev === 'train' ? '🚆 Tren' : '🚌 Otobüs'}
                </div>
                <div className="breakdown-item-value">
                  {loading && item.stop.transportFromPrev === 'flight' ? <Loader2 size={14} className="animate-spin" /> : formatUSD(item.transportCost)}
                </div>
              </div>
              
              <div className="breakdown-item">
                <div className="breakdown-item-label">🏨 Konaklama ({item.stop.nights} gece)</div>
                <div className="breakdown-item-value">{formatUSD(item.stopAccTotal)}</div>
              </div>
              
              <div className="breakdown-item">
                <div className="breakdown-item-label">🍽️ Harcama ({item.stop.nights} gün)</div>
                <div className="breakdown-item-value">{formatUSD(item.stopDailyTotal)}</div>
              </div>
            </div>
          ))}

          {/* Dönüş Bacağı */}
          {validStops.length > 0 && (
            <div className="breakdown-subtotal">
              <div className="breakdown-item">
                <div className="breakdown-item-label">✈️ Dönüş Uçuşu (Türkiye'ye)</div>
                <div className="breakdown-item-value">
                  {loading ? <Loader2 size={14} className="animate-spin" /> : formatUSD(breakdownData.returnCost)}
                </div>
              </div>
            </div>
          )}

          <div className="breakdown-total">
            <div className="breakdown-total-label">Tahmini Toplam Maliyet</div>
            <div className="breakdown-total-value">
              {Math.round(breakdownData.totalUSD * exchangeRate).toLocaleString('tr-TR')} ₺
            </div>
            <div className="breakdown-total-usd">
              (Yaklaşık {formatUSD(breakdownData.totalUSD)})
            </div>
          </div>
          
          {breakdownData.hasMissingData && (
            <p className="text-sm text-danger mt-4">
              * Bazı ülkelerin güncel {budgetLevel} bütçe verisi eksik olabilir.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
