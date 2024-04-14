import Button from "../Button";

export default function Chasing() {
  return (
    <>
      <main className="flex flex-col justify-center items-center bg-[url('./images/tornado.jpg')] bg-cover h-screen ">
        <section className="flex flex-col justify-center items-center text-white max-w-5xl">
          <h1 className="text-6xl lg:text-8xl font-serif ">Devin's Chasing</h1>
          <p className="text-2xl lg:text-3xl mt-10 font-sans text-center">
            Nunc pulvinar sapien et ligula ullamcorper malesuada. Iaculis at
            erat pellentesque adipiscing commodo elit at imperdiet. Eu
            scelerisque felis imperdiet proin. Eget dolor morbi non arcu risus
            quis varius quam. At ultrices mi tempus imperdiet nulla.
          </p>
          <Button
            label="Stream Live"
            className="bg-white text-black p-2 rounded-full hover:scale-110 text-xl lg:text-2xl mt-4 font-serif"
          />
        </section>
      </main>
    </>
  );
}
