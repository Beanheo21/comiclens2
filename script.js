const NASA_KEY = "Y1Whb7D6yCivz6pcV0HXHf22D2jHrmRXJ2a78bWK";

const PLANETS = {
  "kepler-452 b": {pl_name:"Kepler-452 b",pl_rade:1.63,pl_masse:5,pl_eqt:265,pl_orbper:384.8,st_dist:1402,disc_year:2015,type:"Super-Earth",star:"G-type (like our Sun)",discovery:"Kepler Space Telescope"},
  "trappist-1 e": {pl_name:"TRAPPIST-1 e",pl_rade:0.92,pl_masse:0.77,pl_eqt:251,pl_orbper:6.1,st_dist:39,disc_year:2017,type:"Terrestrial",star:"Ultra-cool dwarf star",discovery:"Spitzer Space Telescope"},
  "trappist-1 b": {pl_name:"TRAPPIST-1 b",pl_rade:1.09,pl_masse:1.02,pl_eqt:400,pl_orbper:1.5,st_dist:39,disc_year:2016,type:"Terrestrial",star:"Ultra-cool dwarf star",discovery:"TRAPPIST Telescope"},
  "trappist-1 c": {pl_name:"TRAPPIST-1 c",pl_rade:1.06,pl_masse:1.16,pl_eqt:342,pl_orbper:2.4,st_dist:39,disc_year:2016,type:"Terrestrial",star:"Ultra-cool dwarf star",discovery:"TRAPPIST Telescope"},
  "trappist-1 d": {pl_name:"TRAPPIST-1 d",pl_rade:0.77,pl_masse:0.3,pl_eqt:288,pl_orbper:4.0,st_dist:39,disc_year:2017,type:"Terrestrial",star:"Ultra-cool dwarf star",discovery:"Spitzer Space Telescope"},
  "trappist-1 f": {pl_name:"TRAPPIST-1 f",pl_rade:1.04,pl_masse:0.93,pl_eqt:219,pl_orbper:9.2,st_dist:39,disc_year:2017,type:"Terrestrial",star:"Ultra-cool dwarf star",discovery:"Spitzer Space Telescope"},
  "trappist-1 g": {pl_name:"TRAPPIST-1 g",pl_rade:1.13,pl_masse:1.15,pl_eqt:198,pl_orbper:12.4,st_dist:39,disc_year:2017,type:"Terrestrial",star:"Ultra-cool dwarf star",discovery:"Spitzer Space Telescope"},
  "55 cnc e": {pl_name:"55 Cnc e",pl_rade:1.88,pl_masse:8.63,pl_eqt:1958,pl_orbper:0.74,st_dist:41,disc_year:2004,type:"Super-Earth",star:"Binary star system",discovery:"Radial velocity"},
  "hd 209458 b": {pl_name:"HD 209458 b",pl_rade:13.4,pl_masse:220,pl_eqt:1459,pl_orbper:3.5,st_dist:159,disc_year:1999,type:"Hot Jupiter",star:"Sun-like G star",discovery:"Transit photometry"},
  "proxima centauri b": {pl_name:"Proxima Cen b",pl_rade:1.07,pl_masse:1.27,pl_eqt:234,pl_orbper:11.2,st_dist:1.3,disc_year:2016,type:"Terrestrial",star:"Red dwarf (nearest star!)",discovery:"Radial velocity"},
  "proxima cen b": {pl_name:"Proxima Cen b",pl_rade:1.07,pl_masse:1.27,pl_eqt:234,pl_orbper:11.2,st_dist:1.3,disc_year:2016,type:"Terrestrial",star:"Red dwarf (nearest star!)",discovery:"Radial velocity"},
  "kepler-22 b": {pl_name:"Kepler-22 b",pl_rade:2.38,pl_masse:9.1,pl_eqt:262,pl_orbper:289.9,st_dist:619,disc_year:2011,type:"Super-Earth",star:"G-type (like our Sun)",discovery:"Kepler Space Telescope"},
  "kepler-186 f": {pl_name:"Kepler-186 f",pl_rade:1.17,pl_masse:1.71,pl_eqt:188,pl_orbper:129.9,st_dist:582,disc_year:2014,type:"Terrestrial",star:"M-dwarf red star",discovery:"Kepler Space Telescope"},
  "k2-18 b": {pl_name:"K2-18 b",pl_rade:2.37,pl_masse:8.63,pl_eqt:255,pl_orbper:32.9,st_dist:124,disc_year:2015,type:"Hycean world",star:"Red dwarf star",discovery:"K2 Mission"},
  "wasp-12 b": {pl_name:"WASP-12 b",pl_rade:18.0,pl_masse:457,pl_eqt:2580,pl_orbper:1.09,st_dist:871,disc_year:2008,type:"Ultra-hot Jupiter",star:"F-type star",discovery:"WASP Survey"},
  "lhs 1140 b": {pl_name:"LHS 1140 b",pl_rade:1.73,pl_masse:6.98,pl_eqt:230,pl_orbper:24.7,st_dist:49,disc_year:2017,type:"Super-Earth",star:"Red dwarf star",discovery:"MEarth Project"},
  "gliese 436 b": {pl_name:"Gliese 436 b",pl_rade:4.19,pl_masse:21.4,pl_eqt:649,pl_orbper:2.6,st_dist:33,disc_year:2004,type:"Hot Neptune",star:"Red dwarf star",discovery:"Radial velocity"},
  "gj 667c c": {pl_name:"GJ 667C c",pl_rade:1.54,pl_masse:3.8,pl_eqt:277,pl_orbper:28.1,st_dist:23,disc_year:2011,type:"Super-Earth",star:"M-dwarf in triple system",discovery:"HARPS spectrograph"},
  "hat-p-7 b": {pl_name:"HAT-P-7 b",pl_rade:14.5,pl_masse:560,pl_eqt:2230,pl_orbper:2.2,st_dist:1044,disc_year:2008,type:"Hot Jupiter",star:"F-type star",discovery:"HATNet Survey"},
};

