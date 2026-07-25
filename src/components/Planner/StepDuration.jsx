import { useEffect, useRef } from 'react'
import './StepDuration.css'

const QUICK_OPTIONS = [
  { label: 'Hafta Sonu', days: 3 },
  { label: '1 Hafta', days: 7 },
  { label: '2 Hafta', days: 14 },
  { label: '3 Hafta', days: 21 },
  { label: '1 Ay', days: 30 },
]

const MONTHS = [
  { value: 1, label: 'Ocak' }, { value: 2, label: 'Şubat' }, { value: 3, label: 'Mart' },
  { value: 4, label: 'Nisan' }, { value: 5, label: 'Mayıs' }, { value: 6, label: 'Haziran' },
  { value: 7, label: 'Temmuz' }, { value: 8, label: 'Ağustos' }, { value: 9, label: 'Eylül' },
  { value: 10, label: 'Ekim' }, { value: 11, label: 'Kasım' }, { value: 12, label: 'Aralık' }
];

export default function StepDuration({ days = 7, month = 1, onDaysChange, onMonthChange }) {
  const sliderRef = useRef(null)

  // Update CSS custom property for gradient progress
  useEffect(() => {
    if (sliderRef.current) {
      const percent = ((days - 3) / (30 - 3)) * 100
      sliderRef.current.style.setProperty('--slider-progress', `${percent}%`)
    }
  }, [days])

  return (
    <div className="step-duration">
      <h2 className="step-title">Kaç Gün Seyahat Etmek İstiyorsun?</h2>
      <p className="step-subtitle">Süreyi belirle, biz rotayı çizelim</p>

      <div className="duration-display">
        <span className="duration-number" key={days}>
          {days}
        </span>
        <span className="duration-unit">GÜN</span>
      </div>

      <div className="duration-slider-container">
        <span className="duration-min">3</span>
        <input
          ref={sliderRef}
          type="range"
          min={3}
          max={30}
          value={days}
          onChange={(e) => onDaysChange(Number(e.target.value))}
          className="duration-slider"
        />
        <span className="duration-max">30</span>
      </div>

      <div className="duration-quick">
        {QUICK_OPTIONS.map((opt) => (
          <button
            key={opt.days}
            className={`duration-quick-btn ${days === opt.days ? 'active' : ''}`}
            onClick={() => onDaysChange(opt.days)}
            type="button"
          >
            {opt.label}
            <span className="duration-quick-days">({opt.days})</span>
          </button>
        ))}
      </div>

      <h3 className="step-subtitle" style={{ marginTop: '2rem' }}>Hangi Ay Gideceksiniz?</h3>
      <div className="month-grid">
        {MONTHS.map(m => (
          <button
            key={m.value}
            className={`month-btn ${month === m.value ? 'active' : ''}`}
            onClick={() => onMonthChange(m.value)}
            type="button"
          >
            {m.label}
          </button>
        ))}
      </div>
    </div>
  )
}
