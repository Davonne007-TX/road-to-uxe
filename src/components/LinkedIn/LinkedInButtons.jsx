export default function LinkedInButtons({ label, className, icon }) {
  return (
    <>
      <section className="flex flex-col">
        <button className={`flex items-center justify-center ${className}`}>
          {icon && <span className="mr-2">{icon}</span>} {label}
        </button>
      </section>
    </>
  );
}