function quickSearch(name) {
  document.getElementById("planet-input").value = name;
  searchPlanet();
}

function searchPlanet() {
  const name = document.getElementById("planet-input").value.trim();
  if (!name) return;

  const key = name.toLowerCase();
  const p = PLANETS[key];
  const section = document.getElementById("result-section");

  if (!p) {
    section.className = "result-section";
    document.getElementById("planet-hero").innerHTML = `
      <div style="color:#f87171;font-size:1.1rem;padding:2rem;">
        No planet found for "${name}".<br/>
        <span style="font-size:13px;color:#6b7280;margin-top:8px;display:block;">Try clicking one of the suggestions above!</span>
      </div>`;
    document.getElementById("stats-card").innerHTML = "";
    document.getElementById("hab-card").innerHTML = "";
    document.getElementById("size-viz").innerHTML = "";
    document.getElementById("fun-facts").innerHTML = "";
    document.getElementById("apod-section").className = "card apod-card hidden";
    return;
  }

  section.className = "result-section";

  const r = p.pl_rade;
  const temp = Math.round(p.pl_eqt);
  const tempC = Math.round(temp - 273);
  const year = p.disc_year;
  const hab = getHabitability(temp, r);
  const planetColor = r < 0.8 ? "#c87941" : r < 1.6 ? "#4a9eff" : r < 4 ? "#a78bfa" : r < 10 ? "#f97316" : "#f87171";
  const bgGradient = r < 0.8 ? "radial-gradient(ellipse at 50% 0%, #3d1f0a 0%, #050510 70%)"
    : r < 1.6 ? "radial-gradient(ellipse at 50% 0%, #0a1f3d 0%, #050510 70%)"
    : r < 4 ? "radial-gradient(ellipse at 50% 0%, #1a0a3d 0%, #050510 70%)"
    : "radial-gradient(ellipse at 50% 0%, #3d0a0a 0%, #050510 70%)";

  const ballSize = Math.min(Math.max(r * 50, 60), 180);

  document.getElementById("planet-hero").style.background = bgGradient;
  document.getElementById("planet-hero").innerHTML = `
    <h2>${p.pl_name}</h2>
    <p class="tagline">${p.type} • ${p.star} • Discovered ${year}</p>
    <div class="planet-ball-container">
      <div class="planet-ball" style="width:${ballSize}px;height:${ballSize}px;background:radial-gradient(circle at 35% 30%, ${planetColor}88, ${planetColor});"></div>
    </div>
    <div class="badge-row">
      <span class="badge badge-blue">📡 ${p.discovery}</span>
      <span class="badge badge-purple">📏 ${r.toFixed(2)}× Earth</span>
      <span class="badge ${tempC > 100 ? 'badge-red' : tempC < 0 ? 'badge-blue' : 'badge-green'}">🌡️ ${tempC}°C</span>
      <span class="badge badge-yellow">📅 ${p.pl_orbper.toFixed(1)} day year</span>
    </div>
  `;

  document.getElementById("stats-card").innerHTML = `
    <h3>📊 Planet Data</h3>
    <div class="stat-row"><span class="stat-label">Radius</span><span class="stat-value">${r.toFixed(2)}× Earth (${Math.round(r * 6371).toLocaleString()} km)</span></div>
    <div class="stat-row"><span class="stat-label">Mass</span><span class="stat-value">${p.pl_masse.toFixed(2)}× Earth</span></div>
    <div class="stat-row"><span class="stat-label">Temperature</span><span class="stat-value">${temp} K / ${tempC}°C / ${Math.round(tempC * 9/5 + 32)}°F</span></div>
    <div class="stat-row"><span class="stat-label">Year length</span><span class="stat-value">${p.pl_orbper.toFixed(1)} Earth days</span></div>
    <div class="stat-row"><span class="stat-label">Distance from Earth</span><span class="stat-value">${p.st_dist < 10 ? p.st_dist.toFixed(1) : Math.round(p.st_dist).toLocaleString()} light-years</span></div>
    <div class="stat-row"><span class="stat-label">Planet type</span><span class="stat-value">${p.type}</span></div>
    <div class="stat-row"><span class="stat-label">Host star</span><span class="stat-value">${p.star}</span></div>
  `;

  document.getElementById("hab-card").innerHTML = `
    <h3>🌍 Habitability Analysis</h3>
    <div class="hab-score">${hab.emoji}</div>
    <div class="hab-verdict" style="color:${hab.color}">${hab.verdict}</div>
    <div class="hab-bar-container">
      <div class="hab-bar" style="width:${hab.score}%;background:${hab.color};"></div>
    </div>
    <div style="display:flex;justify-content:space-between;font-size:11px;color:#4b5563;margin-bottom:0.8rem;">
      <span>Uninhabitable</span><span>Habitable</span>
    </div>
    <div class="hab-detail">${hab.text}</div>
  `;

  showSizeViz(p.pl_name, r, planetColor);
  showFunFacts(p, tempC, hab);
  loadAPOD(year);
}

