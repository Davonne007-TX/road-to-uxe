import FutureHeader from "./FutureHeader";
import Now from "./Now";

export default function Future() {
  return (
    <>
      <main className="bg-[url('/images/robot.jpg')] bg-cover min-h-screen">
        <FutureHeader />
        <Now
          title="The Future is Here"
          text="Gravida in fermentum et sollicitudin ac orci phasellus. Convallis aenean et tortor at risus viverra. Nam aliquam sem et tortor consequat id porta nibh venenatis."
        />
      </main>
    </>
  );
}

//
