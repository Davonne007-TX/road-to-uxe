import Button from "./Button";

export default function Card({ className, text, title, buttonColor }) {
  return (
    <section className="max-w-md mt-40 lg:mt-72 ml-20 lg:ml-40 text-white font-sans bg-black p-8 lg:p-4 bg-opacity-40">
      <h2 className="text-3xl lg:text-5xl mb-10">{title}</h2>
      <p className={className}>{text}</p>

      <Button
        label="Learn More"
        className="mt-10 p-4 text-xl rounded-full"
        color={buttonColor}
      />
    </section>
  );
}
