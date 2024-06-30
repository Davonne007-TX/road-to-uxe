import Button from "../Button";

export default function BookToday() {
  return (
    <section className="flex flex-col max-w-2xl md:max-w-2xl lg:max-w-4xl ml-20 mt-60">
      <h1 className=" text-white font-bold text-3xl md:text-5xl lg:text-6xl">
        Your Vacation Starts <span className="text-blue-600">Today</span>
      </h1>
      <p className="text-white ml-2 text-2xl mt-4">
        Book today. Feugiat vivamus at augue eget arcu dictum varius duis at.
        Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend
        donec pretium.
      </p>

      <p className="text-white ml-2 text-2xl mt-4">
        Sapien pellentesque habitant morbi tristique senectus et netus et.
        Habitant morbi tristique senectus et netus et malesuada fames ac. Odio
        facilisis mauris sit amet.
      </p>

      <section className="flex gap-14">
        <Button
          label="Book Today"
          color="bg-blue-600"
          className=" text-white rounded-full p-2 mt-4 font-bold w-40"
        />
      </section>
    </section>
  );
}
