import AIButtons from "./AIButtons";
import Cities from "./Cities";

export default function Now({ title, text }) {
  return (
    <main className="flex-time mt-20 md:mt-24 lg:mt-24 text-white">
      <section className="max-w-sm md:max-w-2xl lg:max-w-3xl mb-20 flex flex-col gap-10 bg-black bg-opacity-40 p-10 max-h-max mt-10">
        {" "}
        <h2 className="text-3xl md:text-5xl lg:text-6xl text-center md:mr-auto lg:mr-auto font-ber">
          {title}
        </h2>
        <Cities />
        <p className="text-lg md:text-2xl lg:text-2xl">{text}</p>
        <section className="flex gap-8">
          <AIButtons
            text="Learn More"
            styles="bg-white text-black text-xl rounded-full text-2xl font-ber w-40 hover:bg-black hover:text-white hover:bg-opacity-60"
          />
          <AIButtons
            text="AI Blog"
            styles="bg-white text-black rounded-full text-xl md:text-2xl lg:text-2xl font-ber w-40 hover:bg-black hover:text-white hover:bg-opacity-60"
          />
        </section>
      </section>
    </main>
  );
}
