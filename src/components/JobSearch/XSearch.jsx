import Button from "../Button";

export default function XSearch() {
  return (
    <>
      <section className="flex flex-col justify-center items-center mt-40 md::mt-60 gap-10">
        <h1 className="text-white text-4xl md:text-5xl">X2Z Job Search</h1>
        <section className="ml-24 flex flex-col justify-center center items-center lg:flex-row gap-8">
          <input type="search" className="x-input" placeholder="Keywords" />
          <input type="search" className="x-input" placeholder="Location" />
          <Button
            label={"Search"}
            className={
              "text-white bg-purple-400 p-2 rounded-full w-full md::w-96 lg:w-28 font-bold"
            }
          />
        </section>
      </section>
    </>
  );
}
