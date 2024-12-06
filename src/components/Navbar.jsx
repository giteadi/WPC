import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaBlog, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">WPC Solutions</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"><FaHome className="inline mr-1" /> Home</Link>
              <Link to="/blogs" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"><FaBlog className="inline mr-1" /> Blogs</Link>
              <Link to="/about" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"><FaInfoCircle className="inline mr-1" /> About</Link>
              <Link to="/contact" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"><FaEnvelope className="inline mr-1" /> Contact</Link>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={toggleSidebar} className="text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-1 rounded-md text-sm font-medium">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium" onClick={toggleSidebar}><FaHome className="inline mr-2" /> Home</Link>
            <Link to="/blogs" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium" onClick={toggleSidebar}><FaBlog className="inline mr-2" /> Blogs</Link>
            <Link to="/about" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium" onClick={toggleSidebar}><FaInfoCircle className="inline mr-2" /> About</Link>
            <Link to="/contact" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium" onClick={toggleSidebar}><FaEnvelope className="inline mr-2" /> Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

