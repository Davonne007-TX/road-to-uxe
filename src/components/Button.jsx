export default function Button({ label, className, color, onClick }) {
  return (
    <button onClick={onClick} className={`${className} ${color}`}>
      {label}
    </button>
  );
}
