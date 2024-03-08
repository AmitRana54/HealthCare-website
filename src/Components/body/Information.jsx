import React from "react";

import { Link } from "react-router-dom";

function Information() {
  return (
    <main className="h-screen w-full flex justify-between  ">
      <div className="details  h-full w-1/2 py-32  px-10 gap-3 ">
        <h1 className="text-3xl font-bold ">Quality Medical Care Delivered</h1>
        <h1 className="text-3xl py-2 font-bold">
          {" "}
          At The Comfort of Your Home
        </h1>
        <p className="text-lg">
          Medicrov delivers quality care with compassion. We bring quality
          medical care into our patients’ homes and aim to make primary
          healthcare not only more accessible but also more affordable and
          accountable to our patient’s needs.
        </p>
        <button className="p-2 mt-10 bg-green-600 rounded-lg">
          <Link to="/book">BOOKNOW</Link>
        </button>
      </div>
      <div className="imglogo h-full w-[40vw]  flex items-start justify-center  mr-16">
        <img
          className="h-[30rem] w-[30rem] rounded-full  border-yellow-500 border-8 mr-16"
          src="https://medicrov.com/wp-content/uploads/2024/01/Untitled-design.png"
          alt=""
        />
      </div>
    </main>
  );
}

export default Information;
