import { useState, useMemo } from 'react'
import { ChevronDown, ChevronUp, Bookmark, Share2, Plane, Hotel, Utensils, FileText, Wallet } from 'lucide-react'
import { useAuth } from '../Auth/AuthContext'
import './RouteCard.css'

const STYLE_LABELS = {
  deniz_plaj: '🏖️ Plaj',
  doga_dag: '🏔️ Doğa',
  sehir_kultur: '🏛️ Kültür',
  gece_hayati: '🌙 Gece',
  macera_spor: '🧗 Macera',
  sakin_dinlenme: '🧘 Dinlenme',
  yemek_gastronomi: '🍽️ Gastro',
}

const VISA_BADGES = {
  vizesiz: { label: 'Vizesiz ✅', className: 'badge-vizesiz' },
  e_vize: { label: 'E-Vize 📱', className: 'badge-evize' },
  kapida_vize: { label: 'Kapıda Vize 🛂', className: 'badge-kapida' },
  vize_gerekli: { label: 'Vize Gerekli ⚠️', className: 'badge-vize' },
}

function formatCurrency(val, exchangeRate = 35) {
  if (val == null) return '—'
  return new Intl.NumberFormat('tr-TR', {
    style: 'decimal',
    maximumFractionDigits: 0,
  }).format(val * exchangeRate) + ' ₺'
}

