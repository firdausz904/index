import type { CountryInfo } from '../data/countries'

type Props = {
  country: CountryInfo | null
  hoveredName: string | null
}

export function CountryOverlay({ country, hoveredName }: Props) {
  if (!country && !hoveredName) return null

  if (!country && hoveredName) {
    return (
      <div className="country-hover-label" aria-live="polite">
        {hoveredName}
      </div>
    )
  }

  if (!country) return null

  return (
    <section className="country-overlay" aria-live="polite" aria-label={`${country.name} information`}>
      <div className="country-title">
        <span className="country-flag">{country.flag}</span>
        <div>
          <div className="eyebrow">SELECTED COUNTRY</div>
          <h1>{country.name}</h1>
        </div>
      </div>
      <div className="country-details">
        <div><span>CAPITAL</span><strong>{country.capital}</strong></div>
        <div><span>REGION</span><strong>{country.region}</strong></div>
        <div><span>POPULATION</span><strong>{country.population}</strong></div>
        <div><span>CURRENCY</span><strong>{country.currency}</strong></div>
        <div><span>LANGUAGES</span><strong>{country.languages}</strong></div>
      </div>
    </section>
  )
}
