import TopHeader from "../240/TopHeader";
import Card from "../240/Card";

export default function BlackPanther() {
  return (
    <>
      <main className="h-screen flex flex-col bg-[url('./images/red.jpg')] bg-cover">
        <TopHeader />
        <Card />
      </main>
    </>
  );
}
