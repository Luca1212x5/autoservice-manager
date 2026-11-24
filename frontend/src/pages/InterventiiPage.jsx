import { useEffect, useState } from "react";
import InterventieList from "../components/InterventieList.jsx";
import TaskForm from "../components/TaskForm.jsx";
import {
  createInterventie,
  deleteInterventie,
  fetchInterventii,
  updateInterventie,
} from "../api.js";
import styles from "./InterventiiPage.module.css";

const CATALOG_SERVICII = [
  {
    id: "diagnoza",
    titlu: "Control Auto & Diagnoză Oficială ISTA+",
    icon: "💻",
    tag: "Toate mărcile • Specializare BMW",
    descriere:
      "Verificare multipunct în 60 de pași, citire parametri live (presiune turbo, corecții injectoare, distribuție), codări opțiuni ascunse și update-uri de soft originale.",
    pret: "de la 150 RON",
    durata: "45 - 90 min",
  },
  {
    id: "mecanica",
    titlu: "Mecanică Greu & Motoare Performanță",
    icon: "⚙️",
    tag: "B58 • S58 • N55 • VAG • Mercedes",
    descriere:
      "Schimb distribuție pe lanț, revizii cutii automate ZF 8HP prin spălare dinamică, reglaj diferențial M Sport, sisteme de frânare M Performance și suspensii adaptive.",
    pret: "Deviz personalizat",
    durata: "2 - 8 ore",
  },
  {
    id: "reconditionare",
    titlu: "Sablare, Refacere Filete & Recondiționări",
    icon: "🛠️",
    tag: "Precizie Industrială Germană",
    descriere:
      "Sablare fină cu micro-bile de sticlă pentru etriere, galerii și piese din aluminiu. Refacere filete chiuloasă/bloc motor (Helicoil) și prelucrări mecanice de înaltă precizie.",
    pret: "de la 200 RON",
    durata: "1 - 4 ore",
  },
  {
    id: "aero",
    titlu: "Retrofit Caroserie & Elemente M-Performance",
    icon: "🏎️",
    tag: "Exterior & Aerodinamică",
    descriere:
      "Instalare profesională pachete aerodinamice, lip-uri față M-Sport fixate sigur cu adeziv poliuretanic structural, difuzoare spate carbon și eleroane OEM.",
    pret: "de la 300 RON",
    durata: "2 - 5 ore",
  },
  {
    id: "revizie",
    titlu: "Revizie Filtre, Fluide & Întreținere",
    icon: "🛢️",
    tag: "Mentenanță Preventivă",
    descriere:
      "Schimb ulei motor cu specificații BMW Longlife, lichid de frână racing cu punct de fierbere ridicat, antigel și verificare completă articulații pe elevator.",
    pret: "de la 450 RON",
    durata: "60 min",
  },
  {
    id: "ac",
    titlu: "Climatizare, Electrică & Baterii AGM",
    icon: "⚡",
    tag: "Sisteme Electrice",
    descriere:
      "Înlocuire și înregistrare baterii Start-Stop AGM în calculatorul mașinii, reîncărcare freon R134a / R1234yf, igienizare cu ozon și reparații alternatoare.",
    pret: "de la 180 RON",
    durata: "45 min",
  },
];

