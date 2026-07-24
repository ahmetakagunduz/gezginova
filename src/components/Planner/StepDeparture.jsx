import { useState, useRef, useEffect } from 'react'
import { Plane, Search, MapPin, ChevronDown } from 'lucide-react'
import './StepDeparture.css'

const CITIES = [
  { code: 'IST', name: 'İstanbul', airport: 'İstanbul Havalimanı' },
  { code: 'SAW', name: 'İstanbul (Sabiha)', airport: 'Sabiha Gökçen' },
  { code: 'ESB', name: 'Ankara', airport: 'Esenboğa' },
  { code: 'ADB', name: 'İzmir', airport: 'Adnan Menderes' },
  { code: 'AYT', name: 'Antalya', airport: 'Antalya Havalimanı' },
  { code: 'YEI', name: 'Bursa', airport: 'Yenişehir' },
  { code: 'TZX', name: 'Trabzon', airport: 'Trabzon Havalimanı' },
  { code: 'ADA', name: 'Adana', airport: 'Şakirpaşa' },
  { code: 'GZT', name: 'Gaziantep', airport: 'Oğuzeli' },
]

export default function StepDeparture({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const dropdownRef = useRef(null)
  const searchRef = useRef(null)

  const selected = CITIES.find((c) => c.code === value) || CITIES[0]

  const filtered = CITIES.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.code.toLowerCase().includes(search.toLowerCase()) ||
      c.airport.toLowerCase().includes(search.toLowerCase())
  )

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (isOpen && searchRef.current) {
      searchRef.current.focus()
    }
  }, [isOpen])

  const handleSelect = (city) => {
    onChange(city.code)
    setIsOpen(false)
    setSearch('')
  }

  return (
    <div className="step-departure">
      <div className="step-departure-icon">
        <Plane size={48} />
      </div>
      <h2 className="step-title">Nereden Uçuyorsun?</h2>
      <p className="step-subtitle">Kalkış şehrini seç</p>

      <div className="departure-dropdown" ref={dropdownRef}>
        <button
          className={`departure-select ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          type="button"
        >
          <div className="departure-select-content">
            <MapPin size={20} className="departure-pin" />
            <div className="departure-select-text">
              <span className="departure-city-name">{selected.name}</span>
              <span className="departure-airport-code">{selected.code}</span>
            </div>
          </div>
          <ChevronDown
            size={20}
            className={`departure-chevron ${isOpen ? 'rotated' : ''}`}
          />
        </button>

        {isOpen && (
          <div className="departure-options">
            <div className="departure-search">
              <Search size={16} />
              <input
                ref={searchRef}
                type="text"
                placeholder="Şehir veya havalimanı ara..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="departure-search-input"
              />
            </div>
            <div className="departure-list">
              {filtered.map((city) => (
                <button
                  key={city.code}
                  className={`departure-option ${
                    city.code === value ? 'selected' : ''
                  }`}
                  onClick={() => handleSelect(city)}
                  type="button"
                >
                  <div className="departure-option-info">
                    <span className="departure-option-name">{city.name}</span>
                    <span className="departure-option-airport">
                      {city.airport}
                    </span>
                  </div>
                  <span className="departure-option-code">{city.code}</span>
                </button>
              ))}
              {filtered.length === 0 && (
                <div className="departure-empty">Sonuç bulunamadı</div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
