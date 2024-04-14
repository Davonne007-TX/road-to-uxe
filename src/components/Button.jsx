export default function Button({ label, className, color }) {
  return (
    <button name="learn more" className={`${className} ${color}`}>
      {label}
    </button>
  );
}
