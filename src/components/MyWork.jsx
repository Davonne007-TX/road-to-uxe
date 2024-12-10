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
    { id: 12, text: "AI", link: "/future" },
    { id: 13, text: "Vacation Resort", link: "/summer" },
    { id: 14, text: "Mickey Dees", link: "/mickeyDees" },
  ];

  return (
    <>
      <section className="home-p mb-8 md:mb-8">
        <p>
          My year in a nutshell. This is my body of work for 2024. It has been a
          learning experience with React.js and Tailwind CSS with all the bugs
          and styling issues I ran into. There is definitely more to learn when
          it comes to design and clean code. There are many things I do not know
          about React.js but I do know how to get started.
        </p>
      </section>
      ß
      <nav className="grid grid-cols-1 md:grid-cols-3 lg:mt-4 text-teal lg:grid-cols-3 lg:flex-row gap-6 lg:gap-8 font-serif text-xl lg:text-2xl">
        {myWork.map((work, id) => (
          <li key={id} className="text-teal list-none">
            <Link to={work.link}>{work.text}</Link>
          </li>
        ))}
      </nav>
    </>
  );
}
