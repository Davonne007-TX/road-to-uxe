import Languages from "./Languages";
import Button from "../Button";

export default function TopHeader() {
  return (
    <section className="flex gap-4 lg:flex-row">
      <Languages />
      <Button
        label="Order Now"
        color=" hidden md:block bg-yellow-300 rounded-xl w-28 h-8 mt-4"
      />
    </section>
  );
}
