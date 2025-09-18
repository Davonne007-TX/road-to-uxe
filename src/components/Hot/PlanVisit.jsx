import MyCalender from "../MyCalender";
import Button from "../Button";

export default function PlanVisit() {
  return (
    <section className="flex flex-col md:flex-row lg:flex-row mt-20">
      <MyCalender />
      <Button
        label="Book Today"
        color="bg-blue-700"
        className="resort-button"
      />
      <Button
        label="Plan Visit"
        color="bg-blue-700"
        className="resort-button"
      />
    </section>
  );
}
