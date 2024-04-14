import Button from "../Button";

export default function Easter() {
  return (
    <>
      <main className="flex flex-col justify-center items-center mt-20">
        <article className="w-full md:max-w-4xl lg:max-w-7xl rounded-2xl p-6 text-black mb-20 lg:p-8 bg-white">
          <section className="flex flex-row gap-8 font-sans">
            <img
              src="/images/hunt.jpg"
              className="max-w-sm :lg:max-w-xl"
              alt="Kids Easter Egg Hunting, Photo by Gabe Pierce on Unsplash "
            />
            <section className="flex flex-col gap-4">
              <h2 className="text-2xl lg:text-4xl font-serif mt-2">
                Join Us For Annual Easter Egg Hunt
              </h2>
              <p>
                Diam vel quam elementum pulvinar. Donec et odio pellentesque
                diam volutpat. Quis lectus nulla at volutpat diam ut venenatis
                tellus. Sapien et ligula ullamcorper malesuada proin. Lacinia
                quis vel eros donec. Praesent tristique magna sit amet purus.
              </p>

              <Button
                label="See Event"
                className="bg-pink-300 max-w-xs mt-4 rounded-full font-serif text-2xl hover:text-white"
              />
            </section>
          </section>
        </article>
      </main>
    </>
  );
}
