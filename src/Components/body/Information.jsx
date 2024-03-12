import React from "react";
import { Link } from "react-router-dom";

function Information() {
  return (
    <main className="min-h-screen flex flex-col lg:flex-row justify-center lg:justify-between items-center">
  <div className="details w-full lg:w-1/2 lg:mr-10 px-4 lg:px-10 py-8 lg:py-16 sm:py-28 text-center lg:text-left">
    <h1 className="text-lg lg:text-4xl font-bold mb-4 lg:mb-6">Quality Medical Care Delivered</h1>
    <h1 className="text-lg lg:text-4xl font-bold mb-4 lg:mb-6">At The <span className="text-lg lg:text-5xl font-bold text-orange-400 unde">Comfort of Your Home</span></h1>
    <p className="text-base lg:text-lg lg:px-0 px-4 font-normal">
      Aadesh Health Care delivers quality care with compassion. We bring quality medical care into our patients’ homes and aim to make primary healthcare not only more accessible but also more affordable and accountable to our patient’s needs.
    </p>
    <button className="p-4 mt-4 lg:mt-10 bg-green-600 rounded-md font-bold text-white">
      <Link to="/book">BOOK NOW</Link>
    </button>
  </div>
  <div className="imglogo p-10 lg:p-20 w-full lg:w-[40vw] flex justify-center order-first lg:order-none">
    <img
      className="h-[25rem] lg:h-[25rem] w-[25rem] lg:w-[25rem] rounded-full border-green-300 border-8 mt-16 lg:mt-0"
      src="https://medicrov.com/wp-content/uploads/2024/01/Untitled-design.png"
      alt=""
    />
  </div>
</main>

  );
}

export default Information;
