import TopHeader from "../240/TopHeader";
import Card from "../240/Card";

export default function BlackPanther() {
  return (
    <>
      <main className="flex flex-col bg-cover min-h-screen bg-[url('/images/black.jpg')] ">
        <TopHeader />
        <section className="flex-time lg:ml-auto">
          <Card />
        </section>
      </main>
    </>
  );
}

// Photo by <a href="https://unsplash.com/@vizls?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Chris Demers</a> on <a href="https://unsplash.com/photos/black-sedan-parked-near-building-AABwA6rrWmE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
