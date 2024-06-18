import Button from "../Button";

export default function Easter({ src, alt, title, text, moreText }) {
  return (
    <>
      <main className="flex flex-col justify-center items-center mt-10 text-black ">
        <article className="w-full max-w-xs md:max-w-2xl lg:max-w-6xl rounded-2xl p-6 lg:p-8 mb-4 bg-pink-200">
          <section className="flex flex-col lg:flex-row gap-4 font-sans">
            <img
              src={src}
              className="max-w-sm md:max-w-2xl lg:max-w-sm"
              alt={alt}
            />
            <section className="flex flex-col gap-4">
              <h2 className="text-2xl lg:text-4xl font-serif mt-2">{title}</h2>
              <p>{text}</p>
              <p>{moreText}</p>

              <Button
                label="Learn More"
                className="bg-white w-40 mt-4 rounded-full font-serif text-2xl hover:scale-105"
              />
            </section>
          </section>
        </article>
      </main>
    </>
  );
}
