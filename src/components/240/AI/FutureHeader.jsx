import AIButtons from "./AIButtons";

export default function FutureHeader() {
  const navItems = [
    { name: "Past" },
    { name: "Present" },
    { name: "Future" },
    { name: "Risks" },
    { name: "Uncharted Territory" },
  ];
  return (
    <header className="text-white flex justify-center items-center md:gap-8 lg:gap-20 font-serif">
      <h1 className="text-6xl mt-10 font-ber">AI</h1>
      {navItems.map((items, index) => (
        <li
          key={index}
          className="hidden md:flex lg:flex mt-14 list-none text-2xl font-ber"
        >
          {items.name}
        </li>
      ))}

      <section className="mt-14 hidden md:flex lg:flex gap-4 text-lg font-ber">
        <AIButtons text="News" />
        <AIButtons
          text="Stay Updated"
          styles="bg-white text-black rounded-xl p-2 text-lg hover:bg-black hover:text-white hover:bg-opacity-60"
        />
      </section>
    </header>
  );
}
