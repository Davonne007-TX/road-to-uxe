export default function Button({ label, className, color, onClick }) {
  return (
    <button
      name="learn more"
      onClick={onClick}
      className={`${className} ${color}`}
    >
      {label}
    </button>
  );
}
