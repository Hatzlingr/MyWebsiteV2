import React, { useState, useEffect, useRef, useCallback } from 'react';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import Sidebar from './Sidebar';
import NavbarLinks from './NavbarLinks';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [navbarShow, setNavbarShow] = useState(true);
  const sidebarRef = useRef(null);
  const lastScrollY = useRef(0);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


 useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setNavbarShow(false);
      } else {
        setNavbarShow(true);
      }
      lastScrollY.current = window.scrollY;

      if (isSidebarOpen) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);

    };
  }, [isSidebarOpen]); 

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 shadow-md h-1/15 flex justify-end sm:justify-center items-center transition-transform duration-300 ${
          navbarShow ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <NavbarLinks />

        <button
          className="sm:hidden text-blue-600 mr-4"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          aria-label={isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
        >
          {isSidebarOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
        </button>
      </nav>

      <Sidebar
        isOpen={isSidebarOpen}
        sidebarRef={sidebarRef}
        toggleSidebar={setIsSidebarOpen}
      />
    </>
  );
};

export default Navbar;
