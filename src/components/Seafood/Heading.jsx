export default function Heading() {
  const links = [
    { name: "Menu" },
    { name: "About" },
    { name: "Locations" },
    { name: "Contact" },
  ];
  return (
    <>
      <header className="flex flex-row justify-between items-center gap-40 absolute mt-10 text-white">
        <h1 className="text-8xl ml-20 font-rak">Prongs</h1>

        <nav>
          <ul className="flex flex-row items-center text-2xl mt-10 gap-20">
            {links.map((link, index) => (
              <li key={index}>{link.name}</li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
