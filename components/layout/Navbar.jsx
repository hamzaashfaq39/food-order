"use client"
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  // Handle dropdown toggle
  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Click outside handler to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // added 

  return (
    <nav className="sticky top-0 z-50 px-6 py-4 bg-white shadow-sm" ref={navRef}>
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <div className="mr-2 text-teal-500">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 0L36 18L18 36L0 18L18 0Z" fill="#0BC5D1" />
                <path d="M18 9L27 18L18 27L9 18L18 9Z" fill="white" />
              </svg>
            </div>
            <span className="text-xl font-semibold text-gray-800">Optimus Coders</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="items-center hidden space-x-8 md:flex">
          <a href="/" className="font-medium text-gray-800 hover:text-teal-500">HOME</a>

          <div className="relative">
            <button
              className={`flex items-center font-medium ${activeDropdown === 'services' ? 'text-teal-500' : 'text-gray-800 hover:text-teal-500'}`}
              onClick={() => toggleDropdown('services')}
            >
              SERVICES <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10 ${activeDropdown === 'services' ? 'block' : 'hidden'}`}>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-500">Web Development</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-500">Mobile Apps</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-500">UX/UI Design</a>
            </div>
          </div>

          <div className="relative">
            <button
              className={`flex items-center font-medium ${activeDropdown === 'industries' ? 'text-teal-500' : 'text-gray-800 hover:text-teal-500'}`}
              onClick={() => toggleDropdown('industries')}
            >
              INDUSTRIES <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'industries' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10 ${activeDropdown === 'industries' ? 'block' : 'hidden'}`}>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-500">Healthcare</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-500">Finance</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-500">Education</a>
            </div>
          </div>

          <a href="/cases" className="font-medium text-gray-800 hover:text-teal-500">CASES</a>

          <div className="relative">
            <button
              className={`flex items-center font-medium ${activeDropdown === 'insights' ? 'text-teal-500' : 'text-gray-800 hover:text-teal-500'}`}
              onClick={() => toggleDropdown('insights')}
            >
              INSIGHTS <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'insights' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10 ${activeDropdown === 'insights' ? 'block' : 'hidden'}`}>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-500">Blog</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-500">Case Studies</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-500">Whitepapers</a>
            </div>
          </div>

          <div className="relative">
            <button
              className={`flex items-center font-medium ${activeDropdown === 'about' ? 'text-teal-500' : 'text-gray-800 hover:text-teal-500'}`}
              onClick={() => toggleDropdown('about')}
            >
              ABOUT <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10 ${activeDropdown === 'about' ? 'block' : 'hidden'}`}>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-500">Our Story</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-500">Team</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-500">Careers</a>
            </div>
          </div>
        </div>

        {/* Contact Us Button */}
        <div>
          <a href="/contact" className="px-6 py-2 font-medium text-white transition-colors duration-300 bg-teal-500 rounded-full hover:bg-teal-600">
            Contact Us
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
          <button
            className="text-gray-800 hover:text-teal-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} pt-4`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="/" className="block px-3 py-2 font-medium text-gray-800 hover:bg-teal-50 hover:text-teal-500">HOME</a>

          <button
            className={`flex items-center w-full px-3 py-2 font-medium ${activeDropdown === 'mobile-services' ? 'text-teal-500 bg-teal-50' : 'text-gray-800 hover:bg-teal-50 hover:text-teal-500'}`}
            onClick={() => toggleDropdown('mobile-services')}
          >
            SERVICES <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'mobile-services' ? 'rotate-180' : ''}`} />
          </button>
          {activeDropdown === 'mobile-services' && (
            <div className="pl-6 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-500">Web Development</a>
              <a href="#" className="block px-3 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-500">Mobile Apps</a>
              <a href="#" className="block px-3 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-500">UX/UI Design</a>
            </div>
          )}

          <button
            className={`flex items-center w-full px-3 py-2 font-medium ${activeDropdown === 'mobile-industries' ? 'text-teal-500 bg-teal-50' : 'text-gray-800 hover:bg-teal-50 hover:text-teal-500'}`}
            onClick={() => toggleDropdown('mobile-industries')}
          >
            INDUSTRIES <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'mobile-industries' ? 'rotate-180' : ''}`} />
          </button>
          {activeDropdown === 'mobile-industries' && (
            <div className="pl-6 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-500">Healthcare</a>
              <a href="#" className="block px-3 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-500">Finance</a>
              <a href="#" className="block px-3 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-500">Education</a>
            </div>
          )}

          <a href="/cases" className="block px-3 py-2 font-medium text-gray-800 hover:bg-teal-50 hover:text-teal-500">CASES</a>

          <button
            className={`flex items-center w-full px-3 py-2 font-medium ${activeDropdown === 'mobile-insights' ? 'text-teal-500 bg-teal-50' : 'text-gray-800 hover:bg-teal-50 hover:text-teal-500'}`}
            onClick={() => toggleDropdown('mobile-insights')}
          >
            INSIGHTS <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'mobile-insights' ? 'rotate-180' : ''}`} />
          </button>
          {activeDropdown === 'mobile-insights' && (
            <div className="pl-6 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-500">Blog</a>
              <a href="#" className="block px-3 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-500">Case Studies</a>
              <a href="#" className="block px-3 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-500">Whitepapers</a>
            </div>
          )}

          <button
            className={`flex items-center w-full px-3 py-2 font-medium ${activeDropdown === 'mobile-about' ? 'text-teal-500 bg-teal-50' : 'text-gray-800 hover:bg-teal-50 hover:text-teal-500'}`}
            onClick={() => toggleDropdown('mobile-about')}
          >
            ABOUT <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'mobile-about' ? 'rotate-180' : ''}`} />
          </button>
          {activeDropdown === 'mobile-about' && (
            <div className="pl-6 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-500">Our Story</a>
              <a href="#" className="block px-3 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-500">Team</a>
              <a href="#" className="block px-3 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-500">Careers</a>
            </div>
          )}

          <div className="pt-2">
            <a href="/contact" className="block px-4 py-2 font-medium text-center text-white transition-colors duration-300 bg-teal-500 rounded-full hover:bg-teal-600">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;