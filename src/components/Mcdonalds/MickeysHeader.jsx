import { useState } from "react";
import TopHeader from "./TopHeader";
import Button from "../Button";

export default function MickeysHeader() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleNavBar = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const closeNav = () => {
    setIsMobileNavOpen(false);
  };

  const micksList = [
    { navLink: "Menu", id: 1 },
    { navLink: "Mickeys App", id: 2 },
    { navLink: "Reward Program", id: 3 },
    { navLink: "Daily Deals", id: 4 },
    { navLink: "Mick Delivery", id: 5 },
    { navLink: "Locations", id: 6 },
    { navLink: "Our Mission", id: 7 },
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

        <section className="flex-time">
          <TopHeader />
          <nav
            className={`lg:flex gap-8  lg:gap-8 lg:mt-0 ${
              isMobileNavOpen
                ? "fixed inset-10 mt-20 p-2 flex flex-col mr-auto bg-gray-100 max-w-xs md:max-w-lg lg:max-w-sm"
                : "hidden"
            } lg:flex`}
          >
            {micksList.map((micksNav) => (
              <li
                key={micksNav.id}
                onClick={closeNav}
                className=" text-md mt-4 cursor-pointer list-none hover:text-red-500"
              >
                {micksNav.navLink}
              </li>
            ))}

            <Button
              label="Order Now"
              className="lg:hidden bg-yellow-300 rounded-lg p-2 font-bold w-60 h-10 hover:scale-95"
              onClick={closeNav}
            />
          </nav>
        </section>
      </header>
    </>
  );
}
