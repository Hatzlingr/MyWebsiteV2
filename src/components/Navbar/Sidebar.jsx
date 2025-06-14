import React from 'react';

const Sidebar = ({ isOpen, sidebarRef, toggleSidebar }) => {
  return (
    <>
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full min-w-1/2 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="p-6 pt-20 flex flex-col gap-4 font-medium text-sm">
          <li><a href="#" className="hover:text-blue-500">Home</a></li>
          <li><a href="#" className="hover:text-blue-500">About</a></li>
          <li><a href="#" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 backdrop-blur-sm bg-white/30"
          onClick={() => toggleSidebar(false)} 
        ></div>
      )}
    </>
  );
};

export default Sidebar;