function getHabitability(temp, r) {
  const inZone = temp >= 200 && temp <= 320;
  const tooBig = r > 2.5;
  const tooHot = temp > 500;
  const tooCold = temp < 150;

  if (inZone && !tooBig) return {
    emoji: "🌱", verdict: "Potentially Habitable!", color: "#34d399", score: 85,
    text: `At ${Math.round(temp-273)}°C and ${r.toFixed(1)}× Earth's radius, conditions here could support liquid water. This is one of the most Earth-like planets we've found!`
  };
  if (tooHot && r > 10) return {
    emoji: "☠️", verdict: "Extreme Hot Jupiter", color: "#f87171", score: 2,
    text: `A gas giant hellscape at ${Math.round(temp-273)}°C — no solid surface, crushing pressure, and temperatures that melt metal. Spectacular to observe, impossible to visit.`
  };
  if (tooHot) return {
    emoji: "🔥", verdict: "Way Too Hot", color: "#f97316", score: 5,
    text: `At ${Math.round(temp-273)}°C you'd vaporize before landing. Even lead is liquid here. No water, no life, no chance.`
  };
  if (tooCold) return {
    emoji: "🧊", verdict: "Frozen Wasteland", color: "#93c5fd", score: 8,
    text: `At ${Math.round(temp-273)}°C everything freezes solid. No liquid water can exist. Life as we know it is impossible without extreme heat sources underground.`
  };
  if (tooBig) return {
    emoji: "💨", verdict: "Gas Giant — No Surface", color: "#a78bfa", score: 15,
    text: `At ${r.toFixed(1)}× Earth's radius, this is a gas or ice giant with no solid surface to stand on. Temperature is okay but there's nowhere to put your feet.`
  };
  return {
    emoji: "🌡️", verdict: "Marginal Conditions", color: "#fbbf24", score: 40,
    text: `Temperature is borderline and size is reasonable, but conditions are far from ideal. Could be habitable with the right atmosphere — we'd need much more data.`
  };
}

