import './StepVisa.css'

const VISA_OPTIONS = [
  {
    id: 'sadece_vizesiz',
    icon: '🟢',
    title: 'Sadece Vizesiz',
    desc: 'Sıfır bürokrasi, al pasaportunu git',
    recommended: false,
  },
  {
    id: 'vizesiz_evize',
    icon: '🔵',
    title: 'Vizesiz + E-Vize',
    desc: 'Online başvuru ile kolay giriş',
    recommended: false,
  },
  {
    id: 'hepsi',
    icon: '🌐',
    title: 'Hepsi',
    desc: 'Vizesiz + Kapıda Vize + E-Vize',
    recommended: true,
  },
]

export default function StepVisa({ value = 'hepsi', onChange }) {
  return (
    <div className="step-visa">
      <h2 className="step-title">Vize Tercihin?</h2>
      <p className="step-subtitle">Hangi ülkeleri görmek istiyorsun?</p>

      <div className="visa-options">
        {VISA_OPTIONS.map((opt, i) => (
          <button
            key={opt.id}
            className={`visa-option ${value === opt.id ? 'selected' : ''}`}
            onClick={() => onChange(opt.id)}
            type="button"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            {opt.recommended && (
              <span className="visa-recommended">Önerilen</span>
            )}
            <span className="visa-icon">{opt.icon}</span>
            <div className="visa-option-text">
              <h3 className="visa-option-title">{opt.title}</h3>
              <p className="visa-option-desc">{opt.desc}</p>
            </div>
            <div className={`visa-radio ${value === opt.id ? 'checked' : ''}`}>
              {value === opt.id && <div className="visa-radio-dot" />}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
