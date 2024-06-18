import Heading from "./Heading";
import AllYouCanEat from "./AllYouCanEat";
import Search from "./Search";
import Button from "../Button";

export default function Shrimp() {
  return (
    <main className="bg-[url('/images/prongs.jpg')] bg-cover h-screen">
      <Heading />

      <section className="flex flex-col justify-center items-center h-screen text-white gap-4">
        <AllYouCanEat />

        <section className="flex flex-col md:flex-row gap-4 mt-4 ">
          <Search
            type="search"
            placeholder="Search by zip code"
            className="w-full p-2"
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
