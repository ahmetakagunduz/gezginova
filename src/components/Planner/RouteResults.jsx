import { useState, useMemo } from 'react'
import { Sparkles, Share2, Map, ListChecks } from 'lucide-react'
import RouteCard from './RouteCard'
import './RouteResults.css'

export default function RouteResults({ results, formData, exchangeRate }) {
  const [tab, setTab] = useState('single') // 'single' | 'multi'

  // Separate single-country and multi-country (cluster) routes
  const { singleRoutes, multiRoutes } = useMemo(() => {
    if (!results) return { singleRoutes: [], multiRoutes: [] }
    return {
      singleRoutes: results.single || [],
      multiRoutes: results.cluster || [],
    }
  }, [results])

  const displayed = tab === 'single' ? singleRoutes : multiRoutes

  const handleShareAll = async () => {
    const listToShare = tab === 'single' ? singleRoutes : multiRoutes
    const text = listToShare
      .slice(0, 5)
      .map((r, i) => {
        if (r.isCluster) {
          const names = r.countries.map(c => c.name).join(' → ')
          return `${i + 1}. [Küme] ${r.cluster?.name}: ${names}`
        }
        return `${i + 1}. ${r.country?.flag} ${r.country?.name}`
      })
      .join('\n')
    const fullText = `🗺️ GezgiNova Rota Önerileri:\n\n${text}\n\ngezginova.com`

    if (navigator.canShare?.({ text: fullText })) {
      await navigator.share({ title: 'GezgiNova Rotalar', text: fullText })
    } else {
      await navigator.clipboard.writeText(fullText)
      alert('Sonuçlar panoya kopyalandı!')
    }
  }

  return (
    <div className="route-results">
      <div className="route-results-header">
        <div className="results-sparkle">
          <Sparkles size={32} />
        </div>
        <h2 className="results-title">
          Senin İçin En İyi Rotalar
        </h2>
        <p className="results-subtitle">
          {formData?.days} günlük seyahatin için {singleRoutes.length + multiRoutes.length} rota bulduk
        </p>
      </div>

      {/* Tabs */}
      <div className="results-tabs">
        <button
          className={`results-tab ${tab === 'single' ? 'active' : ''}`}
          onClick={() => setTab('single')}
          type="button"
        >
          <Map size={16} />
          Tek Ülke
        </button>
        <button
          className={`results-tab ${tab === 'multi' ? 'active' : ''}`}
          onClick={() => setTab('multi')}
          type="button"
        >
          <ListChecks size={16} />
          Çoklu Ülke Rotası
          {multiRoutes.length === 0 && (
            <span className="tab-count">0</span>
          )}
        </button>
      </div>

      {/* Route Cards */}
      <div className="results-list">
        {displayed.length > 0 ? (
          displayed.map((route, i) => (
            <RouteCard
              key={route.country?.id || i}
              route={route}
              rank={i}
              days={formData?.days}
              exchangeRate={exchangeRate}
            />
          ))
        ) : (
          <div className="results-empty">
            <p>
              {tab === 'multi'
                ? 'Çoklu ülke rotası henüz mevcut değil. Tek ülke sekmesine göz at!'
                : 'Kriterlere uygun rota bulunamadı. Filtreleri değiştirmeyi dene.'}
            </p>
          </div>
        )}
      </div>

      {/* Share All */}
      {displayed.length > 0 && (
        <div className="results-footer">
          <button
            className="btn btn-secondary btn-lg"
            onClick={handleShareAll}
            type="button"
          >
            <Share2 size={18} />
            Sonuçları Paylaş
          </button>
        </div>
      )}
    </div>
  )
}
