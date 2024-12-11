import MyWork from "./MyWork";

export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-center items-center bg-[url('/images/clouds.jpg')] bg-cover min-h-screen">
        <section className="flex-time">
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white mt-10 md:mt-4 font-caption">
            A Web Dev Journey
          </h1>

          <section className="flex flex-col justify-center items-center mt-10 md:mt-4 mb-10 max-w-xs md:max-w-3xl lg:max-w-7xl p-8 bg-white bg-opacity-75 rounded-2xl">
            <MyWork />
          </section>
        </section>
      </main>
    </>
  );
}
