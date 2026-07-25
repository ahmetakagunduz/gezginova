import './StepBudget.css'

const BUDGET_OPTIONS = [
  {
    id: 'minimal',
    emoji: '🎒',
    title: 'Minimal',
    desc: 'Hostel, toplu taşıma, sokak lezzetleri',
    color: 'var(--visa-free)',
  },
  {
    id: 'gezgin',
    emoji: '🧭',
    title: 'Gezgin',
    desc: 'Butik otel, konforlu seyahat, restoranlar',
    color: 'var(--accent-amber)',
  },
  {
    id: 'local',
    emoji: '💎',
    title: 'Local',
    desc: 'Özel deneyimler, lüks konaklama, fine dining',
    color: 'var(--accent-pink)',
  },
]

export default function StepBudget({ value, onChange }) {
  return (
    <div className="step-budget">
      <h2 className="step-title">Bütçen Ne Kadar?</h2>
      <p className="step-subtitle">Seyahat tarzına göre bütçeni belirle</p>

      <div className="budget-cards">
        {BUDGET_OPTIONS.map((opt, i) => (
          <button
            key={opt.id}
            className={`budget-card ${value === opt.id ? 'selected' : ''}`}
            onClick={() => onChange(opt.id)}
            type="button"
            style={{
              '--budget-color': opt.color,
              animationDelay: `${i * 100}ms`,
            }}
          >
            <span className="budget-emoji">{opt.emoji}</span>
            <h3 className="budget-title">{opt.title}</h3>
            <span className="budget-desc">{opt.desc}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
