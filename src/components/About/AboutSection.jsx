import React from 'react';
import TimelineItem from './Timeline';
import { motion } from 'framer-motion';
import Skill from './Skill';

const AboutSection = () => {
  return (
    <section className="min-h-screen bg-white flex items-center px-6 md:px-16 py-12">
  <div className="flex flex-col md:flex-row md:justify-between items-start w-full max-w-6xl mx-auto gap-10">
    {/* Left Section */}
    <div className="w-full md:w-2/4">
      <Skill />
    </div>

    {/* Timeline Section */}
    <div className="w-full md:w-2/4">
      <TimelineItem />
    </div>
  </div>
</section>

  );
};

export default AboutSection;
