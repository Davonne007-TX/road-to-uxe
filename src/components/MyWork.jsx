import { Link } from "react-router-dom";

export default function MyWork() {
  const myWork = [
    { id: 1, text: "St. Patrick's Day", link: "/st-patricks-day" },
    { id: 2, text: "Tobacco Shop", link: "/shop" },
    { id: 3, text: "LinkedIn Mobile Login", link: "/linkedIn" },
    { id: 4, text: "240sx Nissan", link: "/blackPanther" },
    { id: 5, text: "Peace and Love", link: "/like" },
    { id: 6, text: "Storm Chasers", link: "/chasing" },
    { id: 7, text: "Journey Search", link: "/search" },
    { id: 8, text: "Easter", link: "/easter" },
    { id: 9, text: "Coca Cola", link: "/cola" },
    { id: 10, text: "Restaurant", link: "/seafood" },
    { id: 11, text: "Code Together", link: "/together" },
    { id: 12, text: "Donut Shop", link: "/hollyMollyDonuts" },
  ];

  return (
    <nav className="grid grid-cols-1 md:grid-cols-2 lg:mt-4 text-teal lg:grid-cols-3 lg:flex-row gap-6 lg:gap-8 font-serif text-xl lg:text-2xl">
      {myWork.map((work, id) => (
        <li key={id} className="text-teal list-none">
          <Link to={work.link}>{work.text}</Link>
        </li>
      ))}
    </nav>
  );
}
