import Heading from "./Heading";
import Search from "./Search";
import Button from "../Button";

export default function Shrimp() {
  return (
    <main className="bg-[url('/images/prongs.jpg')] bg-cover h-screen">
      <Heading />

      <section className="flex flex-col justify-center items-center h-screen text-white gap-4">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-rak">
          All You Can Eat
        </h2>
        <p className="text-md md:text-2xl lg:text-3xl">
          From shrimp, lobster, to scallops, all you can eat seafood for $11.99
        </p>
        <p className="text-md md:text-2xl lg:text-3xl">
          {" "}
          Reserve your seating today!
        </p>
        <section className="flex gap-4 ">
          <Search
            type="search"
            placeholder="Search by city or zip code"
            className="w-full p-2 "
          />
          <Button
            label="Start Reserving"
            className="bg-orange-500 p-2 rounded-md text-md w-60 hover:text-black"
          />
        </section>
      </section>
    </main>
  );
}
