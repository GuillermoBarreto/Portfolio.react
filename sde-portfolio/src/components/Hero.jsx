import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-50 via-white to-blue-50 text-center px-6 py-16">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-blue-500 font-semibold mb-4">
          Software Engineer
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Hi, I&apos;m Guillermo Barreto. I build reliable, user-centered
          software that helps teams move faster.
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          I&apos;m a full-stack engineer focused on shipping clean React
          interfaces, API integrations, and data-driven experiences. I&apos;m
          open to full-time roles and project collaborations.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-3 text-slate-700 rounded-md hover:text-slate-900 transition"
          >
            Let&apos;s Connect
          </a>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-500">
          <span>React • Node.js • Python • AWS</span>
          <span>San Antonio, TX • Open to remote</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
