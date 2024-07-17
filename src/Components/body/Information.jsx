import React from "react";
import { Link } from "react-router-dom";

function Information() {
  return (
    <main    className=" min-h-screen w-full flex flex-col"       >
      <div className="max-h-full flex flex-col  mt-14 lg:flex-row justify-center lg:justify-between items-center">
        <div className="details lg:ml-16 max-h-full lg:mb-12 mb-8   w-full lg:w-1/2 lg:mr-10 px-4 lg:px-5 py-8 lg:py-16 sm:py-28 text-center lg:text-left">
          <h1 className="text-lg lg:text-4xl font-bold mb-4 lg:mb-6">
            Quality Medical Care Delivered
          </h1>
          <h1 className="text-lg lg:text-4xl font-bold mb-4 lg:mb-6">
            At The{" "}
            <span className="text-lg sm:text-3xl lg:text-5xl font-bold text-[#FFC20F] unde">
              Comfort of Your Home
            </span>
          </h1>
          <p className="text-base lg:text-lg lg:px-0 px-4 font-normal">
            Aadesh Health Care delivers quality care with compassion. We bring
            quality medical care into our patients’ homes and aim to make
            primary healthcare not only more accessible but also more affordable
            and accountable to our patient’s needs.
          </p>
          <button className="p-4 mt-4 lg:mt-10 bg-[#0D857B] rounded-md font-bold text-white">
            <Link to="/book">BOOK NOW</Link>
          </button>
        </div>
        <div className="imglogo sm:mt-11 h-20rem w-20rem lg:h-[40vw] mb-1 lg:mb-12 p-3 lg:p-8 w-full lg:w-[40vw] flex justify-center order-first lg:order-none">
          <img
            className="h-[25rem] lg:h-[25rem] lg:mr-16  w-[25rem] lg:w-[25rem] rounded-full border-[#0D857B] border-8 mt-9gi lg:mt-0"
            src="https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
          />
        </div>
      </div>
      {/* <div  className="h-1 w-full bg-zinc-700"     ></div> */}
      <marquee behavior="scroll" className="text-2xl text-[#00456A] mb-3 capitalize md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center whitespace-nowrap mx-4" direction="left">
        {" "}
        Indian Health Care center, located in Rishikesh, provides exceptional medical care and compassionate service                                     {" "}
      </marquee>
      <div  className="h-1 w-full bg-black "     ></div>
    </main>
  );
}

export default Information;
