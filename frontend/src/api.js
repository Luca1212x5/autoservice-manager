export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

// Funcție comună pentru cereri
async function request(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!res.ok) {
    throw new Error(`Eroare server: ${res.status}`);
  }

  // Tratăm cazul 204 No Content
  if (res.status === 204) return null;
  
  return res.json();
}

// 1. Citește (GET)
export function fetchInterventii() {
  return request("/interventii");
}

// 2. Creează (POST)
export function createInterventie(interventie) {
  return request("/interventii", {
    method: "POST",
    body: JSON.stringify(interventie),
  });
}

// 3. Modifică (PATCH)
export function updateInterventie(id, changes) {
  return request(`/interventii/${id}`, {
    method: "PATCH",
    body: JSON.stringify(changes),
  });
}

// 4. Șterge (DELETE)
export function deleteInterventie(id) {
  return request(`/interventii/${id}`, { method: "DELETE" });
}