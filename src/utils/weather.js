export const FREDERICK = { lat: 39.4143, lon: -77.4105, name: "Frederick, MD" };

export function decodeWMO(code) {
  const map = {
    0: { icon: "☀️", label: "Clear skies" },
    1: { icon: "🌤️", label: "Mostly clear" },
    2: { icon: "⛅", label: "Partly cloudy" },
    3: { icon: "☁️", label: "Overcast" },
    45: { icon: "🌫️", label: "Foggy" },
    48: { icon: "🌫️", label: "Icy fog" },
    51: { icon: "🌦️", label: "Light drizzle" },
    53: { icon: "🌦️", label: "Drizzle" },
    55: { icon: "🌧️", label: "Heavy drizzle" },
    61: { icon: "🌧️", label: "Light rain" },
    63: { icon: "🌧️", label: "Rain" },
    65: { icon: "🌧️", label: "Heavy rain" },
    71: { icon: "🌨️", label: "Light snow" },
    73: { icon: "❄️", label: "Snow" },
    75: { icon: "❄️", label: "Heavy snow" },
    77: { icon: "🌨️", label: "Snow grains" },
    80: { icon: "🌦️", label: "Showers" },
    81: { icon: "🌧️", label: "Rain showers" },
    82: { icon: "⛈️", label: "Heavy showers" },
    85: { icon: "🌨️", label: "Snow showers" },
    86: { icon: "❄️", label: "Heavy snow showers" },
    95: { icon: "⛈️", label: "Thunderstorm" },
    96: { icon: "⛈️", label: "T-storm w/ hail" },
    99: { icon: "⛈️", label: "Severe T-storm" },
  };
  return map[code] || { icon: "🌡️", label: "Conditions vary" };
}

export function makePlainEnglish(current, daily) {
  const temp = Math.round(current.temperature_2m);
  const feelsLike = Math.round(current.apparent_temperature);
  const wind = Math.round(current.wind_speed_10m);
  const hi = Math.round(daily.temperature_2m_max[0]);
  const lo = Math.round(daily.temperature_2m_min[0]);
  const precip = daily.precipitation_probability_max[0];

  let feel = "";
  if (Math.abs(temp - feelsLike) >= 5) feel = ` — though it feels more like ${feelsLike}°`;

  let precipLine = "";
  if (precip >= 70) precipLine = " Definitely grab an umbrella before heading out.";
  else if (precip >= 40) precipLine = " There's a decent chance of rain today, so keep an umbrella handy.";
  else if (precip > 15) precipLine = " Rain is possible but unlikely to be a problem.";
  else precipLine = " No rain in the cards today.";

  let windLine = "";
  if (wind >= 25) windLine = " It's breezy out there — hold onto your hat.";
  else if (wind >= 15) windLine = " A light wind is in the mix.";

  return `It's ${temp}°F out there right now${feel}. Expect a high of ${hi}° and a low of ${lo}° today.${precipLine}${windLine}`;
}

export function fmtTime(iso) {
  const d = new Date(iso);
  let h = d.getHours(), ampm = "AM";
  if (h === 0) h = 12;
  else if (h === 12) ampm = "PM";
  else if (h > 12) { h -= 12; ampm = "PM"; }
  return `${h}${ampm}`;
}

export function fmtSunTime(iso) {
  const d = new Date(iso);
  let h = d.getHours(), m = d.getMinutes(), ampm = "AM";
  if (h === 0) h = 12;
  else if (h === 12) ampm = "PM";
  else if (h > 12) { h -= 12; ampm = "PM"; }
  return `${h}:${String(m).padStart(2, "0")} ${ampm}`;
}

export function dayName(iso, i) {
  if (i === 0) return "Today";
  const [year, month, day] = iso.split("-").map(Number);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[new Date(year, month - 1, day).getDay()];
}
