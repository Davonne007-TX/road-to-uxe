export default function Input() {
  return (
    <section className="relative mt-10 ml-10 lg:ml-40">
      <input
        placeholder="Search For Repository"
        className="w-96 lg:w-80 h-auto p-2 bg-gray-300 rounded-2xl text-black outline-none"
      />
      <img
        src="/images/magnifying-glass.png"
        alt="Global Search, Magnifying Glass by Icons8"
        className="w-8 h-auto absolute right-4 top-1/2 transform -translate-y-1/2"
      />
    </section>
  );
}
