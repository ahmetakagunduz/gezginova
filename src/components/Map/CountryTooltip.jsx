import { useState, useEffect } from 'react';
import './CountryTooltip.css';

/**
 * Visa status label map (Turkish).
 */
const visaLabels = {
  vizesiz: 'Vizesiz',
  kapida_vize: 'Kapıda Vize',
  e_vize: 'E-Vize',
  vize_gerekli: 'Vize Gerekli',
};

/**
 * CountryTooltip – floating tooltip that follows cursor on map hover.
 *
 * @param {string}  countryName  – Display name of the country
 * @param {string}  visaStatus   – One of: vizesiz | kapida_vize | e_vize | vize_gerekli
 * @param {string}  flagEmoji    – Emoji flag for the country
 * @param {number}  x            – Mouse x (clientX)
 * @param {number}  y            – Mouse y (clientY)
 * @param {boolean} visible      – Whether to show the tooltip
 */
export default function CountryTooltip({ countryName, visaStatus, flagEmoji, x, y, visible }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (visible) {
      // Small delay so the fade-in plays
      const id = requestAnimationFrame(() => setMounted(true));
      return () => cancelAnimationFrame(id);
    }
    setMounted(false);
  }, [visible]);

  if (!visible || !countryName) return null;

  const label = visaLabels[visaStatus] || 'Bilinmiyor';
  const badgeClass = visaStatus ? `tooltip-badge badge-${visaStatus.replace('_', '-')}` : 'tooltip-badge';

  return (
    <div
      className={`country-tooltip ${mounted ? 'country-tooltip--visible' : ''}`}
      style={{
        left: x + 14,
        top: y - 10,
      }}
    >
      <div className="country-tooltip__content">
        <span className="country-tooltip__flag">{flagEmoji || '🏳️'}</span>
        <span className="country-tooltip__name">{countryName}</span>
        {visaStatus && (
          <span className={badgeClass}>{label}</span>
        )}
      </div>
    </div>
  );
}
