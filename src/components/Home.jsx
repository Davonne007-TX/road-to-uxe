import MyWork from "./MyWork";

export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-center items-center bg-[url('/images/road.jpg')] bg-cover min-h-screen">
        <section className="flex-time">
          <h1 className="mt-10 md:mt-0 lg:mt-0 text-3xl md:text-6xl lg:text-7xl text-white font-ram">
            Road To UXE
          </h1>

          <section className="flex flex-col justify-center items-center mt-10 lg:mt-20 mb-20 md:max-w-3xl lg:max-w-7xl p-8 bg-blue-200 bg-opacity-75 rounded-3xl">
            <MyWork />
          </section>
        </section>
      </main>
    </>
  );
}