export default function InterventiiPage() {
  const [interventii, setInterventii] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filtruServiciu, setFiltruServiciu] = useState("");

  useEffect(() => {
    let ignore = false;
    async function load() {
      try {
        const data = await fetchInterventii();
        if (!ignore) setInterventii(data);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    load();
    return () => {
      ignore = true;
    };
  }, []);

  async function handleAdd(interventieNoua) {
    const creat = await createInterventie(interventieNoua);
    setInterventii((prev) => [...prev, creat]);
  }

  async function handleToggle(id) {
    const item = interventii.find((i) => i.id === id);
    try {
      const actualizat = await updateInterventie(id, { completed: !item.completed });
      setInterventii((prev) => prev.map((i) => (i.id === id ? actualizat : i)));
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteInterventie(id);
      setInterventii((prev) => prev.filter((i) => i.id !== id));
    } catch (err) {
      setError(err.message);
    }
  }

  const active = interventii.filter((i) => !i.completed).length;
  const totalMasini = interventii.length;
  const MAX_RAMPE = 25;

  let statusAtelier = {
    clasa: styles.statusGreen,
    borderClasa: styles.statusGreenBorder,
    eticheta: "🟢 LIBER",
    mesajClient:
      "Moment excelent pentru vizită! Avem elevatoare libere pentru preluare rapidă fără așteptare.",
  };

  if (totalMasini >= 10 && totalMasini <= 18) {
    statusAtelier = {
      clasa: styles.statusOrange,
      borderClasa: styles.statusOrangeBorder,
      eticheta: "🟠 Disponibil",
      mesajClient:
        "Atelierul lucrează în regim normal. Timp estimat de preluare pentru clienți noi: ~35-50 minute.",
    };
  } else if (totalMasini > 18) {
    statusAtelier = {
      clasa: styles.statusRed,
      borderClasa: styles.statusRedBorder,
      eticheta: "🔴 Aglomerat",
      mesajClient:
        "Capacitate aproape maximă! Mai avem doar câteva rampe disponibile astăzi — recomandăm programare.",
    };
  }

  const procentOcupare = Math.min(100, Math.round((totalMasini / MAX_RAMPE) * 100));

  return (
    <div className={styles.fadeIn}>
      {/* HERO BANNER */}
      <section className={styles.heroCard}>
        <div>
          <span className={styles.mBadge}>PRECISION GERMAN ENGINEERING</span>
          <h1>emax AutoService & Motorsport</h1>
          <p>
            Centru de excelență dedicat gamei BMW & BMW M, deschis pentru toate mărcile auto.
            Verifică în timp real gradul de ocupare al atelierului sau apasă pe orice intervenție
            pentru detalii!
          </p>
          <div className={styles.heroBadgesRow}>
            <p className={styles.summary}>
              {interventii.length} interventions, {active} active
            </p>
            <span className={`${styles.livePill} ${statusAtelier.clasa}`}>
              Capacitate: {totalMasini}/{MAX_RAMPE} elevatoare
            </span>
          </div>
        </div>
        <img
          src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1000"
          alt="BMW M Performance Albastru"
          className={styles.heroImg}
        />
      </section>

      {/* CATALOG COMPLET DE SERVICII AUTO */}
      <section>
        <div className={styles.catalogHeader}>
          <h2>Catalog Complet de Servicii Auto</h2>
          <p>
            De la o simplă verificare de rutină sau schimb de ulei, până la recondiționări prin
            sablare și pregătire de circuit pentru modele M-Performance.
          </p>
          <input
            type="text"
            className={styles.searchService}
            placeholder="🔍 Caută rapid un serviciu (ex: sablare, ulei, diagnoză, B58)..."
            value={filtruServiciu}
            onChange={(e) => setFiltruServiciu(e.target.value)}
          />
        </div>

        <div className={styles.servicesGrid}>
          {CATALOG_SERVICII.filter(
            (s) =>
              s.titlu.toLowerCase().includes(filtruServiciu.toLowerCase()) ||
              s.descriere.toLowerCase().includes(filtruServiciu.toLowerCase())
          ).map((serviciu, index) => (
            <article
              key={serviciu.id}
              className={styles.serviceCard}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className={styles.serviceCardTop}>
                <span className={styles.serviceIcon}>{serviciu.icon}</span>
                <span className={styles.serviceTag}>{serviciu.tag}</span>
              </div>
              <h3>{serviciu.titlu}</h3>
              <p>{serviciu.descriere}</p>
              <div className={styles.serviceFooter}>
                <span className={styles.servicePrice}>{serviciu.pret}</span>
                <span>⏱️ {serviciu.durata}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SEMAFOR + FORMULAR + TABELA LIVE */}
      <section className={`panel ${statusAtelier.borderClasa}`}>
        <div className={styles.panelHeader}>
          <h2>📡 Monitorizare Live Atelier & Recepție</h2>
          <p className={styles.panelSub}>
            Vezi în timp real mașinile aflate în lucru și deschide o fișă nouă de intervenție.
          </p>
        </div>

        <div className={`${styles.capacityBanner} ${statusAtelier.clasa}`}>
          <div className={styles.capacityTop}>
            <span className={styles.capacityBadge}>{statusAtelier.eticheta}</span>
            <span>
              <strong>{totalMasini}</strong> din <strong>{MAX_RAMPE}</strong> rampe ocupate (
              {Math.max(0, MAX_RAMPE - totalMasini)} locuri libere)
            </span>
          </div>
          <div className={styles.barTrack}>
            <div className={styles.barFill} style={{ width: `${procentOcupare}%` }}></div>
          </div>
          <p className={styles.advice}>{statusAtelier.mesajClient}</p>
          <div className={styles.capacityLegend}>
            <span className={totalMasini < 10 ? styles.activeZone : undefined}>
              🟢 0–9: Liber
            </span>
            <span
              className={
                totalMasini >= 10 && totalMasini <= 18 ? styles.activeZone : undefined
              }
            >
              🟠 10–18: Disponibil
            </span>
            <span className={totalMasini > 18 ? styles.activeZone : undefined}>
              🔴 19–25: Aglomerat
            </span>
          </div>
        </div>

        <div className={styles.formWrapper}>
          <h3 className={styles.formTitle}>➕ Adaugă o intervenție nouă</h3>
          <TaskForm onAdd={handleAdd} />
        </div>

        {loading && (
          <p className="info" data-testid="loading">
            📡 Se preiau datele de pe rampele atelierului...
          </p>
        )}

        {error && (
          <p className="error" data-testid="error">
            Conexiune pierdută: {error}. Te rugăm să rulezi <code>npm run api</code>.
          </p>
        )}

        {!loading && (
          <InterventieList
            interventii={interventii}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        )}
      </section>
    </div>
  );
}