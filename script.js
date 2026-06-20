const NASA_KEY = "Y1Whb7D6yCivz6pcV0HXHf22D2jHrmRXJ2a78bWK";

const PLANETS = {
  "kepler-452 b": {pl_name:"Kepler-452 b",pl_rade:1.63,pl_masse:5,pl_eqt:265,pl_orbper:384.8,st_dist:1402,disc_year:2015},
  "trappist-1 e": {pl_name:"TRAPPIST-1 e",pl_rade:0.92,pl_masse:0.77,pl_eqt:251,pl_orbper:6.1,st_dist:39,disc_year:2017},
  "trappist-1 b": {pl_name:"TRAPPIST-1 b",pl_rade:1.09,pl_masse:1.02,pl_eqt:400,pl_orbper:1.5,st_dist:39,disc_year:2016},
  "trappist-1 c": {pl_name:"TRAPPIST-1 c",pl_rade:1.06,pl_masse:1.16,pl_eqt:342,pl_orbper:2.4,st_dist:39,disc_year:2016},
  "trappist-1 d": {pl_name:"TRAPPIST-1 d",pl_rade:0.77,pl_masse:0.3,pl_eqt:288,pl_orbper:4.0,st_dist:39,disc_year:2017},
  "trappist-1 f": {pl_name:"TRAPPIST-1 f",pl_rade:1.04,pl_masse:0.93,pl_eqt:219,pl_orbper:9.2,st_dist:39,disc_year:2017},
  "trappist-1 g": {pl_name:"TRAPPIST-1 g",pl_rade:1.13,pl_masse:1.15,pl_eqt:198,pl_orbper:12.4,st_dist:39,disc_year:2017},
  "55 cnc e": {pl_name:"55 Cnc e",pl_rade:1.88,pl_masse:8.63,pl_eqt:1958,pl_orbper:0.74,st_dist:41,disc_year:2004},
  "hot jupiter": {pl_name:"HD 209458 b",pl_rade:13.4,pl_masse:220,pl_eqt:1459,pl_orbper:3.5,st_dist:159,disc_year:1999},
  "hd 209458 b": {pl_name:"HD 209458 b",pl_rade:13.4,pl_masse:220,pl_eqt:1459,pl_orbper:3.5,st_dist:159,disc_year:1999},
  "proxima centauri b": {pl_name:"Proxima Cen b",pl_rade:1.07,pl_masse:1.27,pl_eqt:234,pl_orbper:11.2,st_dist:1.3,disc_year:2016},
  "proxima cen b": {pl_name:"Proxima Cen b",pl_rade:1.07,pl_masse:1.27,pl_eqt:234,pl_orbper:11.2,st_dist:1.3,disc_year:2016},
  "kepler-22 b": {pl_name:"Kepler-22 b",pl_rade:2.38,pl_masse:9.1,pl_eqt:262,pl_orbper:289.9,st_dist:619,disc_year:2011},
  "kepler-186 f": {pl_name:"Kepler-186 f",pl_rade:1.17,pl_masse:1.71,pl_eqt:188,pl_orbper:129.9,st_dist:582,disc_year:2014},
  "gj 667c c": {pl_name:"GJ 667C c",pl_rade:1.54,pl_masse:3.8,pl_eqt:277,pl_orbper:28.1,st_dist:23,disc_year:2011},
  "k2-18 b": {pl_name:"K2-18 b",pl_rade:2.37,pl_masse:8.63,pl_eqt:255,pl_orbper:32.9,st_dist:124,disc_year:2015},
  "wasp-12 b": {pl_name:"WASP-12 b",pl_rade:18.0,pl_masse:457,pl_eqt:2580,pl_orbper:1.09,st_dist:871,disc_year:2008},
  "hat-p-7 b": {pl_name:"HAT-P-7 b",pl_rade:14.5,pl_masse:560,pl_eqt:2230,pl_orbper:2.2,st_dist:1044,disc_year:2008},
  "lhs 1140 b": {pl_name:"LHS 1140 b",pl_rade:1.73,pl_masse:6.98,pl_eqt:230,pl_orbper:24.7,st_dist:49,disc_year:2017},
  "gliese 436 b": {pl_name:"Gliese 436 b",pl_rade:4.19,pl_masse:21.4,pl_eqt:649,pl_orbper:2.6,st_dist:33,disc_year:2004},
};

