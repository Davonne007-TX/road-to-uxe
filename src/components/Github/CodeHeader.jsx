import Input from "./Input";
import SignIn from "./SignIn";

export default function CodeHeader() {
  return (
    <header className="flex flex-col md:flex-row lg:flex-row justify-between items-center text-white bg-blue-600 p-2">
      <h1 className="font-ber text-4xl mt-4 md:mt-0 lg:mt-0 lg:ml-4">
        Code Together
      </h1>
      <nav className="hidden lg:flex flex-row gap-10 list-none mt-4 font-serif ml-20">
        <li>Resources</li>
        <li>Peer Review</li>
        <li>Pair Programming</li>
        <li>Github Repo</li>
        <li>Goals</li>
        <li>Projects</li>
      </nav>

      <Input />
      <SignIn />
    </header>
  );
}
