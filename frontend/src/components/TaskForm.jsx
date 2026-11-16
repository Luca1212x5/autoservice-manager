import { useState } from "react";

const TIPURI_SERVICII = [
  { value: "Mechanics", label: "Mecanică & Motor" },
  { value: "Electrical", label: "Diagnoză & Electrică" },
  { value: "Bodywork", label: "Caroserie & Detailing" },
];

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
    <form className="emax-inline-form" onSubmit={handleSubmit} noValidate data-testid="form">
      <div className="emax-form-row">
        <label className="emax-form-group">
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

        <label className="emax-form-group">
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

        <button type="submit" disabled={trimite} data-testid="form-submit" className="btn-add-emax">
          {trimite ? "Se salvează..." : "Deschide Fişă"}
        </button>
      </div>

      {eroare && (
        <p className="error form-error-msg" data-testid="form-error">
          {eroare}
        </p>
      )}
    </form>
  );
}