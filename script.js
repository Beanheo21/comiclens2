const NASA_KEY = "Y1Whb7D6yCivz6pcV0HXHf22D2jHrmRXJ2a78bWK";

const PLANETS = {
  "kepler-452 b": {pl_name:"Kepler-452 b",pl_rade:1.63,pl_masse:5,pl_eqt:265,pl_orbper:384.8,st_dist:1402,disc_year:2015,type:"Super-Earth",star:"G-type (like our Sun)",discovery:"Kepler Space Telescope",description:"Often called 'Earth's cousin', Kepler-452 b orbits in the habitable zone of a star nearly identical to our Sun. It's 1.5 billion years older than Earth, making scientists wonder if life had even more time to evolve there.",jwst:false},
  "trappist-1 e": {pl_name:"TRAPPIST-1 e",pl_rade:0.92,pl_masse:0.77,pl_eqt:251,pl_orbper:6.1,st_dist:39,disc_year:2017,type:"Terrestrial",star:"Ultra-cool dwarf star",discovery:"Spitzer Space Telescope",description:"The most Earth-like of the TRAPPIST-1 system, TRAPPIST-1 e is smaller than Earth but sits squarely in the habitable zone. JWST has already studied its atmosphere and it's one of the top targets in the search for life.",jwst:true},
  "trappist-1 b": {pl_name:"TRAPPIST-1 b",pl_rade:1.09,pl_masse:1.02,pl_eqt:400,pl_orbper:1.5,st_dist:39,disc_year:2016,type:"Terrestrial",star:"Ultra-cool dwarf star",discovery:"TRAPPIST Telescope",description:"The innermost TRAPPIST-1 planet, TRAPPIST-1 b is too hot for liquid water. JWST confirmed it has no thick atmosphere, meaning its surface is a bare, scorched rock.",jwst:true},
  "trappist-1 c": {pl_name:"TRAPPIST-1 c",pl_rade:1.06,pl_masse:1.16,pl_eqt:342,pl_orbper:2.4,st_dist:39,disc_year:2016,type:"Terrestrial",star:"Ultra-cool dwarf star",discovery:"TRAPPIST Telescope",description:"TRAPPIST-1 c is similar in size to Venus. JWST observed it in 2023 and found it likely has a thin or no atmosphere, ruling out a thick CO2 envelope like Venus.",jwst:true},
  "trappist-1 d": {pl_name:"TRAPPIST-1 d",pl_rade:0.77,pl_masse:0.3,pl_eqt:288,pl_orbper:4.0,st_dist:39,disc_year:2017,type:"Terrestrial",star:"Ultra-cool dwarf star",discovery:"Spitzer Space Telescope",description:"The lightest TRAPPIST planet, TRAPPIST-1 d receives slightly more starlight than Earth. Its small mass means it may struggle to hold onto a thick atmosphere.",jwst:true},
  "trappist-1 f": {pl_name:"TRAPPIST-1 f",pl_rade:1.04,pl_masse:0.93,pl_eqt:219,pl_orbper:9.2,st_dist:39,disc_year:2017,type:"Terrestrial",star:"Ultra-cool dwarf star",discovery:"Spitzer Space Telescope",description:"TRAPPIST-1 f is on the cool outer edge of the habitable zone. It could harbor liquid water if it has a thick greenhouse atmosphere, similar to early Earth.",jwst:true},
  "trappist-1 g": {pl_name:"TRAPPIST-1 g",pl_rade:1.13,pl_masse:1.15,pl_eqt:198,pl_orbper:12.4,st_dist:39,disc_year:2017,type:"Terrestrial",star:"Ultra-cool dwarf star",discovery:"Spitzer Space Telescope",description:"The second largest TRAPPIST planet, TRAPPIST-1 g is at the outer edge of the system. It may be an icy world like Europa, potentially hiding a liquid ocean beneath a frozen surface.",jwst:true},
  "55 cnc e": {pl_name:"55 Cnc e",pl_rade:1.88,pl_masse:8.63,pl_eqt:1958,pl_orbper:0.74,st_dist:41,disc_year:2004,type:"Super-Earth",star:"Binary star system",discovery:"Radial velocity",description:"55 Cancri e is a lava world — JWST detected a massive atmosphere of vaporized rock in 2023, making it the first exoplanet where we've seen a 'rock vapor' atmosphere. One side permanently faces its star and may be covered in magma oceans.",jwst:true},
  "hd 209458 b": {pl_name:"HD 209458 b",pl_rade:13.4,pl_masse:220,pl_eqt:1459,pl_orbper:3.5,st_dist:159,disc_year:1999,type:"Hot Jupiter",star:"Sun-like G star",discovery:"Transit photometry",description:"The first exoplanet confirmed to transit its star and the first where we detected an atmosphere. Nicknamed 'Osiris', it has a comet-like tail of evaporating hydrogen and oxygen being blown off by stellar radiation.",jwst:false},
  "proxima centauri b": {pl_name:"Proxima Cen b",pl_rade:1.07,pl_masse:1.27,pl_eqt:234,pl_orbper:11.2,st_dist:1.3,disc_year:2016,type:"Terrestrial",star:"Red dwarf (nearest star to Sun!)",discovery:"Radial velocity",description:"Our nearest known exoplanet, orbiting the closest star to our Solar System. If Proxima b has an atmosphere and liquid water, it would be the most accessible habitable world. However, its red dwarf star blasts it with intense flares.",jwst:false},
  "proxima cen b": {pl_name:"Proxima Cen b",pl_rade:1.07,pl_masse:1.27,pl_eqt:234,pl_orbper:11.2,st_dist:1.3,disc_year:2016,type:"Terrestrial",star:"Red dwarf (nearest star to Sun!)",discovery:"Radial velocity",description:"Our nearest known exoplanet, orbiting the closest star to our Solar System.",jwst:false},
  "kepler-22 b": {pl_name:"Kepler-22 b",pl_rade:2.38,pl_masse:9.1,pl_eqt:262,pl_orbper:289.9,st_dist:619,disc_year:2011,type:"Super-Earth",star:"G-type (like our Sun)",discovery:"Kepler Space Telescope",description:"The first Kepler planet confirmed in a habitable zone. At 2.4× Earth's radius it may be a water world — covered entirely by a deep global ocean with no land at all.",jwst:false},
  "kepler-186 f": {pl_name:"Kepler-186 f",pl_rade:1.17,pl_masse:1.71,pl_eqt:188,pl_orbper:129.9,st_dist:582,disc_year:2014,type:"Terrestrial",star:"M-dwarf red star",discovery:"Kepler Space Telescope",description:"The first Earth-sized planet found in a habitable zone of another star. Though its red dwarf sun is smaller and cooler than ours, Kepler-186 f receives about one-third the energy Earth gets from the Sun.",jwst:false},
  "k2-18 b": {pl_name:"K2-18 b",pl_rade:2.37,pl_masse:8.63,pl_eqt:255,pl_orbper:32.9,st_dist:124,disc_year:2015,type:"Hycean world",star:"Red dwarf star",discovery:"K2 Mission",description:"JWST detected carbon dioxide AND methane in its atmosphere in 2023 — a combination that on Earth is only produced by living things. It may be a 'Hycean world': a planet with a hydrogen atmosphere and a liquid water ocean beneath. One of the most exciting biosignature candidates ever found.",jwst:true},
  "wasp-12 b": {pl_name:"WASP-12 b",pl_rade:18.0,pl_masse:457,pl_eqt:2580,pl_orbper:1.09,st_dist:871,disc_year:2008,type:"Ultra-hot Jupiter",star:"F-type star",discovery:"WASP Survey",description:"One of the hottest and most extreme planets known. WASP-12 b is being torn apart by its star's gravity — it is stretched into an egg shape and will be completely devoured in about 3 million years. Its atmosphere absorbs nearly all light, making it blacker than coal.",jwst:false},
  "lhs 1140 b": {pl_name:"LHS 1140 b",pl_rade:1.73,pl_masse:6.98,pl_eqt:230,pl_orbper:24.7,st_dist:49,disc_year:2017,type:"Super-Earth",star:"Red dwarf star",discovery:"MEarth Project",description:"One of the best candidates for a habitable world beyond Earth. LHS 1140 b is a rocky super-Earth in the habitable zone of a quiet, stable red dwarf star. Its size suggests it has a thick atmosphere and possibly a water-covered surface.",jwst:true},
  "gliese 436 b": {pl_name:"Gliese 436 b",pl_rade:4.19,pl_masse:21.4,pl_eqt:649,pl_orbper:2.6,st_dist:33,disc_year:2004,type:"Hot Neptune",star:"Red dwarf star",discovery:"Radial velocity",description:"A bizarre 'burning ice' planet. Despite surface temperatures of 380°C, the intense gravitational pressure keeps water frozen in a hot, solid form called 'Ice VII'. It also has a giant comet-like tail of evaporating hydrogen stretching 14 million km behind it.",jwst:false},
  "gj 667c c": {pl_name:"GJ 667C c",pl_rade:1.54,pl_masse:3.8,pl_eqt:277,pl_orbper:28.1,st_dist:23,disc_year:2011,type:"Super-Earth",star:"M-dwarf in triple star system",discovery:"HARPS spectrograph",description:"A super-Earth in the habitable zone of a star that is itself part of a triple star system. From its surface you would see three suns in the sky. It's one of the closest habitable zone planets to Earth.",jwst:false},
  "hat-p-7 b": {pl_name:"HAT-P-7 b",pl_rade:14.5,pl_masse:560,pl_eqt:2230,pl_orbper:2.2,st_dist:1044,disc_year:2008,type:"Hot Jupiter",star:"F-type star",discovery:"HATNet Survey",description:"A planet where it rains rubies and sapphires. At 2,230 K, aluminum oxide condenses in the cooler nightside atmosphere to form corundum clouds — the mineral that makes rubies and sapphires. Wind speeds reach 5,400 mph.",jwst:false},
  "tau ceti e": {pl_name:"Tau Ceti e",pl_rade:1.82,pl_masse:3.93,pl_eqt:322,pl_orbper:168,st_dist:11.9,disc_year:2013,type:"Super-Earth",star:"G-type (Sun-like)",discovery:"Radial velocity",description:"One of the nearest potentially habitable planets to Earth, orbiting a Sun-like star just 12 light-years away. Tau Ceti e is at the inner edge of the habitable zone — it might be habitable, or it might be more like a hot Venus.",jwst:false},
  "wolf 1061 c": {pl_name:"Wolf 1061 c",pl_rade:1.64,pl_masse:3.41,pl_eqt:271,pl_orbper:17.9,st_dist:14,disc_year:2015,type:"Super-Earth",star:"Red dwarf star",discovery:"Radial velocity",description:"One of the closest potentially habitable exoplanets at just 14 light-years away. Wolf 1061 c orbits within the habitable zone and is close enough that future telescopes could potentially directly image it.",jwst:false},
  "kepler-442 b": {pl_name:"Kepler-442 b",pl_rade:1.34,pl_masse:2.3,pl_eqt:233,pl_orbper:112.3,st_dist:1194,disc_year:2015,type:"Super-Earth",star:"K-type orange dwarf",discovery:"Kepler Space Telescope",description:"Considered one of the most Earth-like planets ever found, with one of the highest Earth Similarity Index scores. It receives about 70% of the sunlight Earth gets, putting it solidly in the habitable zone.",jwst:false},
  "gj 504 b": {pl_name:"GJ 504 b",pl_rade:10.0,pl_masse:1273,pl_eqt:510,pl_orbper:3258,st_dist:57,disc_year:2013,type:"Super-Jupiter",star:"G-type (Sun-like)",discovery:"Direct imaging",description:"A pink gas giant directly photographed by the Subaru Telescope — one of the few exoplanets ever directly imaged. It's magenta/pink in color due to its young age and still-cooling atmosphere. It orbits 9× farther from its star than Jupiter does from our Sun.",jwst:false},
  "hr 8799 b": {pl_name:"HR 8799 b",pl_rade:11.0,pl_masse:2228,pl_eqt:900,pl_orbper:460,st_dist:129,disc_year:2008,type:"Super-Jupiter",star:"A-type star",discovery:"Direct imaging",description:"One of four giant planets directly photographed around HR 8799, making it the first multi-planet system ever directly imaged. These planets were caught in a rare snapshot of a young planetary system still forming.",jwst:false},
  "psr 1257+12 b": {pl_name:"PSR 1257+12 b",pl_rade:0.19,pl_masse:0.02,pl_eqt:0,pl_orbper:25.3,st_dist:2300,disc_year:1992,type:"Pulsar planet",star:"Neutron star (pulsar)",discovery:"Pulsar timing",description:"The very first exoplanet ever confirmed, discovered in 1992 orbiting a dead neutron star that pulses radiation. Any life here would be blasted by intense gamma rays and X-rays. A dark, irradiated, utterly alien world — the discovery that changed everything.",jwst:false},
  "55 cnc f": {pl_name:"55 Cnc f",pl_rade:4.5,pl_masse:45,pl_eqt:473,pl_orbper:259,st_dist:41,disc_year:2005,type:"Saturn analog",discovery:"Radial velocity",star:"Binary star system",description:"Part of the famous 55 Cancri system which has 5 known planets. 55 Cnc f orbits in the habitable zone of this binary system. Though it's a gas giant itself, any large moons orbiting it could potentially support life — like a moon version of Avatar's Pandora.",jwst:false},
  "kepler-16 b": {pl_name:"Kepler-16 b",pl_rade:8.45,pl_masse:105,pl_eqt:188,pl_orbper:228.8,st_dist:245,disc_year:2011,type:"Gas giant",star:"Binary star system",discovery:"Kepler Space Telescope",description:"The real-life Tatooine — a gas giant orbiting TWO stars simultaneously, just like Luke Skywalker's home planet in Star Wars. From its surface (if it had one) you'd witness double sunsets. NASA explicitly called it 'the real Tatooine' at its discovery announcement.",jwst:false},
  "wasp-76 b": {pl_name:"WASP-76 b",pl_rade:17.7,pl_masse:614,pl_eqt:2200,pl_orbper:1.81,st_dist:640,disc_year:2013,type:"Ultra-hot Jupiter",star:"F-type star",discovery:"WASP Survey",description:"A planet where it rains liquid iron. The dayside reaches 2,400°C, hot enough to vaporize iron. This iron vapor is carried by 18,000 mph winds to the cooler nightside where it condenses and falls as iron rain. JWST has studied its dramatic weather in detail.",jwst:true},
  "toi-700 d": {pl_name:"TOI-700 d",pl_rade:1.19,pl_masse:1.72,pl_eqt:246,pl_orbper:37.4,st_dist:102,disc_year:2020,type:"Terrestrial",star:"M-dwarf red star",discovery:"TESS Space Telescope",description:"An Earth-sized planet in the habitable zone, discovered by NASA's TESS mission in 2020. TOI-700 d is tidally locked — one side always faces its star in permanent day, the other in permanent night — creating extreme climate contrasts.",jwst:true},
  "ltt 9779 b": {pl_name:"LTT 9779 b",pl_rade:4.72,pl_masse:89,pl_eqt:2305,pl_orbper:0.79,st_dist:264,disc_year:2020,type:"Ultra-hot Neptune",star:"G-type star",discovery:"TESS Space Telescope",description:"The shiniest planet ever found — more reflective than a mirror, reflecting 80% of its star's light due to metal clouds of titanium in its atmosphere. JWST confirmed this extraordinary finding. It's so hot and so reflective that it defies all planet formation models.",jwst:true},
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
      <div style="color:#f87171;font-size:1.1rem;padding:2rem 0;">
        No planet found for "${name}".<br/>
        <span style="font-size:13px;color:#6b7280;margin-top:8px;display:block;">Try clicking one of the quick-search buttons above, or try: WASP-76 b, TOI-700 d, Kepler-16 b, GJ 504 b, PSR 1257+12 b</span>
      </div>`;
    ["stats-card","hab-card","size-viz","fun-facts","description-card"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = "";
    });
    document.getElementById("apod-section").className = "card apod-card hidden";
    return;
  }

  section.className = "result-section";

  const r = p.pl_rade;
  const temp = Math.round(p.pl_eqt);
  const tempC = Math.round(temp - 273);
  const year = p.disc_year;
  const hab = getHabitability(temp, r);
  const planetColor = r < 0.5 ? "#888888"
    : r < 1.6 ? "#4a9eff"
    : r < 4 ? "#a78bfa"
    : r < 10 ? "#f97316"
    : "#f87171";

  const bgGradient = r < 1.6
    ? "radial-gradient(ellipse at 50% 0%, #0a1f3d 0%, #050510 70%)"
    : r < 4 ? "radial-gradient(ellipse at 50% 0%, #1a0a3d 0%, #050510 70%)"
    : "radial-gradient(ellipse at 50% 0%, #2d0a0a 0%, #050510 70%)";

  const ballSize = Math.min(Math.max(r * 45, 50), 160);

  document.getElementById("planet-hero").style.background = bgGradient;
  document.getElementById("planet-hero").innerHTML = `
    <h2>${p.pl_name}</h2>
    <p class="tagline">${p.type} • ${p.star} • Discovered ${year} via ${p.discovery}</p>
    <div class="planet-ball-container">
      <div class="planet-ball" style="width:${ballSize}px;height:${ballSize}px;background:radial-gradient(circle at 35% 30%,${planetColor}88,${planetColor});"></div>
    </div>
    <div class="badge-row">
      <span class="badge badge-blue">📡 ${p.discovery}</span>
      <span class="badge badge-purple">📏 ${r.toFixed(2)}× Earth</span>
      <span class="badge ${tempC > 200 ? "badge-red" : tempC < -50 ? "badge-blue" : "badge-green"}">🌡️ ${tempC}°C</span>
      <span class="badge badge-yellow">📅 ${p.pl_orbper.toFixed(1)}-day year</span>
      <span class="badge ${p.jwst ? "badge-green" : "badge-gray"}">🔭 ${p.jwst ? "JWST observed ✓" : "Pre-JWST"}</span>
    </div>
  `;

  document.getElementById("description-card").innerHTML = `
    <h3>📖 About This Planet</h3>
    <p style="font-size:14px;color:#d1d5db;line-height:1.8;">${p.description}</p>
  `;

  document.getElementById("stats-card").innerHTML = `
    <h3>📊 Planet Data</h3>
    <div class="stat-row"><span class="stat-label">Radius</span><span class="stat-value">${r.toFixed(2)}× Earth (${Math.round(r*6371).toLocaleString()} km)</span></div>
    <div class="stat-row"><span class="stat-label">Mass</span><span class="stat-value">${p.pl_masse.toFixed(2)}× Earth</span></div>
    <div class="stat-row"><span class="stat-label">Surface gravity</span><span class="stat-value">${(p.pl_masse/(r*r)).toFixed(2)}× Earth</span></div>
    <div class="stat-row"><span class="stat-label">Temperature</span><span class="stat-value">${temp > 0 ? temp+" K / "+tempC+"°C / "+Math.round(tempC*9/5+32)+"°F" : "Unknown (pulsar planet)"}</span></div>
    <div class="stat-row"><span class="stat-label">Year length</span><span class="stat-value">${p.pl_orbper.toFixed(1)} Earth days</span></div>
    <div class="stat-row"><span class="stat-label">Distance from Earth</span><span class="stat-value">${p.st_dist < 10 ? p.st_dist.toFixed(1) : Math.round(p.st_dist).toLocaleString()} light-years</span></div>
    <div class="stat-row"><span class="stat-label">Light travel time</span><span class="stat-value">${p.st_dist.toFixed(1)} years for light to arrive</span></div>
    <div class="stat-row"><span class="stat-label">Planet type</span><span class="stat-value">${p.type}</span></div>
    <div class="stat-row"><span class="stat-label">Host star</span><span class="stat-value">${p.star}</span></div>
    <div class="stat-row"><span class="stat-label">Discovery method</span><span class="stat-value">${p.discovery}</span></div>
    <div class="stat-row"><span class="stat-label">JWST observed</span><span class="stat-value">${p.jwst ? "✅ Yes" : "❌ Not yet"}</span></div>
  `;

  document.getElementById("hab-card").innerHTML = `
    <h3>🌍 Habitability Analysis</h3>
    <div class="hab-score">${hab.emoji}</div>
    <div class="hab-verdict" style="color:${hab.color}">${hab.verdict}</div>
    <div class="hab-bar-container">
      <div class="hab-bar" style="width:${hab.score}%;background:${hab.color};"></div>
    </div>
    <div style="display:flex;justify-content:space-between;font-size:11px;color:#4b5563;margin-bottom:0.8rem;">
      <span>Uninhabitable</span><span>Earth-like</span>
    </div>
    <div class="hab-detail">${hab.text}</div>
    <div style="margin-top:1rem;padding-top:1rem;border-top:1px solid #1a1a3a;">
      <div class="stat-row"><span class="stat-label">Habitability score</span><span class="stat-value" style="color:${hab.color}">${hab.score}/100</span></div>
      <div class="stat-row"><span class="stat-label">In habitable zone</span><span class="stat-value">${temp>=200&&temp<=320?"✅ Yes":"❌ No"}</span></div>
      <div class="stat-row"><span class="stat-label">Rocky surface likely</span><span class="stat-value">${p.pl_rade<2.5?"✅ Possibly":"❌ Unlikely (gas giant)"}</span></div>
      <div class="stat-row"><span class="stat-label">Liquid water possible</span><span class="stat-value">${temp>=200&&temp<=320&&p.pl_rade<2.5?"✅ Maybe!":"❌ Unlikely"}</span></div>
    </div>
  `;

  showSizeViz(p.pl_name, r, planetColor);
  showFunFacts(p, tempC);
  loadAPOD(year);
}

function getHabitability(temp, r) {
  const inZone = temp >= 200 && temp <= 320;
  const tooBig = r > 2.5;
  const tooHot = temp > 500;
  const tooCold = temp < 150;
  const pulsar = temp === 0;

  if (pulsar) return {emoji:"☢️",verdict:"Pulsar Planet — Radiation Hell",color:"#f87171",score:0,text:"Orbiting a dead neutron star pulsing lethal radiation. No possibility of life. This planet exists in one of the most extreme environments in the universe."};
  if (inZone && !tooBig) return {emoji:"🌱",verdict:"Potentially Habitable!",color:"#34d399",score:85,text:`At ${Math.round(temp-273)}°C and ${r.toFixed(1)}× Earth's radius, conditions could support liquid water. This is one of the most Earth-like planets we've found!`};
  if (tooHot && r > 10) return {emoji:"☠️",verdict:"Extreme Gas Giant",color:"#f87171",score:2,text:`A gas giant hellscape at ${Math.round(temp-273)}°C — no solid surface, crushing pressure, and temperatures that melt metal.`};
  if (tooHot) return {emoji:"🔥",verdict:"Way Too Hot",color:"#f97316",score:5,text:`At ${Math.round(temp-273)}°C you'd vaporize before landing. Even lead is liquid here. No water, no life, no chance.`};
  if (tooCold) return {emoji:"🧊",verdict:"Frozen Wasteland",color:"#93c5fd",score:8,text:`At ${Math.round(temp-273)}°C everything freezes solid. No liquid water can exist without extreme underground heat sources.`};
  if (tooBig) return {emoji:"💨",verdict:"Gas Giant — No Surface",color:"#a78bfa",score:15,text:`At ${r.toFixed(1)}× Earth's radius, this is a gas or ice giant with no solid surface. Temperature is okay but there's nowhere to stand.`};
  return {emoji:"🌡️",verdict:"Marginal Conditions",color:"#fbbf24",score:40,text:`Temperature is borderline and size is reasonable. Could be habitable with the right atmosphere — we need much more data.`};
}

