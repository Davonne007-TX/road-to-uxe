import Image from "../Journey/Image";

export default function WhichOne() {
  return (
    <>
      <main className="flex-time gap-10 bg-orange-200 min-h-screen">
        <h1 className="font-bold text-2xl md:text-5xl lg:text-5xl font-ber">
          Which place do you like better?
        </h1>
        <section className="flex-time md:flex-row lg:flex-row gap-8 mt-20 ">
          <Image
            src="/images/mcBuilding.jpg"
            className="max-w-xs md:max-w-md lg:max-w-3xl"
            alt="McDonalds Building, Photo by Shahbaz Ali on Unsplash"
          />
          <Image
            src="/images/wendysBuilding.jpg"
            className="max-w-xs md:max-w-md lg:max-w-3xl"
            alt="Wendys Building, Photo by Batu Gezer on Unsplash"
          />
        </section>
      </main>
    </>
  );
}
