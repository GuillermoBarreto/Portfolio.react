import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-center p-4">
      <h1 className="text-5xl font-bold mb-4">Guillermo Barreto</h1>
      <p className="text-xl mb-6">Software Engineer | Portfolio</p>
      <h1 style={{ color: "red" }}>TEST</h1>
      <a
        href="#projects"
        className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        View My Projects
      </a>
    </section>
  );
};

export default Hero;
