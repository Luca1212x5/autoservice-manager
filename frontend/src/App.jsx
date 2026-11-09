import { useState, useEffect, useRef } from "react";
import InterventieList from "./components/InterventieList.jsx";
import "./App.css";

// Bază extinsă de intervenții predefinite (18 opțiuni posibile în atelier)
const POOL_INTERVENTII = [
  { id: 1, interventie: "Revizie motor B58 3.0L & Schimb ulei Ravenol — BMW M240i (G42)", serviceType: "Mechanics" },
  { id: 2, interventie: "Montaj lip față M-Sport cu adeziv poliuretanic — BMW Seria 3 (G20)", serviceType: "Bodywork" },
  { id: 3, interventie: "Diagnoză oficială ISTA+ & Update iDrive — BMW Seria 5 (G30)", serviceType: "Electrical" },
  { id: 4, interventie: "Schimb distribuție pe lanț N47 & Curățare admisie — BMW 320d (F30)", serviceType: "Mechanics" },
  { id: 5, interventie: "Sablare etriere frână & Vopsire electrostatică M-Blue — BMW M4", serviceType: "Bodywork" },
  { id: 6, interventie: "Spălare dinamică cutie automată ZF 8HP — BMW X5 xDrive", serviceType: "Mechanics" },
  { id: 7, interventie: "Polisare lac Multi-Stage & Protecție Ceramică 9H — BMW M340i", serviceType: "Bodywork" },
  { id: 8, interventie: "Înregistrare baterie AGM Start-Stop & Verificare alternator — Audi A4", serviceType: "Electrical" },
  { id: 9, interventie: "Refacere filet bujie chiuloasă (Helicoil) & Test compresie — VW Golf GTI", serviceType: "Mechanics" },
  { id: 10, interventie: "Reglaj geometrie roți 3D pentru suspensie M-Adaptive — BMW Seria 4", serviceType: "Mechanics" },
  { id: 11, interventie: "Recondiționare faruri Laserlight & Aplicare folie PPF — BMW X6M", serviceType: "Bodywork" },
  { id: 12, interventie: "Înlocuire plăcuțe și discuri frână perforate — Mercedes-Benz C-Class", serviceType: "Mechanics" },
  { id: 13, interventie: "Resoftare modul confort & Codări opțiuni M-Track — BMW M2 (G87)", serviceType: "Electrical" },
  { id: 14, interventie: "Curățare filtru particule DPF & Senzor presiune — Škoda Octavia", serviceType: "Mechanics" },
  { id: 15, interventie: "Montaj difuzor spate carbon & Reglaj tips-uri evacuare — BMW 330i", serviceType: "Bodywork" },
  { id: 16, interventie: "Verificare sistem injecție & Bobine inducție — Porsche Macan", serviceType: "Electrical" },
  { id: 17, interventie: "Schimb ulei diferențial M-Sport & Verificare cardan — BMW M5", serviceType: "Mechanics" },
  { id: 18, interventie: "Detailing interior piele Merino & Igienizare ozon — BMW Seria 7", serviceType: "Bodywork" }
];

// Funcție care extrage aleatoriu între 2 și 15 intervenții diferite la fiecare apel
function genereazaTabelaAleatoare() {
  const numarAleator = Math.floor(Math.random() * (15 - 2 + 1)) + 2; // Între 2 și 15
  const amestecate = [...POOL_INTERVENTII].sort(() => 0.5 - Math.random());

  return amestecate.slice(0, numarAleator).map((item, idx) => ({
    ...item,
    id: idx + 1,
    // ~25% șansă ca mașina de pe elevator să fie deja pe final (finalizată)
    completed: Math.random() < 0.25
  }));
}

