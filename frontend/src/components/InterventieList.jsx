import InterventieCard from "./InterventieCard.jsx";

export default function InterventieList({ interventii, onToggle, onDelete }) {
  if (interventii.length === 0) {
    return <p className="empty" data-testid="empty">Nu există nicio mașină în atelier.</p>;
  }

  return (
    <ul className="task-list">
      {interventii.map((item) => (
        <InterventieCard
          key={item.id}
          interventie={item}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}