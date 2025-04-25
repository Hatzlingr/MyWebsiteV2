import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava } from 'react-icons/fa';

const skills = [
  {
    icon: <FaHtml5 className="text-orange-600 text-5xl" />,
    name: 'HTML',
    detail: 'Familiar with semantic structure and accessibility.',
  },
  {
    icon: <FaCss3Alt className="text-blue-600 text-5xl" />,
    name: 'CSS',
    detail: 'Able to create responsive and styled layouts.',
  },
  {
    icon: <FaJs className="text-yellow-500 text-5xl" />,
    name: 'JavaScript',
    detail: 'Understand basic logic, DOM manipulation, and ES6+.',
  },
  {
    icon: <FaReact className="text-cyan-500 text-5xl" />,
    name: 'React',
    detail: 'Know how to build component-based UIs with hooks.',
  },
  {
    icon: <FaJava className="text-red-700 text-5xl" />,
    name: 'Java',
    detail: 'Understand OOP principles and basic Java syntax.',
  },
];

const Skill = () => {
  return (
    <section className="py-12 bg-gray-50" id="skills">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">My Skills</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
            >
              <div className="flex justify-center mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {skill.name}
              </h3>
              <p className="text-gray-600 text-sm">{skill.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
