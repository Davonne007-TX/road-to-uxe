import LinkedInButtons from "./LinkedInButtons";
import TextWithHR from "./TextWithHR";
import { FaApple } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

export default function SignInButtons() {
  return (
    <>
      <section className="mt-2">
        <LinkedInButtons
          label="Sign in"
          className="mb-10 bg-sky hover:bg-blue-200 rounded-full p-4 font-bold text-lg mt-4"
        />
        {/* <hr /> */}
        <TextWithHR />
        <div className="mt-4">
          <LinkedInButtons
            label="Sign in with Apple"
            className="sign-in-options"
            icon={<FaApple />}
          />
          <LinkedInButtons
            label="Sign in with Google"
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
            label="Sign in with a one-time link"
            className="sign-in-options"
            icon={<FaLink style={{ color: "black" }} />}
          />
        </div>
      </section>
    </>
  );
}
