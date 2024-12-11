import Button from "./Button";

export default function Card({
  className,
  text,
  title,
  buttonColor,
  moreText,
}) {
  return (
    <section className="ml-12 max-w-xs md:max-w-3xl lg:max-w-2xl  mt-32 md:mt-40 lg:mt-48  text-white font-sans bg-black p-10 bg-opacity-40 mb-20">
      <h2 className="text-3xl md:text-4xl lg:text-5xl mb-10 ">{title}</h2>
      <p className={className}>{text}</p>
      <p className={className}>{moreText}</p>

      <Button
        label="Learn More"
        className="mt-10 p-2 md:text-xl lg:text-xl rounded-full hover:scale-110"
        color={buttonColor}
      />
    </section>
  );
}