// Date detaliate pentru secțiunea "Servicii auto"
const CATALOG_SERVICII = [
  {
    id: "diagnoza",
    titlu: "Control Auto & Diagnoză Oficială ISTA+",
    icon: "💻",
    tag: "Toate mărcile • Specializare BMW",
    descriere: "Verificare multipunct în 60 de pași, citire parametri live (presiune turbo, corecții injectoare, distribuție), codări opțiuni ascunse și update-uri de soft originale.",
    pret: "de la 150 RON",
    durata: "45 - 90 min"
  },
  {
    id: "mecanica",
    titlu: "Mecanică Greu & Motoare Performanță",
    icon: "⚙️",
    tag: "B58 • S58 • N55 • VAG • Mercedes",
    descriere: "Schimb distribuție pe lanț, revizii cutii automate ZF 8HP prin spălare dinamică, reglaj diferențial M Sport, sisteme de frânare M Performance și suspensii adaptive.",
    pret: "Deviz personalizat",
    durata: "2 - 8 ore"
  },
  {
    id: "reconditionare",
    titlu: "Sablare, Refacere Filete & Recondiționări",
    icon: "🛠️",
    tag: "Precizie Industrială Germană",
    descriere: "Sablare fină cu micro-bile de sticlă pentru etriere, galerii și piese din aluminiu. Refacere filete chiuloasă/bloc motor (Helicoil) și prelucrări mecanice de înaltă precizie.",
    pret: "de la 200 RON",
    durata: "1 - 4 ore"
  },
  {
    id: "aero",
    titlu: "Retrofit Caroserie & Elemente M-Performance",
    icon: "🏎️",
    tag: "Exterior & Aerodinamică",
    descriere: "Instalare profesională pachete aerodinamice, lip-uri față M-Sport fixate sigur cu adeziv poliuretanic structural, difuzoare spate carbon și eleroane OEM.",
    pret: "de la 300 RON",
    durata: "2 - 5 ore"
  },
  {
    id: "revizie",
    titlu: "Revizie Filtre, Fluide & Întreținere",
    icon: "🛢️",
    tag: "Mentenanță Preventivă",
    descriere: "Schimb ulei motor cu specificații BMW Longlife, lichid de frână racing cu punct de fierbere ridicat, antigel și verificare completă articulații pe elevator.",
    pret: "de la 450 RON",
    durata: "60 min"
  },
  {
    id: "ac",
    titlu: "Climatizare, Electrică & Baterii AGM",
    icon: "⚡",
    tag: "Sisteme Electrice",
    descriere: "Înlocuire și înregistrare baterii Start-Stop AGM în calculatorul mașinii, reîncărcare freon R134a / R1234yf, igienizare cu ozon și reparații alternatoare.",
    pret: "de la 180 RON",
    durata: "45 min"
  }
];

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  // Stările obligatorii pentru Etapa 5 (S5-R1, S5-R6) — Inițializat aleatoriu între 2 și 15!
  const [interventii, setInterventii] = useState(() => genereazaTabelaAleatoare());
  const [tema, setTema] = useState(temaInitiala);

  // Stare pentru Slider-ul din bara de sus
  const [activeSlide, setActiveSlide] = useState("servicii");
  const [filtruServiciu, setFiltruServiciu] = useState("");

  // Stare și referință pentru efectul cinematic BMW M3 Competition la scroll
const [m3Progress, setM3Progress] = useState(0);
const m3SectionRef = useRef(null);

