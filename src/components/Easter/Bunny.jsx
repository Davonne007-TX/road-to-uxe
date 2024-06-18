import EasterHeading from "./EasterHeading";
import SecondHeading from "./SecondHeading";
import Hero from "./Hero";
import About from "./About";
import Easter from "./Easter";

export default function Bunny() {
  return (
    <>
      <main className="bg-white h-screen">
        <EasterHeading />
        <SecondHeading />
        <Hero />
        <About />
        <section className="flex flex-col mb-10">
          <Easter
            title="Easter Egg Hunt Friday March 29th"
            src="/images/hunt.jpg"
            alt="Children with Eater Egg Baskets and Easter Eggs, Photo by Gabe Pierce on Unsplash"
            text="Consectetur purus ut faucibus pulvinar elementum integer enim. Pellentesque dignissim enim sit amet venenatis urna cursus. Fermentum et sollicitudin ac orci phasellus. Sollicitudin tempor id eu nisl. Aenean et tortor at risus viverra adipiscing."
            moreText="At tempor commodo ullamcorper a lacus vestibulum. At augue eget arcu dictum varius duis at. Sollicitudin tempor id eu nisl. Aenean et tortor at risus viverra adipiscing. Vivamus at augue eget arcu dictum varius duis at consectetur."
          />
          <Easter
            title="CodeWiz, An After School Program To Learn To Code"
            src="/images/kidsCode.jpg"
            alt="Children Coding on Desktop Computers, Photo By Gustavo Fring"
            text="Consectetur purus ut faucibus pulvinar elementum integer enim. Pellentesque dignissim enim sit amet venenatis urna cursus. Fermentum et sollicitudin ac orci phasellus. Sem et tortor consequat id porta nibh venenatis cras. Id interdum velit laoreet id donec ultrices."
            moreText="Sollicitudin tempor id eu nisl. Aenean et tortor at risus viverra adipiscing. Vivamus at augue eget arcu dictum varius duis at consectetur. Sit amet est placerat in egestas erat imperdiet sed euismod. Sollicitudin tempor id eu nisl. Aenean et tortor at risus viverra adipiscing."
          />
        </section>
      </main>
    </>
  );
}

//First Image
// Photo by <a href="https://unsplash.com/@gaberce?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Gabe Pierce</a> on <a href="https://unsplash.com/photos/girl-in-green-jacket-playing-with-white-and-pink-plastic-balls-on-green-grass-field-during-2w46Lv6EYT4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

//Second Image
// Photo by Gustavo Fring: <a href="https://www.pexels.com/photo/kids-in-a-computer-lab-5621945/">https://www.pexels.com/photo/kids-in-a-computer-lab-5621945/"</a>
