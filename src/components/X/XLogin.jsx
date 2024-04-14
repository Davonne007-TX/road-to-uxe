import Happening from "./Happening";

export default function XLogin() {
  return (
    <>
      <main className="bg-black h-screen flex flex-col justify-center">
        <section className="flex flex-row">
          <img src="/images/xLogo.jpg" alt="X Logo" className="w-32 lg:w-2/4" />
          <Happening />
        </section>
      </main>
    </>
  );
}
