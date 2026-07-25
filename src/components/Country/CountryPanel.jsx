import Link from 'next/link';
import { X, MapPin, Coins, Globe, Calendar, Building2, Landmark } from 'lucide-react';
import './CountryPanel.css';

/**
 * Visa status labels & badge classes (Turkish).
 */
const VISA_META = {
  vizesiz:      { label: 'Vizesiz',      badge: 'badge-vizesiz' },
  kapida_vize:  { label: 'Kapıda Vize',  badge: 'badge-kapida' },
  e_vize:       { label: 'E-Vize',       badge: 'badge-evize' },
  vize_gerekli: { label: 'Vize Gerekli', badge: 'badge-vize' },
};

/**
 * Budget tier labels.
 */
const BUDGET_TIERS = [
  { key: 'mid',    label: 'Local',     icon: '🏘️' },
  { key: 'high',   label: 'Gezgin',    icon: '🧭' },
];

/**
 * CountryPanel – slide-in detail panel for a selected country.
 *
 * @param {object}   country        – Full country data object
 * @param {boolean}  isOpen         – Whether the panel is visible
 * @param {Function} onClose        – Callback to close the panel
 * @param {Function} onAddTrip      – Callback to add this country to trips
 */
import { useState, useEffect } from 'react';

export default function CountryPanel({ country, stats, isOpen, onClose, onAddTrip }) {
  const [exchangeRate, setExchangeRate] = useState(35);

  useEffect(() => {
    fetch('/api/exchange-rate')
      .then(res => res.json())
      .then(data => {
        if (data && data.rate) {
          setExchangeRate(data.rate);
        }
      })
      .catch(err => console.error("Could not fetch exchange rate:", err));
  }, []);

  if (!isOpen) return null;

  // ----------------------------------------------------
  // DEFAULT VIEW (No Country Selected)
  // ----------------------------------------------------
  if (!country) {
    return (
      <aside className="country-panel country-panel--default">
        <div className="country-panel__scroll">
          <header className="country-panel__header-default">
            <h2>🌍 Dünyayı Keşfet</h2>
            <p>Haritadan bir ülke seçerek vize durumunu, günlük maliyetleri ve rotaları inceleyebilirsiniz.</p>
          </header>

          {stats && (
            <div className="country-panel__stats-grid">
              <div className="stat-card stat-card--vizesiz">
                <span className="stat-icon">🆓</span>
                <span className="stat-number">{stats.vizesiz}</span>
                <span className="stat-label">Vizesiz</span>
              </div>
              <div className="stat-card stat-card--kapida">
                <span className="stat-icon">🛂</span>
                <span className="stat-number">{stats.kapida}</span>
                <span className="stat-label">Kapıda Vize</span>
              </div>
              <div className="stat-card stat-card--evize">
                <span className="stat-icon">📱</span>
                <span className="stat-number">{stats.evize}</span>
                <span className="stat-label">E-Vize</span>
              </div>
              <div className="stat-card stat-card--total">
                <span className="stat-icon">🌍</span>
                <span className="stat-number">{stats.total}</span>
                <span className="stat-label">Toplam Özgürlük</span>
              </div>
            </div>
          )}

          <div className="country-panel__hint">
            <Globe size={32} className="hint-icon" />
            <p>GezgiNova size en uygun seyahat rotasını çizer, bütçe hesaplar ve geçmiş seyahatlerinizden yıllık özet (Wrapped) oluşturur.</p>
          </div>
        </div>
      </aside>
    );
  }

  // ----------------------------------------------------
  // COUNTRY DETAILS VIEW
  // ----------------------------------------------------
  const visa = VISA_META[country.visaStatus] || VISA_META.vize_gerekli;

  return (
    <aside
      className="country-panel"
      role="region"
      aria-label={`${country.name} detayları`}
    >
      <button className="country-panel__close" onClick={onClose} aria-label="Kapat">
        <X size={20} />
      </button>

      <div className="country-panel__scroll">
        {/* Header */}
        <header className="country-panel__header">
          <span className="country-panel__flag">{country.flag || '🏳️'}</span>
          <h2 className="country-panel__name">{country.name}</h2>
          <span className={`badge ${visa.badge}`}>{visa.label}</span>
        </header>

        {/* Allowed stay */}
        {country.allowedDays && (
          <div className="country-panel__stay">
            <Calendar size={16} />
            <div>
              <span className="country-panel__stay-days">{country.allowedDays} Gün</span>
              {country.allowedDaysNote && (
                <p className="country-panel__stay-note">{country.allowedDaysNote}</p>
              )}
            </div>
          </div>
        )}

        {/* Info grid */}
        <div className="country-panel__info-grid">
          {country.capital && (
            <div className="country-panel__info-item">
              <Landmark size={16} className="country-panel__info-icon" />
              <div>
                <span className="country-panel__info-label">Başkent</span>
                <span className="country-panel__info-value">{country.capital}</span>
              </div>
            </div>
          )}
          {country.currency && (
            <div className="country-panel__info-item">
              <Coins size={16} className="country-panel__info-icon" />
              <div>
                <span className="country-panel__info-label">Para Birimi</span>
                <span className="country-panel__info-value">{country.currency}</span>
              </div>
            </div>
          )}
          {country.continent && (
            <div className="country-panel__info-item">
              <Globe size={16} className="country-panel__info-icon" />
              <div>
                <span className="country-panel__info-label">Kıta</span>
                <span className="country-panel__info-value">{country.continent}</span>
              </div>
            </div>
          )}
        </div>

        {/* Budget section */}
        {country.dailyCost && country.dailyAccommodation && (
          <section className="country-panel__budget">
            <h3 className="country-panel__section-title">
              <Coins size={16} /> Günlük Tahmini Bütçe
            </h3>
            <div className="country-panel__budget-grid">
              {BUDGET_TIERS.map((tier) => {
                const cost = country.dailyCost[tier.key];
                const acc = country.dailyAccommodation[tier.key];
                if (cost == null || acc == null) return null;
                const total = cost + acc;
                return (
                   <div key={tier.key} className={`country-panel__budget-card budget-${tier.key}`}>
                     <span className="budget-card__icon">{tier.icon}</span>
                     <span className="budget-card__label">{tier.label}</span>
                     <span className="budget-card__amount">{Math.round(total * exchangeRate).toLocaleString('tr-TR')} ₺</span>
                     <div className="budget-card__details">
                       <span><Building2 size={12} /> Konaklama: {Math.round(acc * exchangeRate).toLocaleString('tr-TR')} ₺</span>
                       <span><MapPin size={12} /> Harcama: {Math.round(cost * exchangeRate).toLocaleString('tr-TR')} ₺</span>
                     </div>
                   </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Popular cities */}
        {country.popularCities && country.popularCities.length > 0 && (
          <section className="country-panel__cities">
            <h3 className="country-panel__section-title">
              <MapPin size={16} /> Popüler Şehirler
            </h3>
            <div className="country-panel__city-tags">
              {country.popularCities.map((city) => (
                <span key={city} className="country-panel__city-tag">{city}</span>
              ))}
            </div>
          </section>
        )}

        {/* Description */}
        {country.description && (
          <section className="country-panel__description">
            <p>{country.description}</p>
          </section>
        )}

        {/* Actions */}
        <div className="country-panel__actions">
          <Link
            href={`/planner?country=${country.id}`}
            className="btn btn-primary btn-lg country-panel__action-btn"
          >
            🗺️ Bu Ülkeye Rota Planla
          </Link>
          <button
            className="btn btn-secondary btn-lg country-panel__action-btn"
            onClick={() => onAddTrip?.(country)}
          >
            ✈️ Gezdiğime Ekle
          </button>
        </div>
      </div>
    </aside>
  );
}
