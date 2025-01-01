import SearchBar from "./SearchBar";

export default function XHeader() {
  const listItems = [
    { navLink: "Resources", id: 1 },
    { navLink: "Referrals", id: 2 },
    { navLink: "Applications", id: 3 },
    { navLink: "Your Business", emphasis: "New", id: 4 },
  ];

  return (
    <header className="text-white font-caption flex justify-center items-center p-2  text-4xl gap-10 font-bold list-none">
      <nav className="flex justify-center items-center w-full gap-10 mt-3">
        <h1 className="text-center font-lobster md:flex">X2Z</h1>
        {listItems.map((item) => (
          <ul className="hidden lg:flex" key={item.id}>
            <li className="text-sm hover:bg-black hover:bg-opacity-25">
              {item.navLink}
              {item.emphasis && (
                <span className="text-white bg-pink-400 p-1 rounded-xl mb-4 ml-2">
                  {item.emphasis}
                </span>
              )}
            </li>
          </ul>
        ))}

        <SearchBar />
        <img
          src="/images/me.jpg"
          className="w-12 h-12 md:w-14 md:h-14 rounded-full"
        />
      </nav>
    </header>
  );
}
