export default function DonutHeader() {
  const donutLinks = [
    { page: "Menu" },
    { page: "Deals" },
    { page: "Careers" },
    { page: "Locations" },
  ];
  return (
    <header className=" text-pink-500 absolute mt-60 font-ber ">
      <h1 className=" text-6xl ml-10">Holly Molly Donuts</h1>

      <ul className="flex gap-20 mt-8 text-2xl cursor-pointer bg-white p-4 rounded-2xl">
        {donutLinks.map((link, index) => (
          <li key="index" className="hover:text-green-300">
            {link.page}
          </li>
        ))}
      </ul>
    </header>
  );
}
