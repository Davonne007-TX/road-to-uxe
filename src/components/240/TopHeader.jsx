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
      <header className="text-white p-4 mt-8 flex flex-row justify-between items-center font-bold font-sans">
        <h1
          className="text-5xl text-red-600 font-rak cursor-pointer"
          onClick={goToHome}
        >
          Black Panther Lux.
        </h1>
        <ul className="text-white flex lg:flex-row gap-6 text-2xl mt-4">
          {links.map((link, index) => (
            <li key={index} className="hover">
              {link.name}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex gap-10 text-2xl ">
          <Link to="" className="hover">
            Contact
          </Link>
          <Link to="" className="hover">
            Locations
          </Link>
        </div>
      </header>
    </>
  );
}
