import { useWeather } from "../hooks/useWeather";
import AlertBanner from "./AlertBanner";
import HeroCard from "./HeroCard";
import ForecastStrip from "./ForecastStrip";
import HourlyScroll from "./HourlyScroll";

export default function ForecastView() {
  const { weather, alerts, loading, error } = useWeather();

  if (loading) {
    return (
      <div className="loading-state">
        <div className="loading-spinner" />
        <p>Checking in with the sky over Frederick…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-card">
        <h3>Couldn&apos;t reach the sky right now ☁️</h3>
        <p>Having trouble pulling live data. Try refreshing in a moment.</p>
      </div>
    );
  }

  return (
    <>
      <AlertBanner alerts={alerts} />
      <HeroCard current={weather.current} daily={weather.daily} />
      <ForecastStrip daily={weather.daily} />
      <HourlyScroll hourly={weather.hourly} />
    </>
  );
}
