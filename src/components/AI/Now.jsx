import AIButtons from "./AIButtons";

export default function Now({ title, text, image, alt }) {
  return (
    <main className="flex-time mt-10 md:mt-20 text-white">
      <section className="max-w-sm md:max-w-2xl lg:max-w-3xl mt-10 md:mt-0 flex flex-col gap-8 bg-black bg-opacity-40 p-10 max-h-max ">
        {" "}
        <h2 className="text-3xl md:text-5xl lg:text-6xl text-center md:mr-auto lg:mr-auto font-ber">
          {title}
        </h2>
        <img src={image} alt={alt} />
        <p className="text-lg md:text-2xl lg:text-2xl -mt-4">{text}</p>
        <section className="flex gap-8">
          <AIButtons text="Learn more" styles="ai-buttons" />
          <AIButtons text="Related articles" styles="ai-buttons" />
        </section>
      </section>
    </main>
  );
}
