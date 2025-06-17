import React from 'react'

const NavbarLinks = () => {
  return (
    <ul className="hidden sm:flex font-medium text-md space-x-8">
      <li className="hidden sm:block"><a href="#" className="hover:text-blue-500">Home</a></li>
      <li className="hidden sm:block"><a href="#" className="hover:text-blue-500">About</a></li>
      <li className="hidden sm:block"><a href="#" className="hover:text-blue-500">Contact</a></li>
    </ul>
  );
};

export default NavbarLinks;
