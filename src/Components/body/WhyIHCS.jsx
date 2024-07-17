import React from "react";

function WhyIHCS() {
  return (
    <div className="max-w-7xl mt-9  lg:mt-32 px-4 py-8">
      <h1 className="text-center text-[1.3rem] font-bold mb-2 mt-2 lg:text-4xl lg:mt-20 text-[#00446B] ">
        {" "}
        Why Indian Health Care Services
      </h1>
      <div className="grid grid-cols-1  lg:grid-rows-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <img
            src="https://images.pexels.com/photos/6129494/pexels-photo-6129494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="mx-auto h-24 w-24 mb-4"
          />
          <h2 className="text-center text-xl text-[#00446B] font-bold mb-2">
            Trained and Verified Nurses & Attendants
          </h2>
          <ul className="text-base text-gray-800 list-disc pl-4">
            <li>Background verification</li>
            <li>Recognized Onboarding & Training Programs</li>
            <li>Frequent on-the-job training</li>
            <li>Medical Interview</li>
          </ul>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <img
            src="https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="mx-auto h-24 w-24 mb-4"
          />
          <h2 className="text-center text-xl text-[#00446B] font-bold mb-2">
            Coordinated Care Giving & Management
          </h2>
          <ul className="text-base text-gray-800 list-disc pl-4">
            <li>Physician Directed Care Plans</li>
            <li>Managed By Licensed Nurses</li>
            <li>Complete Care Portfolio</li>
            <li>Medical Interview</li>
          </ul>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <img
            src="https://images.pexels.com/photos/7551686/pexels-photo-7551686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="mx-auto h-24 w-24 mb-4"
          />
          <h2 className="text-center text-xl text-[#00446B] font-bold mb-2">
            All-round medical support
          </h2>
          <ul className="text-base text-gray-800 list-disc pl-4">
            <li>12-hour and 24-hour caregivers</li>
            <li>24/7 customer support</li>
            <li>Leave replacements for continued care</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WhyIHCS;
