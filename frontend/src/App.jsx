import { useState } from "react";
import InterventieList from "./components/InterventieList.jsx";

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
    </>
  );
}