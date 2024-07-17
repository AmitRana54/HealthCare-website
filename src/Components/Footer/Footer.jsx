import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function () {
  return (
    <footer className="bg-gray-800 text-white py-8 px-24">
      <div className="container mx-auto flex flex-wrap justify-between ">
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/3 mb-4">
          <h3 className="text-xl font-bold sm:text-left mb-4 md:text-left lg:text-3xl">Our Team</h3>
          <ul className="text-orange-500  text-xl">
            <li> Rahul Negi</li>
            <li>Ayush Rawat</li>
            <li>Jatin Singh Badoni</li>
            <li>Navjot Singh Sidhu</li>
            <li>Akash Chopda</li>
            
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/3 mb-4">
          <h3 className="text-xl font-bold mb-4 sm:text-left md:text-left lg:text-3xl         ">Our Services</h3>
          <ul className="text-orange-500  text-xl   list-disc   ">
            <li>ICU Care</li>
            <li>Skill Nursing</li>
            <li>Attendant</li>
            <li>Physiotherapist</li>
            <li>Japa Maid</li>
            <li>Cancer Patient</li>
            <li>Surgical Bed</li>
            <li>Suction Machine</li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4  lg:w-1/3 mb-4">
          <h3 className="text-xl font-bold mb-4 sm:text-left md:text-left lg:text-3xl      ">Contact Us</h3>
          <p>123 Health Street</p>
          <p>City, State ZIP</p>
          <p>Email: info@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 mb-4 flex justify-end">
          <h3 className="text-lg font-semibold mr-5  sm:text-left sm:text-sm   ">Follow Us</h3>
          <div className="flex items-center">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 transition duration-300 ease-in-out transform hover:scale-110"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 transition duration-300 ease-in-out transform hover:scale-110"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 transition duration-300 ease-in-out transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 ease-in-out transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
