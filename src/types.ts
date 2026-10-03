export type CountryProperties = {
  name?: string
  NAME?: string
  NAME_LONG?: string
  ADMIN?: string
  ISO_A2?: string
  ISO_A3?: string
}

export type CountryFeature = GeoJSON.Feature<GeoJSON.Geometry, CountryProperties>
