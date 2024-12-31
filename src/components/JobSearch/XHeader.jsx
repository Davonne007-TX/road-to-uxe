export default function XHeader() {
  const listItems = [
    { navLink: "X", id: 1 },
    { navLink: "Job Search", id: 2 },
    { navLink: "Referrals", id: 3 },
  ];

  return (
    <nav className="text-white flex gap-20 font-bold p-4 list-none">
      {listItems.map((item) => (
        <li key={item.id}>{item.navLink}</li>
      ))}
    </nav>
  );
}
