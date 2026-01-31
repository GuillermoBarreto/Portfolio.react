import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
      <p className="mb-4">Email: <a href="guilleelias25@gmail.com" className="text-blue-500 hover:underline">guilleelias25@gmail.com</a></p>
      <p className="mb-4">
        LinkedIn: <a href="https://www.linkedin.com/in/guillermo-barreto-0034a9270/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GuillermoBarreto</a>
      </p>
      <p className="mb-4">
        GitHub: <a href="https://github.com/GuillermoBarreto" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Guillermo Barreto</a>
      </p>
      <a
        href="/resume.pdf"
        className="mt-4 inline-block px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Download Resume
      </a>
    </section>
  );
};

export default Contact;
