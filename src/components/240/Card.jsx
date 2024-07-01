export default function Card() {
  return (
    <section className="p-10 md:p-20 lg:p-20 rounded-2xl font-serif mt-40 lg:mr-20 text-white max-w-xs md:max-w-3xl lg:max-w-4xl bg-black bg-opacity-80">
      <h2 className="text-4xl lg:text-6xl mb-8">240sx Nissan Drift Cars</h2>
      <p className="text-xl mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Dui vivamus arcu.{" "}
      </p>
      <p className="text-xl">
        {" "}
        Felis bibendum ut tristique et egestas quis. Eu lobortis elementum nibh
        tellus molestie nunc. Tristique senectus et netus et malesuada fames ac.
      </p>

      <button className="rounded-full bg-gray-400 p-2 hover:text-black max-w-xs mt-5 text-2xl">
        Shop Today
      </button>
    </section>
  );
}
