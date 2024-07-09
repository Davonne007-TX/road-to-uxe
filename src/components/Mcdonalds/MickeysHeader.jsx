import { useState } from "react";

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
      <header className="flex justify-between items-center p-4 bg-gray-100 relative z-10">
        <img
          src="/images/mickeyLogo.jpg"
          className="w-32 h-auto"
          alt="Mickey's Logo"
        />
        <button
          className={`lg:hidden text-3xl hover:text-red-700 z-50 ${
            isMobileNavOpen ? "fixed top-4 right-4" : "absolute top-4 right-4"
          }`}
          onClick={toggleNavBar}
        >
          ☰
        </button>

        <section className="flex-col mt-4">
          <section className=" hidden lg:flex gap-10 list-none">
            <select className="rounded-2xl">
              <option selected>Languages</option>
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>Arabic</option>
              <option>Russian</option>
              <option>Mandarin Chinese</option>
              <option>Japanese</option>
            </select>
            <li>Sign Up For Emails</li>
            <li>Start Your Career</li>
          </section>
          <ul
            className={`lg:flex gap-8 lg:gap-10 mt-4 lg:mt-0 ${
              isMobileNavOpen
                ? "fixed inset-0 flex flex-col justify-center items-center bg-gray-100 z-40"
                : "hidden"
            } lg:flex`}
          >
            {micksList.map((micksNav, id) => (
              <li
                key={id}
                className="hover:font-bold hover:border-b-2 hover:border-red-700 text-xl p-4"
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
