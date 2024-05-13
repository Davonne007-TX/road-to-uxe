import Heading from "./Heading";

export default function Shrimp() {
  return (
    <main className="bg-[url('/images/prongs.jpg')] bg-cover h-screen">
      <Heading />

      <section className="flex flex-col justify-center items-center h-screen text-white gap-4">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-rak">
          All You Can Eat
        </h2>
        <p className="text-md md:text-2xl lg:text-4xl font-serif">
          From shrimp, lobster, to scallops, all you can eat seafood for $11.99!
        </p>
      </section>
    </main>
  );
}
