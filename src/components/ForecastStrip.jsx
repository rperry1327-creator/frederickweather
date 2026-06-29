import { decodeWMO, dayName } from "../utils/weather";

export default function ForecastStrip({ daily }) {
  return (
    <>
      <div className="section-label">7-Day Forecast</div>
      <div className="forecast-strip">
        {daily.time.map((t, i) => {
          const dc = decodeWMO(daily.weather_code[i]);
          return (
            <div key={t} className={`forecast-day${i === 0 ? " today" : ""}`}>
              <span className="day-name">{dayName(t, i)}</span>
              <span className="day-icon">{dc.icon}</span>
              <span className="day-hi">{Math.round(daily.temperature_2m_max[i])}°</span>
              <span className="day-lo">{Math.round(daily.temperature_2m_min[i])}°</span>
            </div>
          );
        })}
      </div>
    </>
  );
}
