export default function Header({ title, onClick }) {
  const myLinks = [
    { name: "About" },
    { name: "Shop" },
    { name: "Locations" },
    { name: "Contact" },
  ];

  return (
    <>
      <header className="flex flex-row justify-between mt-10">
        <h1
          className="text-white text-5xl md:text-5xl lg:text-7xl font-serif cursor-pointer ml-12"
          onClick={onClick}
        >
          {title}
        </h1>
        <nav>
          <ul className="hidden md:flex lg:flex flex-row gap-10 text-white mt-5 mr-20 text-xl lg:text-2xl font-serif">
            {myLinks.map((link, index) => (
              <li key={index}>{link.name}</li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
