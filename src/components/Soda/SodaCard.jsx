import LearnMore from "./LearnMore";

export default function SodaCan({ src, title, text, alt }) {
  return (
    <>
      <section className="bg-white rounded-2xl max-w-xs md:max-w-2xl lg:max-w-sm ">
        <img
          src={src}
          className="rounded-t-2xl max-w-xs md:max-w-2xl lg:max-w-sm"
          alt={alt}
        />
        <section className="flex flex-col gap-4 mt-4 p-4">
          <h2 className="font-bold font-serif text-xl md:text-3xl lg:text-3xl">
            {title}
          </h2>
          <p className="text-md lg:text-xl">{text}</p>
          <LearnMore />
        </section>
      </section>
    </>
  );
}
