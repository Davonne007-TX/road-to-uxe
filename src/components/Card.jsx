import Button from "./Button";

export default function Card({
  className,
  text,
  title,
  buttonColor,
  moreText,
}) {
  return (
    <section className="max-w-xs md:max-w-md lg:max-w-md ml-12 md:ml-20 lg:ml-40 mt-32 md:mt-40 lg:mt-48  text-white font-sans bg-black p-8 lg:p-4 bg-opacity-40">
      <h2 className="text-xl lg:text-5xl mb-10">{title}</h2>
      <p className={className}>{text}</p>
      <p className={className}>{moreText}</p>

      <Button
        label="Learn More"
        className="mt-10 p-4 md:text-xl lg:text-xl rounded-full"
        color={buttonColor}
      />
    </section>
  );
}
