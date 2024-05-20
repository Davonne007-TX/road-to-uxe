import MyWork from "./MyWork";

export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-center items-center bg-[url('/images/road.jpg')] bg-cover h-screen">
        <h1 className="text-3xl md:text-6xl lg:text-7xl text-white font-ram">
          Road To UXE
        </h1>
        <p className="mt-5 text-teal text-2xl font-serif">
          Projects by: Davonne J. Vigil
        </p>
        <section className="flex flex-col justify-center items-center mt-20 mb-20 max-w-6xl lg:max-w-7xl p-8 bg-blue-200 bg-opacity-75 rounded-3xl">
          <MyWork />
        </section>
      </main>
    </>
  );
}
