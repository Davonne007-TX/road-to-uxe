import Card from "./Card";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

export default function Shop() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <>
      <main className="min-h-screen flex flex-col bg-cover bg-[url(/images/smoke.jpg)]">
        <Header title="Purple Shop" onClick={navigateToHome} />
        <Card
          title="Custom Design Vape Pens"
          text="Great smoke is more than just a pastime, it’s an experience. We have fine tobacco and we offer a warm and welcoming space filled with premium cigars, hand-rolled selections, and quality accessories."
          moreText="Whether you’re here to explore new blends, relax with a familiar favorite, or simply enjoy the craft, you’ll always find knowledge, care, and good company waiting."
          buttonColor="bg-purple-600"
          className="text-xl p-2"
        />
      </main>
    </>
  );
}
