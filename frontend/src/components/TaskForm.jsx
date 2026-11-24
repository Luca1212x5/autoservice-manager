import { useState } from "react";
import { TIPURI_SERVICII } from "../constants.js";
import styles from "./TaskForm.module.css";

const TITLU_MAX = 100;

export default function TaskForm({ onAdd }) {
  const [interventie, setInterventie] = useState("");
  const [serviceType, setServiceType] = useState("Mechanics");
  const [eroare, setEroare] = useState("");
  const [trimite, setTrimite] = useState(false);

  function valideaza() {
    const text = interventie.trim();
    if (text === "") return "Descrierea intervenției este obligatorie.";
    if (text.length > TITLU_MAX) return `Descrierea are maximum ${TITLU_MAX} caractere.`;
    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const mesaj = valideaza();
    if (mesaj) {
      setEroare(mesaj);
      return;
    }

    setEroare("");
    setTrimite(true);

    try {
      await onAdd({ interventie: interventie.trim(), serviceType, completed: false });
      setInterventie("");
      setServiceType("Mechanics");
    } catch (err) {
      setEroare(err.message);
    } finally {
      setTrimite(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate data-testid="form">
      <div className={styles.row}>
        <label className={styles.group}>
          <span>Intervenție auto</span>
          <input
            type="text"
            value={interventie}
            onChange={(e) => setInterventie(e.target.value)}
            placeholder="Ex: Schimb ulei B58 - BMW M240i"
            maxLength={TITLU_MAX}
            aria-invalid={Boolean(eroare)}
            data-testid="form-title"
          />
        </label>

        <label className={styles.group}>
          <span>Departament</span>
          <select
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            data-testid="form-serviceType"
          >
            {TIPURI_SERVICII.map((tip) => (
              <option key={tip.value} value={tip.value}>
                {tip.label}
              </option>
            ))}
          </select>
        </label>

        <button type="submit" disabled={trimite} data-testid="form-submit" className="btn">
          {trimite ? "Se salvează..." : "Deschide Fişă"}
        </button>
      </div>

      {eroare && (
        <p className={`error ${styles.errorMsg}`} data-testid="form-error">
          {eroare}
        </p>
      )}
    </form>
  );
}