export default function Button({ btnTxt, label, className, color, onClick }) {
  return (
    <button onClick={onClick} className={`${className} ${color}`}>
      {label}
    </button>
  );
}
