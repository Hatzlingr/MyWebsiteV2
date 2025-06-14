import React, { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava } from 'react-icons/fa';
import { motion } from 'framer-motion';

const skills = [
  {
    icon: FaHtml5,
    color: 'text-orange-600',
    name: 'HTML',
    detail: 'Familiar with semantic structure, accessibility, and SEO best practices.',
  },
  {
    icon: FaCss3Alt,
    color: 'text-blue-600',
    name: 'CSS',
    detail: 'Proficient in responsive design, Flexbox, Grid, and animations.',
  },
  {
    icon: FaJs,
    color: 'text-yellow-500',
    name: 'JavaScript',
    detail: 'Understand core JS concepts, DOM, async/await, and ES6+.',
  },
  {
    icon: FaReact,
    color: 'text-cyan-500',
    name: 'React',
    detail: 'Can build component-based UIs, use hooks, and manage state.',
  },
  {
    icon: FaJava,
    color: 'text-red-700',
    name: 'Java',
    detail: 'Familiar with OOP, Java syntax, and basic app building.',
  },
];

const FlipCard = ({ skill }) => {
  const [flipped, setFlipped] = useState(false);
  const Icon = skill.icon;

  return (
    <div
      className="w-full h-48 [perspective:1000px]"
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* Front */}
        <div className="absolute w-full h-full bg-white rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center justify-center [backface-visibility:hidden]">
          <Icon className={`${skill.color} text-4xl sm:text-5xl mb-3`} />
          <h3 className="text-sm font-semibold text-gray-800">
            {skill.name}
          </h3>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full bg-white rounded-xl shadow-md p-4 flex items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <p className="text-sm text-gray-600">{skill.detail}</p>
        </div>
      </motion.div>
    </div>
  );
};

const Skill = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-10">My Skills</h2>
      <div className="grid gap-6 grid-cols-2 md:grid-cols-3">
        {skills.map((skill, idx) => (
          <FlipCard key={idx} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skill;
