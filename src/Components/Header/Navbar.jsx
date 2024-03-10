import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-white text-gray-500 z-10 ">
      <nav className="container mx-auto h-full flex items-center justify-between pt-5 px-24 ">
        <div className="logo w-32 h-full flex items-center justify-center">
          <Link to="/">logo deepak</Link>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-7 text-center font-bold text-xl">
            <li className="hover:underline">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link  to="/services">
                Our services
              </Link>
            </li>

            <li><Link to='/Contactus'>Contact Us</Link>  </li>
            <li><Link to='/aboutus'> About us </Link>  </li>
          </ul>
          <button className="p-2 mb-2 bg-green-500 rounded-lg text-white font-bold ">
            <Link to="/book">Book Now</Link>
          </button>
        </div>
        <div className="md:hidden flex items-center ">
          <button className="text-white justify-between text-right ml-52 p-16 focus:outline-none" onClick={toggleMenu}>
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="gray"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="gray"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
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
              <Link to="/services" className="hover:underline" onClick={toggleMenu}>
                Our Services
              </Link>
            </li>
            <li>
              <Link to="/contactus" className="hover:underline" onClick={toggleMenu}>
                Contacts us
              </Link>
            </li>
            <li>
              <Link to="/aboutus" className="hover:underline" onClick={toggleMenu}>
                About us
              </Link>
            </li>
            <li>
              <Link to="/book" className="hover:underline p-2 bg-green-500 rounded-xl text-white font-bold" onClick={toggleMenu}>
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
