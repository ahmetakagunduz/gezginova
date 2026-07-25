import { useState, useCallback, useEffect } from 'react'
import { RotateCcw, Compass } from 'lucide-react'
import PlannerWizard from '../components/Planner/PlannerWizard'
import RouteResults from '../components/Planner/RouteResults'
import { countries } from '../data/countries'
import { flightPrices } from '../data/flightPrices'
import { getTopRoutes } from '../utils/scoring'
import './PlannerPage.css'

export default function PlannerPage() {
  const [results, setResults] = useState(null)
  const [formData, setFormData] = useState(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [exchangeRate, setExchangeRate] = useState(35) // Fallback

  useEffect(() => {
    fetch('/api/exchange-rate')
      .then(res => res.json())
      .then(data => {
        if (data && data.rate) {
          setExchangeRate(data.rate)
        }
      })
      .catch(err => console.error("Could not fetch exchange rate:", err))
  }, [])

  const handleCalculate = useCallback(async (data) => {
    setIsCalculating(true)
    setFormData(data)

    // Small delay for animation effect
    await new Promise((r) => setTimeout(r, 600))

    try {
      const topRoutes = getTopRoutes(countries, data, flightPrices, 5)
      setResults(topRoutes)
    } catch (err) {
      console.error('Route calculation error:', err)
      setResults([])
    }

    setIsCalculating(false)
  }, [])

  const handleReset = () => {
    setResults(null)
    setFormData(null)
  }

  return (
    <div className="planner-page">
      <div className="container">
        {/* Page Header */}
        <div className="planner-page-header">
          <Compass size={28} className="planner-page-icon" />
          <h1 className="planner-page-title">Rota Planlayıcı</h1>
          <p className="planner-page-subtitle">
            Hayalindeki seyahati birkaç adımda planla
          </p>
        </div>

        {/* Calculating State */}
        {isCalculating && (
          <div className="planner-calculating">
            <div className="calculating-spinner">
              <div className="spinner" />
            </div>
            <p className="calculating-text">
              En iyi rotalar hesaplanıyor...
            </p>
            <p className="calculating-subtext">
              Bütçe, vize ve tercihlerine göre analiz ediliyor
            </p>
          </div>
        )}

        {/* Wizard or Results */}
        {!isCalculating && !results && (
          <PlannerWizard onCalculate={handleCalculate} />
        )}

        {!isCalculating && results && (
          <>
            <RouteResults results={results} formData={formData} exchangeRate={exchangeRate} />
            <div className="planner-reset">
              <button
                className="btn btn-outline btn-lg"
                onClick={handleReset}
                type="button"
              >
                <RotateCcw size={18} />
                Yeni Arama
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
