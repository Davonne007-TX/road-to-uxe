import Button from "../Button";

export default function Subscribe() {
  return (
    <>
      <section className="flex flex-col lg:flex-row gap-8 mt-10">
        <label>
          <input
            type="text"
            placeholder="Enter e-mail address"
            className=" p-2 lg:p-4 rounded-2xl lg:w-96 text-black !font-sans text-xl lg:text-2xl"
          />
        </label>
        <Button
          label="Subscribe"
          className="text-black bg-neon p-2 rounded-full lg:text-2xl hover:scale-110"
        />
      </section>
    </>
  );
}
