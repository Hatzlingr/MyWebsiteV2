import React from "react";

const projects = [
  {
    title: "Number Converter",
    description: "Konversi angka ke biner, oktal, dan heksadesimal",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Portfolio Website",
    description: "Web personal untuk menampilkan karya dan informasi",
    tech: ["React", "Tailwind"],
  },
];

const Projects = () => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">My Projects</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg bg-gray-50 hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((item, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
