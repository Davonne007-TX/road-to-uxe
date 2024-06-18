import React from "react";

export default function Hero() {
  return (
    <section className="flex-time h-screen">
      <img
        src="/images/memories.jpg"
        className="max-w-3xl lg:max-w-6xl relative mb-20"
      />
      <p className="absolute mb-80 lg:mb-60 -m-8 text-3xl lg:text-4xl font-serif text-pink-200 bg-black bg-opacity-75 p-4">
        Where memories are made
      </p>
    </section>
  );
}

// Photo by Caleb Oquendo:<a href=" https://www.pexels.com/photo/boy-running-in-the-hallway-3042432/">Pexels</a>
