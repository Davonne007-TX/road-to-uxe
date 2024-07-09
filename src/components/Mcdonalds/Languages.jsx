export default function Languages() {
  return (
    <section className=" hidden lg:flex gap-10 mr-96 list-none cursor-pointer">
      <select className="rounded-2xl cursor-pointer">
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
  );
}
