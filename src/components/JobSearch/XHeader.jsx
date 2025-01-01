import SearchBar from "./SearchBar";

export default function XHeader() {
  const listItems = [
    { navLink: "Job Search", id: 1 },
    { navLink: "Referrals", id: 2 },
    { navLink: "Submitted Applications", id: 3 },
    { navLink: "For Businesses", emphasis: "New", id: 4 },
  ];

  return (
    <nav className="text-white flex justify-center items-center text-4xl gap-10 font-bold list-none">
      <section className="flex justify-center items-center w-full gap-10 mt-3">
        <h1 className="text-center md:flex">X2Z</h1>
        {listItems.map((item) => (
          <>
            <ul className="hidden lg:flex ">
              <li
                key={item.id}
                className="text-sm hover:bg-black  hover:opacity-40"
              >
                {item.navLink}
                {item.emphasis && (
                  <span className="text-white bg-purple-400 p-1 rounded-xl mb-4 ml-2">
                    {item.emphasis}
                  </span>
                )}
              </li>
            </ul>
          </>
        ))}

        <SearchBar />
        <img
          src="/images/me.jpg"
          className="w-12 h-12 md:w-14 md:h-14 rounded-full"
        />
      </section>
    </nav>
  );
}
