import { useEffect, useMemo, useState } from 'react'
import { feature } from 'topojson-client'
import world from 'world-atlas/countries-110m.json'
import { WorldGlobe } from './components/WorldGlobe'
import { SpaceBackground } from './components/SpaceBackground'
import { CountryOverlay } from './components/CountryOverlay'
import { countryInfo, fallbackInfo } from './data/countries'
import type { CountryFeature } from './types'
import './styles.css'

function getCountryName(country: CountryFeature | null) {
  return country?.properties?.name || country?.properties?.ADMIN || ''
}

export default function App() {
  const [countries, setCountries] = useState<CountryFeature[]>([])
  const [selected, setSelected] = useState<CountryFeature | null>(null)
  const [hovered, setHovered] = useState<CountryFeature | null>(null)

  useEffect(() => {
    const geo = feature(world as any, (world as any).objects.countries) as unknown as GeoJSON.FeatureCollection
    setCountries(geo.features as CountryFeature[])
  }, [])

  const selectedInfo = useMemo(() => {
    if (!selected) return null
    const name = getCountryName(selected)
    return countryInfo[name] ?? fallbackInfo(name)
  }, [selected])

  const hoveredName = getCountryName(hovered)

  return (
    <main className="app-shell">
      <SpaceBackground />

      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">◎</span>
          <div>
            <div className="brand-name">WORLD EXPLORER</div>
            <div className="brand-subtitle">INTERACTIVE PLANET</div>
          </div>
        </div>
        <div className="hint">DRAG TO ROTATE&nbsp;&nbsp; • &nbsp;&nbsp;SCROLL TO ZOOM</div>
      </header>

      <div className="globe-stage">
        {countries.length > 0 && (
          <WorldGlobe
            countries={countries}
            selected={selected}
            hovered={hovered}
            onSelect={setSelected}
            onHover={setHovered}
          />
        )}
        <div className="scanline" aria-hidden="true" />
        <CountryOverlay country={selectedInfo} hoveredName={selected ? null : hoveredName || null} />
      </div>

      <footer className="footer">
        <span>{countries.length ? `${countries.length} COUNTRIES` : 'LOADING COUNTRIES…'}</span>
        <button type="button" onClick={() => { setSelected(null); setHovered(null) }} disabled={!selected && !hovered}>
          CLEAR SELECTION
        </button>
      </footer>
    </main>
  )
}
