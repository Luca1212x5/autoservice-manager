// frontend/src/App.jsx
import InterventieList from "./components/InterventieList.jsx";

const interventii = [
  { id: 1, interventie: "Oil change VW Golf", completed: false, serviceType: "Mechanics" },
  { id: 2, interventie: "Replace battery Ford Focus", completed: true, serviceType: "Electrical" },
  { id: 3, interventie: "Paint front bumper BMW", completed: false, serviceType: "Bodywork" }
];

export default function App() {
  const active = interventii.filter((i) => !i.completed).length;

  return (
    <>
      <header className="app-header">
        <h1>AutoService Manager</h1>
        <p>Manage car repairs and service interventions for mechanics and car owners.</p>
        <p className="app-count">
          {interventii.length} interventions, {active} active
        </p>
      </header>
      <main className="container">
        <section className="panel">
          <h2>Service Interventions</h2>
          {/* Aici am înlocuit tag-ul <pre> cu componenta noastră */}
          <InterventieList interventii={interventii} />
        </section>
      </main>
    </>
  );
}