export default function RouteCard({ route, rank, days, exchangeRate = 35 }) {
  const [expanded, setExpanded] = useState(false)
  const [saved, setSaved] = useState(false)
  const { isAuthenticated } = useAuth()

  const {
    country,
    cluster,
    countries: clusterCountries,
    score,
    cost,
    isOverBudget,
    overBudgetPercent,
    isCluster
  } = route

  // Hooks must be called before early returns

  const { visaLabel, visaClass } = useMemo(() => {
    let label = ''
    let vClass = ''
    if (isCluster) {
      const statuses = clusterCountries.map(c => c.visaStatus)
      const allFree = statuses.every(s => s === 'vizesiz')
      if (allFree) {
        label = 'Tümü Vizesiz ✅'
        vClass = 'badge-vizesiz'
      } else {
        label = 'Vizesiz + E-Vize/Kapıda 🛂'
        vClass = 'badge-evize'
      }
    } else {
      const visa = VISA_BADGES[country.visaStatus] || VISA_BADGES.vize_gerekli
      label = visa.label
      vClass = visa.className
    }
    return { visaLabel: label, visaClass: vClass }
  }, [isCluster, clusterCountries, country])

  const matchPercent = score || 0

  // Circular progress
  const circumference = 2 * Math.PI * 30
  const dashOffset = circumference - (circumference * matchPercent) / 100

  const handleShare = async () => {
    let text = ''
    if (isCluster) {
      const countryNames = clusterCountries.map(c => c.name).join(' → ')
      text = `GezgiNova ile ${cluster.name} rotası keşfettim! (${countryNames}) Toplam: ${formatCurrency(cost?.total, exchangeRate)}`
    } else {
      text = `GezgiNova ile ${country.flag} ${country.name} rotası keşfettim! Toplam: ${formatCurrency(cost?.total, exchangeRate)}`
    }

    if (navigator.canShare?.({ text })) {
      await navigator.share({ title: 'GezgiNova Rota', text })
    } else {
      await navigator.clipboard.writeText(text)
      alert('Panoya kopyalandı!')
    }
  }

  const handleSave = async () => {
    if (saved) return;
    
    const tripData = {
      countryId: isCluster ? cluster.id : country.id,
      countryName: isCluster ? cluster.name : country.name,
      days: days || 7,
      totalCost: cost?.total || 0,
      flightCost: cost?.flight || 0,
      accommodationCost: cost?.accommodation || 0,
      dailyCost: cost?.living || 0,
      visaCost: cost?.visa || 0
    };

    if (isAuthenticated) {
      try {
        await fetch('/api/trips', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(tripData)
        });
        setSaved(true);
      } catch (err) {
        console.error("Kaydetme hatası", err);
      }
    } else {
      const trip = {
        id: Date.now().toString(),
        ...tripData,
        startDate: new Date().toISOString(),
        endDate: new Date(Date.now() + (days || 7)*24*60*60*1000).toISOString(),
        planned: true
      };
      const existing = JSON.parse(sessionStorage.getItem('gezginova_guest_trips') || '[]');
      sessionStorage.setItem('gezginova_guest_trips', JSON.stringify([trip, ...existing]));
      setSaved(true);
    }
  }

  const uniqueTags = useMemo(() => {
    return isCluster
      ? [...new Set(clusterCountries.flatMap(c => c.tags || []))].slice(0, 4)
      : country.tags || []
  }, [isCluster, clusterCountries, country])
  
  const interestingFact = useMemo(() => {
    if (!isCluster) return country?.interestingFact;
    const withFact = clusterCountries.find(c => c.interestingFact);
    return withFact ? withFact.interestingFact : null;
  }, [isCluster, clusterCountries, country]);

  if (!isCluster && !country) return null;

  return (
    <div className={`route-card ${expanded ? 'expanded' : ''}`} style={{ animationDelay: `${rank * 100}ms` }}>
      <div className="route-card-header">
        <div className="route-card-rank">#{rank + 1}</div>

        {isCluster ? (
          <div className="route-card-country">
            <span className="route-card-flag" style={{ letterSpacing: '2px', display: 'inline-block' }}>
              {clusterCountries.slice(0, 3).map(c => c.flag).join(' ')}
              {clusterCountries.length > 3 ? '...' : ''}
            </span>
            <div className="route-card-info">
              <h3 className="route-card-name">{cluster.name}</h3>
              <span className={`badge ${visaClass}`}>{visaLabel}</span>
            </div>
          </div>
        ) : (
          <div className="route-card-country">
            <span className="route-card-flag">{country.flag}</span>
            <div className="route-card-info">
              <h3 className="route-card-name">{country.name}</h3>
              <span className={`badge ${visaClass}`}>{visaLabel}</span>
            </div>
          </div>
        )}

        <div className="route-card-score">
          <svg className="score-ring" width="68" height="68" viewBox="0 0 68 68">
            <circle
              cx="34" cy="34" r="30"
              fill="none"
              stroke="var(--bg-tertiary)"
              strokeWidth="4"
            />
            <circle
              cx="34" cy="34" r="30"
              fill="none"
              stroke="var(--accent-teal)"
              strokeWidth="4"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              strokeLinecap="round"
              transform="rotate(-90 34 34)"
              style={{ transition: 'stroke-dashoffset 1s ease-out' }}
            />
          </svg>
          <span className="score-value">{matchPercent}%</span>
        </div>
      </div>

      {isCluster && (
        <div className="route-card-flow">
          <strong>Rota Akışı:</strong>{' '}
          {clusterCountries.map((c, idx) => (
            <span key={c.id}>
              {c.flag} {c.name}
              {idx < clusterCountries.length - 1 ? ' → ' : ''}
            </span>
          ))}
        </div>
      )}

      {/* Style Tags */}
      <div className="route-card-tags">
        {uniqueTags.map((tag) => (
          <span key={tag} className="route-tag">
            {STYLE_LABELS[tag] || tag}
          </span>
        ))}
      </div>

      {/* Budget Indicator */}
      <div className="route-card-budget-status">
        {isOverBudget ? (
          <span className="budget-over">
            Bütçenin {Math.round(overBudgetPercent || 0)}% üzerinde ⚠️
          </span>
        ) : (
          <span className="budget-ok">Bütçeye Uygun ✅</span>
        )}
      </div>

      {/* Expandable Cost Breakdown */}
      <button
        className="route-card-expand"
        onClick={() => setExpanded(!expanded)}
        type="button"
      >
        <span>Maliyet Detayı</span>
        {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>

      {expanded && (
        <div className="route-card-expanded-content">
          {interestingFact && (
            <div className="route-card-fact animate-fade-in-up">
              <span className="fact-icon">💡</span>
              <div className="fact-content">
                <strong>Biliyor muydun?</strong>
                <p>{interestingFact}</p>
              </div>
            </div>
          )}
          {cost && (
        <div className="route-card-costs">
          <div className="cost-row">
            <span className="cost-icon"><Plane size={16} /></span>
            <span className="cost-label">Uçak (Gidiş-Dönüş)</span>
            <div className="cost-amount">{formatCurrency(cost.flight, exchangeRate)}</div>
          </div>
          <div className="cost-row">
            <span className="cost-icon"><Hotel size={16} /></span>
            <span className="cost-label">Konaklama ({days} gün)</span>
            <div className="cost-amount">{formatCurrency(cost.accommodation, exchangeRate)}</div>
          </div>
          <div className="cost-row">
            <span className="cost-icon"><Utensils size={16} /></span>
            <span className="cost-label">Yaşam Giderleri</span>
            <div className="cost-amount">{formatCurrency(cost.living, exchangeRate)}</div>
          </div>
          {isCluster && cost.interCity > 0 && (
            <div className="cost-row">
              <span className="cost-icon">🚌</span>
              <span className="cost-label">Şehirler Arası Ulaşım</span>
              <div className="cost-amount">{formatCurrency(cost.interCity, exchangeRate)}</div>
            </div>
          )}
          <div className="cost-row">
            <span className="cost-icon"><FileText size={16} /></span>
            <span className="cost-label">Vize Ücreti</span>
            <div className="cost-amount">{formatCurrency(cost.visa, exchangeRate)}</div>
          </div>
          <div className="cost-divider" />
          <div className="cost-row cost-total">
            <span className="cost-icon"><Wallet size={16} /></span>
            <span className="cost-label">Toplam Tahmini</span>
            <div className="total-amount">{formatCurrency(cost.total, exchangeRate)}</div>
          </div>
          </div>
        )}
        </div>
      )}

      {/* Actions */}
      <div className="route-card-actions">
        <button
          className={`btn btn-sm ${saved ? 'btn-primary' : 'btn-secondary'}`}
          onClick={handleSave}
          type="button"
        >
          <Bookmark size={16} />
          {saved ? 'Kaydedildi' : 'Kaydet'}
        </button>
        <button className="btn btn-sm btn-ghost" onClick={handleShare} type="button">
          <Share2 size={16} />
          Paylaş
        </button>
      </div>
    </div>
  )
}
