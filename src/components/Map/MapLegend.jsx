import './MapLegend.css';

const legendItems = [
  { key: 'vizesiz',      color: 'var(--visa-free)',     label: 'Vizesiz' },
  { key: 'kapida_vize',  color: 'var(--visa-arrival)',  label: 'Kapıda Vize' },
  { key: 'e_vize',       color: 'var(--visa-evisa)',    label: 'E-Vize' },
  { key: 'vize_gerekli', color: 'var(--visa-required)', label: 'Vize Gerekli' },
];

/**
 * MapLegend – compact color legend overlay for the interactive map.
 * Positioned at bottom-left with glassmorphism background.
 */
export default function MapLegend() {
  return (
    <div className="map-legend glass-panel">
      <h4 className="map-legend__title">Vize Durumu</h4>
      <ul className="map-legend__list">
        {legendItems.map((item) => (
          <li key={item.key} className="map-legend__item">
            <span
              className="map-legend__dot"
              style={{ backgroundColor: item.color }}
            />
            <span className="map-legend__label">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
