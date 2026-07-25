import { useState, useCallback, useMemo } from 'react';
import WorldMap from '../components/Map/WorldMap';
import MapLegend from '../components/Map/MapLegend';
import CountryPanel from '../components/Country/CountryPanel';
import { countries } from '../data/countries';
import './HomePage.css';

export default function HomePage() {
  const [selectedCountryId, setSelectedCountryId] = useState(null);

  const selectedCountry = selectedCountryId
    ? countries.find((c) => c.id === selectedCountryId) || null
    : null;

  const handleCountrySelect = useCallback((countryId) => {
    setSelectedCountryId(countryId);
  }, []);

  const handleClosePanel = useCallback(() => {
    setSelectedCountryId(null);
  }, []);

  const handleAddTrip = useCallback((country) => {
    alert(`✈️ ${country.name} gezdiğin ülkelere eklendi!`);
  }, []);

  // Calculate stats based on actual data
  const stats = useMemo(() => {
    let vizesiz = 0;
    let kapida = 0;
    let evize = 0;
    countries.forEach(c => {
      if (c.visaStatus === 'vizesiz') vizesiz++;
      if (c.visaStatus === 'kapida_vize') kapida++;
      if (c.visaStatus === 'e_vize') evize++;
    });
    return { vizesiz, kapida, evize, total: vizesiz + kapida + evize };
  }, []);

  return (
    <div className="dashboard-layout">
      {/* LEFT: Map Area */}
      <div className="dashboard-main">

        
        <div className="dashboard-map-container">
          <WorldMap
            countries={countries}
            onCountrySelect={handleCountrySelect}
          />
          <MapLegend />
        </div>
      </div>

      {/* RIGHT: Sidebar Area */}
      <div className="dashboard-sidebar">
        <CountryPanel
          country={selectedCountry}
          stats={stats}
          isOpen={true} // Always open in sidebar mode
          onClose={handleClosePanel}
          onAddTrip={handleAddTrip}
        />
      </div>
    </div>
  );
}
