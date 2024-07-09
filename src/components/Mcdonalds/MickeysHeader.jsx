import { useState } from "react";
import Languages from "./Languages";

export default function MickeysHeader() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleNavBar = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const micksList = [
    { navLink: "Menu", id: 0 },
    { navLink: "Mickeys App", id: 1 },
    { navLink: "Reward Program", id: 2 },
    { navLink: "Daily Deals", id: 3 },
    { navLink: "Mick Delivery", id: 4 },
    { navLink: "Locations", id: 5 },
    { navLink: "Our Mission", id: 6 },
  ];

  return (
    <>
      <header className="flex-time lg:flex-row gap-8 w-full bg-gray-100 p-4 relative z-10">
        <img
          src="/images/mickeysLogo.jpg"
          className="w-32 h-auto cursor-pointer"
          alt="Mcdonalds Restaurant Sign, Photo by iStrfry , Marcus on Unsplash"
        />
        <button
          className={`lg:hidden text-3xl hover:text-red-700 z-50 ${
            isMobileNavOpen ? "fixed top-4 right-4" : "absolute top-4 right-4"
          }`}
          onClick={toggleNavBar}
        >
          ☰
        </button>

        <section className="flex flex-col items-center gap-4">
          <Languages />
          <ul
            className={`lg:flex gap-8 lg:gap-10 lg:mt-0 ${
              isMobileNavOpen
                ? "fixed inset-0 flex flex-col justify-center items-center bg-gray-100 z-40"
                : "hidden"
            } lg:flex`}
          >
            {micksList.map((micksNav, id) => (
              <li
                key={id}
                className="hover:border-b-2 hover:border-red-700 text-lg cursor-pointer"
              >
                {micksNav.navLink}
              </li>
            ))}
          </ul>
        </section>
      </header>
    </>
  );
}
// <a target="_blank" href="https://icons8.com/icon/38275/medium-old">Medium Old</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
