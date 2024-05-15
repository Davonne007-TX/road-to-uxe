export default function Search({ type, placeholder, className }) {
  return (
    <section>
      <label htmlFor="search">
        <input type={type} placeholder={placeholder} className={className} />
      </label>
    </section>
  );
}