function searchPlanet() {
  const name = document.getElementById("planet-input").value.trim();
  if (!name) return;

  const resultEl = document.getElementById("result");
  const vizEl = document.getElementById("size-viz");
  const apodEl = document.getElementById("apod-section");

  resultEl.className = "result-card";
  vizEl.className = "size-viz hidden";
  apodEl.className = "apod-section hidden";

  const key = name.toLowerCase();
  const p = PLANETS[key];

  if (!p) {
    resultEl.innerHTML = `<p class="error">No planet found for "${name}". Try: Kepler-452 b, TRAPPIST-1 e, Proxima Centauri b, K2-18 b, or 55 Cnc e</p>`;
    return;
  }

  const radius = p.pl_rade.toFixed(2);
  const mass = p.pl_masse.toFixed(2);
  const temp = Math.round(p.pl_eqt);
  const period = p.pl_orbper.toFixed(1);
  const dist = Math.round(p.st_dist);
  const year = p.disc_year;
  const habInfo = getHabitability(temp, radius);

  resultEl.innerHTML = `
    <h2>${p.pl_name}</h2>
    <div class="stat-grid">
      <div class="stat"><div class="stat-label">Radius (vs Earth)</div><div class="stat-value">${radius}× Earth</div></div>
      <div class="stat"><div class="stat-label">Mass (vs Earth)</div><div class="stat-value">${mass}× Earth</div></div>
      <div class="stat"><div class="stat-label">Avg Temperature</div><div class="stat-value">${temp} K (${Math.round(temp-273)}°C)</div></div>
      <div class="stat"><div class="stat-label">Year length</div><div class="stat-value">${period} days</div></div>
      <div class="stat"><div class="stat-label">Distance from Earth</div><div class="stat-value">${dist} light-years</div></div>
      <div class="stat"><div class="stat-label">Discovered</div><div class="stat-value">${year}</div></div>
    </div>
    <div class="habitability ${habInfo.cls}">
      <strong>${habInfo.emoji} Could you live here?</strong><br/>
      <span style="font-size:13px;color:#aaa;">${habInfo.text}</span>
    </div>
  `;

  showSizeViz(p.pl_name, radius);
  loadAPOD(year);
}

function getHabitability(temp, radius) {
  const r = parseFloat(radius);
  const inZone = temp >= 200 && temp <= 320;
  const tooBig = r > 2.5;
  if (inZone && !tooBig) return { cls: "hab-good", emoji: "🌱", text: `Temperature of ${Math.round(temp-273)}°C is in the habitable zone. Could be Earth-like!` };
  if (temp > 500) return { cls: "hab-bad", emoji: "🔥", text: `At ${Math.round(temp-273)}°C you'd vaporize instantly. Hard pass.` };
  if (temp < 150) return { cls: "hab-bad", emoji: "🧊", text: `At ${Math.round(temp-273)}°C everything is frozen solid.` };
  if (tooBig) return { cls: "hab-meh", emoji: "💨", text: `At ${r}× Earth's radius this is likely a gas giant — no surface to stand on.` };
  return { cls: "hab-meh", emoji: "🌡️", text: `Marginal conditions — borderline survivable with the right gear.` };
}

function showSizeViz(name, radiusStr) {
  const vizEl = document.getElementById("size-viz");
  const r = parseFloat(radiusStr);
  if (isNaN(r)) { vizEl.className = "size-viz hidden"; return; }
  const BASE = 30;
  const sunR = Math.min(BASE * 10.9, 180);
  const earthR = BASE;
  const planetR = Math.min(Math.max(BASE * r, 4), 200);
  const planetColor = r < 0.8 ? "#c87941" : r < 1.6 ? "#4a9eff" : r < 4 ? "#7b68ee" : "#e8885a";
  vizEl.className = "size-viz";
  vizEl.innerHTML = `
    <h3>Size comparison (to scale)</h3>
    <div class="planets-row">
      <div class="planet-item">
        <div class="planet-circle" style="width:${sunR*2}px;height:${sunR*2}px;background:radial-gradient(circle at 35% 35%,#ffe066,#f59d00);"></div>
        <span class="planet-label">Sun</span>
      </div>
      <div class="planet-item">
        <div class="planet-circle" style="width:${earthR*2}px;height:${earthR*2}px;background:radial-gradient(circle at 35% 35%,#4fc3f7,#1565c0);"></div>
        <span class="planet-label">Earth</span>
      </div>
      <div class="planet-item">
        <div class="planet-circle" style="width:${planetR*2}px;height:${planetR*2}px;background:radial-gradient(circle at 35% 35%,${planetColor}cc,${planetColor});"></div>
        <span class="planet-label">${name}</span>
      </div>
    </div>
    <p style="font-size:12px;color:#555;">${r}× Earth's radius</p>
  `;
}

async function loadAPOD(year) {
  const apodEl = document.getElementById("apod-section");
  apodEl.className = "apod-section";
  apodEl.innerHTML = `<p class="loading">Loading NASA image from ${year}...</p>`;
  try {
    const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}&date=${year}-06-15`);
    const data = await res.json();
    if (data.media_type === "image") {
      apodEl.innerHTML = `
        <h3>NASA image from discovery year (${year})</h3>
        <img src="${data.url}" alt="${data.title}" />
        <strong style="display:block;margin-bottom:6px;">${data.title}</strong>
        <p>${data.explanation.substring(0, 300)}...</p>
      `;
    } else {
      apodEl.className = "apod-section hidden";
    }
  } catch {
    apodEl.className = "apod-section hidden";
  }
}

document.getElementById("planet-input").addEventListener("keydown", e => {
  if (e.key === "Enter") searchPlanet();
});
