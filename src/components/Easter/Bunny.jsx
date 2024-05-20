import EasterHeading from "./EasterHeading";
import SecondHeading from "./SecondHeading";
import About from "./About";
import Easter from "./Easter";

export default function Bunny() {
  return (
    <>
      <main className="bg-white h-screen">
        <EasterHeading />
        <SecondHeading />
        <About />
        <section className="flex flex-col mb-10">
          <Easter
            title="Easter Egg Hunt Friday March 29th"
            src="/images/hunt.jpg"
            alt="Children with Eater Egg Baskets and Easter Eggs"
            text="Consectetur purus ut faucibus pulvinar elementum integer enim. Pellentesque dignissim enim sit amet venenatis urna cursus. Fermentum et sollicitudin ac orci phasellus. Sollicitudin tempor id eu nisl. Aenean et tortor at risus viverra adipiscing."
            moreText="At tempor commodo ullamcorper a lacus vestibulum. At augue eget arcu dictum varius duis at. Sollicitudin tempor id eu nisl. Aenean et tortor at risus viverra adipiscing. Vivamus at augue eget arcu dictum varius duis at consectetur."
          />
          <Easter
            title="After School Arts & Crafts"
            src="/images/bunny.jpg"
            alt="Children with Eater Egg Baskets and Easter Eggs"
            text="Consectetur purus ut faucibus pulvinar elementum integer enim. Pellentesque dignissim enim sit amet venenatis urna cursus. Fermentum et sollicitudin ac orci phasellus. Sem et tortor consequat id porta nibh venenatis cras. Id interdum velit laoreet id donec ultrices."
            moreText="Sollicitudin tempor id eu nisl. Aenean et tortor at risus viverra adipiscing. Vivamus at augue eget arcu dictum varius duis at consectetur. Sit amet est placerat in egestas erat imperdiet sed euismod. Sollicitudin tempor id eu nisl. Aenean et tortor at risus viverra adipiscing."
          />
        </section>
      </main>
    </>
  );
}
