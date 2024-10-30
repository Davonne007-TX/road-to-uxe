import footerSections from "./data/footerLinks.js";

export default function Footer() {
  return (
    <>
      <section className="mt-20">
        {footerSections.map((section, index) => (
          <section key={index}>
            <h3>{section.title}</h3>
            <ul>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>{link}</li>
              ))}
            </ul>
          </section>
        ))}
      </section>
    </>
  );
}
