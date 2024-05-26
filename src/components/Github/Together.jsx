export default function Together() {
  return (
    <>
      <section className=" flex flex-col gap-2 lg:gap-8 text-white font-serif justify-center items-center  mt-40">
        <h2 className=" text-2xl md:text-5xl lg:text-6xl">
          Build Together, Grow Together
        </h2>
        <p className="text-md text-center md:text-xl lg:text-2xl mt-2">
          Developers working together to gain experience and build something{" "}
          <div className="text-blue-500">awesome..!</div>
        </p>
      </section>

      <section className="flex flex-col justify-center items-center mt-10">
        <img
          src="/images/roadToUXE.png"
          alt="Github Project Road To UXE"
          className="md:max-w-3xl lg:max-w-7xl"
        />
      </section>
    </>
  );
}
