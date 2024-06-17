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
      <main className="h-screen flex flex-col bg-cover bg-[url(/images/smoke.jpg)]">
        <Header title="Purple Shop" onClick={navigateToHome} />
        <Card
          title="Custom Design Vape Pens"
          text="In eu mi bibendum neque egestas. Nunc lobortis mattis aliquam faucibus. Mattis nunc sed blandit libero. Scelerisque purus semper eget duis. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer."
          buttonColor="bg-purple-600"
          className="text-xl"
        />
      </main>
    </>
  );
}
