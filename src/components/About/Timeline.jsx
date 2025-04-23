import React from 'react';
import { motion } from 'framer-motion';  // Corrected import for motion

const Timeline = () => {
  const education = [
    { year: "2021 - 2024", degree: "Teknik Jaringan Komputer dan Telekomunikasi", institution: "SMK Negeri 1 Jogonalan" },
    { year: "2024 - Present", degree: "Informatics Engineering", institution: "Sriwijaya University" },
  ];

  return (
    <div className="grid grid-cols-1 bg-amber-600 rounded p-6">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <div className="grid gap-4 grid-cols-1">
        {education.map((item, index) => (
          <motion.div
            key={index}
            className="border p-4 rounded-lg bg-gray-50 hover:shadow-md transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered effect
          >
            <h3 className="text-xl font-semibold">{item.degree}</h3>
            <p className="text-sm text-gray-600 mb-2">{item.institution}</p>
            <p className="text-sm text-gray-600">{item.year}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
