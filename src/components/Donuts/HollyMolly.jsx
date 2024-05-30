import DonutHeader from "./DonutHeader";
import AboutHollyMollyDonuts from "./aboutHollyMollyDonuts";

export default function HollyMolly() {
  return (
    <>
      <main className="bg-[url('./images/donut.jpg')] bg-cover min-h-screen">
        <section className="flex flex-col justify-center items-center m-0">
          <DonutHeader />
        </section>
      </main>
    </>
  );
}
