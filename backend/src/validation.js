export const TIPURI_SERVICII = ["Mechanics", "Electrical", "Bodywork"];
const TITLU_MAX = 100;

// partial = true pentru PATCH (se verifică doar câmpurile trimise)
export function valideazaInterventie(body, { partial = false } = {}) {
  const erori = [];
  const date = {};

  if (!partial || body.interventie !== undefined) {
    if (typeof body.interventie !== "string" || body.interventie.trim() === "") {
      erori.push("interventie este obligatoriu");
    } else if (body.interventie.trim().length > TITLU_MAX) {
      erori.push(`interventie are maximum ${TITLU_MAX} de caractere`);
    } else {
      date.interventie = body.interventie.trim();
    }
  }

  if (!partial || body.serviceType !== undefined) {
    const tip = body.serviceType ?? "Mechanics";
    if (!TIPURI_SERVICII.includes(tip)) {
      erori.push(`serviceType trebuie să fie unul din: ${TIPURI_SERVICII.join(", ")}`);
    } else {
      date.serviceType = tip;
    }
  }

  if (body.completed !== undefined) {
    if (typeof body.completed !== "boolean") {
      erori.push("completed trebuie să fie true sau false");
    } else {
      date.completed = body.completed;
    }
  } else if (!partial) {
    date.completed = false;
  }

  return { erori, date };
}

export function parseId(value) {
  const id = Number(value);
  return Number.isInteger(id) && id > 0 ? id : null;
}