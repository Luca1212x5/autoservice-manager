export const TIPURI_SERVICII = [
  { value: "Mechanics", label: "Mecanică & Motor" },
  { value: "Electrical", label: "Diagnoză & Electrică" },
  { value: "Bodywork", label: "Caroserie & Detailing" },
];

export const ETICHETE_SERVICII = Object.fromEntries(
  TIPURI_SERVICII.map((t) => [t.value, t.label])
);