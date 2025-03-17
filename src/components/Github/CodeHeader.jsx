import Input from "./Input";
import SignIn from "./SignIn";

export default function CodeHeader() {

  const codeTogetherLinks = [
    {ourLinks: "Resouces", id: 1},
    {ourLinks: "Peer Review", id: 2},
    {ourLinks: "Pair Programming", id: 3},
    {ourLinks: "Github Resources", id: 4},
    {ourLinks: "Goals", id: 5},
    {ourLinks: "Projects", id: 6},    

  ]

  return (
    <header className="flex flex-col md:flex-row lg:flex-row justify-between items-center text-white bg-blue-600 p-2">
      <h1 className="font-ber text-4xl mt-4 md:mt-0 lg:mt-0 lg:ml-4">
        Code Together
      </h1>
      <nav className="hidden lg:flex flex-row gap-10 list-none mt-4 font-serif ml-8">
        <ul className="flex gap-8">
          {codeTogetherLinks.map((link) => (
            <li key={link.id}>{link.ourLinks}</li>
          ))}
        </ul>
      </nav>

      <Input />
      <SignIn />
    </header>
  );
}
