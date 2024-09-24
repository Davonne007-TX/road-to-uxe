import EasterHeading from "./EasterHeading";
import Hero from "./Hero";
import About from "./About";
import Easter from "./Easter";
import SecondHeading from "./SecondHeading";

export default function Bunny() {
  return (
    <>
      <main className="flex-time">
        <EasterHeading />
        <SecondHeading />
        <Hero />
        <About />
        <section className="flex flex-col gap-4 md:mt-4 lg:mt-20 mb-10">
          <Easter
            title="Easter Egg Hunt Friday March 29th"
            src="/images/hunt.jpg"
            alt="Children with Eater Egg Baskets and Easter Eggs, Photo from unsplash: by Gabe Pierce on Unsplash"
            text="Consectetur purus ut faucibus pulvinar elementum integer enim. Pellentesque dignissim enim sit amet venenatis urna cursus. Fermentum et sollicitudin ac orci phasellus. Sollicitudin tempor id eu nisl. Aenean et tortor at risus viverra adipiscing."
            moreText="At tempor commodo ullamcorper a lacus vestibulum. At augue eget arcu dictum varius duis at. Sollicitudin tempor id eu nisl. Aenean et tortor at risus viverra adipiscing. Vivamus at augue eget arcu dictum varius duis at consectetur."
          />
          <Easter
            title="CodeWiz, An After School Program To Learn To Code"
            src="/images/kidsCode.jpg"
            alt="Children Coding on Desktop Computers, Photo From unsplash: by Gustavo Fring"
            text="Consectetur purus ut faucibus pulvinar elementum integer enim. Pellentesque dignissim enim sit amet venenatis urna cursus. Fermentum et sollicitudin ac orci phasellus. Sem et tortor consequat id."
            moreText="Sollicitudin tempor id eu nisl. Aenean et tortor at risus viverra adipiscing. Vivamus at augue eget arcu dictum varius duis at consectetur. Sit amet est placerat in egestas erat imperdiet sed euismod."
          />
          <Easter
            title="Dedicated Teachers Hard Working Teachers"
            src="/images/teachers.jpg"
            alt="Male Teachers working at his desk in his classroom, Photo from unsplash: by Gustavo Jeswin Thomas"
            text="Consectetur purus ut faucibus pulvinar elementum integer enim. Pellentesque dignissim enim sit amet venenatis urna cursus. Fermentum et sollicitudin ac orci phasellus. Sem et tortor consequat id."
            moreText="Sollicitudin tempor id eu nisl. Aenean et tortor at risus viverra adipiscing. Vivamus at augue eget arcu dictum varius duis at consectetur. Sit amet est placerat in egestas erat imperdiet sed euismod."
          />
        </section>
      </main>
    </>
  );
}