function showSizeViz(name, r, planetColor) {
  const BASE = 28;
  const sunR = Math.min(BASE * 10.9, 160);
  const earthR = BASE;
  const planetR = Math.min(Math.max(BASE * r, 5), 160);

  document.getElementById("size-viz").innerHTML = `
    <h3>📐 Size Comparison (to scale)</h3>
    <div class="planets-row">
      <div class="planet-item">
        <div class="planet-circle" style="width:${sunR*2}px;height:${sunR*2}px;background:radial-gradient(circle at 35% 30%,#ffe566,#f59d00);box-shadow:0 0 40px #f59d0055;"></div>
        <span class="planet-label">☀️ Sun</span>
        <span class="planet-sublabel">109× Earth</span>
      </div>
      <div class="planet-item">
        <div class="planet-circle" style="width:${earthR*2}px;height:${earthR*2}px;background:radial-gradient(circle at 35% 30%,#4fc3f7,#1565c0);box-shadow:0 0 20px #1565c055;"></div>
        <span class="planet-label">🌍 Earth</span>
        <span class="planet-sublabel">1× (baseline)</span>
      </div>
      <div class="planet-item">
        <div class="planet-circle" style="width:${planetR*2}px;height:${planetR*2}px;background:radial-gradient(circle at 35% 30%,${planetColor}99,${planetColor});box-shadow:0 0 30px ${planetColor}44;"></div>
        <span class="planet-label">🪐 ${name}</span>
        <span class="planet-sublabel">${r.toFixed(2)}× Earth</span>
      </div>
    </div>
    <p style="font-size:12px;color:#4b5563;text-align:center;margin-top:1rem;">Surface area: ${(r*r).toFixed(1)}× Earth's • Volume: ${(r*r*r).toFixed(1)}× Earth's</p>
  `;
}

function showFunFacts(p, tempC, hab) {
  const lightYears = p.st_dist;
  const travelYears = Math.round(lightYears * 100);
  const gravity = (p.pl_masse / (p.pl_rade * p.pl_rade)).toFixed(1);
  const weightKg = 70;
  const weightThere = Math.round(weightKg * gravity);
  const yearInEarthDays = p.pl_orbper.toFixed(1);

  document.getElementById("fun-facts").innerHTML = `
    <h3>🤯 Fun Facts</h3>
    <div class="fun-facts-grid">
      <div class="fun-fact">
        <strong>🚀 Travel time</strong>
        At 1% the speed of light, it would take ${travelYears.toLocaleString()} years to reach ${p.pl_name}.
      </div>
      <div class="fun-fact">
        <strong>⚖️ Your weight there</strong>
        If you weigh 154 lbs (70 kg) on Earth, you'd weigh ~${Math.round(weightThere * 2.2)} lbs on ${p.pl_name} (gravity is ${gravity}× Earth's).
      </div>
      <div class="fun-fact">
        <strong>🎂 Your age there</strong>
        A year here is only ${yearInEarthDays} Earth days. A 16-year-old would be ${Math.round(16 * 365 / p.pl_orbper)} years old in local years!
      </div>
      <div class="fun-fact">
        <strong>🌡️ Temperature context</strong>
        At ${tempC}°C, ${tempC > 1000 ? "rocks themselves would melt and flow as lava." : tempC > 100 ? "water boils instantly — the entire planet is a pressure cooker." : tempC > 0 ? "liquid water could exist on the surface!" : tempC > -50 ? "it's like Antarctica — cold but survivable with gear." : "even CO₂ freezes solid. It's colder than anything on Earth."}
      </div>
    </div>
  `;
}

async function loadAPOD(year) {
  const apodEl = document.getElementById("apod-section");
  apodEl.className = "card apod-card";
  apodEl.innerHTML = `<p class="loading">Loading NASA image from ${year}...</p>`;
  try {
    const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}&date=${year}-06-15`);
    const data = await res.json();
    if (data.media_type === "image") {
      apodEl.innerHTML = `
        <h3>🌌 NASA Image from ${year} — Discovery Year</h3>
        <img src="${data.url}" alt="${data.title}" />
        <div class="apod-title">${data.title}</div>
        <div class="apod-desc">${data.explanation.substring(0, 400)}...</div>
      `;
    } else {
      apodEl.className = "card apod-card hidden";
    }
  } catch {
    apodEl.className = "card apod-card hidden";
  }
}

document.getElementById("planet-input").addEventListener("keydown", e => {
  if (e.key === "Enter") searchPlanet();
});
