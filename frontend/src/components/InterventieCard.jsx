// frontend/src/components/InterventieCard.jsx

// Dictionar pentru a traduce tipul serviciului frumos pe ecran
const ETICHETE_SERVICIU = { 
  Mechanics: "Mecanică", 
  Electrical: "Electrică", 
  Bodywork: "Caroserie" 
};

export default function InterventieCard({ item }) {
  return (
    <li className={item.completed ? "task-card done" : "task-card"}>
      <div>
        <h3>{item.interventie}</h3>
        <span className={`badge badge-${item.serviceType.toLowerCase()}`}>
          {ETICHETE_SERVICIU[item.serviceType] || item.serviceType}
        </span>
      </div>
      <span className="status">{item.completed ? "Gata" : "Activ"}</span>
    </li>
  );
}