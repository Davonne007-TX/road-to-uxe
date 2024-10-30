import footerSections from "./data/footerLinks.js";

export default function Footer() {
  return (
    <>
      <section className="mt-20 m-0 bg-black p-4">
        <section className="max-w-5xl ml-auto mr-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {footerSections.map((section, index) => (
            <section key={index} className="flex flex-col gap-2">
              <h3 className="font-bold text-yellow-400">{section.title}</h3>

              <ul className="text-white">
                {section.links.map((link, linkIndex) => (
                  <>
                    <a href="" className="hover:underline">
                      <li key={linkIndex}>{link}</li>
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
