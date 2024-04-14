import Subscribe from "./Subscribe";

export default function Like() {
  return (
    <main className="h-screen flex flex-col bg-black text-neon font-ram">
      <section className="flex flex-col gap-10 justify-center items-center h-screen">
        <h1 className="text-5xl md:text-7xl lg:text-9xl items-center">
          Like The Video
        </h1>
        <p className="text-3xl md:text-6xl">Peace & Love Babea ✌🏼</p>

        <Subscribe />
      </section>
    </main>
  );
}
