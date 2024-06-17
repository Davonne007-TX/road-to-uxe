import AIButtons from "./AIButtons";
import Cities from "./Cities";

export default function Now({ title, text }) {
  return (
    <main className="flex-time mt-20 md:mt-20 lg:mt-24 text-white">
      <section className="max-w-sm md:max-w-2xl lg:max-w-3xl mb-20 flex flex-col gap-10 bg-black bg-opacity-40 p-10 max-h-max ">
        {" "}
        <h2 className="text-3xl md:text-5xl lg:text-6xl text-center md:mr-auto lg:mr-auto font-ber">
          {title}
        </h2>
        <Cities />
        <p className="text-lg md:text-2xl lg:text-2xl -mt-4 ">{text}</p>
        <section className="flex gap-8">
          <AIButtons text="Learn More" styles="ai-buttons" />
          <AIButtons text="AI Blog" styles="ai-buttons" />
        </section>
      </section>
    </main>
  );
}
