import { Link, useNavigate } from "react-router-dom";

export default function TopHeader() {
  const links = [
    { name: "Nissan" },
    { name: "Turbo" },
    { name: "Exhaust Boost" },
    { name: "Shop" },
  ];

  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };

  return (
    <>
      <header className="text-gray-400 p-4 mt-8 flex flex-row justify-between items-center font-bold font-sans">
        <h1
          className="text-5xl font-rak cursor-pointer text-gray-400"
          onClick={goToHome}
        >
          Black Panther Lux.
        </h1>
        <ul className=" hidden lg:flex lg:flex-row gap-6 text-2xl mt-4">
          {links.map((link, index) => (
            <li key={index} className="hover">
              {link.name}
            </li>
          ))}
        </ul>

        <section className="mt-4 gap-10 text-2xl hidden lg:flex">
          <Link to="" className="hover">
            Contact
          </Link>
          <Link to="" className="hover">
            Locations
          </Link>
        </section>
      </header>
    </>
  );
}
