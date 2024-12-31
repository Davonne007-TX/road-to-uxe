export default function XHeader() {
  const listItems = [
    { navLink: "Job Search", id: 1 },
    { navLink: "Referrals", id: 2 },
    { navLink: "Submitted Applications", id: 3 },
    { navLink: "For Businesses", emphasis: "New", id: 4 },
  ];

  return (
    <nav className="text-white text-4xl flex gap-20 font-bold p-4 list-none">
      X
      {listItems.map((item) => (
        <>
          <li key={item.id} className="text-lg mt-2">
            {item.navLink}
            {item.emphasis && (
              <span className="text-white ml-4 bg-purple-600 p-2 rounded-xl">
                {item.emphasis}
              </span>
            )}
          </li>
        </>
      ))}
    </nav>
  );
}
