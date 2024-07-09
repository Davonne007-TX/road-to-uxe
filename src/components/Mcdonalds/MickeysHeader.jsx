import { useState } from "react";
import TopHeader from "./TopHeader";

export default function MickeysHeader() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleNavBar = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
    a;
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
      <header className="flex justify-center gap-8 items-center w-full bg-gray-100 p-4 relative">
        <section className="flex items-caenter justify-center w-full lg:w-auto">
          <img
            src="/images/mickeysLogo.jpg"
            className="w-32 h-auto cursor-pointer"
            alt="Mcdonalds Restaurant Sign, Photo by iStrfry , Marcus on Unsplash"
          />
          <button
            className="lg:hidden text-3xl hover:text-red-700 z-50 mr-80 p-2  md:mr-auto"
            onClick={toggleNavBar}
            s
          >
            ☰
          </button>
        </section>

        <section className="flex-time gap-4">
          <TopHeader />

          <ul
            className={`lg:flex gap-8 lg:gap-10  lg:mt-0 ${
              isMobileNavOpen
                ? "fixed inset-10 mt-20 p-4 flex flex-col mr-auto bg-gray-100 z-40"
                : "hidden"
            } lg:flex`}
          >
            {micksList.map((micksNav, id) => (
              <li
                key={id}
                className="hover:border-b-2 hover:border-red-700 text-lg cursor-pointer "
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
