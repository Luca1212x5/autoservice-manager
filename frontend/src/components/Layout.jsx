import { useState, useEffect, useRef } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function navClass({ isActive }) {
  return isActive ? `${styles.link} ${styles.active}` : styles.link;
}

export default function Layout() {
  const [tema, setTema] = useState(temaInitiala);
  const [m3Progress, setM3Progress] = useState(0);
  const m3SectionRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      if (!m3SectionRef.current) return;
      const rect = m3SectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const distantaIntrata = windowHeight - rect.top;
      const distantaTotala = windowHeight + rect.height * 0.35;
      const progres = Math.max(0, Math.min(1, distantaIntrata / distantaTotala));
      setM3Progress(progres);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";
    setTema(noua);
    document.documentElement.dataset.theme = noua;
  }

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.mStripesTop}></div>
        <div className={styles.navbarTop}>
          <Link to="/" className={styles.brandLogo}>
            <div className={styles.mBars}>
              <span className={`${styles.mBar} ${styles.blueLight}`}></span>
              <span className={`${styles.mBar} ${styles.blueDark}`}></span>
              <span className={`${styles.mBar} ${styles.red}`}></span>
            </div>
            <span className={styles.brandText}>emax</span>
            <span className={styles.brandSub}>BMW SPECIALIST & MULTIBRAND</span>
          </Link>

          <nav className={styles.nav} data-testid="nav">
            <NavLink to="/" end className={navClass}>
              🔧 Intervenții
            </NavLink>
            <NavLink to="/despre" className={navClass}>
              🏆 Despre noi
            </NavLink>
          </nav>

          <button
            className={styles.themeToggle}
            onClick={handleTema}
            aria-pressed={tema === "dark"}
          >
            {tema === "dark" ? "☀️ Mod luminos" : "🌙 Mod întunecat"}
          </button>
        </div>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.m3DarkTunnel} ref={m3SectionRef}>
        <div className={styles.mStripesTop}></div>
        <div className={styles.m3Stage}>
          <div
            className={styles.m3HeadlightGlow}
            style={{
              opacity: Math.pow(m3Progress, 1.5),
              transform: `scale(${0.6 + m3Progress * 0.8})`,
            }}
          ></div>

          <div
            className={styles.m3FrontWrapper}
            style={{
              transform: `scale(${0.55 + m3Progress * 0.63}) translateY(${(1 - m3Progress) * 60}px)`,
              opacity: Math.max(0.04, Math.pow(m3Progress, 1.3)),
              filter: `brightness(${0.1 + m3Progress * 2.2}) contrast(${1 + m3Progress * 0.35})`,
            }}
          >
            <img
              src="/BMW G80 M3 Competition.jpeg"
              alt="BMW M3 Competition Front View"
              className={styles.m3FrontImg}
            />
          </div>

          <div
            className={styles.m3TunnelTitle}
            style={{
              opacity: m3Progress > 0.45 ? m3Progress * 1.8 : 0,
              transform: `translateY(${(1 - m3Progress) * 30}px)`,
            }}
          >
            <span className={styles.m3BadgeRed}>BMW M3 COMPETITION</span>
            <h2>DOMINAȚIE DIN ÎNTUNERIC</h2>
            <p>510 CP • Motor S58 TwinPower Turbo • Pregătit de emax Motorsport</p>
          </div>
        </div>

        <p className={styles.footerCopy}>
          © 2026 <strong>emax AutoService & Motorsport</strong> — Proiect Tehnologii Web.
        </p>
      </footer>
    </div>
  );
}