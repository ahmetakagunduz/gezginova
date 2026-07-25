import { useState, useCallback } from 'react';
import { countries } from '../../data/countries';
import './TripManager.css';

export default function TripManager({ trips, onAddTrip, onDeleteTrip }) {
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState('');
  const [form, setForm] = useState({
    countryId: '', city: '', startDate: '', endDate: '', planned: false
  });

  const filtered = search
    ? countries.filter(c => c.name.toLowerCase().includes(search.toLowerCase()) || c.nameEn.toLowerCase().includes(search.toLowerCase()))
    : [];

  const handleSelectCountry = (c) => {
    setForm(f => ({ ...f, countryId: c.id }));
    setSearch(c.flag + ' ' + c.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.countryId || !form.startDate || !form.endDate) return;
    onAddTrip({
      id: Date.now().toString(),
      ...form,
    });
    setForm({ countryId: '', city: '', startDate: '', endDate: '', planned: false });
    setSearch('');
    setShowForm(false);
  };

  const selectedCountry = countries.find(c => c.id === form.countryId);

  return (
    <div className="trip-manager">
      <div className="trip-manager-header">
        <h2>✈️ Seyahatlerim</h2>
        <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'İptal' : '+ Yeni Seyahat Ekle'}
        </button>
      </div>

      {showForm && (
        <form className="trip-form glass-panel animate-fade-in-up" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Ülke</label>
            <input
              className="form-input"
              placeholder="Ülke ara..."
              value={search}
              onChange={e => { setSearch(e.target.value); setForm(f => ({ ...f, countryId: '' })); }}
            />
            {search && !form.countryId && filtered.length > 0 && (
              <div className="country-dropdown">
                {filtered.slice(0, 8).map(c => (
                  <div key={c.id} className="country-option" onClick={() => handleSelectCountry(c)}>
                    {c.flag} {c.name}
                    <span className={`badge badge-${c.visaStatus === 'vizesiz' ? 'vizesiz' : c.visaStatus === 'kapida_vize' ? 'kapida' : c.visaStatus === 'e_vize' ? 'evize' : 'vize'}`}>
                      {c.visaStatus === 'vizesiz' ? 'Vizesiz' : c.visaStatus === 'kapida_vize' ? 'Kapıda' : c.visaStatus === 'e_vize' ? 'E-Vize' : 'Vize'}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="form-group">
            <label className="form-label">Şehir</label>
            <input className="form-input" placeholder="Şehir adı" value={form.city}
              onChange={e => setForm(f => ({ ...f, city: e.target.value }))} />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Giriş Tarihi</label>
              <input type="date" className="form-input" value={form.startDate}
                onChange={e => setForm(f => ({ ...f, startDate: e.target.value }))} />
            </div>
            <div className="form-group">
              <label className="form-label">Çıkış Tarihi</label>
              <input type="date" className="form-input" value={form.endDate}
                onChange={e => setForm(f => ({ ...f, endDate: e.target.value }))} />
            </div>
          </div>
          <div className="form-group form-row-inline">
            <label className="form-label">Planlanmış seyahat</label>
            <div className={`toggle-switch ${form.planned ? 'active' : ''}`}
              onClick={() => setForm(f => ({ ...f, planned: !f.planned }))} />
          </div>
          <button type="submit" className="btn btn-primary btn-lg" disabled={!form.countryId || !form.startDate || !form.endDate}>
            Seyahat Ekle
          </button>
        </form>
      )}

      {trips.length === 0 ? (
        <div className="empty-state">
          <span className="empty-icon">🌍</span>
          <h3>Henüz seyahat eklenmemiş</h3>
          <p>İlk seyahatini ekle ve Wrapped'ını oluştur!</p>
        </div>
      ) : (
        <div className="trip-list">
          {[...trips].sort((a, b) => new Date(b.startDate) - new Date(a.startDate)).map(trip => {
            const c = countries.find(co => co.id === trip.countryId);
            const days = Math.ceil((new Date(trip.endDate) - new Date(trip.startDate)) / (1000*60*60*24));
            return (
              <div key={trip.id} className={`trip-item glass-panel ${trip.planned ? 'planned' : ''}`}>
                <div className="trip-info">
                  <span className="trip-flag">{c?.flag || '🏳️'}</span>
                  <div className="trip-details">
                    <strong>{c?.name || 'Bilinmeyen'}</strong>
                    {trip.city && <span className="trip-city">{trip.city}</span>}
                    <span className="trip-dates">
                      {new Date(trip.startDate).toLocaleDateString('tr-TR')} — {new Date(trip.endDate).toLocaleDateString('tr-TR')}
                    </span>
                  </div>
                  <span className="trip-days-badge">{days} gün</span>
                  {trip.planned && <span className="badge badge-evize">Planlanmış</span>}
                </div>
                <button className="btn btn-ghost btn-sm" onClick={() => onDeleteTrip(trip.id)}>🗑️</button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
