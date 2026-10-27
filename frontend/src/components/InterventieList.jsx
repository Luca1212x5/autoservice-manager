import InterventieCard from "./InterventieCard.jsx";

export default function InterventieList({ interventii, onToggle, onDelete }) {
  if (interventii.length === 0) {
    return <p className="empty">Nu există nicio intervenție înregistrată.</p>;
  }

  return (
    <ul className="task-list">
      {interventii.map((item) => (
        <InterventieCard 
          key={item.id} 
          item={item} 
          onToggle={onToggle} 
          onDelete={onDelete} 
        />
      ))}
    </ul>
  );
}