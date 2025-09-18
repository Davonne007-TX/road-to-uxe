export default function Card() {
  return (
    <section className="p-10 rounded-2xl font-serif md:mt-80 lg:mr-20 text-white max-w-xs md:max-w-3xl lg:max-w-4xl bg-black bg-opacity-20">
      <h2 className="text-4xl lg:text-6xl mb-8">240sx Nissan Drift Cars</h2>
      <p className="md:text-2xl mb-4">
        I feel the need. The need for speed. Taking a drive in the Nissan 240sx
        never felt so good.
      </p>
      <p className="md:text-2xl">
        {" "}
        Here at Black Panther Lux, we have the cars that are in your dreams.
        Choose from our variety of drift cars and get the car of your dreams.
      </p>

      <button className="rounded-full bg-gray-400 p-2 hover:text-black max-w-xs mt-5 text-2xl">
        Shop Today
      </button>
    </section>
  );
}
