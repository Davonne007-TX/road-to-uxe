import SodaCard from "./SodaCard";

export default function UpcomingNews() {
  return (
    <>
      <main className="p-20">
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
      </main>
    </>
  );
}
