import AIButtons from "./AIButtons";

export default function FutureHeader() {
  const navItems = [
    { name: "Volutpa" },
    { name: "Posuere" },
    { name: "Cursus" },
    { name: "Augue" },
  ];
  return (
    <header className="text-white flex justify-center items-center font-serif gap-10 lg:gap-20">
      <h1 className="text-5xl mt-10 font-ber">Fermentum</h1>
      {navItems.map((items, index) => (
        <li
          key={index}
          className="hidden md:flex lg:flex mt-14 list-none text-2xl font-ber"
        >
          {items.name}
        </li>
      ))}

      <section className="mt-14 hidden md:flex lg:flex gap-4 text-lg font-ber">
        <AIButtons text="Sign Up" />
        <AIButtons
          text="Sign In"
          styles="bg-white text-black rounded-xl p-2 text-lg hover:bg-black hover:text-white hover:bg-opacity-60"
        />
      </section>
    </header>
  );
}
