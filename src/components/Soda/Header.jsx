export default function Header() {
  const navLinks = [
    { name: "Flavors" },
    { name: "Products" },
    { name: "Explore" },
    { name: "Shop" },
  ];

  return (
    <header className="flex flex-row gap-40 text-black mt-2 font-thin bg-white p-4">
      <h1 className="text-4xl ml-20 lg:ml-80 font-ber">Coke-o-Cola</h1>
      <ul className=" hidden lg:flex flex-row gap-20 lg:gap-32">
        {navLinks.map((link, index) => (
          <li
            key={index}
            className="list-none mt-2 text-xl cursor-pointer hover:underline"
          >
            {link.name}
          </li>
        ))}
      </ul>
    </header>
  );
}
