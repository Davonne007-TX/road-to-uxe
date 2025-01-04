import footerSections from "./data/footerLinks.js";

export default function Footer() {
  return (
    <section className="mt-20 m-0 bg-black p-4">
      <section className="max-w-5xl ml-auto mr-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {footerSections.map((section) => (
          <section key={section.id} className="flex flex-col gap-2">
            <h3 className="font-bold text-yellow-400">{section.title}</h3>
            <ul>
              {section.links.map((link, index) => (
                <li key={link.id || index} className="text-white">
                  <a href="#" className="hover:underline">
                    {link.name || link}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </section>
    </section>
  );
}
