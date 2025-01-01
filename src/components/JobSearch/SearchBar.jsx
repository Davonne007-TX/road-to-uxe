export default function SearchBar() {
  return (
    <>
      <label className="relative w-full max-w-md">
        <img
          src="/images/search.png"
          alt="Searching Glass, Photo from: "
          className="w-6 h-6 absolute left-2 top-1/2 transform -translate-y-2 ml-2 "
        />
        <input
          type="search"
          className="bg-black text-white rounded-full pl-8 py-2 w-full ml-2"
          placeholder="Search Jobs"
        />
      </label>
    </>
  );
}
