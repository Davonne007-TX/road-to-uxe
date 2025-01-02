import { useState } from "react";
import Button from "../Button";

export default function XSearch() {
  const [keywords, setKeywords] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    console.log("Keywords:", keywords);
    console.log("Location:", location);
  };
  return (
    <>
      <section className="flex flex-col justify-center items-center mt-28 md:mt-40 lg:mt-60 gap-10">
        <h1 className="text-white text-4xl md:text-5xl font-caption">
          X2Z Job Search
        </h1>
        <div className="md:ml-24 flex flex-col justify-center center items-center lg:flex-row gap-8">
          <input
            type="search"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            className="x-input"
            placeholder="Keywords"
          />
          <input
            type="search"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="x-input"
            placeholder="Location"
          />

          <Button
            label={"Search"}
            onClick={handleSearch}
            className={
              "text-white bg-pink-500 hover:scale-105 p-2 rounded-full w-full md::w-96 lg:w-28 font-bold"
            }
          />
        </div>
      </section>
    </>
  );
}
