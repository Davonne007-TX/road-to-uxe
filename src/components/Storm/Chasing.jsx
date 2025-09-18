import Button from "../Button";

export default function Chasing() {
  return (
    <>
      <main className="flex flex-col justify-center items-center bg-[url('/images/tornado.jpg')] bg-cover h-screen ">
        <section className="flex flex-col justify-center items-center bg-black/10 p-4 rounded text-white max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-center ">
            Devin's Chasing
          </h1>
          <p className="text-xl lg:text-2xl mt-4 font-sans text-center">
            Get Your Cameras, get your GoPro. It is Tornado Chasing Season! Its
            time to grab our gear and chase storms. With our knowledge of
            storms, and weather tracking, we are able to be in the right spot
            when it comes to tornadoes. We aim to collect data in order to give
            it local officials and share to our social media pages.
          </p>
          <Button
            label="Live Stream"
            className="bg-white  text-black p-2 rounded-full hover:scale-110 text-lg mt-4 font-serif"
          />
        </section>
      </main>
    </>
  );
}
