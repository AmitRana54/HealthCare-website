import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/src/assets/Logo/logo.svg"


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white text-black-500 shadow-gray-900 z-10">
      <nav className="container mx-auto h-24 flex items-center justify-between px-4 md:px-8">
        <div className="logo mb-16 w-1/4 m-16 p-0 h-full flex items-center justify-start">
          <Link to="/">
            <img src={Logo} alt="" /> {/* Corrected image source path */}
          </Link>
        </div>
        <div className="md:hidden">
          <button className="text-gray-900 focus:outline-none" onClick={toggleMenu}>
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-7 text-center font-bold text-xl">
            <li className="hover:underline hover:underline-green-600">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:underline hover:underline-green-600">
              <Link to="/services">Our services</Link>
            </li>
            <li className="hover:underline hover:underline-green-600">
              <Link to="/contactus">Contact Us</Link>
            </li>
            <li className="hover:underline hover:underline-green-600">
              <Link to="/aboutus">About us</Link>
            </li>
          </ul>
          <button className="p-2 mb-2 bg-green-500 rounded-lg text-white font-bold">
            <Link to="/book">Book Now</Link>
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white text-gray-600 absolute top-16 left-0 w-full font-bold">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li>
              <Link to="/" className="hover:underline" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:underline sm:text-right md:text-left" onClick={toggleMenu}>
                Our Services
              </Link>
            </li>
            <li>
              <Link to="/contactus" className="hover:underline sm:text-right md:text-left" onClick={toggleMenu}>
                Contacts us
              </Link>
            </li>
            <li>
              <Link to="/aboutus" className="hover:underline sm:text-right md:text-left" onClick={toggleMenu}>
                About us
              </Link>
            </li>
            <li>
              <Link to="/book" className="hover:underline p-2 bg-green-500 rounded-xl sm:text-right md:text-left text-white font-bold" onClick={toggleMenu}>
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
