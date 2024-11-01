import Header from "./Header";
import Climate from "./Climate";
import UpcomingNews from "./UpcomingNews";

export default function Cola() {
  return (
    <>
      <main className="bg-gray-200">
        <section>
          <Header />
        </section>
        <section className="flex justify-center items-center">
          <img
            src="/images/coke.jpg"
            className="max-w-xs md:max-w-3xl lg:max-w-5xl rounded-3xl mt-20"
            alt="Coca-Cola in a can"
          />
        </section>

        <Climate />
        <UpcomingNews />
      </main>
    </>
  );
}
