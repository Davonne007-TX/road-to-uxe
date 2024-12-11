import Button from "../Button";

export default function Easter({ src, alt, title, text, moreText }) {
  return (
    <>
      <main className="mt-10 text-black ">
        <article className="w-full max-w-md md:max-w-2xl lg:max-w-6xl rounded-2xl p-8 mb-4">
          <section className="flex flex-col lg:flex-row gap-4 font-sans">
            <img
              src={src}
              className="max-w-sm md:max-w-2xl lg:max-w-xl"
              alt={alt}
            />
            <section className="flex flex-col gap-4">
              <h2 className="text-2xl lg:text-4xl font-serif mt-2">{title}</h2>
              <p>{text}</p>
              <p>{moreText}</p>

              <Button
                label="Learn More"
                className="bg-slate-600 text-white w-40 mt-4 font-serif text-md md:text-xl lg:text-2xl hover:scale-105 rounded-md"
              />
            </section>
          </section>
        </article>
      </main>
    </>
  );
}
