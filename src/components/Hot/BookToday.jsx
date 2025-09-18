import PlanVisit from "./PlanVisit";

export default function BookToday() {
  return (
    <section className="flex flex-col bg-black/10 px-4 py-10 mt-10">
      <div className="w-full max-w-5xl mx-auto space-y-6 md:max-w-3xl">
        <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
          Your Vacation Starts <span className="text-blue-700">Today</span>
        </h2>

        <p className="text-white/90  md:text-2xl leading-relaxed">
          I think it’s time you need a vacation. Get away from work and spend a
          vacation with loved ones, and have a good time. Here at Paradise we
          offer the vacation of a lifetime.
        </p>

        <p className="text-white/90  md:text-2xl leading-relaxed">
          Spend your vacation here on the Island of Big Dreams. Where you can
          swim with dolphins, whales, and even sharks. Spend your time relaxing
          by the beach or see where Paradise leads you. We got it.
        </p>

        <PlanVisit />
      </div>
    </section>
  );
}
