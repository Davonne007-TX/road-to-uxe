import { Link } from "react-router-dom";

export default function MyWork() {
  return (
    <nav className="grid grid-cols-1 md:grid-cols-2 text-teal lg:grid-cols-3 lg:flex-row gap-10 lg:gap-8 font-sans text-2xl p-8">
      <Link to="/st-patricks-day" className="hover:underline text-teal">
        St.Patrick's Day
      </Link>
      <Link to="/shop" className="hover:underline text-teal">
        Tobacco Shop
      </Link>
      <Link to="/linkedIn" className="hover:underline text-teal">
        LinkedIn Mobile Login
      </Link>
      <Link to="/blackPanther" className="hover:underline text-teal">
        240sx Nissan
      </Link>
      <Link to="/like" className="hover:underline text-teal">
        Peace and Love
      </Link>
      <Link to="/chasing" className="hover:underline text-teal">
        Storm Chasers
      </Link>
      <Link to="/login" className="hover:underline text-teal">
        X Login
      </Link>
      <Link to="/search" className="hover:underline text-teal">
        Search
      </Link>
      <Link to="/easter" className="hover:underline text-teal">
        Easter
      </Link>
      <Link to="/cola" className="hover:underline text-teal">
        Coca Cola
      </Link>
    </nav>
  );
}
