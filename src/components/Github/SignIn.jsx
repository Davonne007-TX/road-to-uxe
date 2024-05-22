import Button from "../Button";

export default function SignIn() {
  return (
    <>
      <section className="mt-4 flex gap-4 mr-4 font-ber ">
        <Button label="Sign In" />
        <Button
          label="Sign Up"
          className=" border-2 border-black p-2 rounded-xl hover:bg-black hover:bg-opacity-20"
        />
      </section>
    </>
  );
}
