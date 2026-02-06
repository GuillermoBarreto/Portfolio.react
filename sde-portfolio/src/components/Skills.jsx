import React from "react";

function Skills() {
  const skillGroups = [
    {
      title: "Core",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
    },
    {
      title: "Frontend",
      skills: ["React", "Tailwind CSS", "HTML", "CSS"],
    },
    {
      title: "Backend & Cloud",
      skills: ["Node.js", "Express", "AWS", "Supabase"],
    },
    {
      title: "Workflow",
      skills: ["Git", "GitHub", "REST APIs", "Agile"],
    },
  ];

  return (
    <section id="skills" className="py-16 px-6 max-w-6xl mx-auto">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-bold mb-4">Skills & Tools</h2>
        <p className="text-slate-600 mb-10">
          I focus on shipping polished products end-to-end, from UX to backend
          integration and cloud deployment.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="border border-slate-100 rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold mb-4">{group.title}</h3>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-slate-100 rounded-full text-sm font-medium text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
