export default function Languages() {
  return (
    <section className=" hidden md:mr-80 lg:mr-48 mt-4 lg:flex lg:justify-center lg:items-center gap-10  list-none cursor-pointer">
      <select className="rounded-xl cursor-pointer text-sm w-31 h-10">
        <option value="Languages">Languages</option>
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
  );
}
