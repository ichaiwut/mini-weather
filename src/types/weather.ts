// Weather API response types
export interface WeatherResponse {
  name: string;
  main: MainWeatherData;
  weather: WeatherCondition[];
  wind: WindData;
  sys: SystemData;
  coord: Coordinates;
}

export interface MainWeatherData {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface WeatherCondition {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WindData {
  speed: number;
  deg: number;
  gust?: number;
}

export interface SystemData {
  country: string;
  sunrise: number;
  sunset: number;
}

export interface Coordinates {
  lat: number;
  lon: number;
}

// Application state types
export interface WeatherState {
  currentWeather: WeatherResponse | null;
  isLoading: boolean;
  error: string | null;
}

// API configuration
export interface WeatherApiConfig {
  baseUrl: string;
  apiKey: string;
}
