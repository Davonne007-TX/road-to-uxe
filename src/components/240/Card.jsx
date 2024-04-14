export default function Card() {
  return (
    <section className="flex flex-col ml-auto p-20 rounded-2xl font-serif mr-20 mt-40 text-white max-w-4xl  bg-black bg-opacity-80">
      <h2 className="text-6xl mb-8">240sx Nissan Drift Cars</h2>
      <p className="text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Dui vivamus arcu
        felis bibendum ut tristique et egestas quis. Eu lobortis elementum nibh
        tellus molestie nunc. Tristique senectus et netus et malesuada fames ac.{" "}
      </p>

      <button className="rounded-full bg-red-600 p-2 hover:text-black max-w-xs mt-5 text-2xl">
        Shop Today
      </button>
    </section>
  );
}
