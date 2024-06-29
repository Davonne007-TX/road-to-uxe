import { useState } from "react";
import Button from "../Button";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  //state for submitted email

  //email
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log("Email state:", e.target.value);
  };

  //subscribe

  return (
    <>
      <section className="flex flex-col lg:flex-row gap-8 mt-10">
        <label>
          <input
            type="text"
            placeholder="Enter e-mail address"
            value={email}
            onChange={handleEmailChange}
            className=" p-2 lg:p-4 rounded-lg w-96 lg:w-96 text-black !font-sans text-xl lg:text-2xl"
          />
        </label>

        <Button
          label="Subscribe"
          className="text-black bg-neon p-2 rounded-full lg:text-2xl hover:scale-110"
        />
      </section>
    </>
  );
}
