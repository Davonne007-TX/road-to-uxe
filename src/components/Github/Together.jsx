export default function Together() {
  return (
    <>
      <section className=" flex flex-col gap-2 lg:gap-8 text-white font-serif justify-center items-center mt-20 md:mt-40 lg:mt-32">
        <h2 className=" text-2xl md:text-5xl lg:text-6xl">
          Build Together, Grow Together
        </h2>
        <p className="text-md text-center md:text-xl lg:text-2xl mt-2 p-2 md:p-0 lg:p-0">
          Developers working together to gain experience and build something{" "}
          <span className="text-blue-500">awesome..!</span>
        </p>
      </section>

      <section className="flex flex-col justify-center items-center mt-10">
        <img
          src="/images/roadToUXE.png"
          alt="Github Project Road To UXE"
          className="max-w-xs md:max-w-3xl lg:max-w-7xl lg:mb-40"
        />
      </section>
    </>
  );
}
