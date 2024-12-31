import footerSections from "./data/footerLinks.js";

export default function Footer() {
  return (
    <>
      <section className="mt-20 m-0 bg-black p-4">
        <section className="max-w-5xl ml-auto mr-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {footerSections.map((sections) => (
            <section key={sections.id} className="flex flex-col gap-2">
              <h3 className="font-bold text-yellow-400">{sections.title}</h3>

              <ul className="text-white">
                {sections.links.map((link) => (
                  <>
                    <a href="#" key={link.id} className="hover:underline">
                      <li>{link}</li>
                    </a>
                  </>
                ))}
              </ul>
            </section>
          ))}
        </section>
      </section>
    </>
  );
}
