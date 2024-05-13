export default function Heading() {
  return (
    <>
      <header className="flex flex-row justify-between items-center gap-40 absolute mt-10 text-white">
        <h1 className="text-8xl ml-20 font-rak">Prongs</h1>

        <nav>
          <ul className="flex flex-row justify-between items-center text-2xl mt-10 gap-20">
            <li>Menu</li>
            <li>About</li>
            <li>Locations</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
