// frontend/src/components/InterventieList.jsx
import InterventieCard from "./InterventieCard.jsx";

export default function InterventieList({ interventii }) {
  // Verificăm dacă lista e goală
  if (interventii.length === 0) {
    return <p className="empty">Nu există nicio intervenție înregistrată.</p>;
  }

  // Randăm lista cu elemente
  return (
    <ul className="task-list">
      {interventii.map((item) => (
        <InterventieCard key={item.id} item={item} />
      ))}
    </ul>
  );
}