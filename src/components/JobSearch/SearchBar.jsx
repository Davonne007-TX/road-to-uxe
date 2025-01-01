import { useState } from "react";

export default function SearchBar() {
  const [inputtedSearch, setInputtedSearch] = useState("");

  const handleSubmit = () => {
    console.log("Search for:", inputtedSearch);
  };

  return (
    <div className="relative w-full max-w-md">
      <label>
        <img
          src="/images/search.png"
          alt="Searching Glass, Photo from:"
          className="w-6 h-6 absolute left-2 top-1/2 transform -translate-y-1/2"
        />
        <input
          type="search"
          value={inputtedSearch}
          onChange={(e) => setInputtedSearch(e.target.value)}
          className="bg-black text-white rounded-full pl-8 py-2 w-full"
          placeholder="Search Opportunities"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
        />
      </label>
    </div>
  );
}
