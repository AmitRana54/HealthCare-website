import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full  h-32  ">
      <nav className="  m-auto h-full w-[87%]   flex items-center justify-between">
        <div className="logo  w-32 h-full flex items-center justify-center ">
          <Link to="/"> logo deepak </Link>
        </div>
        <div className="flex gap-6  ">
          <ul className=" flex items-center gap-7 text-center font-bold text-xl ">
            <li className="   hover:underline decoration-2">
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link className="   hover:underline decoration-2" to="/services">
                Our services
              </Link>
            </li>

            <li>Contacts us</li>
            <li> About us </li>
          </ul>
          <button className="p-2 bg-green-500 rounded-lg ">
            <Link to="/book"> BookNow </Link>
          </button>
        </div>
      </nav>
    </header>
  );
}
