import Header from "./Header";
import SodaCard from "./SodaCard";

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
            className="max-w-2xl md:max-w-3xl lg:max-w-5xl rounded-3xl mt-20"
            alt="Coca-Cola in a can"
          />
        </section>

        <section className="mt-10 p-20">
          <h2 className="text-center text-3xl p-8 font-bold font-serif">
            Upcoming News
          </h2>
          <section className="flex flex-col justify-center items-center m-auto lg:flex-row gap-8">
            <SodaCard
              src="/images/business.jpg"
              alt="Coke In a Fridge, Image from Unsplash, Angelo Pantazis"
              title="Business Strategy 2024"
              text="Sit amet dictum sit amet justo donec enim diam. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Sit amet mauris commodo quis imperdiet. Enim diam vulputate ut pharetra sit amet aliquam id."
            />
            <SodaCard
              src="/images/cola.jpg"
              alt="Laptop and Coke, Image from Unsplash, Ylann Meyer"
              title="Coco-Cola is the new Coffee in Code"
              text="Sit amet dictum sit amet justo donec enim diam. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Sit amet mauris commodo quis imperdiet. Enim diam vulputate ut pharetra sit amet aliquam id."
            />
            <SodaCard
              src="/images/glassBottle.jpg"
              alt="Coke in a glass bottle, Image from Unsplash, Talles Alves"
              title="Classic Coke in a Bottle"
              text="Sit amet dictum sit amet justo donec enim diam. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Sit amet mauris commodo quis imperdiet. Enim diam vulputate ut pharetra sit amet aliquam id."
            />
          </section>
        </section>
      </main>
    </>
  );
}
