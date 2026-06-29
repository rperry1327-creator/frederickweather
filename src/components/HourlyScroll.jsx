import { decodeWMO, fmtTime } from "../utils/weather";

export default function HourlyScroll({ hourly }) {
  const now = new Date();
  const nowIdx = hourly.time.findIndex((t) => new Date(t) >= now);
  const nextHours = hourly.time.slice(nowIdx, nowIdx + 12);

  return (
    <>
      <div className="section-label">Hour by Hour</div>
      <div className="hourly-scroll">
        {nextHours.map((t, i) => {
          const idx = nowIdx + i;
          const hc = decodeWMO(hourly.weather_code[idx]);
          const pp = hourly.precipitation_probability[idx];
          return (
            <div key={t} className="hourly-item">
              <span className="hour-time">{fmtTime(t)}</span>
              <span className="hour-icon">{hc.icon}</span>
              <span className="hour-temp">{Math.round(hourly.temperature_2m[idx])}°</span>
              <span className="hour-precip">
                {pp > 10 ? `💧 ${pp}%` : " "}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}
