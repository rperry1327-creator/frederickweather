import { useState, useEffect } from "react";
import { FREDERICK } from "../utils/weather";

async function fetchWeather() {
  const url =
    `https://api.open-meteo.com/v1/forecast` +
    `?latitude=${FREDERICK.lat}&longitude=${FREDERICK.lon}` +
    `&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m,relative_humidity_2m,precipitation` +
    `&hourly=temperature_2m,weather_code,precipitation_probability` +
    `&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,precipitation_sum,sunrise,sunset` +
    `&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch` +
    `&timezone=America%2FNew_York&forecast_days=7`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Weather fetch failed");
  return res.json();
}

async function fetchAlerts() {
  try {
    const res = await fetch(
      `https://api.weather.gov/alerts/active?point=${FREDERICK.lat},${FREDERICK.lon}`,
      { headers: { "User-Agent": "FrederickWeatherBlog/1.0" } }
    );
    const data = await res.json();
    return data.features || [];
  } catch {
    return [];
  }
}

export function useWeather() {
  const [weather, setWeather] = useState(null);
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([fetchWeather(), fetchAlerts()])
      .then(([w, a]) => {
        setWeather(w);
        setAlerts(a);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { weather, alerts, loading, error };
}
