import { Link } from "react-router-dom";
import { ETICHETE_SERVICII } from "../constants.js";
import styles from "./InterventieCard.module.css";

export default function InterventieCard({ interventie, onToggle, onDelete }) {
  return (
    <li
      className={interventie.completed ? `${styles.card} ${styles.done}` : styles.card}
      data-testid="item"
      data-id={interventie.id}
    >
      <div className={styles.main}>
        <input
          type="checkbox"
          checked={interventie.completed}
          onChange={() => onToggle(interventie.id)}
          aria-label={`Marchează ${interventie.interventie}`}
          data-testid="item-toggle"
        />
        <div>
          <Link
            to={`/interventii/${interventie.id}`}
            className={styles.title}
            data-testid="item-link"
          >
            {interventie.interventie}
          </Link>
          <span className={`badge badge-${interventie.serviceType.toLowerCase()}`}>
            {ETICHETE_SERVICII[interventie.serviceType] ?? interventie.serviceType}
          </span>
        </div>
      </div>

      <button
        className="btn-danger"
        onClick={() => onDelete(interventie.id)}
        aria-label={`Șterge ${interventie.interventie}`}
        data-testid="item-delete"
      >
        Șterge
      </button>
    </li>
  );
}