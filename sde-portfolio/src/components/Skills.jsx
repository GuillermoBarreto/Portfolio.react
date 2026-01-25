import React from "react";

const skills = ["Python", "Java", "JavaScript", "React", "Node.js", "SQL", "AWS", "Git"];

const Skills = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 border rounded-full bg-gray-100 hover:bg-blue-100 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
