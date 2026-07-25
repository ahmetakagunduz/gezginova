import { useState, useCallback, useMemo, useEffect } from 'react';
import { useAuth } from '../components/Auth/AuthContext';
import AuthModal from '../components/Auth/AuthModal';
import TripManager from '../components/Wrapped/TripManager';
import WrappedViewer from '../components/Wrapped/WrappedViewer';
import { calculateWrappedStats, calculateLifetimeStats } from '../utils/wrappedCalculator';
import { checkBadges } from '../utils/badgeChecker';
import './WrappedPage.css';

export default function WrappedPage() {
  const { user, isAuthenticated } = useAuth();
  const [showAuth, setShowAuth] = useState(false);
  const [trips, setTrips] = useState([]);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [exchangeRate, setExchangeRate] = useState(35);

  useEffect(() => {
    fetch('/api/exchange-rate')
      .then(res => res.json())
      .then(data => {
        if (data && data.rate) setExchangeRate(data.rate);
      })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    async function fetchTrips() {
      if (isAuthenticated) {
        try {
          const res = await fetch('/api/trips');
          const data = await res.json();
          if (res.ok) setTrips(data.trips);
        } catch (error) {
          console.error("Geçmiş seyahatler yüklenemedi");
        }
      } else {
        const guestData = sessionStorage.getItem('gezginova_guest_trips');
        if (guestData) setTrips(JSON.parse(guestData));
        else setTrips([]);
      }
    }
    fetchTrips();
  }, [isAuthenticated]);

  const handleAddTrip = useCallback(async (trip) => {
    if (isAuthenticated) {
      try {
        const res = await fetch('/api/trips', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(trip)
        });
        const data = await res.json();
        if (res.ok) {
          setTrips(prev => [data.trip, ...prev]);
        }
      } catch (err) {
        console.error("Seyahat kaydedilemedi");
      }
    } else {
      setTrips(prev => {
        const updated = [trip, ...prev];
        sessionStorage.setItem('gezginova_guest_trips', JSON.stringify(updated));
        return updated;
      });
    }
  }, [isAuthenticated]);

  const handleDeleteTrip = useCallback(async (tripId) => {
    if (isAuthenticated) {
      try {
        const res = await fetch(`/api/trips?id=${tripId}`, { method: 'DELETE' });
        if (res.ok) {
          setTrips(prev => prev.filter(t => t.id !== tripId));
        }
      } catch (err) {
        console.error("Seyahat silinemedi");
      }
    } else {
      setTrips(prev => {
        const updated = prev.filter(t => t.id !== tripId);
        sessionStorage.setItem('gezginova_guest_trips', JSON.stringify(updated));
        return updated;
      });
    }
  }, [isAuthenticated]);

  const wrappedData = useMemo(() => calculateWrappedStats(trips, selectedYear), [trips, selectedYear]);
  const lifetime = useMemo(() => calculateLifetimeStats(trips), [trips]);
  const earnedBadges = useMemo(() => checkBadges(trips, selectedYear), [trips, selectedYear]);

  const availableYears = useMemo(() => {
    const years = new Set(trips.map(t => new Date(t.startDate).getFullYear()));
    years.add(new Date().getFullYear());
    return [...years].sort((a, b) => b - a);
  }, [trips]);

  return (
    <div className="wrapped-page">
      <div className="container">
        <div className="wrapped-hero">
          <h1 className="wrapped-page-title">
            <span className="text-gradient">🎁 Pasaport Wrapped</span>
          </h1>
          <p className="wrapped-page-subtitle">
            Seyahat hikayeni keşfet, istatistiklerini görselleştir ve arkadaşlarınla paylaş.
          </p>
        </div>

        {!isAuthenticated && (
          <div className="auth-prompt glass-panel">
            <div className="auth-prompt-content">
              <span className="auth-icon">🔐</span>
              <div>
                <h3>Seyahatlerini kalıcı olarak kaydet</h3>
                <p>Giriş yap veya kayıt ol, seyahatlerin her cihazda seninle olsun.</p>
              </div>
              <button className="btn btn-primary" onClick={() => setShowAuth(true)}>
                Giriş Yap / Kayıt Ol
              </button>
            </div>
          </div>
        )}

        <TripManager trips={trips} onAddTrip={handleAddTrip} onDeleteTrip={handleDeleteTrip} exchangeRate={exchangeRate} />

        <div className="year-selector">
          <label>Wrapped Yılı: </label>
          <select value={selectedYear} onChange={e => setSelectedYear(Number(e.target.value))} className="form-input year-select">
            {availableYears.map(y => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>

        <WrappedViewer wrappedData={wrappedData} lifetime={lifetime} earnedBadges={earnedBadges} year={selectedYear} exchangeRate={exchangeRate} />
      </div>

      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </div>
  );
}
