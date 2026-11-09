export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

export async function fetchInterventii() {
  const res = await fetch(`${API_URL}/interventii`);
  if (!res.ok) {
    throw new Error(`Eroare server atelier: ${res.status}`);
  }
  return res.json();
}