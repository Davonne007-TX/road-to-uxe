import { Link } from "react-router-dom";

export default function RememberMe() {
  return (
    <>
      <section className="flex gap-4 mt-4 text-white">
        {/* <input
          type="checkbox"
          name="remember"
          value="Remember"
          className="input-color"
        />
        <p>
          Remember me.{" "}
          <Link to="" className="text-sky font-bold">
            Learn more
          </Link>
        </p> */}
        <p className="hover:bg-gray-800 inline-block p-2 font-bold rounded  text-sky ">
          Forgot Password?
        </p>
      </section>
    </>
  );
}
