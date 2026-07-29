import { Plane, Train, Bus, MapPin, Trash2 } from 'lucide-react';

export default function StopCard({ stop, index, countries, updateStop, removeStop, isFirst }) {
  // Sort countries alphabetically for dropdown
  const sortedCountries = [...countries].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="stop-card">
      <div className="stop-card-header">
        <div className="stop-card-title">
          <MapPin size={18} className="text-primary" />
          {index + 1}. Durak
        </div>
        <div className="stop-card-actions">
          <button onClick={() => removeStop(stop.id)} title="Durağı Sil">
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      <div className="stop-card-body">
        <div className="input-group">
          <label>Gidilecek Ülke/Şehir</label>
          <select 
            value={stop.countryId}
            onChange={(e) => updateStop(stop.id, 'countryId', e.target.value)}
          >
            <option value="">Seçiniz...</option>
            {sortedCountries.map(c => (
              <option key={c.id} value={c.id}>
                {c.flag} {c.name} {c.popularCities?.length ? `(${c.popularCities[0]})` : ''}
              </option>
            ))}
          </select>
        </div>

        <div className="input-group">
          <label>Gece Sayısı</label>
          <input 
            type="number" 
            min="1" 
            max="60"
            value={stop.nights}
            onChange={(e) => updateStop(stop.id, 'nights', parseInt(e.target.value) || 1)}
          />
        </div>

        <div className="input-group" style={{ gridColumn: '1 / -1' }}>
          <label>{isFirst ? 'Türkiye\'den Ulaşım' : 'Önceki Duraktan Ulaşım'}</label>
          <div className="transport-selector">
            <button 
              className={`transport-btn ${stop.transportFromPrev === 'flight' ? 'active' : ''}`}
              onClick={() => updateStop(stop.id, 'transportFromPrev', 'flight')}
            >
              <Plane size={18} /> Uçak
            </button>
            <button 
              className={`transport-btn ${stop.transportFromPrev === 'train' ? 'active' : ''}`}
              onClick={() => updateStop(stop.id, 'transportFromPrev', 'train')}
            >
              <Train size={18} /> Tren
            </button>
            <button 
              className={`transport-btn ${stop.transportFromPrev === 'bus' ? 'active' : ''}`}
              onClick={() => updateStop(stop.id, 'transportFromPrev', 'bus')}
            >
              <Bus size={18} /> Otobüs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
