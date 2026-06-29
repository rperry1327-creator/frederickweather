import { decodeWMO, fmtSunTime } from "../utils/weather";

export default function HeroCard({ current, daily }) {
  const curCode = decodeWMO(current.weather_code);
  const now = new Date();
  const dateStr = now.toLocaleDateString("en-US", {
    weekday: "long", month: "long", day: "numeric", year: "numeric",
  });
  const updateTime = now.toLocaleTimeString("en-US", {
    hour: "numeric", minute: "2-digit", timeZoneName: "short",
  });

  return (
    <div className="hero-card">
      <div className="hero-top">
        <div>
          <div className="location-label">📍 Frederick, MD</div>
          <div className="current-temp">
            {Math.round(current.temperature_2m)}<sup>°F</sup>
          </div>
        </div>
        <div className="condition-block">
          <span className="condition-icon">{curCode.icon}</span>
          <span className="condition-label">{curCode.label}</span>
        </div>
      </div>

      <div className="date-widget">
        <span className="date-widget-icon">📅</span>
        <div>
          <div className="date-widget-label">Today</div>
          <div className="date-widget-full">{dateStr}</div>
        </div>
      </div>

      <div className="stats-row">
        <div className="stat-box">
          <span className="stat-icon">🌡️</span>
          <span className="stat-value">{Math.round(current.apparent_temperature)}°</span>
          <span className="stat-label">Feels Like</span>
        </div>
        <div className="stat-box">
          <span className="stat-icon">💧</span>
          <span className="stat-value">{current.relative_humidity_2m}%</span>
          <span className="stat-label">Humidity</span>
        </div>
        <div className="stat-box">
          <span className="stat-icon">💨</span>
          <span className="stat-value">{Math.round(current.wind_speed_10m)}</span>
          <span className="stat-label">Wind mph</span>
        </div>
        <div className="stat-box">
          <span className="stat-icon">🌧️</span>
          <span className="stat-value">{daily.precipitation_probability_max[0]}%</span>
          <span className="stat-label">Rain Chance</span>
        </div>
      </div>

      <div className="sun-row">
        <div className="sun-box">
          <span className="sun-icon">🌅</span>
          <div>
            <span className="sun-value">{fmtSunTime(daily.sunrise[0])}</span>
            <span className="sun-label">Sunrise</span>
          </div>
        </div>
        <div className="sun-box">
          <span className="sun-icon">🌇</span>
          <div>
            <span className="sun-value">{fmtSunTime(daily.sunset[0])}</span>
            <span className="sun-label">Sunset</span>
          </div>
        </div>
      </div>

      <div className="widget-footer">
        <span className="update-time">Updated {updateTime}</span>
        <span className="data-sources">
          Data: <a href="https://open-meteo.com" target="_blank" rel="noreferrer">Open-Meteo</a> &amp;{" "}
          <a href="https://api.weather.gov" target="_blank" rel="noreferrer">NWS</a>
        </span>
      </div>
    </div>
  );
}
