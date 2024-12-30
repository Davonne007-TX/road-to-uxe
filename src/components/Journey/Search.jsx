import Top from "./Top";
import Button from "../Button";

export default function Search() {
  return (
    <>
      <main className="flex flex-col justify-start items-center h-screen bg-purple-400">
        <Top />
        <section className="relative mt-24 md:mt-40 ">
          <h1 className="text-7xl md:text-9xl lg:text-9xl text-white text-center p-8">
            Journey
          </h1>
          <input
            type="/search"
            className="w-full p-4 rounded outline-none"
            placeholder="Search"
          />{" "}
          <button type="submit">
            <img
              src="/images/magnifying-glass.png"
              alt="Global Search, Magnifying Glass by Icons8"
              className="max-w-md absolute transform -translate-y-1 right-1 bottom-6 "
            />
          </button>
        </section>

        <section className="flex gap-8">
          <Button label="Solar Storm 2024" className="journey-bts" />
          <Button label="I'm feeling motivated" className="journey-bts" />
        </section>
      </main>
    </>
  );
}
