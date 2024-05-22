import Input from "./Input";

export default function CodeHeader() {
  return (
    <header className="flex flex-row ml-10 text-white">
      <h1 className="font-ber text-3xl mt-10">Code Together</h1>
      <nav className="hidden lg:flex flex-row gap-10 list-none mt-12 font-serif ml-20">
        <li>Resources</li>
        <li>Peer Review</li>
        <li>Pair Programming</li>
        <li>Resume Review</li>
        <li>Profile Feedback</li>
        <li>LinkedIn Review</li>
      </nav>

      <Input />
    </header>
  );
}
