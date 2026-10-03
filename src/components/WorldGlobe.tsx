import { useEffect, useMemo, useRef } from 'react'
import Globe from 'react-globe.gl'
import type { CountryFeature } from '../types'

type Props = {
  countries: CountryFeature[]
  selected: CountryFeature | null
  hovered: CountryFeature | null
  onSelect: (country: CountryFeature | null) => void
  onHover: (country: CountryFeature | null) => void
}

export function WorldGlobe({ countries, selected, hovered, onSelect, onHover }: Props) {
  const globeRef = useRef<any>(null)

  const selectedName = selected?.properties?.name || selected?.properties?.ADMIN || ''
  const hoveredName = hovered?.properties?.name || hovered?.properties?.ADMIN || ''

  const polygons = useMemo(() => countries, [countries])

  useEffect(() => {
    const globe = globeRef.current
    if (!globe) return

    globe.controls().autoRotate = !selected
    globe.controls().autoRotateSpeed = 0.35
    globe.controls().enablePan = false
    globe.controls().minDistance = 180
    globe.controls().maxDistance = 500

    const scene = globe.scene()
    scene.fog = undefined
  }, [selected])

  useEffect(() => {
    if (!selected || !globeRef.current) return
    const name = selected.properties?.name || selected.properties?.ADMIN || ''
    const locations: Record<string, [number, number]> = {
      Malaysia: [4.21, 101.98],
      Singapore: [1.35, 103.82],
      Japan: [36.2, 138.25],
      China: [35.86, 104.2],
      India: [20.59, 78.96],
      Australia: [-25.27, 133.78],
      Brazil: [-14.24, -51.93],
      'United States of America': [39.83, -98.58],
      Canada: [56.13, -106.35],
      'United Kingdom': [55.38, -3.44],
      France: [46.23, 2.21],
      Germany: [51.17, 10.45],
    }
    const target = locations[name]
    if (target) globeRef.current.pointOfView({ lat: target[0], lng: target[1], altitude: 2.05 }, 900)
  }, [selected])

  return (
    <Globe
      ref={globeRef}
      width={window.innerWidth}
      height={window.innerHeight}
      backgroundColor="rgba(0,0,0,0)"
      globeImageUrl=""
      bumpImageUrl=""
      showAtmosphere={true}
      atmosphereColor="#00e5df"
      atmosphereAltitude={0.09}
      polygonsData={polygons}
      polygonCapColor={(feature: object) => {
        const f = feature as CountryFeature
        const name = f.properties?.name || f.properties?.ADMIN || ''
        if (name === selectedName) return 'rgba(0, 245, 235, 0.36)'
        if (name === hoveredName) return 'rgba(0, 210, 205, 0.20)'
        return 'rgba(3, 24, 28, 0.72)'
      }}
      polygonSideColor={() => 'rgba(0, 180, 175, 0.16)'}
      polygonStrokeColor={(feature: object) => {
        const f = feature as CountryFeature
        const name = f.properties?.name || f.properties?.ADMIN || ''
        return name === selectedName ? '#9ffffb' : '#00bdb8'
      }}
      polygonAltitude={(feature: object) => {
        const f = feature as CountryFeature
        const name = f.properties?.name || f.properties?.ADMIN || ''
        return name === selectedName ? 0.025 : name === hoveredName ? 0.012 : 0.006
      }}
      polygonCapCurvatureResolution={3}
      polygonsTransitionDuration={220}
      onPolygonHover={(feature: object | null) => onHover(feature as CountryFeature | null)}
      onPolygonClick={(feature: object) => onSelect(feature as CountryFeature)}
      pointsData={[]}
    />
  )
}
