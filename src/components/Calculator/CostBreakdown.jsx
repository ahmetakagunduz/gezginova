import { useState, useEffect } from 'react';
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

    // Debounce to prevent spam
    const timeoutId = setTimeout(fetchFlights, 800);
    return () => clearTimeout(timeoutId);
  }, [stops, month, budgetLevel]); // Sadece stop referansı değiştiğinde (içeriği değişirse)

  // Avrupa içi tren otobüs tahminleri (USD)
  const getTransportCost = (type, countryId) => {
    if (type === 'flight') return flightPrices[countryId] || 250; // API gelene kadar tahmini 250
    if (type === 'train') return 60; 
    if (type === 'bus') return 35;
    return 0;
  };

  let totalUSD = 0;
  let hasMissingData = false;

  return (
    <div className="cost-breakdown">
      <h3 className="cost-breakdown-title">Maliyet Dökümü</h3>
      
      {validStops.length === 0 ? (
        <p className="text-secondary text-center py-4">Hesaplama için durak ekleyin.</p>
      ) : (
        <div className="breakdown-list">
          {validStops.map((stop, index) => {
            const country = countries.find(c => c.id === stop.countryId);
            if (!country) return null;

            // Ulaşım
            const transportCost = getTransportCost(stop.transportFromPrev, stop.countryId);
            
            // Konaklama ve Harcama
            const nightCost = country.dailyAccommodation?.[budgetLevel] || 0;
            const dailyCost = country.dailyCost?.[budgetLevel] || 0;
            
            const stopAccTotal = nightCost * stop.nights;
            const stopDailyTotal = dailyCost * stop.nights;
            
            const stopTotal = transportCost + stopAccTotal + stopDailyTotal;
            totalUSD += stopTotal;

            if (nightCost === 0 || dailyCost === 0) hasMissingData = true;

            const formatUSD = (val) => `$${val.toLocaleString()}`;

            return (
              <div key={stop.id} className="breakdown-subtotal" style={{ borderTop: index === 0 ? 'none' : undefined, marginTop: index === 0 ? 0 : undefined, paddingTop: index === 0 ? 0 : undefined }}>
                <div className="font-medium mb-2">{index + 1}. {country.name}</div>
                
                <div className="breakdown-item">
                  <div className="breakdown-item-label">
                    {stop.transportFromPrev === 'flight' ? '✈️ Uçuş' : stop.transportFromPrev === 'train' ? '🚆 Tren' : '🚌 Otobüs'}
                  </div>
                  <div className="breakdown-item-value">{loading && stop.transportFromPrev === 'flight' ? <Loader2 size={14} className="animate-spin" /> : formatUSD(transportCost)}</div>
                </div>
                
                <div className="breakdown-item">
                  <div className="breakdown-item-label">🏨 Konaklama ({stop.nights} gece)</div>
                  <div className="breakdown-item-value">{formatUSD(stopAccTotal)}</div>
                </div>
                
                <div className="breakdown-item">
                  <div className="breakdown-item-label">🍽️ Harcama ({stop.nights} gün)</div>
                  <div className="breakdown-item-value">{formatUSD(stopDailyTotal)}</div>
                </div>
              </div>
            );
          })}

          {/* Dönüş Bacağı */}
          {validStops.length > 0 && (() => {
            const lastStop = validStops[validStops.length - 1];
            // Dönüş uçuşu maliyeti: Gidişle aynı varsayıyoruz veya tahmini
            const returnCost = flightPrices[lastStop.countryId] || 250;
            totalUSD += returnCost;

            return (
              <div className="breakdown-subtotal">
                <div className="breakdown-item">
                  <div className="breakdown-item-label">✈️ Dönüş Uçuşu (Türkiye'ye)</div>
                  <div className="breakdown-item-value">{loading ? <Loader2 size={14} className="animate-spin" /> : `$${returnCost.toLocaleString()}`}</div>
                </div>
              </div>
            );
          })()}

          <div className="breakdown-total">
            <div className="breakdown-total-label">Tahmini Toplam Maliyet</div>
            <div className="breakdown-total-value">
              {Math.round(totalUSD * exchangeRate).toLocaleString('tr-TR')} ₺
            </div>
            <div className="breakdown-total-usd">
              (Yaklaşık ${totalUSD.toLocaleString('en-US')})
            </div>
          </div>
          
          {hasMissingData && (
            <p className="text-sm text-danger mt-4">
              * Bazı ülkelerin güncel {budgetLevel} bütçe verisi eksik olabilir.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
