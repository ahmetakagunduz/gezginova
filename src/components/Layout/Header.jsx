import Navigation from './Navigation';
import { countries } from '../../data/countries';
import './Header.css';

/**
 * Header – fixed top bar with logo, stats, and navigation.
 */
export default function Header() {
  const visaFreeCount = countries.filter(c => c.visaStatus === 'vizesiz').length;
  const visaArrivalCount = countries.filter(c => c.visaStatus === 'kapida_vize').length;
  const eVisaCount = countries.filter(c => c.visaStatus === 'e_vize').length;

  const STATS = [
    { icon: '🌍', target: visaFreeCount, suffix: ' Vizesiz Ülke', color: 'var(--visa-free)' },
    { icon: '🛂', target: visaArrivalCount, suffix: ' Kapıda Vize', color: 'var(--visa-arrival)' },
    { icon: '📱', target: eVisaCount, suffix: ' E-Vize', color: 'var(--visa-evisa)' },
    { icon: '🏆', target: 45, prefix: '#', suffix: ' Dünya Sıralaması', color: 'var(--accent-amber)' },
  ];
  return (
    <header className="header">
      <div className="header__inner">
        {/* Logo / brand */}
        <div className="header__brand">
          <h1 className="header__logo">
            <span className="text-gradient">GezgiNova</span>
          </h1>
          <span className="header__subtitle">Türk Pasaportu Seyahat Rehberi</span>
        </div>

        {/* Stats bar */}
        <div className="header__stats">
          {STATS.map((stat, i) => (
            <div key={i} className="header__stat">
              <span className="header__stat-icon">{stat.icon}</span>
              <span className="header__stat-value">
                {stat.prefix || ''}{stat.target}{stat.suffix}
              </span>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <Navigation />
      </div>
    </header>
  );
}
