import SecondHeading from "./SecondHeading";
import Easter from "./Easter";

export default function Bunny() {
  const navigationList = [
    { name: "About" },
    { name: "Academics" },
    { name: "Students and Family" },
    { name: "Avid" },
  ];
  return (
    <>
      <main className="bg-white h-screen">
        <header className="flex bg-pink-200 p-2">
          <div className="flex flex-row mt-4 font-serif">
            <h1 className=" text-3xl lg:text-5xl ml-4 cursor-pointer">
              Lincoln Elementary
            </h1>

            <nav>
              <ul className="flex flex-row gap-10 ml-10 lg:ml-20 lg:mt-4 text-lg cursor-pointer">
                {navigationList.map((navigation, index) => (
                  <li key={index}>{navigation.name}</li>
                ))}
              </ul>
            </nav>
          </div>
        </header>
        <SecondHeading />
        <section className="flex flex-col mb-10">
          <Easter
            title="Easter Egg Hunt Friday March 29th"
            src="/images/hunt.jpg"
            alt="Children with Eater Egg Baskets and Easter Eggs"
            text="Consectetur purus ut faucibus pulvinar elementum integer enim. Pellentesque dignissim enim sit amet venenatis urna cursus. Fermentum et sollicitudin ac orci phasellus. Sem et tortor consequat id porta nibh venenatis cras. Id interdum velit laoreet id donec ultrices."
          />
          <Easter
            title="After School Arts & Crafts"
            src="/images/bunny.jpg"
            alt="Children with Eater Egg Baskets and Easter Eggs"
            text="Consectetur purus ut faucibus pulvinar elementum integer enim. Pellentesque dignissim enim sit amet venenatis urna cursus. Fermentum et sollicitudin ac orci phasellus. Sem et tortor consequat id porta nibh venenatis cras. Id interdum velit laoreet id donec ultrices."
          />
        </section>
      </main>
    </>
  );
}
