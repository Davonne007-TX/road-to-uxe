export default function SodaCan({ src, title, text }) {
  return (
    <>
      <section className="bg-white rounded-2xl max-w-xs md:max-w-2xl lg:max-w-sm ">
        <img
          src={src}
          className="rounded-t-2xl max-w-xs md:max-w-2xl lg:max-w-sm"
        />
        <section className="flex flex-col gap-4 mt-4 p-4">
          <h2>{title}</h2>
          <p>{text}</p>
        </section>
      </section>
    </>
  );
}
