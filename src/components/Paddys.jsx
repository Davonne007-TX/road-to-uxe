import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Card from "./Card";

export default function Paddys() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <main className="min-h-screen flex flex-col bg-cover bg-[url(/images/beer.jpg)]">
      <Header title="Crafted" onClick={navigateToHome} />
      <Card
        title="Happy St. Patricks Day!"
        text="In eu mi bibendum neque egestas. Nunc lobortis mattis aliquam faucibus. Mattis nunc sed blandit libero."
        moreText="Scelerisque purus semper eget duis. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer."
        className="text-2xl mt-5"
        buttonColor="bg-green-600"
      />
    </main>
  );
}
