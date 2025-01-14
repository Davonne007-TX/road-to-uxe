import { Link } from "react-router-dom";
import Welcome from "./Welcome";

export default function MyWork() {
  const myWork = [
    { id: 1, text: "St. Patrick's Day", link: "/st-patricks-day" },
    { id: 2, text: "Tobacco Shop", link: "/shop" },
    { id: 3, text: "LinkedIn Mobile Login", link: "/linkedIn" },
    { id: 4, text: "240sx Nissan", link: "/blackPanther" },
    { id: 5, text: "Peace and Love", link: "/like" },
    { id: 6, text: "Storm Chasers", link: "/chasing" },
    { id: 7, text: "Journey Search", link: "/search" },
    // { id: 8, text: "Easter", link: "/easter" },
    { id: 9, text: "Coca Cola", link: "/cola" },
    { id: 10, text: "Restaurant", link: "/seafood" },
    { id: 11, text: "Code Together", link: "/together" },
    { id: 12, text: "AI", link: "/future" },
    { id: 13, text: "Vacation Resort", link: "/summer" },
    { id: 14, text: "Mickey Dees", link: "/mickeyDees" },
    { id: 15, text: "UFO", link: "/ufo" },
    { id: 15, text: "X Clone: Job Search", link: "/XJobSearch" },
  ];

  return (
    <>
      <Welcome />
      <nav className="grid grid-cols-1 md:grid-cols-3  text-black lg:grid-cols-3 lg:flex-row gap-4 lg:gap-8 font-serif text-xl lg:text-2xl">
        {myWork.map((work) => (
          <li key={work.id} className="list-none">
            <Link to={work.link}>{work.text}</Link>
          </li>
        ))}
      </nav>
    </>
  );
}
