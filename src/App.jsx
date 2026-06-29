import { useState } from "react";
import Header from "./components/Header";
import ForecastView from "./components/ForecastView";
import BlogView from "./components/BlogView";
import SubscribeStrip from "./components/SubscribeStrip";

export default function App() {
  const [view, setView] = useState("forecast");

  return (
    <>
      <div className="sky-bg" />
      <div className="page-wrap">
        <Header view={view} onViewChange={setView} />
        {view === "forecast" ? <ForecastView /> : <BlogView />}
        <SubscribeStrip />
      </div>
    </>
  );
}
