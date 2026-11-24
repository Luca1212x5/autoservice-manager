import styles from "./DesprePage.module.css";

export default function DesprePage() {
  return (
    <div className={styles.pageWrapper}>
      {/* 1. POVESTEA EMAX & TIMELINE */}
      <section>
        <div className={styles.sectionHeader}>
          <h2>🏆 Povestea emax — De la Precizia din Nürnberg la Excelența BMW</h2>
          <p>
            O tradiție construită pe disciplină inginerească germană, prelucrări mecanice
            la nivel de micron și pasiune pură pentru divizia Motorsport.
          </p>
        </div>

        <div className={styles.aboutHeroCard}>
          <img
            src="https://images.pexels.com/photos/8985454/pexels-photo-8985454.jpeg?auto=compress&cs=tinysrgb&w=1000"
            alt="Atelierul emax Motorsport"
          />
          <div>
            <h3>Cum a luat naștere standardul emax?</h3>
            <p>
              Povestea <strong>emax</strong> nu a început într-un birou, ci direct în inima
              industriei germane din <strong>Nürnberg</strong>, acolo unde fondatorii au
              deprins arta prelucrării metalelor de înaltă performanță: sablare industrială
              controlată, filetare de precizie, polisare la nivel de oglindă și control
              riguros al calității.
            </p>
            <p>
              Întorși în România și susținuți de o pregătire solidă în inginerie industrială
              și robotică, frații fondatori au transformat această rigoare într-un sanctuar
              tehnic. Deși porțile noastre sunt deschise oricărei mărci auto, ADN-ul
              atelierului curge în cele trei culori legendare:{" "}
              <strong>Albastru Deschis, Bleumarin și Roșu</strong>.
            </p>
            <p className={styles.techStack}>
              <strong>Arhitectură Web (AutoService Manager):</strong> React, Vite, React
              Router, CSS Modules, JSON Server REST API.
            </p>
          </div>
        </div>

        <div className={styles.timelineGrid}>
          <div className={styles.timelineItem}>
            <span className={styles.year}>2019 — NÜRNBERG, GERMANIA</span>
            <h4>Rădăcinile în Metalurgie și Mecanică Fină</h4>
            <p>
              Perfecționarea tehnicilor de sablare, refacere filete și finisare a
              componentelor moto în atelierele germane din Bavaria.
            </p>
          </div>
          <div className={styles.timelineItem}>
            <span className={styles.year}>2022 — FONDAREA EMAX</span>
            <h4>Primul Atelier Dedicat Motoarelor B58 & N55</h4>
            <p>
              Deschiderea primelor elevatoare echipate cu licențe oficiale BMW ISTA+ și
              scule dinamometrice calibrate electronic.
            </p>
          </div>
          <div className={styles.timelineItem}>
            <span className={styles.year}>2024 — DIVIZIA DETAILING & AERO</span>
            <h4>Inovație în Caroserie și Protecții Ceramice</h4>
            <p>
              Introducerea camerelor izolate pentru polisare multi-stage și a sistemelor
              de inspecție vizuală asistată pentru detectarea defectelor din lac.
            </p>
          </div>
          <div className={styles.timelineItem}>
            <span className={styles.year}>PREZENT — LIDERI ÎN PERFORMANȚĂ</span>
            <h4>Centru Complet Multibrand & Specialist BMW M</h4>
            <p>
              Peste 2.500 de automobile servisate impecabil, flotă proprie de tractări
              low-clearance și o comunitate unită de pasionați.
            </p>
          </div>
        </div>
      </section>

      {/* 2. ATELIER DETAILING, POLISARE ȘI FINISARE */}
      <section>
        <div className={styles.sectionHeader}>
          <h2>✨ Atelier Detailing, Polisare Multi-Stage & Finisare</h2>
          <p>
            Lacurile ceramice dure specifice vopselelor BMW Individual (Tanzanite Blue,
            Marina Bay Blue, Aventurine Red) necesită tehnologie orbitală Rupes și paste
            abrazive dedicate.
          </p>
        </div>

        <div className={styles.polishShowcase}>
          <div className={styles.polishImageBox}>
            <img
              src="https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Polisare si Detailing BMW"
            />
            <div className={styles.shineOverlay}></div>
            <span className={styles.badgeGarantie}>Efect Oglindă Garantat 100%</span>
          </div>

          <div className={styles.polishSteps}>
            <div className={styles.stepBox}>
              <span className={styles.stepNum}>01</span>
              <div>
                <h4>Decontaminare Chimică & Argilă (Clay Bar)</h4>
                <p>
                  Îndepărtăm depunerile de fier de pe jantele M, bitumul și rășina fără a
                  atinge stratul de lac, urmat de sablare ușoară a etrierelor oxidate.
                </p>
              </div>
            </div>
            <div className={styles.stepBox}>
              <span className={styles.stepNum}>02</span>
              <div>
                <h4>Corecție Lac în 3 Pași (Heavy Cut, Medium, Finish)</h4>
                <p>
                  Eliminăm până la 95% din zgârieturile fine (swirl marks), hologramele și
                  matuirea farurilor Laserlight / LED.
                </p>
              </div>
            </div>
            <div className={styles.stepBox}>
              <span className={styles.stepNum}>03</span>
              <div>
                <h4>Protecție Ceramică 9H & Folie PPF Regenerabilă</h4>
                <p>
                  Sigilăm caroseria și elementele M-Sport cu strat hidrofob garantat 5 ani
                  împotriva razelor UV, sării și micro-ciupiturilor la viteze de autostradă.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.reviewsBox}>
          <h3>💬 Comentarii de la clienții atelierului de Detailing</h3>
          <div className={styles.reviewsGrid}>
            <div className={styles.reviewCard}>
              <p>
                "Am adus un M340i negru plin de pânze de păianjen în lac. După pachetul de
                polisare și ceramică la emax, mașina arată mai bine decât în ziua în care
                am ridicat-o din reprezentanță!"
              </p>
              <span>⭐⭐⭐⭐⭐ — Andrei M. (BMW G20 M340i)</span>
            </div>
            <div className={styles.reviewCard}>
              <p>
                "Mi-au montat lip-ul față M-Sport cu adeziv poliuretanic și au polisat
                toată partea frontală. Nici la 250 km/h pe Autobahn nu mișcă un milimetru!"
              </p>
              <span>⭐⭐⭐⭐⭐ — Vlad R. (BMW Seria 4 Coupé)</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DIVIZIA DE TRACTĂRI & ASISTENȚĂ RUTIERĂ */}
      <section>
        <div className={styles.sectionHeader}>
          <h2>🚨 Divizia de Tractări & Asistență Rutieră emax 24/7</h2>
          <p>
            Platforme hidraulice cu unghi ultra-redus de încărcare, proiectate special
            pentru mașini sport cu gardă la sol coborâtă sau pachete M.
          </p>
        </div>

        <div className={styles.towingBanner}>
          <span className={styles.emergencyTag}>INTERVENȚIE RAPIDĂ NON-STOP</span>
          <h3>Ai rămas în pană sau ai o eroare Drivetrain?</h3>
          <p>
            Nu risca să distrugi bara față sau cutia automată xDrive pe o platformă
            obișnuită! Echipajele noastre folosesc patine speciale din teflon pentru roți
            blocate și chingi cu prindere exclusiv pe anvelopă.
          </p>
          <div className={styles.towingStats}>
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

        <div className={styles.towingCardsGrid}>
          <div className={styles.towingCard}>
            <h3>📐 Rampe Low-Clearance (Unghi 4°)</h3>
            <p>
              Putem încărca fără nicio atingere mașini cu suspensie lăsată, splittere din
              fibră de carbon sau pachete aerodinamice agresive.
            </p>
          </div>
          <div className={styles.towingCard}>
            <h3>🔒 Deblocare Cutii Automate ZF 8HP</h3>
            <p>
              Cunoaștem procedurile mecanice și electronice de trecere în Neutral (N) pentru
              toate generațiile BMW F și G, fără a forța transmisia.
            </p>
          </div>
          <div className={styles.towingCard}>
            <h3>🚗 Mașină la Schimb pe Durata Reparației</h3>
            <p>
              Platforma îți aduce pe loc un BMW Seria 3 de curtoazie în timp ce mașina ta
              este transportată direct pe elevatorul nostru.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}