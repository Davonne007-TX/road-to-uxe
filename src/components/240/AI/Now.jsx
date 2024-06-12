import AIButtons from "./AIButtons";

export default function Now({ title, text }) {
  return (
    <section className="flex-time mt-20 md:mt-20 lg:mt-40 text-white">
      <section className="max-w-3xl flex flex-col gap-10 bg-black bg-opacity-40 p-8">
        {" "}
        <h2 className="text-6xl font-ber">{title}</h2>
        <p className=" text-2xl">{text}</p>
        <AIButtons
          text="Start Today"
          styles="bg-white text-black rounded-full text-2xl font-ber w-40 hover:bg-black hover:text-white hover:bg-opacity-60"
        />
      </section>
    </section>
  );
}
