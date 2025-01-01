import TopHeader from "./TopHeader";
import Agree from "./Agree";
import LinkedInButtons from "./LinkedInButtons";
import { FaApple } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

export default function Next() {
  return (
    <>
      <main className="flex flex-col items-center min-h-screen bg-linkedIn">
        <section className="lg:border-2 border-white mb-20 p-8 max-w-sm md:max-w-lg mt-10">
          <TopHeader />
          <img
            src="/images/people.jpg"
            alt="People Walking on the street"
            className="rounded-2xl max-w-xs md:max-w-sm mt-14"
          />

          <Agree />
          <LinkedInButtons
            label="Agree & Join"
            className=" bg-sky hover:bg-blue-200 rounded-full p-4 font-bold text-lg mt-5"
          />
          <LinkedInButtons
            label="Continue with Apple"
            className="sign-in-options"
            icon={<FaApple />}
          />
          <LinkedInButtons
            label="Continue with Google"
            className="sign-in-options"
            icon={
              <FaGoogle
                style={{
                  background: "linear-gradient(to right, red 50%, green 50%)",
                  padding: "2px",
                }}
              />
            }
          />
          <LinkedInButtons
            label="Sign in with one-time link"
            className="sign-in-options"
            icon={<FaLink />}
          />
          <span className="text-sky text-xl font-bold flex justify-center mt-4 cursor-pointer">
            Sign in
          </span>
        </section>
      </main>
    </>
  );
}
