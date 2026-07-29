"use client";

import { useState, useEffect } from 'react';
import ItineraryBuilder from '../components/Calculator/ItineraryBuilder';
import CostBreakdown from '../components/Calculator/CostBreakdown';
import '../components/Calculator/Calculator.css';
import { countries } from '../data/countries';

export default function CalculatorPage() {
  const [budgetLevel, setBudgetLevel] = useState('gezgin');
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [exchangeRate, setExchangeRate] = useState(35); // Varsayılan kur
  
  // Varsayılan rotamız: TR kalkış -> Boş bir durak
  const [stops, setStops] = useState([
    { id: 'stop-1', countryId: 'HU', nights: 3, transportFromPrev: 'flight' }
  ]);

  useEffect(() => {
    // Kuru getir
    fetch('/api/exchange-rate')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.rate) {
          setExchangeRate(data.rate);
        }
      })
      .catch(err => console.error("Kur alınamadı", err));
  }, []);

  const addStop = () => {
    const newId = `stop-${Date.now()}`;
    setStops([...stops, { id: newId, countryId: '', nights: 2, transportFromPrev: 'train' }]);
  };

  const removeStop = (idToRemove) => {
    setStops(stops.filter(stop => stop.id !== idToRemove));
  };

  const updateStop = (id, field, value) => {
    setStops(stops.map(stop => 
      stop.id === id ? { ...stop, [field]: value } : stop
    ));
  };

  return (
    <div className="calculator-container">
      <div className="calculator-main">
        <div className="calculator-header">
          <h1 className="text-gradient">Rota Maliyet Hesaplayıcı</h1>
          <p>Şehirleri, gece sayısını ve ulaşım tipini seçin, yaklaşık maliyetinizi çıkaralım.</p>
        </div>

        <div className="calculator-settings">
          <div className="settings-group">
            <label htmlFor="budgetLevel">Bütçe Tarzı:</label>
            <select 
              id="budgetLevel" 
              value={budgetLevel} 
              onChange={(e) => setBudgetLevel(e.target.value)}
            >
              <option value="local">Local (Sırt Çantalı / Ekonomik)</option>
              <option value="gezgin">Gezgin (Orta Sınıf / Konforlu)</option>
            </select>
          </div>
          
          <div className="settings-group">
            <label htmlFor="month">Seyahat Ayı:</label>
            <select 
              id="month" 
              value={month} 
              onChange={(e) => setMonth(Number(e.target.value))}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(m => (
                <option key={m} value={m}>
                  {new Date(2024, m - 1, 1).toLocaleString('tr-TR', { month: 'long' })}
                </option>
              ))}
            </select>
          </div>
        </div>

        <ItineraryBuilder 
          stops={stops}
          countries={countries}
          addStop={addStop}
          removeStop={removeStop}
          updateStop={updateStop}
        />
      </div>

      <div className="calculator-sidebar">
        <CostBreakdown 
          stops={stops}
          countries={countries}
          budgetLevel={budgetLevel}
          month={month}
          exchangeRate={exchangeRate}
        />
      </div>
    </div>
  );
}
