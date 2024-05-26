import Button from "../Button";

export default function SignIn() {
  return (
    <>
      <section className="mt-4 flex gap-4 mr-4 font-ber ">
        <Button label="Sign In" />
        <Button
          label="Sign Up"
          className=" border-2 border-white p-2 rounded-xl hover:bg-gradient-to-r from-indigo-400 to-cyan-400"
        />
      </section>
    </>
  );
}
