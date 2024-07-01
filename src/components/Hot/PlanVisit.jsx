import MyCalender from "../MyCalender";
import Button from "../Button";

export default function PlanVisit() {
  return (
    <section className="flex flex-col md:flex-row lg:flex-row">
      <MyCalender />
      <Button
        label="Book Today"
        color="bg-blue-600"
        className="text-white rounded-full mt-8 md:mt-40 lg:mt-40 font-bold w-40 h-10 ml-10 p-2 "
      />
      <Button
        label="Plan Visit"
        color="bg-blue-600"
        className="text-white rounded-full mt-8 md:mt-40 lg;mt-40 font-bold w-40 h-10 ml-10 "
      />
    </section>
  );
}
