import React from "react";

export default function Hero() {
  return (
    <section className="flex-time h-screen">
      <img
        src="/images/memories.jpg"
        alt="A little girl with a backpack skipping in school hallway, Photo From Unsplash by: Caleb Oquendo"
        className="max-w-3xl lg:max-w-6xl relative md:mt-20"
      />
      <p className="absolute mb-80 lg:mb-60 -m-8 text-3xl lg:text-4xl font-serif text-pink-200 bg-black bg-opacity-75 p-4">
        Where memories are made
      </p>
    </section>
  );
}
