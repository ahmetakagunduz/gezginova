import { Plus, Home, Plane } from 'lucide-react';
import StopCard from './StopCard';

export default function ItineraryBuilder({ stops, countries, addStop, removeStop, updateStop }) {
  return (
    <div className="itinerary-builder">
      <div className="itinerary-timeline">
        
        {/* Origin Card */}
        <div className="origin-card">
          <div className="stop-card-title">
            <Home size={18} className="text-primary" />
            Başlangıç: Türkiye (İstanbul)
          </div>
        </div>

        {/* Stops */}
        {stops.map((stop, index) => (
          <StopCard 
            key={stop.id}
            stop={stop}
            index={index}
            countries={countries}
            updateStop={updateStop}
            removeStop={removeStop}
            isFirst={index === 0}
          />
        ))}

        {/* Add Stop Button */}
        <button className="add-stop-btn" onClick={addStop}>
          <Plus size={20} /> Yeni Durak Ekle
        </button>

        {/* Return Card */}
        {stops.length > 0 && (
          <div className="return-card">
            <div className="stop-card-title">
              <Home size={18} className="text-secondary" />
              Dönüş: Türkiye (İstanbul)
            </div>
            <div className="text-sm text-secondary" style={{ marginTop: '0.5rem', opacity: 0.8 }}>
              (Son duraktan dönüş varsayılan olarak Uçak ile hesaplanır)
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
