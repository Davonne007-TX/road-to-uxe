import TopHeader from "../240/TopHeader";
import Card from "../240/Card";

export default function BlackPanther() {
  return (
    <>
      <main className="flex flex-col bg-[url('./images/red.jpg')] bg-cover min-h-screen">
        <TopHeader />
        <section className="flex-time lg:ml-auto">
          <Card />
        </section>
      </main>
    </>
  );
}
