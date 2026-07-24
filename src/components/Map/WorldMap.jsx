import { useState, useCallback, useMemo, memo } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from '@vnedyalk0v/react19-simple-maps';
import { Search, Plus, Minus, RotateCcw } from 'lucide-react';
import isoNumericToAlpha2 from '../../data/isoNumericToAlpha2';
import CountryTooltip from './CountryTooltip';
import './WorldMap.css';

import geoData from '../../data/countries-110m.json';

const GEO_URL = geoData;

/** Visa status → fill colour */
const VISA_COLORS = {
  vizesiz: '#10b981', // Green
  kapida_vize: '#f59e0b', // Amber/Orange
  e_vize: '#3b82f6', // Blue
  vize_gerekli: '#ef4444', // Red
};

const TURKEY_CODE = 'TR';
const TURKEY_COLOR = '#ff4b4b'; // Red for Turkey
const DEFAULT_COLOR = 'var(--map-default)';
const HOVER_STROKE = 'var(--map-hover-stroke)';
const BORDER_COLOR = 'var(--map-border)';

const DEFAULT_CENTER = [30, 20];
const DEFAULT_ZOOM = 1;

/**
 * WorldMap – interactive choropleth coloured by visa status for Turkish passport.
 *
 * @param {Array}    countries        – Array of { id, name, visaStatus, flag, ... }
 * @param {Function} onCountrySelect  – Callback when a country is clicked
 */
function WorldMap({ countries = [], onCountrySelect }) {
  /* ----- zoom state ----- */
  const [position, setPosition] = useState({
    coordinates: DEFAULT_CENTER,
    zoom: DEFAULT_ZOOM,
  });

  /* ----- tooltip state ----- */
  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    name: '',
    visaStatus: '',
    flag: '',
  });

  /* ----- search state ----- */
  const [searchQuery, setSearchQuery] = useState('');

  /* ----- build lookup maps once ----- */
  const countryById = useMemo(() => {
    const map = {};
    countries.forEach((c) => {
      map[c.id] = c;
    });
    return map;
  }, [countries]);

  /* ----- search matching IDs ----- */
  const matchingIds = useMemo(() => {
    if (!searchQuery.trim()) return null; // null = no filter
    const q = searchQuery.toLowerCase();
    const ids = new Set();
    countries.forEach((c) => {
      if (c.name && c.name.toLowerCase().includes(q)) {
        ids.add(c.id);
      }
    });
    return ids;
  }, [searchQuery, countries]);

  /* ----- helpers ----- */
  const getAlpha2 = useCallback((geo) => {
    const numId = String(geo.id);
    return isoNumericToAlpha2[numId] || null;
  }, []);

  const getFillColor = useCallback(
    (geo) => {
      const alpha2 = getAlpha2(geo);
      if (!alpha2) return DEFAULT_COLOR;
      if (alpha2 === TURKEY_CODE) return TURKEY_COLOR;

      const country = countryById[alpha2];
      if (!country) return DEFAULT_COLOR;

      // Dim non-matching countries when search is active
      if (matchingIds && !matchingIds.has(alpha2)) {
        return '#1a1a28';
      }

      return VISA_COLORS[country.visaStatus] || DEFAULT_COLOR;
    },
    [getAlpha2, countryById, matchingIds]
  );

  /* ----- zoom controls ----- */
  const handleZoomIn = () => {
    setPosition((pos) => ({
      ...pos,
      zoom: Math.min(pos.zoom * 1.5, 8),
    }));
  };

  const handleZoomOut = () => {
    setPosition((pos) => ({
      ...pos,
      zoom: Math.max(pos.zoom / 1.5, 1),
    }));
  };

  const handleReset = () => {
    setPosition({ coordinates: DEFAULT_CENTER, zoom: DEFAULT_ZOOM });
  };

  const handleMoveEnd = (pos) => {
    setPosition(pos);
  };

  /* ----- mouse handlers ----- */
  const handleMouseEnter = useCallback(
    (geo, evt) => {
      const alpha2 = getAlpha2(geo);
      const country = alpha2 ? countryById[alpha2] : null;

      setTooltip({
        visible: true,
        x: evt.clientX,
        y: evt.clientY,
        name: country?.name || geo.properties?.name || 'Bilinmeyen',
        visaStatus: country?.visaStatus || '',
        flag: country?.flag || '',
      });
    },
    [getAlpha2, countryById]
  );

  const handleMouseMove = useCallback((evt) => {
    setTooltip((prev) => ({
      ...prev,
      x: evt.clientX,
      y: evt.clientY,
    }));
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTooltip((prev) => ({ ...prev, visible: false }));
  }, []);

  const handleClick = useCallback(
    (geo) => {
      const alpha2 = getAlpha2(geo);
      if (alpha2 && alpha2 !== TURKEY_CODE && onCountrySelect) {
        onCountrySelect(alpha2);
      }
    },
    [getAlpha2, onCountrySelect]
  );

  return (
    <div className="world-map">
      {/* Search bar */}
      <div className="world-map__search">
        <Search size={18} className="world-map__search-icon" />
        <input
          type="text"
          className="world-map__search-input"
          placeholder="Ülke ara..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <button
            className="world-map__search-clear"
            onClick={() => setSearchQuery('')}
            aria-label="Aramayı temizle"
          >
            ✕
          </button>
        )}
      </div>

      {/* Zoom controls */}
      <div className="world-map__zoom-controls">
        <button
          className="world-map__zoom-btn"
          onClick={handleZoomIn}
          aria-label="Yakınlaştır"
          title="Yakınlaştır"
        >
          <Plus size={18} />
        </button>
        <button
          className="world-map__zoom-btn"
          onClick={handleZoomOut}
          aria-label="Uzaklaştır"
          title="Uzaklaştır"
        >
          <Minus size={18} />
        </button>
        <button
          className="world-map__zoom-btn"
          onClick={handleReset}
          aria-label="Sıfırla"
          title="Sıfırla"
        >
          <RotateCcw size={16} />
        </button>
      </div>

      {/* Map */}
      <ComposableMap
        projection="geoEqualEarth"
        width={800}
        height={450}
        projectionConfig={{
          scale: 140,
          center: [0, 0],
        }}
        className="world-map__svg"
      >
        <ZoomableGroup
          center={position.coordinates}
          zoom={position.zoom}
          onMoveEnd={handleMoveEnd}
          minZoom={1}
          maxZoom={8}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const fillColor = getFillColor(geo);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={fillColor}
                    stroke={BORDER_COLOR}
                    strokeWidth={0.8}
                    onMouseEnter={(evt) => handleMouseEnter(geo, evt)}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick(geo)}
                    style={{
                      default: {
                        outline: 'none',
                        transition: 'fill 250ms ease',
                      },
                      hover: {
                        fill: getAlpha2(geo) === TURKEY_CODE
                          ? '#9d7afa'
                          : `color-mix(in srgb, ${fillColor} 70%, white 30%)`,
                        stroke: HOVER_STROKE,
                        strokeWidth: 1.5,
                        outline: 'none',
                        cursor: 'pointer',
                      },
                      pressed: {
                        fill: '#00b894',
                        outline: 'none',
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>

      {/* Tooltip */}
      <CountryTooltip
        countryName={tooltip.name}
        visaStatus={tooltip.visaStatus}
        flagEmoji={tooltip.flag}
        x={tooltip.x}
        y={tooltip.y}
        visible={tooltip.visible}
      />
    </div>
  );
}

export default memo(WorldMap);
