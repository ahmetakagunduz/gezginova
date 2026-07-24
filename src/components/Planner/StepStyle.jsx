import './StepStyle.css'

const STYLES = [
  { id: 'deniz_plaj', emoji: '🏖️', label: 'Deniz / Plaj' },
  { id: 'doga_dag', emoji: '🏔️', label: 'Doğa / Dağ' },
  { id: 'sehir_kultur', emoji: '🏛️', label: 'Şehir / Kültür' },
  { id: 'gece_hayati', emoji: '🌙', label: 'Gece Hayatı' },
  { id: 'macera_spor', emoji: '🧗', label: 'Macera / Spor' },
  { id: 'sakin_dinlenme', emoji: '🧘', label: 'Sakin / Dinlenme' },
  { id: 'yemek_gastronomi', emoji: '🍽️', label: 'Yemek / Gastronomi' },
]

export default function StepStyle({ value = [], onChange }) {
  const toggleStyle = (id) => {
    if (value.includes(id)) {
      onChange(value.filter((v) => v !== id))
    } else {
      onChange([...value, id])
    }
  }

  return (
    <div className="step-style">
      <h2 className="step-title">Ne Tarz Bir Seyahat İstiyorsun?</h2>
      <p className="step-subtitle">Bir veya birden fazla seçebilirsin</p>

      <div className="style-grid">
        {STYLES.map((style, i) => {
          const isSelected = value.includes(style.id)
          return (
            <button
              key={style.id}
              className={`style-chip ${isSelected ? 'selected' : ''}`}
              onClick={() => toggleStyle(style.id)}
              type="button"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className="style-emoji">{style.emoji}</span>
              <span className="style-label">{style.label}</span>
              {isSelected && <span className="style-check">✓</span>}
            </button>
          )
        })}
      </div>

      {value.length === 0 && (
        <p className="style-hint">En az bir tarz seçmelisin</p>
      )}
      {value.length > 0 && (
        <p className="style-count">
          {value.length} tarz seçildi
        </p>
      )}
    </div>
  )
}
