// Pasul 2: Datele de test și valorile permise
const TIPURI_SERVICE = ["Mechanics", "Electrical", "Bodywork"];

const interventii = [
  { id: 1, interventie: "Oil change VW Golf", completed: false, serviceType: "Mechanics" },
  { id: 2, interventie: "Replace battery Ford Focus", completed: true, serviceType: "Electrical" },
  { id: 3, interventie: "Paint front bumper BMW", completed: false, serviceType: "Bodywork" }
];

// Pasul 3: Listarea titlurilor (folosind map pentru a returna un array nou)
function listeazaInterventii(lista) {
  return lista.map((i) => i.interventie);
}

// Pasul 4: Numărarea elementelor active (folosind filter)
function numaraActive(lista) {
  return lista.filter((i) => !i.completed).length;
}

// Pasul 5: Căutarea după titlu (fără a ține cont de litere mari/mici)
function cautaDupaTitlu(lista, text) {
  return lista.filter((i) => i.interventie.toLowerCase().includes(text.toLowerCase()));
}

// Pasul 6: Adăugarea unui element, cu validare și id calculat cu reduce
function nextId(lista) {
  return lista.reduce((max, i) => Math.max(max, i.id), 0) + 1;
}

function adaugaInterventie(lista, interventie, serviceType = "Mechanics") {
  const titluCurat = interventie.trim();
  
  // Validare text gol
  if (!titluCurat) {
    console.log("Eroare validare: Intervenția nu poate fi goală.");
    return lista;
  }
  
  // Validare valoare fixă (tip service)
  if (!TIPURI_SERVICE.includes(serviceType)) {
    console.log("Eroare validare: Tip service invalid:", serviceType);
    return lista;
  }
  
  // Construire obiect nou și returnare array modificat (imutabilitate)
  const nou = {
    id: nextId(lista),
    interventie: titluCurat,
    completed: false,
    serviceType: serviceType
  };
  return [...lista, nou];
}

// Pasul 7: Comutarea stării și ștergerea
function comutaStare(lista, id) {
  return lista.map((i) => i.id === id ? { ...i, completed: !i.completed } : i);
}

function stergeInterventie(lista, id) {
  return lista.filter((i) => i.id !== id);
}

// Pasul 8: Testele din consolă grupate pe secțiuni
console.log("--- Citire ---");
console.log("Intervenții:", listeazaInterventii(interventii).join(", "));
console.log("Active:", numaraActive(interventii));
console.log("Căutare 'ford':", listeazaInterventii(cautaDupaTitlu(interventii, "ford")).join(", "));

console.log("--- Adăugare ---");
let listaNoua = adaugaInterventie(interventii, "Schimb plăcuțe frână Audi", "Mechanics");
console.log("Lista nouă:", listaNoua.length, "intervenții");
console.log("Originalul a rămas cu:", interventii.length, "intervenții"); // Demonstrează imutabilitatea

console.log("--- Modificare și ștergere ---");
listaNoua = comutaStare(listaNoua, 1);
console.log("După bifarea id 1, active:", numaraActive(listaNoua));
listaNoua = stergeInterventie(listaNoua, 3);
console.log("După ștergerea id 3:", listeazaInterventii(listaNoua).join(", "));

console.log("--- Validare ---");
adaugaInterventie(listaNoua, "   ", "Mechanics"); // Va eșua intenționat
adaugaInterventie(listaNoua, "Verificare AC", "Vopsitorie"); // Va eșua intenționat