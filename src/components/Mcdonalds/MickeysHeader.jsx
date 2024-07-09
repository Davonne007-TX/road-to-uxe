export default function MickeysHeader() {
  return (
    <>
      <header className="flex flex-row justify-center items-center gap-10 mt-10 font-thin cursor-pointer">
        <img src="/images/mickeyLogo.jpg" className="w-48 h-auto ml-10" />
        <section className="flex flex-col">
          <section className="flex gap-10 list-none">
            <select className="rounded-2xl">
              <option selected>Languages</option>
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>Arabic</option>
              <option>Russian</option>
              <option>Mandarin Chinese</option>
              <option>Japanese</option>
            </select>
            <li>Sign Up For Emails</li>
            <li>Start Your Career</li>
          </section>

          <ul className="flex gap-10 mt-6">
            <li className="bold-this">Menu</li>
            <li className="bold-this">Mickey's App</li>
            <li className="bold-this">Reward Program</li>
            <li className="bold-this">Daily Deals</li>
            <li className="bold-this">Mick Delivery</li>
            <li className="bold-this">Locations</li>
            <li className="bold-this">Our Mission</li>
          </ul>
        </section>
        <hr />
      </header>
    </>
  );
}
