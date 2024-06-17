import TopHeader from "./TopHeader";
import SignIn from "./SignIn";
import Form from "./Form";
import SignInButtons from "./SignInButtons";
import X from "./X";
import { useNavigate } from "react-router-dom";
import RememberMe from "./RememberMe";

export default function LinkedIn() {
  //use navigate
  const navigate = useNavigate();

  const goToNextPage = () => {
    navigate("/next");
  };
  return (
    <>
      <main className="flex flex-col min-h-screen bg-linkedIn">
        <span
          className="text-white ml-4 text-xl font-serif cursor-pointer hover:text-sky"
          onClick={goToNextPage}
        >
          Next
        </span>
        <section className="flex flex-col justify-start items-center mt-5">
          <div className="lg:border-2 border-white p-8 max-w-sm md:max-w-lg">
            <div className="flex gap-60">
              <TopHeader />
              <X />
            </div>
            <SignIn />

            <Form />
            <RememberMe />
            <SignInButtons />
          </div>
        </section>
      </main>
    </>
  );
}
