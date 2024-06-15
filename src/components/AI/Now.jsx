import AIButtons from "./AIButtons";

export default function Now({ title, text }) {
  return (
    <section className="flex-time mt-20 md:mt-20 lg:mt-40 text-white">
      <section className="max-w-xl md:max-w-2xl lg:max-w-3xl flex flex-col gap-10 bg-black bg-opacity-40 p-10 max-h-max">
        {" "}
        <h2 className="text-6xl font-ber">{title}</h2>
        <img
          src="/images/cities.jpg"
          alt="Blue Futuristic Cities, Image By benzoix on Freepik"
          className="max-w-2xl"
        />
        <a href="https://www.freepik.com/free-photo/global-business-internet-network-connection-iot-internet-things-business-intelligence-concept-busines-global-network-futuristic-technology-background-ai-generative_49395794.htm#fromView=search&page=2&position=3&uuid=73271e7d-5a78-4236-8232-a4f4be73ae80">
          Image by benzoix on Freepik
        </a>
        <p className=" text-2xl">{text}</p>
        <section className="flex gap-8">
          <AIButtons
            text="Learn More"
            styles="bg-white text-black rounded-full text-2xl font-ber w-40 hover:bg-black hover:text-white hover:bg-opacity-60"
          />
          <AIButtons
            text="AI Blog"
            styles="bg-white text-black rounded-full text-2xl font-ber w-40 hover:bg-black hover:text-white hover:bg-opacity-60"
          />
        </section>
      </section>
    </section>
  );
}
