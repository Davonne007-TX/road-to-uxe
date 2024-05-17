import Button from "../Button";

export default function Easter({ src, title, text, alt }) {
  return (
    <>
      <main className="flex flex-col justify-center items-center mt-20">
        <article className="w-full md:max-w-4xl lg:max-w-7xl rounded-2xl p-6 text-black mb-20 lg:p-8 bg-white">
          <section className="flex flex-row gap-8 font-sans">
            <img src={src} className="max-w-sm :lg:max-w-xl" alt={alt} />
            <section className="flex flex-col gap-4">
              <h2 className="text-2xl lg:text-4xl font-serif mt-2">{title}</h2>
              <p>{text}</p>

              <Button
                label="See Event"
                className="bg-pink-300 max-w-xs mt-4 rounded-full font-serif text-2xl hover:text-white"
              />
            </section>
          </section>
        </article>
      </main>
    </>
  );
}