useEffect(() => {
  function handleScroll() {
    if (!m3SectionRef.current) return;
    const rect = m3SectionRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Calculăm progresul (de la 0 când secțiunea intră în ecran, până la 1 când e jos de tot)
    const distantaIntrata = windowHeight - rect.top;
    const distantaTotala = windowHeight + rect.height * 0.35;
    const progres = Math.max(0, Math.min(1, distantaIntrata / distantaTotala));

    setM3Progress(progres);
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
  return () => window.removeEventListener("scroll", handleScroll);
}, [activeSlide]);

  // S5-R2 & S5-R5: Actualizare imutabilă cu map
  function handleToggle(id) {
    setInterventii((prev) =>
      prev.map((i) => (i.id === id ? { ...i, completed: !i.completed } : i))
    );
  }

  // S5-R3 & S5-R5: Ștergere imutabilă cu filter
  function handleDelete(id) {
    setInterventii((prev) => prev.filter((i) => i.id !== id));
  }



  // S5-R6: Comutare temă Light/Dark direct pe documentElement
  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";
    setTema(noua);
    document.documentElement.dataset.theme = noua;
  }

  // S5-R4: Contor derivat direct din state (fără useState suplimentar)
  const active = interventii.filter((i) => !i.completed).length;
  const totalMasini = interventii.length;

  // Calculul stării atelierului (Verde: 0-5 | Portocaliu: 6-10 | Roșu: 11-15)
  let statusAtelier = {
    clasa: "status-green",
    eticheta: "🟢 LIBER",
    mesajClient: "Moment excelent pentru vizită! Avem elevatoare libere pentru preluare rapidă fără așteptare."
  };

  if (totalMasini >= 6 && totalMasini <= 10) {
    statusAtelier = {
      clasa: "status-orange",
      eticheta: "🟠 Disponibil",
      mesajClient: "Atelierul lucrează în regim normal. Timp estimat de preluare pentru clienți noi: ~35-50 minute."
    };
  } else if (totalMasini >= 11) {
    statusAtelier = {
      clasa: "status-red",
      eticheta: "🔴 Aglomerat",
      mesajClient: "Capacitate aproape maximă! Mai avem doar câteva rampe disponibile astăzi — recomandăm programare."
    };
  }

  const procentOcupare = Math.min(100, Math.round((totalMasini / 15) * 100));

  return (
    <div className="emax-app">
      {/* BARA DE SUS: Stânga Logo emax | Mijloc Slider Opțiuni | Dreapta Buton Temă */}
      <header className="app-header">
        <div className="m-stripes-top"></div>

        <div className="navbar-top">
          {/* Stânga Sus: Brandul emax cu dungile M */}
          <div className="brand-logo" onClick={() => setActiveSlide("servicii")}>
            <div className="m-bars">
              <span className="m-bar blue-light"></span>
              <span className="m-bar blue-dark"></span>
              <span className="m-bar red"></span>
            </div>
            <span className="brand-text">emax</span>
            <span className="brand-sub">BMW SPECIALIST & MULTIBRAND</span>
          </div>

          {/* Mijloc Sus: Slider interactiv cu cele 4 opțiuni */}
          <nav className="nav-slider" aria-label="Meniu principal service">
            <button
              className={`slide-tab ${activeSlide === "servicii" ? "active" : ""}`}
              onClick={() => setActiveSlide("servicii")}
            >
              🔧 Servicii auto
            </button>
            <button
              className={`slide-tab ${activeSlide === "polisare" ? "active" : ""}`}
              onClick={() => setActiveSlide("polisare")}
            >
              ✨ Polisare și finisare
            </button>
            <button
              className={`slide-tab ${activeSlide === "tractari" ? "active" : ""}`}
              onClick={() => setActiveSlide("tractari")}
            >
              🚨 Tractări oferite de service
            </button>
            <button
              className={`slide-tab ${activeSlide === "despre" ? "active" : ""}`}
              onClick={() => setActiveSlide("despre")}
            >
              🏆 Despre noi
            </button>
          </nav>

          {/* Dreapta Sus: Buton Mod Luminos / Întunecat (Cerința S5-R6) */}
          <button
            className="theme-toggle"
            onClick={handleTema}
            aria-pressed={tema === "dark"}
          >
            {tema === "dark" ? "☀️ Mod luminos" : "🌙 Mod întunecat"}
          </button>
        </div>

        {/* Hero Banner cu informațiile și contorul obligatoriu S5-R4 */}
        <div className="hero-banner">
          <div className="hero-text">
            <span className="m-badge">PRECISION GERMAN ENGINEERING</span>
            <h1>emax AutoService & Motorsport</h1>
            <p>
              Centru de excelență dedicat gamei BMW & BMW M, deschis pentru
              toate mărcile auto. Verifică în timp real gradul de ocupare al
              atelierului nostru!
            </p>
            <div className="hero-badges-row">
              <p className="app-count">
                {interventii.length} interventions, {active} active
              </p>
              <span className={`live-pill ${statusAtelier.clasa}`}>
                Capacitate: {totalMasini}/15 elevatoare
              </span>
            </div>
          </div>
          <div className="hero-car-anim">
            <img
              src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1000"
              alt="BMW M Performance Albastru"
            />
          </div>
        </div>
      </header>

      {/* ZONA DINAMICĂ PENTRU SLIDE-URI */}
      <main className="container">
        {/* ==================== SLIDE 1: SERVICII AUTO ==================== */}
        {activeSlide === "servicii" && (
          <div className="slide-page fade-in-slide" key="servicii">
            <div className="slide-header">
              <h2>Catalog Complet de Servicii Auto</h2>
              <p>
                De la o simplă verificare de rutină sau schimb de ulei, până la
                recondiționări prin sablare și pregătire de circuit pentru modele
                M-Performance.
              </p>
              <input
                type="text"
                className="search-service"
                placeholder="🔍 Caută rapid un serviciu (ex: sablare, ulei, diagnoză, B58)..."
                value={filtruServiciu}
                onChange={(e) => setFiltruServiciu(e.target.value)}
              />
            </div>

            <div className="services-grid">
              {CATALOG_SERVICII.filter(
                (s) =>
                  s.titlu.toLowerCase().includes(filtruServiciu.toLowerCase()) ||
                  s.descriere.toLowerCase().includes(filtruServiciu.toLowerCase())
              ).map((serviciu, index) => (
                <article
                  key={serviciu.id}
                  className="service-card"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="service-card-top">
                    <span className="service-icon">{serviciu.icon}</span>
                    <span className="service-tag">{serviciu.tag}</span>
                  </div>
                  <h3>{serviciu.titlu}</h3>
                  <p>{serviciu.descriere}</p>
                  <div className="service-footer">
                    <span className="service-price">{serviciu.pret}</span>
                    <span className="service-time">⏱️ {serviciu.durata}</span>
                  </div>
                </article>
              ))}
            </div>

            {/* TABELA LIVE PENTRU CLIENT CU SEMAFOR DE CAPACITATE (0-5 Verde, 6-10 Portocaliu, 11-15 Roșu) */}
            <section className={`panel live-board ${statusAtelier.clasa}-border`}>
              <div className="panel-header-m">
                <div>
                  <h2>📡 Monitorizare Live Atelier: Grad de Ocupare & Elevatoare</h2>
                  <p className="panel-sub">
                    Tabelă informativă pentru clienți — vezi în timp real câte mașini sunt în lucru înainte să vii la service.
                  </p>
                </div>
              </div>

              {/* Widget Semafor: Verde (0-5), Portocaliu (6-10), Roșu (11-15) */}
              <div className={`capacity-banner ${statusAtelier.clasa}`}>
                <div className="capacity-top">
                  <span className="capacity-badge">{statusAtelier.eticheta}</span>
                  <span className="capacity-numbers">
                    <strong>{totalMasini}</strong> din <strong>15</strong> rampe ocupate ({15 - totalMasini} locuri libere)
                  </span>
                </div>

                {/* Bara de progres dinamică */}
                <div className="capacity-bar-track">
                  <div
                    className="capacity-bar-fill"
                    style={{ width: `${procentOcupare}%` }}
                  ></div>
                </div>

                <p className="capacity-advice">{statusAtelier.mesajClient}</p>

                {/* Legendă clară pe intervale */}
                <div className="capacity-legend">
                  <span className={totalMasini <= 5 ? "active-zone" : ""}>
                    🟢 0–5: Liber
                  </span>
                  <span className={totalMasini >= 6 && totalMasini <= 10 ? "active-zone" : ""}>
                    🟠 6–10: Disponibil
                  </span>
                  <span className={totalMasini >= 11 ? "active-zone" : ""}>
                    🔴 11–15: Aglomerat
                  </span>
                </div>
              </div>

              {/* Lista de intervenții (Cerința S5-R1, S5-R2, S5-R3) */}
              <InterventieList
                interventii={interventii}
                onToggle={handleToggle}
                onDelete={handleDelete}
              />
            </section>
          </div>
        )}

        {/* ==================== SLIDE 2: POLISARE ȘI FINISARE ==================== */}
        {activeSlide === "polisare" && (
          <div className="slide-page fade-in-slide" key="polisare">
            <div className="slide-header">
              <h2>Atelier Detailing, Polisare Multi-Stage & Finisare</h2>
              <p>
                Lacurile ceramice dure specifice vopselelor BMW Individual
                (Tanzanite Blue, Marina Bay Blue, Aventurine Red) necesită
                tehnologie orbitală Rupes și paste abrazive dedicate.
              </p>
            </div>

            <div className="polish-showcase">
              <div className="polish-image-box">
                <img
                  src="https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Polisare si Detailing BMW"
                />
                <div className="shine-overlay"></div>
                <span className="badge-garantie">Efect Oglindă Garantat 100%</span>
              </div>

              <div className="polish-steps">
                <div className="step-box">
                  <span className="step-num">01</span>
                  <div>
                    <h4>Decontaminare Chimică & Argilă (Clay Bar)</h4>
                    <p>
                      Îndepărtăm depunerile de fier de pe jantele M, bitumul și
                      rășina fără a atinge stratul de lac, urmat de sablare
                      ușoară a etrierelor oxidate.
                    </p>
                  </div>
                </div>
                <div className="step-box">
                  <span className="step-num">02</span>
                  <div>
                    <h4>Corecție Lac în 3 Pași (Heavy Cut, Medium, Finish)</h4>
                    <p>
                      Eliminăm până la 95% din zgârieturile fine (swirl marks),
                      hologramele și matuirea farurilor Laserlight / LED.
                    </p>
                  </div>
                </div>
                <div className="step-box">
                  <span className="step-num">03</span>
                  <div>
                    <h4>Protecție Ceramică 9H & Folie PPF Regenerabilă</h4>
                    <p>
                      Sigilăm caroseria și elementele M-Sport cu strat hidrofob
                      garantat 5 ani împotriva razelor UV, sării și micro-ciupiturilor
                      de pietre la viteze de autostradă.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="reviews-box">
              <h3>💬 Comentarii de la clienții atelierului de Detailing</h3>
              <div className="reviews-grid">
                <div className="review-card">
                  <p>
                    "Am adus un M340i negru plin de pânze de păianjen în lac.
                    După pachetul de polisare și ceramică la emax, mașina arată
                    mai bine decât în ziua în care am ridicat-o din reprezentanță!"
                  </p>
                  <span>⭐⭐⭐⭐⭐ — Andrei M. (BMW G20 M340i)</span>
                </div>
                <div className="review-card">
                  <p>
                    "Mi-au montat lip-ul față M-Sport cu adeziv poliuretanic și
                    au polisat toată partea frontală. Nici la 250 km/h pe
                    Autobahn nu mișcă un milimetru!"
                  </p>
                  <span>⭐⭐⭐⭐⭐ — Vlad R. (BMW Seria 4 Coupé)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== SLIDE 3: TRACTĂRI OFERITE DE SERVICE ==================== */}
        {activeSlide === "tractari" && (
          <div className="slide-page fade-in-slide" key="tractari">
            <div className="slide-header">
              <h2>Divizia de Tractări & Asistență Rutieră emax 24/7</h2>
              <p>
                Platforme hidraulice cu unghi ultra-redus de încărcare, proiectate
                special pentru mașini sport cu gardă la sol coborâtă, pachete M
                sau suspensii reglabile.
              </p>
            </div>

            <div className="towing-banner">
              <div className="towing-info">
                <span className="emergency-tag">INTERVENȚIE RAPIDĂ NON-STOP</span>
                <h3>Ai rămas în pană sau ai o eroare Drivetrain?</h3>
                <p>
                  Nu risca să distrugi bara față sau cutia automată xDrive pe o
                  platformă obișnuită! Echipajele noastre folosesc patine
                  speciale din teflon pentru roți blocate și chingi cu prindere
                  exclusiv pe anvelopă (fără cârlige pe brațele din aluminiu).
                </p>
                <div className="towing-stats">
                  <div>
                    <strong>25 min</strong>
                    <span>Timp mediu sosire în București & Ilfov</span>
                  </div>
                  <div>
                    <strong>0 RON</strong>
                    <span>Cost tractare dacă reparația se face la emax</span>
                  </div>
                  <div>
                    <strong>100%</strong>
                    <span>Siguranță pentru lip-uri joase și praguri M</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="services-grid">
              <div className="service-card">
                <h3>📐 Rampe Low-Clearance (Unghi 4°)</h3>
                <p>
                  Putem încărca fără nicio atingere mașini cu suspensie lăsată,
                  splittere din fibră de carbon sau pachete aerodinamice agresive.
                </p>
              </div>
              <div className="service-card">
                <h3>🔒 Deblocare Cutii Automate ZF 8HP</h3>
                <p>
                  Cunoaștem procedurile mecanice și electronice de trecere în
                  Neutral (N) pentru toate generațiile BMW F și G, fără a forța
                  grupul sau transmisia.
                </p>
              </div>
              <div className="service-card">
                <h3>🚗 Mașină la Schimb pe Durata Reparației</h3>
                <p>
                  Platforma îți aduce pe loc un BMW Seria 3 de curtoazie în timp
                  ce mașina ta este transportată direct pe elevatorul nostru.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ==================== SLIDE 4: DESPRE NOI ==================== */}
        {activeSlide === "despre" && (
          <div className="slide-page fade-in-slide" key="despre">
            <div className="slide-header">
              <h2>Povestea emax — De la Precizia din Nürnberg la Excelența BMW</h2>
              <p>
                O tradiție construită pe disciplină inginerească germană,
                prelucrări mecanice la nivel de micron și pasiune pură pentru
                divizia Motorsport.
              </p>
            </div>

            <div className="about-hero-card">
              <img
                src="https://images.pexels.com/photos/8985454/pexels-photo-8985454.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="Atelierul emax Motorsport"
              />
              <div className="about-story">
                <h3>Cum a luat naștere standardul emax?</h3>
                <p>
                  Povestea <strong>emax</strong> nu a început într-un birou, ci
                  direct în inima industriei germane din <strong>Nürnberg</strong>,
                  acolo unde fondatorii au deprins arta prelucrării metalelor de
                  înaltă performanță: sablare industrială controlată, filetare de
                  precizie, polisare la nivel de oglindă și control riguros al
                  calității.
                </p>
                <p>
                  Întorși în România și susținuți de o pregătire solidă în
                  inginerie industrială și robotică, frații fondatori au
                  transformat această rigoare într-un sanctuar tehnic. Deși
                  porțile noastre sunt deschise oricărei mărci auto, ADN-ul
                  atelierului curge în cele trei culori legendare: <strong>Albastru Deschis, Bleumarin și Roșu</strong>.
                </p>
              </div>
            </div>

            <div className="timeline-m">
              <div className="timeline-item">
                <span className="year">2019 — NÜRNBERG, GERMANIA</span>
                <h4>Rădăcinile în Metalurgie și Mecanică Fină</h4>
                <p>
                  Perfecționarea tehnicilor de sablare, refacere filete și
                  finisare a componentelor moto în atelierele germane din Bavaria.
                </p>
              </div>
              <div className="timeline-item">
                <span className="year">2022 — FONDAREA EMAX</span>
                <h4>Primul Atelier Dedicat Motoarelor B58 & N55</h4>
                <p>
                  Deschiderea primelor 3 elevatoare echipate cu licențe oficiale
                  BMW ISTA+ și scule dinamometrice calibrate electronic.
                </p>
              </div>
              <div className="timeline-item">
                <span className="year">2024 — DIVIZIA DETAILING & AERO</span>
                <h4>Inovație în Caroserie și Protecții Ceramice</h4>
                <p>
                  Introducerea camerelor izolate pentru polisare multi-stage și a
                  sistemelor de inspecție vizuală asistată pentru detectarea
                  defectelor din lac.
                </p>
              </div>
              <div className="timeline-item">
                <span className="year">PREZENT — LIDERI ÎN PERFORMANȚĂ</span>
                <h4>Centru Complet Multibrand & Specialist BMW M</h4>
                <p>
                  Peste 2.500 de automobile servisate impecabil, flotă proprie
                  de tractări low-clearance și o comunitate unită de pasionați.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      
     {/* SCENA CINEMATICĂ BMW M3 COMPETITION LA SCROLL JOS */}
    <footer className="m3-dark-tunnel" ref={m3SectionRef}>
      <div className="m-stripes-top"></div>

      <div className="m3-stage">
        <div
          className="m3-headlight-glow"
          style={{
            opacity: Math.pow(m3Progress, 1.5),
            transform: `scale(${0.6 + m3Progress * 0.8})`
          }}
        ></div>

        <div
          className="m3-front-wrapper"
          style={{
            // Vine din depărtare (0.55x) până foarte aproape (1.18x) și iese din întuneric
            transform: `scale(${0.55 + m3Progress * 0.63}) translateY(${(1 - m3Progress) * 60}px)`,
            opacity: Math.max(0.04, Math.pow(m3Progress, 1.3)),
            filter: `brightness(${0.1 + m3Progress * 1.05}) contrast(${1 + m3Progress * 0.25})`
          }}
        >
          <img
            src="/BMW G80 M3 Competition.jpeg"
            alt="BMW M3 Competition Front View"
            className="m3-front-img"
          />
        </div>

        <div
          className="m3-tunnel-title"
          style={{
            opacity: m3Progress > 0.45 ? (m3Progress) * 1.8 : 0,
            transform: `translateY(${(1 - m3Progress) * 30}px)`
          }}
        >
          <span className="m3-badge-red">BMW M3 COMPETITION</span>
          <h2>DOMINAȚIE DIN ÎNTUNERIC</h2>
          <p>510 CP • Motor S58 TwinPower Turbo • Pregătit de emax Motorsport</p>
        </div>
      </div>

      <p className="footer-copy">
        © 2026 <strong>emax AutoService & Motorsport</strong> — Toate drepturile rezervate.
      </p>
    </footer>
    </div>
  );
}