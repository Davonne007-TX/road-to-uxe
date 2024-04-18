import SodaCard from "./SodaCard";

export default function Climate() {
  return (
    <>
      <section className="mt-10 flex flex-col justify-center items-center m-auto ">
        <h2 className="text-center text-3xl p-8 font-bold font-serif">
          Sustainability Efforts
        </h2>
        <section className="flex flex-col lg:flex-row gap-10">
          <SodaCard
            src="/images/windmills.png"
            alt="Windmills, Photo By Cayetano Gros, Lummi"
            title="Leading the way in Energy"
            text="Aliquet risus feugiat in ante metus dictum. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. In nibh mauris cursus mattis. Maecenas sed enim ut sem viverra. Pharetra convallis posuere morbi leo urna molestie. "
          />
          <SodaCard
            src="/images/solar.jpg"
            alt="Solar Panels, Photo By joao Guerreiro, Pexels"
            title="Leading the way in Energy"
            text="Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. In nibh mauris cursus mattis. Maecenas sed enim ut sem viverra. Pharetra convallis posuere morbi leo urna molestie. "
          />
        </section>
      </section>
    </>
  );
}
