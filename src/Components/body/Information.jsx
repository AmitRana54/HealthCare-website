import React from "react";
import { Link } from "react-router-dom";

function Information() {
  return (
    <main className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:items-start">
      <div className="details w-full lg:w-1/2 py-8 lg:py-32 px-4 lg:px-10 gap-3 text-center lg:text-left">
        <h1 className="text-2xl lg:text-3xl font-bold">Quality Medical Care Delivered</h1>
        <h1 className="text-2xl lg:text-3xl py-2 font-bold">At The Comfort of Your Home</h1>
        <p className="text-base lg:text-lg p-4 lg:p-6">
          Medicrov delivers quality care with compassion. We bring quality medical care into our patients’ homes and aim to make primary healthcare not only more accessible but also more affordable and accountable to our patient’s needs.
        </p>
        <button className="p-2 mt-4 lg:mt-10 bg-green-600 rounded-lg font-bold text-white">
          <Link to="/book">BOOK NOW</Link>
        </button>
      </div>
      <div className="imglogo p-20 m-10 w-full lg:w-[40vw] flex justify-center lg:justify-end mt-10 lg:mt-0 order-first lg:order-none">
        <img
          className="h-[20rem] lg:h-[30rem] w-[20rem] lg:w-[30rem] rounded-full border-green-300 border-8"
          src="https://medicrov.com/wp-content/uploads/2024/01/Untitled-design.png"
          alt=""
        />
      </div>
    </main>
  );
}

export default Information;
