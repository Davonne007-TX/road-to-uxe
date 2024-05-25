import Input from "./Input";
import SignIn from "./SignIn";

export default function CodeHeader() {
  return (
    <header className="flex flex-row justify-between items-center text-white bg-blue-600 p-2">
      <h1 className="font-ber text-3xl ml-10 mt-4">Code Together</h1>
      <nav className="hidden lg:flex flex-row gap-10 list-none mt-4 font-serif ml-20">
        <li>GitHub</li>
        <li>Peer Review</li>
        <li>Pair Programming</li>
        <li>Resume Review</li>
        <li>Profile Feedback</li>
        <li>Projects</li>
      </nav>

      <Input />
      <SignIn />
    </header>
  );
}
