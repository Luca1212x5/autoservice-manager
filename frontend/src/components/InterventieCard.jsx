const ETICHETE_SERVICIU = { 
  Mechanics: "Mecanică", 
  Electrical: "Electrică", 
  Bodywork: "Caroserie" 
};

export default function InterventieCard({ item, onToggle, onDelete }) {
  return (
    <li className={item.completed ? "task-card done" : "task-card"}>
      <label className="task-main">
        <input 
          type="checkbox" 
          checked={item.completed} 
          onChange={() => onToggle(item.id)} 
        />
        <div>
          <h3>{item.interventie}</h3>
          <span className={`badge badge-${item.serviceType.toLowerCase()}`}>
            {ETICHETE_SERVICIU[item.serviceType] || item.serviceType}
          </span>
        </div>
      </label>
      <button 
        className="btn-danger" 
        onClick={() => onDelete(item.id)} 
        aria-label={`Șterge ${item.interventie}`}
      >
        Șterge
      </button>
    </li>
  );
}