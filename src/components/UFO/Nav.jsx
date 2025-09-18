export default function Nav() {
  const navList = [
    { navLink: "Sightings", id: 1 },
    { navLink: "Reports", id: 2 },
    { navLink: "History", id: 3 },
    { navLink: "Documents", id: 4 },
  ];

  return (
    <>
      <section className="max-w-4xl mx-auto font-thin p-2 md:p-8">
        <nav className="flex items-center justify-center lg:justify-between gap-10 rounded-full bg-black bg-opacity-50 p-4">
          <h1 className="text-2xl md:text-3xl  text-white font-mic">
            Not Alone
          </h1>
          <ul className="hidden md:flex gap-6 list-none">
            {navList.map((list) => (
              <li
                key={list.id}
                className="cursor-pointer md:text-2xl text-white"
              >
                {list.navLink}
              </li>
            ))}
            🛸
          </ul>
        </nav>
      </section>
    </>
  );
}
