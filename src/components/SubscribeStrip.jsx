const SUBSTACK_URL = "https://open.substack.com/pub/ryanperry319043/p/weather-for-frederick-md?r=3o243n&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true";

export default function SubscribeStrip() {
  return (
    <div className="subscribe-strip">
      <div className="subscribe-text">
        <h3>Get the weekly forecast in your inbox.</h3>
        <p>No jargon. Just what you actually need to know — every Sunday morning.</p>
      </div>
      <a className="subscribe-btn" href={SUBSTACK_URL} target="_blank" rel="noreferrer">
        Subscribe Free →
      </a>
    </div>
  );
}
