import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/src/assets/Logo/logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky sm:fixed top-0 left-0 w-full bg-white text-gray-700 shadow-gray-900 z-10">
      <nav className="container shadow-gray-900 mx-auto h-20 flex items-center justify-between px-4 md:px-8">
        <div className="w-44 md:w-72 sm:w-52 md:mt-10 mt-3 ml-4 lg:ml-8  sm:mt-10 sm:mb-12 h-full flex items-center">
          <Link to="/">
            <img className="h-auto" src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="md:hidden md:mr-0">
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
        <div className={`hidden md:flex items-center gap-6 ${isMenuOpen ? "flex flex-col" : ""}`}>
          <ul className="flex flex-col md:flex-row items-center gap-5 text-center font-bold text-xl">
            <li className="hover:underline hover:text-[#0D857B]">
              <Link to="/" >Home</Link>
            </li>
            <li className="hover:underline hover:text-[#0D857B]">
              <Link to="/services" >Our Services</Link>
            </li>
            <li className="hover:underline hover:text-[#0D857B]">
              <Link to="/contactus">Contact Us</Link>
            </li>
            <li className="hover:underline hover:text-[#0D857B]">
              <Link to="/aboutus" >About Us</Link>
            </li>
          </ul>
          <button className="p-2 mb-2 bg-[#0D857B] rounded-lg text-white font-bold">
            <Link to="/book">Book Now</Link>
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white text-gray-600 absolute top-16 left-0 w-full font-bold">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li>
              <Link to="/" className="hover:underline" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link to="/services" className="hover:underline" onClick={toggleMenu}>Our Services</Link>
            </li>
            <li>
              <Link to="/contactus" className="hover:underline" onClick={toggleMenu}>Contact Us</Link>
            </li>
            <li>
              <Link to="/aboutus" className="hover:underline" onClick={toggleMenu}>About Us</Link>
            </li>
            <li>
              <Link to="/book" className="hover:underline p-2 bg-[#0D857B] rounded-xl text-white font-bold" onClick={toggleMenu}>Book Now</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
