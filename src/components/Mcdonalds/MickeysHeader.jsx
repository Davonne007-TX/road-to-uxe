export default function MickeysHeader() {
  const micksList = [
    { navLink: "Menu", id: 0 },
    { navLink: "Mickeys App", id: 1 },
    { navLink: "Reward Program", id: 2 },
    { navLink: "Daily Deals", id: 3 },
    { navLink: "Mick Delivery", id: 4 },
    { navLink: "Locations", id: 5 },
    { navLink: "Our Mission", id: 6 },
  ];

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
            {micksList.map((micksNav, id) => (
              <li
                key={id}
                className="hover:font-bold hover:border-b-2 hover:border-red-700"
              >
                {micksNav.navLink}
              </li>
            ))}
          </ul>
        </section>
        <hr />
      </header>
    </>
  );
}