function showSizeViz(name, r, planetColor) {
  const BASE = 26;
  const sunR = Math.min(BASE*10.9, 150);
  const earthR = BASE;
  const jupiterR = Math.min(BASE*11.2, 150);
  const planetR = Math.min(Math.max(BASE*r, 4), 150);

  document.getElementById("size-viz").innerHTML = `
    <h3>📐 Size Comparison (to scale)</h3>
    <div class="planets-row">
      <div class="planet-item">
        <div class="planet-circle" style="width:${sunR*2}px;height:${sunR*2}px;background:radial-gradient(circle at 35% 30%,#ffe566,#f59d00);box-shadow:0 0 40px #f59d0055;"></div>
        <span class="planet-label">☀️ Sun</span><span class="planet-sublabel">109× Earth</span>
      </div>
      <div class="planet-item">
        <div class="planet-circle" style="width:${jupiterR*2}px;height:${jupiterR*2}px;background:radial-gradient(circle at 35% 30%,#c8a87b,#8b5e3c);box-shadow:0 0 20px #8b5e3c55;"></div>
        <span class="planet-label">♃ Jupiter</span><span class="planet-sublabel">11.2× Earth</span>
      </div>
      <div class="planet-item">
        <div class="planet-circle" style="width:${earthR*2}px;height:${earthR*2}px;background:radial-gradient(circle at 35% 30%,#4fc3f7,#1565c0);box-shadow:0 0 20px #1565c055;"></div>
        <span class="planet-label">🌍 Earth</span><span class="planet-sublabel">1× (baseline)</span>
      </div>
      <div class="planet-item">
        <div class="planet-circle" style="width:${planetR*2}px;height:${planetR*2}px;background:radial-gradient(circle at 35% 30%,${planetColor}99,${planetColor});box-shadow:0 0 30px ${planetColor}44;"></div>
        <span class="planet-label">🪐 ${name}</span><span class="planet-sublabel">${r.toFixed(2)}× Earth</span>
      </div>
    </div>
    <p style="font-size:12px;color:#4b5563;text-align:center;margin-top:1rem;">Surface area: ${(r*r).toFixed(1)}× Earth's • Volume: ${(r*r*r).toFixed(1)}× Earth's • Circumference: ${Math.round(r*40075).toLocaleString()} km</p>
  `;
}

