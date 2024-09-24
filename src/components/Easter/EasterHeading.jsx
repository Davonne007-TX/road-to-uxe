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
        <section className="flex flex-row justify-center items-center p-4 md:justify-between lg:justify-between font-serif">
          <h1 className="text-3xl lg:text-5xl ml-4 cursor-pointer">
            Lincoln Elementary
          </h1>

          <nav>
            <ul className=" hidden md:flex lg:flex flex-col md:flex-row lg:flex-row gap-10 mr-4 lg:ml-20 lg:mt-4 text-lg cursor-pointer">
              {navigationList.map((navigation, index) => (
                <a href="" key={index}>
                  <li>{navigation.name}</li>
                </a>
              ))}
            </ul>
          </nav>
        </section>
      </header>
    </>
  );
}
