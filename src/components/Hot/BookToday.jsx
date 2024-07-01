import PlanVisit from "./PlanVisit";

export default function BookToday() {
  return (
    <>
      <section className="flex flex-col max-w-2xl md:max-w-2xl lg:max-w-4xl mt-20 md:mt-40 lg:mt-40">
        <h2 className=" text-white font-bold text-3xl md:text-5xl lg:text-5xl">
          Your Vacation Starts <span className="text-blue-600">Today</span>
        </h2>
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

        <PlanVisit />
      </section>
    </>
  );
}
