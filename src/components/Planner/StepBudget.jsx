import './StepBudget.css'

const BUDGET_OPTIONS = [
  {
    id: 'dusuk',
    emoji: '💚',
    title: 'Düşük',
    range: '0 – 15.000 ₺',
    desc: 'Hostel & sokak lezzetleri',
    color: 'var(--visa-free)',
  },
  {
    id: 'orta',
    emoji: '💛',
    title: 'Orta',
    range: '15.000 – 35.000 ₺',
    desc: 'Butik otel & restoran',
    color: 'var(--accent-amber)',
  },
  {
    id: 'yuksek',
    emoji: '🧡',
    title: 'Yüksek',
    range: '35.000 ₺ üzeri',
    desc: '5 yıldız & fine dining',
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
            <span className="budget-range">{opt.range}</span>
            <span className="budget-desc">{opt.desc}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
