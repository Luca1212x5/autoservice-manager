import { useState } from "react";
import InterventieList from "./components/InterventieList.jsx";
import "./App.css";

const INTERVENTII_INITIALE = [
  { id: 1, interventie: "Oil change VW Golf", completed: false, serviceType: "Mechanics" },
  { id: 2, interventie: "Replace battery Ford Focus", completed: true, serviceType: "Electrical" },
  { id: 3, interventie: "Paint front bumper BMW", completed: false, serviceType: "Bodywork" }
];

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [interventii, setInterventii] = useState(INTERVENTII_INITIALE);
  const [tema, setTema] = useState(temaInitiala);
  const [showServices, setShowServices] = useState(false);

  function handleToggle(id) {
    setInterventii((prev) =>
      prev.map((i) => (i.id === id ? { ...i, completed: !i.completed } : i))
    );
  }

  function handleDelete(id) {
    setInterventii((prev) => prev.filter((i) => i.id !== id));
  }

  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";
    setTema(noua);
    document.documentElement.dataset.theme = noua;
  }

  const active = interventii.filter((i) => !i.completed).length;

  return (
    <>
      <header className="app-header">
        <button className="btn-services" onClick={() => setShowServices(true)}>
          ⚙️ Tipuri de service
        </button>

        <button className="theme-toggle" onClick={handleTema} aria-pressed={tema === "dark"}>
          {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
        </button>
        <h1>AutoService Manager</h1>
        <p>Manage car repairs and service interventions for mechanics and car owners.</p>
        <p className="app-count">
          {interventii.length} interventions, {active} active
        </p>
      </header>

      <main className="container">
        <section className="panel">
          <h2>Service Interventions</h2>
          <InterventieList interventii={interventii} onToggle={handleToggle} onDelete={handleDelete} />
        </section>
      </main>

      <div className="bmw-footer-showcase">
        <img 
          src="https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=1200" 
          alt="BMW Seria 3 M-Sport" 
        />
      </div>

      {showServices && (
        <div className="modal-overlay" onClick={() => setShowServices(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-image"></div>
            <div className="modal-info">
              <h2>Servicii Auto Premium</h2>
              <ul>
                <li>🛢️ Schimb ulei, filtre și mentenanță standard</li>
                <li>🛠️ Sablare și recondiționare componente metalice</li>
                <li>✨ Polisare profesională caroserie și faruri</li>
                <li>⚙️ Refacere filete și prelucrări mecanice fine</li>
                <li>🏎️ Diagnoză completă și pachet performanță M-Sport</li>
              </ul>
              <button className="close-btn" onClick={() => setShowServices(false)}>
                Închide meniul
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}