function showFunFacts(p, tempC) {
  const gravity = (p.pl_masse/(p.pl_rade*p.pl_rade)).toFixed(2);
  const weightThere = Math.round(70*gravity*2.2);
  const ageLocal = Math.round(16*365/p.pl_orbper);
  const lightMinutes = p.st_dist < 0.01 ? Math.round(p.st_dist*525960)+" minutes"
    : p.st_dist < 1 ? (p.st_dist*365.25).toFixed(1)+" days"
    : p.st_dist.toFixed(1)+" years";
  const travelTime = p.st_dist < 5 ? Math.round(p.st_dist*100)+" years at 1% light speed"
    : Math.round(p.st_dist*100).toLocaleString()+" years at 1% light speed";

  document.getElementById("fun-facts").innerHTML = `
    <h3>🤯 Fun Facts & Comparisons</h3>
    <div class="fun-facts-grid">
      <div class="fun-fact">
        <strong>🚀 Travel time</strong>
        At 1% the speed of light, it would take ${travelTime} to reach ${p.pl_name}. A radio signal takes ${lightMinutes}.
      </div>
      <div class="fun-fact">
        <strong>⚖️ Your weight there</strong>
        If you weigh 154 lbs on Earth, you'd weigh ~${weightThere} lbs on ${p.pl_name}. Surface gravity is ${gravity}× Earth's.
      </div>
      <div class="fun-fact">
        <strong>🎂 Your age in local years</strong>
        A year here is ${p.pl_orbper.toFixed(1)} Earth days. A 16-year-old Earthling would be ${ageLocal.toLocaleString()} years old in ${p.pl_name}'s calendar!
      </div>
      <div class="fun-fact">
        <strong>🌡️ Temperature context</strong>
        At ${tempC}°C: ${tempC>2000?"rocks are gas. The entire atmosphere is vaporized minerals.":tempC>1000?"rocks melt and flow as lava rivers.":tempC>400?"lead boils. Even metal evaporates.":tempC>100?"water boils instantly. A pressure-cooker world.":tempC>0?"liquid water could exist! Surface oceans possible.":tempC>-50?"like Earth's poles — cold but survivable.":tempC>-200?"colder than Antarctica, CO₂ freezes solid.":"colder than Pluto. Almost absolute zero."}
      </div>
      <div class="fun-fact">
        <strong>🌊 Surface area</strong>
        ${p.pl_name} has ${(p.pl_rade*p.pl_rade).toFixed(1)}× Earth's surface area — that's ${Math.round(p.pl_rade*p.pl_rade*510).toLocaleString()} million km² of surface.
      </div>
      <div class="fun-fact">
        <strong>📡 How we found it</strong>
        ${p.discovery === "Kepler Space Telescope" ? "Kepler watched for tiny dips in starlight as the planet passed in front of its star — a dimming of just 0.01%."
        : p.discovery === "Radial velocity" ? "Astronomers detected the tiny wobble the planet's gravity causes in its star — a shift of just a few meters per second."
        : p.discovery === "Transit photometry" ? "Scientists measured the star's brightness drop as the planet transited across it, revealing the planet's size."
        : p.discovery === "Direct imaging" ? "The planet was directly photographed through a powerful telescope — one of the rarest and hardest detection methods."
        : p.discovery === "TESS Space Telescope" ? "NASA's TESS satellite monitored hundreds of thousands of stars, catching the planet's shadow as it passed its star."
        : p.discovery === "Pulsar timing" ? "Scientists noticed tiny irregularities in the pulsar's precise radio pulses, caused by the planet's gravitational tug."
        : p.discovery === "Spitzer Space Telescope" ? "Spitzer's infrared eyes detected the planet's heat signature and its shadow passing across the star."
        : "Detected using advanced astronomical instruments and years of careful observation."}
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
        <h3>🌌 NASA Astronomy Picture — ${year} (Discovery Year)</h3>
        <img src="${data.url}" alt="${data.title}" />
        <div class="apod-title">${data.title}</div>
        <div class="apod-desc">${data.explanation.substring(0,450)}...</div>
        <a href="https://apod.nasa.gov/apod/" target="_blank" style="font-size:12px;color:#7eb8f7;margin-top:8px;display:inline-block;">View NASA APOD archive →</a>
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
