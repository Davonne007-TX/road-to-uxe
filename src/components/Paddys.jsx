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
        text="Here at Paddys, we believe a great pub is more than just a place to drink, it’s a place to gather."
        moreText=" Inspired by the traditions of Ireland, we offer a cozy atmosphere, hearty laughs, and a tap list full of classics and local favorites. Whether you’re here for a quiet pint, live music, or a night with friends, you’ll always find good cheer waiting."
        className="text-2xl mt-5"
        buttonColor="bg-green-600"
      />
    </main>
  );
}
