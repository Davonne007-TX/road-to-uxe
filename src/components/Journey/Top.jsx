import Image from "./Image";

export default function Top() {
  return (
    <section className="w-full flex justify-end bg-white text-black p-2 font-serif text-xl">
      <ul className="list-none flex gap-10 mr-4 cursor-pointer">
        <Image src="/images/davonne.jpg" className="rounded-full" />
        <Image src="/images/apps.png" alt="Apps, Apps icon by Icons8" />
        <Image src="/images/flask.png" alt="Flask, Flask icon by Icons8" />
        <li className="hover:underline">G-mail</li>
        <li className="hover:underline">Photos</li>
      </ul>
    </section>
  );
}
