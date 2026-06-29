export default function AlertBanner({ alerts }) {
  if (!alerts.length) return null;
  const a = alerts[0].properties;
  return (
    <div className="alert-banner">
      <span className="alert-icon">⚠️</span>
      <div className="alert-text">
        <strong>{a.event}</strong>
        {a.headline || "Active weather alert for the Frederick area."}
      </div>
    </div>
  );
}
