import SecondHeading from "./SecondHeading";

export default function EasterHeading() {
  const navigationList = [
    { name: "About" },
    { name: "Academics" },
    { name: "Students and Family" },
    { name: "Avid" },
  ];
  return (
    <>
      <header className="w-full bg-pink-200">
        <section className="flex flex-row justify-center items-center p-4 font-serif">
          <h1 className="text-3xl lg:text-5xl ml-4 cursor-pointer">
            Lincoln Elementary
          </h1>

          <nav>
            <ul className=" hidden md:flex lg:flex flex-col md:flex-row lg:flex-row gap-10 ml-10 text-lg cursor-pointer">
              {navigationList.map((navigation, index) => (
                <a href="" key={index}>
                  <li>{navigation.name}</li>
                </a>
              ))}
            </ul>
          </nav>
        </section>
        <SecondHeading />
      </header>
    </>
  );
}
