export type CountryInfo = {
  name: string
  capital: string
  region: string
  population: string
  currency: string
  languages: string
  flag: string
  lat: number
  lng: number
}

export const countryInfo: Record<string, CountryInfo> = {
  Malaysia: { name: 'Malaysia', capital: 'Kuala Lumpur', region: 'Asia', population: '34.3M', currency: 'Malaysian ringgit (MYR)', languages: 'Malay, English, Chinese, Tamil', flag: '🇲🇾', lat: 4.21, lng: 101.98 },
  Singapore: { name: 'Singapore', capital: 'Singapore', region: 'Asia', population: '6.0M', currency: 'Singapore dollar (SGD)', languages: 'English, Malay, Mandarin, Tamil', flag: '🇸🇬', lat: 1.35, lng: 103.82 },
  Japan: { name: 'Japan', capital: 'Tokyo', region: 'Asia', population: '123.0M', currency: 'Japanese yen (JPY)', languages: 'Japanese', flag: '🇯🇵', lat: 36.2, lng: 138.25 },
  'United States of America': { name: 'United States of America', capital: 'Washington, D.C.', region: 'North America', population: '340.1M', currency: 'United States dollar (USD)', languages: 'English', flag: '🇺🇸', lat: 39.83, lng: -98.58 },
  Canada: { name: 'Canada', capital: 'Ottawa', region: 'North America', population: '40.8M', currency: 'Canadian dollar (CAD)', languages: 'English, French', flag: '🇨🇦', lat: 56.13, lng: -106.35 },
  Brazil: { name: 'Brazil', capital: 'Brasília', region: 'South America', population: '212.6M', currency: 'Brazilian real (BRL)', languages: 'Portuguese', flag: '🇧🇷', lat: -14.24, lng: -51.93 },
  Australia: { name: 'Australia', capital: 'Canberra', region: 'Oceania', population: '27.2M', currency: 'Australian dollar (AUD)', languages: 'English', flag: '🇦🇺', lat: -25.27, lng: 133.78 },
  India: { name: 'India', capital: 'New Delhi', region: 'Asia', population: '1.46B', currency: 'Indian rupee (INR)', languages: 'Hindi, English and regional languages', flag: '🇮🇳', lat: 20.59, lng: 78.96 },
  China: { name: 'China', capital: 'Beijing', region: 'Asia', population: '1.41B', currency: 'Renminbi (CNY)', languages: 'Mandarin and regional languages', flag: '🇨🇳', lat: 35.86, lng: 104.2 },
  'United Kingdom': { name: 'United Kingdom', capital: 'London', region: 'Europe', population: '69.6M', currency: 'Pound sterling (GBP)', languages: 'English and regional languages', flag: '🇬🇧', lat: 55.38, lng: -3.44 },
  France: { name: 'France', capital: 'Paris', region: 'Europe', population: '66.5M', currency: 'Euro (EUR)', languages: 'French', flag: '🇫🇷', lat: 46.23, lng: 2.21 },
  Germany: { name: 'Germany', capital: 'Berlin', region: 'Europe', population: '84.1M', currency: 'Euro (EUR)', languages: 'German', flag: '🇩🇪', lat: 51.17, lng: 10.45 },
  Italy: { name: 'Italy', capital: 'Rome', region: 'Europe', population: '58.7M', currency: 'Euro (EUR)', languages: 'Italian', flag: '🇮🇹', lat: 41.87, lng: 12.57 },
  Spain: { name: 'Spain', capital: 'Madrid', region: 'Europe', population: '49.0M', currency: 'Euro (EUR)', languages: 'Spanish and regional languages', flag: '🇪🇸', lat: 40.46, lng: -3.75 },
  'South Africa': { name: 'South Africa', capital: 'Pretoria / Cape Town / Bloemfontein', region: 'Africa', population: '64.7M', currency: 'South African rand (ZAR)', languages: 'Multiple official languages', flag: '🇿🇦', lat: -30.56, lng: 22.94 },
  Egypt: { name: 'Egypt', capital: 'Cairo', region: 'Africa', population: '118.4M', currency: 'Egyptian pound (EGP)', languages: 'Arabic', flag: '🇪🇬', lat: 26.82, lng: 30.8 },
}

export const fallbackInfo = (name: string): CountryInfo => ({
  name,
  capital: '—',
  region: '—',
  population: '—',
  currency: '—',
  languages: '—',
  flag: '🌍',
  lat: 0,
  lng: 0,
})
