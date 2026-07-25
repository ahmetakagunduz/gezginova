import { useState, useRef } from 'react';
import { CardCountries, CardTopDestination, CardVisaDays, CardLongestTrip, CardContinents, CardLifetime, CardBadges, CardComparison } from './WrappedCards';
import ShareButton from './ShareButton';
import './WrappedViewer.css';

const CARDS = [
  { id: 'countries', label: 'Ülke/Şehir' },
  { id: 'topDest', label: 'En Çok Zaman' },
  { id: 'visaDays', label: 'Vizesiz Günler' },
  { id: 'longest', label: 'Yılın Rotası' },
  { id: 'continents', label: 'Kıtalar' },
  { id: 'lifetime', label: 'Ömür Boyu' },
  { id: 'badges', label: 'Rozetler' },
  { id: 'comparison', label: 'Karşılaştırma' },
];

export default function WrappedViewer({ wrappedData, lifetime, earnedBadges, year }) {
  const [current, setCurrent] = useState(0);
  const cardRef = useRef(null);

  const goNext = () => setCurrent(c => Math.min(c + 1, CARDS.length - 1));
  const goPrev = () => setCurrent(c => Math.max(c - 1, 0));

  const renderCard = () => {
    const props = { data: wrappedData, year };
    switch (CARDS[current].id) {
      case 'countries': return <CardCountries {...props} />;
      case 'topDest': return <CardTopDestination {...props} />;
      case 'visaDays': return <CardVisaDays {...props} />;
      case 'longest': return <CardLongestTrip {...props} />;
      case 'continents': return <CardContinents {...props} />;
      case 'lifetime': return <CardLifetime lifetime={lifetime} year={year} />;
      case 'badges': return <CardBadges earnedBadges={earnedBadges} year={year} />;
      case 'comparison': return <CardComparison {...props} />;
      default: return null;
    }
  };

  if (!wrappedData || wrappedData.totalCountries === 0) {
    return (
      <div className="wrapped-empty">
        <span className="empty-icon">🎁</span>
        <h3>{year} Wrapped'ın Hazır Değil</h3>
        <p>Bu yıla ait seyahat ekle ve Wrapped'ını oluştur!</p>
      </div>
    );
  }

  return (
    <div className="wrapped-viewer">
      <h2 className="wrapped-title">
        <span className="text-gradient-warm">{year} Wrapped</span>
      </h2>

      <div className="wrapped-stage">
        <button className="nav-arrow left" onClick={goPrev} disabled={current === 0}>‹</button>
        
        <div className="card-container" ref={cardRef}>
          {renderCard()}
        </div>

        <button className="nav-arrow right" onClick={goNext} disabled={current === CARDS.length - 1}>›</button>
      </div>

      {/* Dots */}
      <div className="wrapped-dots">
        {CARDS.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>

      <div className="wrapped-card-label">{CARDS[current].label} ({current + 1}/{CARDS.length})</div>

      <ShareButton targetRef={cardRef} fileName={`gezginova-wrapped-${year}-${CARDS[current].id}`} />
    </div>
  );
}
