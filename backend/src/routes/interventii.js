import { Router } from "express";
import { parseId, valideazaInterventie } from "../validation.js";

const router = Router();

// Etapa 9: datele stau în memorie și se resetează la repornire (Etapa 10 le mută în MariaDB)
let interventii = [
  {
    id: 1,
    interventie: "Revizie motor B58 3.0L & Schimb ulei Ravenol — BMW M240i (G42)",
    serviceType: "Mechanics",
    completed: true,
  },
  {
    id: 2,
    interventie: "Montaj lip față M-Sport cu adeziv poliuretanic — BMW Seria 3 (G20)",
    serviceType: "Bodywork",
    completed: false,
  },
  {
    id: 3,
    interventie: "Diagnoză oficială ISTA+ & Update iDrive — BMW Seria 5 (G30)",
    serviceType: "Electrical",
    completed: false,
  },
  {
    id: 4,
    interventie: "Schimb distribuție pe lanț N47 & Curățare admisie — BMW 320d (F30)",
    serviceType: "Mechanics",
    completed: false,
  },
  {
    id: 5,
    interventie: "Sablare etriere frână & Vopsire electrostatică M-Blue — BMW M4",
    serviceType: "Bodywork",
    completed: false,
  },
  {
    id: 6,
    interventie: "Spălare dinamică cutie automată ZF 8HP — BMW X5 xDrive",
    serviceType: "Mechanics",
    completed: false,
  },
  {
    id: 7,
    interventie: "Polisare lac Multi-Stage & Protecție Ceramică 9H — BMW M340i",
    serviceType: "Bodywork",
    completed: false,
  },
];

let nextId = 8;

function gasesteIndex(req, res) {
  const id = parseId(req.params.id);
  if (!id) {
    res.status(400).json({ error: "Id invalid" });
    return -1;
  }

  const index = interventii.findIndex((item) => item.id === id);
  if (index === -1) {
    res.status(404).json({ error: "Intervenția nu există" });
    return -1;
  }

  return index;
}

// GET /interventii
router.get("/", (req, res) => {
  res.json(interventii);
});

// GET /interventii/:id
router.get("/:id", (req, res) => {
  const index = gasesteIndex(req, res);
  if (index === -1) return;
  res.json(interventii[index]);
});

// POST /interventii
router.post("/", (req, res) => {
  const { erori, date } = valideazaInterventie(req.body ?? {});
  if (erori.length > 0) {
    return res.status(400).json({ error: erori.join("; ") });
  }

  const noua = { id: nextId++, ...date };
  interventii.push(noua);
  res.status(201).json(noua);
});

// PATCH /interventii/:id
router.patch("/:id", (req, res) => {
  const index = gasesteIndex(req, res);
  if (index === -1) return;

  const { erori, date } = valideazaInterventie(req.body ?? {}, { partial: true });
  if (erori.length > 0) {
    return res.status(400).json({ error: erori.join("; ") });
  }

  interventii[index] = { ...interventii[index], ...date };
  res.json(interventii[index]);
});

// DELETE /interventii/:id
router.delete("/:id", (req, res) => {
  const index = gasesteIndex(req, res);
  if (index === -1) return;

  interventii.splice(index, 1);
  res.status(204).end();
});

export default router;