export default function Search({ type, placeholder, className }) {
  return (
    <section className="w-full relative">
      <label htmlFor="search">
        <img
          src="/images/magnifying-glass.png"
          alt="Global Search, Magnifying Glass by Icons8"
          className="max-w-sm h-8 absolute left-3 top-1/2 transform -translate-y-1/2  "
        />
        <input
          type={type}
          placeholder={placeholder}
          className={`pl-12 ${className}`}
        />
      </label>
    </section>
  );
}

// export default function Search({ type, placeholder, className }) {
//   return (
//     <section className="w-full relative">
//       <label htmlFor="search" className="flex items-center">
//         <img
//           src="/images/magnifying-glass.png"
//           alt="Global Search, Magnifying Glass by Icons8"
//           className="max-w-sm h-6 absolute left-3 top-1/2 transform -translate-y-1/2"
//         />
//         <input
//           id="search"
//           type={type}
//           placeholder={placeholder}
//           className={`pl-10 ${className}`}
//         />
//       </label>
//     </section>
//   );
// }
