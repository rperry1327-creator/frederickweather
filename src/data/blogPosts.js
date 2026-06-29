export const BLOG_POSTS = [
  {
    id: "post-001",
    date: "Jun 28, 2025",
    title: "This Week in Frederick: Heat Dome Sets Up Over the Mid-Atlantic",
    type: "editor",
    tags: ["outlook", "event"],
    pinned: true,
    summary: "A persistent upper-level ridge is keeping temperatures well above average through the weekend. Here's what the setup looks like and when we might finally catch a break.",
    body: `
      <p>The 500mb pattern has been the dominant story this week. A strong ridge anchored over the Southeast is funneling hot, humid air northward into the mid-Atlantic, and Frederick is right in the bullseye. Afternoon highs have consistently topped 95°F, with dewpoints hovering in the upper 60s — that's the kind of combo that makes the heat index feel 105°+.</p>
      <div class="data-callout">
        <strong>📊 By the numbers:</strong> Frederick hit 97°F on Thursday, tying the daily record set in 1988. The overnight low of 76°F was also notable — our "coolest" time of day is still warmer than most summer afternoons in cooler climates.
      </div>
      <p>The ridge starts to break down by Tuesday as a cold front approaches from the northwest. The GFS has been consistent on a Tuesday afternoon storm chance, while the Euro wants to hold the boundary back an extra 12 hours. Either way, expect some fireworks before the relief arrives.</p>
      <p>Once that front clears, temperatures should drop back to the low-to-mid 80s by Wednesday — still warm, but a world apart from what we've been dealing with. Keep an eye on the Tuesday evening storm window if you have outdoor plans.</p>
    `
  },
  {
    id: "post-002",
    date: "Jun 22, 2025",
    title: "AI Outlook: Sunday–Saturday Weather Summary for Frederick",
    type: "ai",
    tags: ["outlook"],
    pinned: false,
    summary: "An AI-generated plain-English breakdown of the upcoming seven-day period, pulled from NWS forecast data for Frederick, MD.",
    body: `
      <p>The week ahead looks split into two distinct chapters. The first half (Sunday through Wednesday) will be dominated by the same hot and humid airmass that has been in place since mid-June. Highs in the mid-to-upper 90s are expected, with heat index values potentially exceeding 105°F during peak afternoon hours.</p>
      <div class="data-callout">
        <strong>💧 Humidity note:</strong> Dewpoints in the 68–72°F range are forecast Monday and Tuesday — that's oppressively muggy by any measure. Limit strenuous outdoor activity to before 10AM or after 7PM.
      </div>
      <p>A cold front arrives Wednesday, bringing a chance of strong to severe thunderstorms. The Storm Prediction Center has highlighted our area for a marginal to slight severe weather risk. Primary threats are damaging wind gusts and heavy rainfall. The front should clear by Thursday morning.</p>
      <p>Behind the front, high pressure builds from the northwest, ushering in a refreshing airmass for the back half of the week. Highs Thursday through Saturday will be in the low 80s with dewpoints in the 50s — classic comfortable summer weather. Mostly sunny skies are expected with no significant rain chances.</p>
      <p><em>This post was generated using NWS forecast data for Frederick, MD and plain-language summarization.</em></p>
    `
  },
  {
    id: "post-003",
    date: "Jun 15, 2025",
    title: "Reading the Radar: Understanding the Bow Echo That Hit Frederick Last Tuesday",
    type: "editor",
    tags: ["radar", "event"],
    pinned: false,
    summary: "Last Tuesday's squall line produced a textbook bow echo over the Frederick area. Let's break down what that signature means and why it matters for predicting severe wind threats.",
    body: `
      <p>If you were watching radar last Tuesday evening around 7PM, you saw something distinctive: the leading edge of the squall line bowed outward as it passed through Frederick County. That comma-shaped arc is called a bow echo, and it's one of the most reliable radar signatures for damaging straight-line winds.</p>
      <p>Here's the physics: as the convective system moves forward, a rear-inflow jet — essentially a surge of dry air from behind the storm — descends into the back of the bow. This accelerates the forward motion of the storm's leading edge, concentrating wind energy at the apex of the bow. That's exactly where Frederick city sat on Tuesday night.</p>
      <div class="data-callout">
        <strong>📡 What we saw:</strong> The bow apex tracked from Hagerstown through downtown Frederick and into Montgomery County over about 45 minutes. Reported gusts at the Frederick Municipal Airport hit 58 mph. Several hundred power outages were reported across the county.
      </div>
      <p>The good news: bow echoes are relatively easy to spot on radar with 20–30 minutes of lead time. When you see that bowing shape developing on a radar loop, treat it as a high-confidence signal for wind damage along its path — even if no tornado warning is in effect.</p>
      <p>Going forward, I'll be highlighting notable radar signatures in this blog section whenever a significant event affects Frederick. The goal is to build pattern recognition so you know what to look for on your own.</p>
    `
  },
  {
    id: "post-004",
    date: "Jun 8, 2025",
    title: "Climate Note: Frederick's June Temperature Trend Over the Past 30 Years",
    type: "editor",
    tags: ["climate"],
    pinned: false,
    summary: "Using NOAA climate data, I looked at how Frederick's average June high temperature has shifted since the 1990s. The trend is clear — and it has real implications for heat risk in the valley.",
    body: `
      <p>Frederick sits in the Monocacy Valley, a geography that makes it particularly susceptible to heat. The surrounding ridges can trap warm air at the surface during high-pressure events, and the valley's relatively low elevation means less cooling than you'd find in the Blue Ridge foothills to the west.</p>
      <p>I pulled NOAA's Climate Data Online records for the Frederick Municipal Airport (KFDK) going back to 1993. The data tells a consistent story: the average June high temperature has increased by approximately 2.4°F over that 30-year period, with the most pronounced warming occurring in the last decade.</p>
      <div class="data-callout">
        <strong>📈 The trend:</strong> 1993–2003 average June high: 83.1°F. 2014–2024 average June high: 85.6°F. That might not sound dramatic, but it pushes more days into the "excessive heat" threshold and compresses the comfortable window in the morning and evening.
      </div>
      <p>What this means practically: the number of days where the heat index exceeds 100°F in Frederick has roughly doubled since the mid-1990s. This is something to keep in mind for vulnerable populations — the elderly, outdoor workers, and anyone without reliable air conditioning.</p>
      <p>I'll be doing similar deep-dives on precipitation trends and severe weather frequency in future posts. There's a lot of interesting signal in the local climate data for Frederick specifically.</p>
    `
  }
];
