import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
      <p className="mb-4">Email: <a href="mailto:your.email@example.com" className="text-blue-500 hover:underline">your.email@example.com</a></p>
      <p className="mb-4">
        LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">linkedin.com/in/yourprofile</a>
      </p>
      <p className="mb-4">
        GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">github.com/yourusername</a>
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
