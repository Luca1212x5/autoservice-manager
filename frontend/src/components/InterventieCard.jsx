export default function InterventieCard({ interventie, onToggle, onDelete }) {
  return (
    <li
      className={interventie.completed ? "task-card done" : "task-card"}
      data-testid="item"
      data-id={interventie.id}
    >
      <label className="task-main">
        <input
          type="checkbox"
          checked={interventie.completed}
          onChange={() => onToggle(interventie.id)}
          data-testid="item-toggle"
        />
        <div>
          <h3 data-testid="item-title">{interventie.interventie}</h3>
          <span className={`badge badge-${interventie.serviceType.toLowerCase()}`}>
            {interventie.serviceType}
          </span>
        </div>
      </label>
      <button 
        className="btn-danger" 
        onClick={() => onDelete(interventie.id)}
        data-testid="item-delete"
      >
        Finalizează / Șterge
      </button>
    </li>
  );
}