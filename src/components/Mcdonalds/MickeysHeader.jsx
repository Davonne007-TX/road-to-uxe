import { useState } from "react";
import TopHeader from "./TopHeader";
import Button from "../Button";

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
      <header className="flex justify-center items-center gap-4 w-full bg-gray-100 p-2 relative">
        <section className="flex items-center w-full lg:w-auto">
          <img
            src="/images/mickeysLogo.jpg"
            className="w-32 h-auto cursor-pointer"
            alt="Mcdonalds Restaurant Sign, Photo by iStrfry, Marcus on Unsplash"
          />
          <button
            className="lg:hidden text-3xl hover:text-red-700 z-50 mr-4 p-2"
            onClick={toggleNavBar}
          >
            ☰
          </button>
        </section>

        <section className="flex-time gap-8">
          <TopHeader />
          <nav
            className={`lg:flex gap-8 lg:gap-10 lg:mt-0 ${
              isMobileNavOpen
                ? "fixed inset-10 mt-20 p-4 flex flex-col mr-auto bg-gray-100 z-40"
                : "hidden"
            } lg:flex`}
          >
            {micksList.map((micksNav, id) => (
              <li
                key={id}
                className="hover:border-b-2 hover:border-red-700 text-md cursor-pointer"
              >
                {micksNav.navLink}
              </li>
            ))}
            <Button
              label="Order Now"
              color="bg-yellow-300 md:hidden lg:hidden rounded-xl px-4 py-2 text-black"
            />
          </nav>
        </section>
      </header>
    </>
  );
}
// <a target="_blank" href="https://icons8.com/icon/38275/medium-old">Medium Old</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
