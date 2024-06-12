import AIButtons from "./AIButtons";

export default function FutureHeader() {
  const navItems = [
    { name: "Volutpa" },
    { name: "Posuere" },
    { name: "Cursus" },
    { name: "Augue" },
  ];
  return (
    <header className="text-white flex justify-center items-center font-ber gap-10 lg:gap-20">
      <h1 className="text-5xl mt-10">Fermentum</h1>
      {navItems.map((items, index) => (
        <li
          key={index}
          className="hidden md:flex lg:flex mt-14 list-none text-2xl"
        >
          {items.name}
        </li>
      ))}

      <section className="mt-14 hidden md:flex lg:flex gap-4 text-lg">
        <AIButtons text="Sign Up" />
        <AIButtons
          text="Sign In"
          styles="bg-gray-600 rounded-xl p-2 text-lg hover:bg-black hover:opacity-90"
        />
      </section>
    </header>
  );
}
