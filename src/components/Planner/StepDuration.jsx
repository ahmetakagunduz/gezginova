import { useEffect, useRef } from 'react'
import './StepDuration.css'

const QUICK_OPTIONS = [
  { label: 'Hafta Sonu', days: 3 },
  { label: '1 Hafta', days: 7 },
  { label: '2 Hafta', days: 14 },
  { label: '3 Hafta', days: 21 },
  { label: '1 Ay', days: 30 },
]

export default function StepDuration({ value = 7, onChange }) {
  const sliderRef = useRef(null)

  // Update CSS custom property for gradient progress
  useEffect(() => {
    if (sliderRef.current) {
      const percent = ((value - 3) / (30 - 3)) * 100
      sliderRef.current.style.setProperty('--slider-progress', `${percent}%`)
    }
  }, [value])

  return (
    <div className="step-duration">
      <h2 className="step-title">Kaç Gün Seyahat Etmek İstiyorsun?</h2>
      <p className="step-subtitle">Süreyi belirle, biz rotayı çizelim</p>

      <div className="duration-display">
        <span className="duration-number" key={value}>
          {value}
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
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="duration-slider"
        />
        <span className="duration-max">30</span>
      </div>

      <div className="duration-quick">
        {QUICK_OPTIONS.map((opt) => (
          <button
            key={opt.days}
            className={`duration-quick-btn ${value === opt.days ? 'active' : ''}`}
            onClick={() => onChange(opt.days)}
            type="button"
          >
            {opt.label}
            <span className="duration-quick-days">({opt.days})</span>
          </button>
        ))}
      </div>
    </div>
  )
}
