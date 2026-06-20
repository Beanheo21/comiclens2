const NASA_KEY = "Y1Whb7D6yCivz6pcV0HXHf22D2jHrmRXJ2a78bWK";

async function searchPlanet() {
  const name = document.getElementById("planet-input").value.trim();
  if (!name) return;

  const resultEl = document.getElementById("result");
  const vizEl = document.getElementById("size-viz");
  const apodEl = document.getElementById("apod-section");

  resultEl.className = "result-card";
  resultEl.innerHTML = `<p class="loading">Searching NASA database for "${name}"...</p>`;
  vizEl.className = "size-viz hidden";
  apodEl.className = "apod-section hidden";

  try {
    const url = `https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+pl_name,pl_rade,pl_masse,pl_eqt,pl_orbper,st_dist,disc_year+from+ps+where+default_flag=1+and+pl_name+like+'${name.replace(/ /g, '+')}'&format=json&CORS=*`; 
    const res = await fetch(url);
    const data = await res.json();

    if (!data || data.length === 0) {
      resultEl.innerHTML = `<p class="error">No planet found for "${name}". Try: Kepler-452 b, TRAPPIST-1 e, or 55 Cnc e</p>`;
      return;
    }

    const p = data[0];
    const radius  = p.pl_rade  ? parseFloat(p.pl_rade).toFixed(2)  : "Unknown";
    const mass    = p.pl_masse ? parseFloat(p.pl_masse).toFixed(2)  : "Unknown";
    const temp    = p.pl_eqt   ? Math.round(p.pl_eqt)              : null;
    const period  = p.pl_orbper? parseFloat(p.pl_orbper).toFixed(1) : "Unknown";
    const dist    = p.st_dist  ? Math.round(p.st_dist)             : "Unknown";
    const year    = p.disc_year || "Unknown";

    const habInfo = getHabitability(temp, radius);

    resultEl.innerHTML = `
      <h2>${p.pl_name}</h2>
      <div class="stat-grid">
        <div class="stat">
          <div class="stat-label">Radius (vs Earth)</div>
          <div class="stat-value">${radius}× Earth</div>
        </div>
        <div class="stat">
          <div class="stat-label">Mass (vs Earth)</div>
          <div class="stat-value">${mass}× Earth</div>
        </div>
        <div class="stat">
          <div class="stat-label">Avg Temperature</div>
          <div class="stat-value">${temp !== null ? temp + " K (" + Math.round(temp - 273) + "°C)" : "Unknown"}</div>
        </div>
        <div class="stat">
          <div class="stat-label">Year length</div>
          <div class="stat-value">${period} days</div>
        </div>
        <div class="stat">
          <div class="stat-label">Distance from Earth</div>
          <div class="stat-value">${dist} light-years</div>
        </div>
        <div class="stat">
          <div class="stat-label">Discovered</div>
          <div class="stat-value">${year}</div>
        </div>
      </div>
      <div class="habitability ${habInfo.cls}">
        <strong>${habInfo.emoji} Could you live here?</strong><br/>
        <span style="font-size:13px; color:#aaa;">${habInfo.text}</span>
      </div>
    `;

    showSizeViz(p.pl_name, radius);
    loadAPOD(year);

  } catch (err) {
    resultEl.innerHTML = `<p class="error">Error fetching data. Check your internet connection.</p>`;
    console.error(err);
  }
}

function getHabitability(temp, radius) {
  if (!temp) return { cls: "hab-meh", emoji: "🤷", text: "No temperature data — could be paradise or a nightmare. We don't know." };
  const r = parseFloat(radius);
  const inZone = temp >= 200 && temp <= 320;
  const tooBig = r > 2.5;
  if (inZone && !tooBig) return { cls: "hab-good", emoji: "🌱", text: `Temperature of ${Math.round(temp - 273)}°C puts this in the habitable zone — liquid water might exist. Radius is reasonable for a rocky world. Could be Earth-like!` };
  if (temp > 500) return { cls: "hab-bad", emoji: "🔥", text: `At ${Math.round(temp - 273)}°C, you'd vaporize instantly. Even lead melts here. Hard pass.` };
  if (temp < 150) return { cls: "hab-bad", emoji: "🧊", text: `At ${Math.round(temp - 273)}°C, everything is frozen solid. No liquid water, no life as we know it.` };
  if (tooBig) return { cls: "hab-meh", emoji: "💨", text: `Temperature is okay but at ${r}× Earth's radius this is likely a gas giant — no surface to stand on.` };
  return { cls: "hab-meh", emoji: "🌡️", text: `Marginal conditions — temperature and size are borderline. Maybe survivable with the right gear.` };
}

function showSizeViz(name, radiusStr) {
  const vizEl = document.getElementById("size-viz");
  const r = parseFloat(radiusStr);
  if (isNaN(r)) { vizEl.className = "size-viz hidden"; return; }

  const BASE = 30;
  const sunR  = Math.min(BASE * 10.9, 180);
  const earthR = BASE;
  const planetR = Math.min(Math.max(BASE * r, 4), 200);

  const planetColor = r < 0.8 ? "#c87941" : r < 1.6 ? "#4a9eff" : r < 4 ? "#7b68ee" : "#e8885a";

  vizEl.className = "size-viz";
  vizEl.innerHTML = `
    <h3>Size comparison (to scale)</h3>
    <div class="planets-row">
      <div class="planet-item">
        <div class="planet-circle" style="width:${sunR*2}px;height:${sunR*2}px;background:radial-gradient(circle at 35% 35%, #ffe066, #f59d00);"></div>
        <span class="planet-label">Sun</span>
      </div>
      <div class="planet-item">
        <div class="planet-circle" style="width:${earthR*2}px;height:${earthR*2}px;background:radial-gradient(circle at 35% 35%, #4fc3f7, #1565c0);"></div>
        <span class="planet-label">Earth</span>
      </div>
      <div class="planet-item">
        <div class="planet-circle" style="width:${planetR*2}px;height:${planetR*2}px;background:radial-gradient(circle at 35% 35%, ${planetColor}cc, ${planetColor});"></div>
        <span class="planet-label">${name}</span>
      </div>
    </div>
    <p style="font-size:12px;color:#555;">${r}× Earth's radius${r > 1 ? " — that's " + (r*r).toFixed(1) + "× Earth's surface area" : ""}</p>
  `;
}

async function loadAPOD(year) {
  const apodEl = document.getElementById("apod-section");
  apodEl.className = "apod-section";
  apodEl.innerHTML = `<p class="loading">Loading NASA image from ${year}...</p>`;

  try {
    const dateStr = `${year}-06-15`;
    const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}&date=${dateStr}`);
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
