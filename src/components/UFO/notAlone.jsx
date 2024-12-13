import Nav from "./Nav";

export default function NotAlone() {
  return (
    <main className="bg-[url('/images/ufo.png')] bg-cover min-h-screen text-white">
      <section>
        <Nav />
        <h2 className="text-white flex justify-center items-center mt-80 p-8 font-thin text-5xl">
          Coming to a town near you
        </h2>
      </section>
    </main>
  );
}
