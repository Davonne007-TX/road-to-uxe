import Heading from "./Heading";
import BookToday from "./BookToday";

export default function Summer() {
  return (
    <>
      <main className="flex bg-[url('/images/beach.jpg')] bg-cover min-h-screen flex-col ">
        <section className="ml-20 m-10">
          <Heading />
          <BookToday />
        </section>
      </main>
    </>
  );
}
