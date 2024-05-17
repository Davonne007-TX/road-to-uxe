import Button from "../Button";

export default function Easter({ src, title, text, alt }) {
  return (
    <>
      <main className="flex flex-col justify-center items-center mt-20 text-black ">
        <article className="w-full md:max-w-3xl lg:max-w-5xl rounded-2xl p-6 lg:p-8 bg-pink-200">
          <section className="flex flex-col lg:flex-row gap-8 font-sans">
            <img src={src} className="max-w-sm :lg:max-w-xl" alt={alt} />
            <section className="flex flex-col gap-4">
              <h2 className="text-2xl lg:text-4xl font-serif mt-2">{title}</h2>
              <p>{text}</p>

              <Button
                label="See Event"
                className="bg-white w-40 mt-4 rounded-full font-serif text-2xl hover:text-white"
              />
            </section>
          </section>
        </article>
      </main>
    </>
  );
}
