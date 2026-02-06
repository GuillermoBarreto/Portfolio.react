import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Let&apos;s work together</h2>
          <p className="text-slate-600 mb-8">
            I&apos;m actively looking for software engineering opportunities.
            If you&apos;re hiring or want to collaborate on a project, I&apos;d
            love to connect.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="border border-slate-100 rounded-xl p-6 shadow-sm">
            <p className="text-sm text-slate-500 mb-2">Email</p>
            <a
              href="mailto:guilleelias25@gmail.com"
              className="text-blue-600 font-medium hover:text-blue-700"
            >
              guilleelias25@gmail.com
            </a>
          </div>
          <div className="border border-slate-100 rounded-xl p-6 shadow-sm">
            <p className="text-sm text-slate-500 mb-2">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/guillermo-barreto-0034a9270/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium hover:text-blue-700"
            >
              linkedin.com/in/guillermo-barreto
            </a>
          </div>
          <div className="border border-slate-100 rounded-xl p-6 shadow-sm">
            <p className="text-sm text-slate-500 mb-2">GitHub</p>
            <a
              href="https://github.com/GuillermoBarreto"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium hover:text-blue-700"
            >
              github.com/GuillermoBarreto
            </a>
          </div>
        </div>
        <div className="mt-10">
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
