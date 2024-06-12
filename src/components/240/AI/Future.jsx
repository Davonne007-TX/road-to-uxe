import FutureHeader from "./FutureHeader";
import Now from "./Now";

export default function Future() {
  return (
    <>
      <main className="bg-[url('/images/robot.jpg')] bg-cover h-screen">
        <FutureHeader />
        <Now
          title="Pellentesque"
          text="Gravida in fermentum et sollicitudin ac orci phasellus. Convallis aenean et tortor at risus viverra. Nam aliquam sem et tortor consequat id porta nibh venenatis."
        />
      </main>
    </>
  );
}
