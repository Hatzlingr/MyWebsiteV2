import React, { useState, useRef, useEffect } from 'react';
import Button from '../Reusable/Button';

const Timeline = () => {
  const tabs = {
    education: [
      {
        title: 'Universitas Sriwijaya',
        year: '2024 - Present',
        details: 'Teknik Informatika',
      },
      {
        title: 'SMK Negeri 1 Jogonalan',
        year: '2021 - 2024',
        details: 'Teknik Jaringan Komputer dan Telekomunikasi',
      },
    ],
    experience: [
      {
        title: 'Internship at PT. Telkom Indonesia',
        year: '2023 - Present',
        details: 'Internship in Network Engineering',
      },
      {
        title: 'Freelance Web Developer',
        year: '2022 - Present',
        details: 'Developing websites for various clients',
      },
    ],
  };

  const [activeTab, setActiveTab] = useState('education');
  const [infoVisibleIndex, setInfoVisibleIndex] = useState(null);
  const containerRefs = useRef([]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        infoVisibleIndex !== null &&
        containerRefs.current[infoVisibleIndex] &&
        !containerRefs.current[infoVisibleIndex].contains(event.target)
      ) {
        setInfoVisibleIndex(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [infoVisibleIndex]); // We don't need to listen to containerRefs as it doesn't change

  return (
    <div className="flex flex-col p-6 bg-white w-full max-w-96 mx-auto">
      <div className="flex justify-center mb-4">
        <Button
          text="Education"
          onClick={() => setActiveTab('education')}
          styleClass={`rounded-none rounded-tl-2xl rounded-bl-2xl ${
            activeTab === 'education' ? 'bg-white text-blue-500' : ''
          }`}
        />
        <Button
          text="Experience"
          onClick={() => setActiveTab('experience')}
          styleClass={`rounded-none rounded-tr-2xl rounded-br-2xl ${
            activeTab === 'experience' ? 'bg-white text-blue-500' : ''
          }`}
        />
      </div>

      <div className="border-l border-blue-500  space-y-4 relative">
        {tabs[activeTab].map((item, index) => (
          <div
            key={index}
            ref={(el) => (containerRefs.current[index] = el)}
            className="p-4 relative"
          >
            <div className="absolute top-1/2 left-[-5px] w-3 h-3 bg-blue-500 rounded-full" />
            <h3 className="text-md sm:text-xl font-bold">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.year}</p>

            <button
              onClick={() =>
                setInfoVisibleIndex(infoVisibleIndex === index ? null : index)
              }
              className="text-sm text-blue-500 underline mt-2"
            >
              {infoVisibleIndex === index ? 'Hide Info' : 'Show Info'}
            </button>

            <div
              className={`absolute z-10 p-4 bg-blue-500 border rounded shadow top-full left-0 mt-2 w-64 transition-all duration-300 ease-in-out ${
                infoVisibleIndex === index
                  ? 'opacity-100 scale-100 visible'
                  : 'opacity-0 scale-95 invisible pointer-events-none'
              }`}
            >
              <p className="text-sm text-white">{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
