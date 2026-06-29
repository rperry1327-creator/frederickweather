export default function Header({ view, onViewChange }) {
  return (
    <header className="site-header">
      <div className="site-brand">
        <div className="site-name">Frederick<span>Weather</span></div>
        <div className="site-tagline">Plain English · Frederick, MD</div>
      </div>
      <nav className="site-nav">
        <button
          className={`nav-btn${view === "forecast" ? " active" : ""}`}
          onClick={() => onViewChange("forecast")}
        >
          ⛅ Forecast
        </button>
        <button
          className={`nav-btn${view === "blog" ? " active" : ""}`}
          onClick={() => onViewChange("blog")}
        >
          📝 Blog
        </button>
      </nav>
    </header>
  );
}
