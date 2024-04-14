import { Link } from "react-router-dom";

export default function TopHeader() {
  return (
    <section className="flex gap-60">
      <Link to="/linkedIn" className="text-white text-2xl font-bold">
        Linked<span className="text-black bg-white p-1">in</span>
      </Link>
    </section>
  );
}
