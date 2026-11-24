import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchInterventie } from "../api.js";
import { ETICHETE_SERVICII } from "../constants.js";
import styles from "./InterventieDetaliuPage.module.css";

export default function InterventieDetaliuPage() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    fetchInterventie(id)
      .then((data) => {
        if (!ignore) {
          setItem(data);
          setError(null);
        }
      })
      .catch((err) => {
        if (!ignore) setError(err.message);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [id]);

  if (loading) {
    return (
      <p className="info" data-testid="loading">
        📡 Se încarcă fișa intervenției...
      </p>
    );
  }

  if (error) {
    return (
      <section className="panel">
        <p className="error" data-testid="error">
          Intervenția nu a putut fi încărcată: {error}
        </p>
        <Link to="/" className={styles.back}>
          ← Înapoi la lista de intervenții
        </Link>
      </section>
    );
  }

  return (
    <section className={`panel ${styles.detail}`} data-testid="detail">
      <Link to="/" className={styles.back}>
        ← Înapoi la lista de intervenții
      </Link>
      <h2 className={item.completed ? styles.done : undefined} data-testid="detail-title">
        {item.interventie}
      </h2>
      <dl className={styles.fields}>
        <dt>Departament</dt>
        <dd>
          <span className={`badge badge-${item.serviceType.toLowerCase()}`}>
            {ETICHETE_SERVICII[item.serviceType] ?? item.serviceType}
          </span>
        </dd>
        <dt>Status lucrare</dt>
        <dd>{item.completed ? "✅ Finalizată" : "🔧 În lucru pe elevator"}</dd>
        <dt>Număr fișă (ID)</dt>
        <dd>#{item.id}</dd>
        <dt>Standard calitate</dt>
        <dd>Verificare multipunct BMW ISTA+ & Garaj emax Motorsport</dd>
      </dl>
    </section>
  );
}