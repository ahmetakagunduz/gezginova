import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import './WrappedCards.css';

// Kart 1: Ülke/Şehir Sayısı
export function CardCountries({ data, year }) {
  return (
    <div className="wrapped-card card-countries">
      <span className="card-year">✈️ {year} WRAPPED</span>
      <div className="card-big-number animate-fade-in-up">{data.totalCountries}</div>
      <div className="card-label">ÜLKE</div>
      <div className="card-divider">•</div>
      <div className="card-big-number secondary">{data.totalCities}</div>
      <div className="card-label">ŞEHİR</div>
      <p className="card-subtitle">{year} yılında gezdiğin yerler</p>
      <span className="watermark">gezginova.com</span>
    </div>
  );
}

// Kart 2: En Çok Zaman
export function CardTopDestination({ data, year }) {
  return (
    <div className="wrapped-card card-top-dest">
      <span className="card-year">✈️ {year} WRAPPED</span>
      <div className="card-emoji">{data.topDestination?.country?.flag || '🌍'}</div>
      <div className="card-big-number">{data.topDestination?.days || 0}</div>
      <div className="card-label">GÜN</div>
      <h3 className="card-dest-name">{data.topDestination?.country?.name || '—'}</h3>
      {data.topDestination?.city && <p className="card-dest-city">{data.topDestination.city}</p>}
      <p className="card-subtitle">En çok vakit geçirdiğin yer</p>
      <span className="watermark">gezginova.com</span>
    </div>
  );
}

// Kart 3: Vizesiz Günler
export function CardVisaDays({ data, year }) {
  const pct = Math.min(100, Math.round((data.visaFreeDays / 365) * 100));
  return (
    <div className="wrapped-card card-visa-days">
      <span className="card-year">✈️ {year} WRAPPED</span>
      <div className="card-passport-icon">📘</div>
      <div className="card-big-number">{data.visaFreeDays}</div>
      <div className="card-label">GÜN</div>
      <p className="card-subtitle">Pasaportunu bu kadar gün kullandın</p>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>
      <p className="progress-label">{pct}% / 365 gün</p>
      <span className="watermark">gezginova.com</span>
    </div>
  );
}

// Kart 4: Yılın Rotası
export function CardLongestTrip({ data, year }) {
  return (
    <div className="wrapped-card card-longest">
      <span className="card-year">✈️ {year} WRAPPED</span>
      <h3 className="card-title">Yılın Rotası</h3>
      <div className="route-flags">
        {(data.longestTrip?.countries || []).map((c, i) => (
          <span key={i} className="route-flag">{c.flag}</span>
        ))}
      </div>
      <div className="card-big-number">{data.longestTrip?.days || 0}</div>
      <div className="card-label">GÜN</div>
      <div className="route-countries">
        {(data.longestTrip?.countries || []).map(c => c.name).join(' → ')}
      </div>
      {data.longestTrip?.startDate && (
        <p className="card-dates">
          {new Date(data.longestTrip.startDate).toLocaleDateString('tr-TR')} — {new Date(data.longestTrip.endDate).toLocaleDateString('tr-TR')}
        </p>
      )}
      <span className="watermark">gezginova.com</span>
    </div>
  );
}

// Kart 5: Kıta Dağılımı
export function CardContinents({ data, year }) {
  return (
    <div className="wrapped-card card-continents">
      <span className="card-year">✈️ {year} WRAPPED</span>
      <h3 className="card-title">Kıta Dağılımın</h3>
      <div className="pie-wrapper">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie data={data.continentDistribution || []} dataKey="value" cx="50%" cy="50%" outerRadius={80} label={({ name, value }) => `${name} (${value})`}>
              {(data.continentDistribution || []).map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="continent-legend">
        {(data.continentDistribution || []).map((item, i) => (
          <span key={i} className="legend-item">
            <span className="legend-dot" style={{ background: item.color }} />
            {item.name}: {item.value}
          </span>
        ))}
      </div>
      <span className="watermark">gezginova.com</span>
    </div>
  );
}

// Kart 6: Ömür Boyu
export function CardLifetime({ lifetime, year }) {
  return (
    <div className="wrapped-card card-lifetime">
      <span className="card-year">✈️ {year} WRAPPED</span>
      <h3 className="card-title">Ömür Boyu İstatistiklerin</h3>
      <div className="lifetime-circle">
        <div className="lifetime-pct">%{lifetime?.lifetimePercentage || 0}</div>
      </div>
      <p className="card-subtitle">Dünyanın bu kadarını gezdin</p>
      <div className="lifetime-stats">
        <div className="lifetime-stat">
          <span className="stat-num">{lifetime?.totalCountries || 0}</span>
          <span className="stat-label">Ülke</span>
        </div>
        <div className="lifetime-stat">
          <span className="stat-num">{lifetime?.continentsVisited || 0}</span>
          <span className="stat-label">Kıta</span>
        </div>
        <div className="lifetime-stat">
          <span className="stat-num">{lifetime?.totalTrips || 0}</span>
          <span className="stat-label">Seyahat</span>
        </div>
      </div>
      <span className="watermark">gezginova.com</span>
    </div>
  );
}

// Kart 7: Rozetler
export function CardBadges({ earnedBadges, year }) {
  return (
    <div className="wrapped-card card-badges">
      <span className="card-year">✈️ {year} WRAPPED</span>
      <h3 className="card-title">Kazandığın Rozetler</h3>
      <div className="badges-grid">
        {(earnedBadges || []).slice(0, 9).map((badge, i) => (
          <div key={i} className="badge-item">
            <span className="badge-icon">{badge.icon}</span>
            <span className="badge-name">{badge.name}</span>
          </div>
        ))}
      </div>
      {(!earnedBadges || earnedBadges.length === 0) && (
        <p className="card-subtitle">Henüz rozet kazanmadın. Seyahate çık!</p>
      )}
      <span className="watermark">gezginova.com</span>
    </div>
  );
}

// Kart 8: Yıl Karşılaştırma
export function CardComparison({ data, year }) {
  const { yearComparison } = data;
  const isUp = (yearComparison?.changePercent || 0) >= 0;
  return (
    <div className="wrapped-card card-comparison">
      <span className="card-year">✈️ {year} WRAPPED</span>
      <h3 className="card-title">Geçen Yıla Göre</h3>
      <div className={`comparison-arrow ${isUp ? 'up' : 'down'}`}>
        {isUp ? '↑' : '↓'}
      </div>
      <div className="card-big-number">
        %{Math.abs(yearComparison?.changePercent || 0)}
      </div>
      <p className="card-subtitle">
        {isUp ? 'daha fazla ülke gezdin' : 'daha az ülke gezdin'}
      </p>
      <div className="comparison-bars">
        <div className="comp-bar">
          <span className="comp-label">{year - 1}</span>
          <div className="comp-track"><div className="comp-fill prev" style={{ width: `${Math.min(100, (yearComparison?.lastYear || 0) * 10)}%` }} /></div>
          <span className="comp-val">{yearComparison?.lastYear || 0}</span>
        </div>
        <div className="comp-bar">
          <span className="comp-label">{year}</span>
          <div className="comp-track"><div className="comp-fill curr" style={{ width: `${Math.min(100, (yearComparison?.thisYear || 0) * 10)}%` }} /></div>
          <span className="comp-val">{yearComparison?.thisYear || 0}</span>
        </div>
      </div>
      <span className="watermark">gezginova.com</span>
    </div>
  );
}
