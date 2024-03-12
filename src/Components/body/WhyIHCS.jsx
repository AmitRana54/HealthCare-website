import React from "react";

function WhyIHCS() {
  return (
    
     <div className="max-w-7xl  mx-auto px-4 py-8">
      <h1 className="text-center text-2xl font-bold mb-2 mt-5 lg:text-3xl lg:mt-20 text-blue-900 ">  Why Indian Health Care Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <img src="https://medicrov.com/wp-content/uploads/2024/01/Physical-therapy-exercise-bro.svg" alt="" className="mx-auto h-24 w-24 mb-4" />
          <h2 className="text-center text-xl text-blue-600 font-bold mb-2">Trained and Verified Nurses & Attendants</h2>
          <ul className="text-base text-gray-800 list-disc pl-4">
            <li>Background verification</li>
            <li>Recognized Onboarding & Training Programs</li>
            <li>Frequent on-the-job training</li>
            <li>Medical Interview</li>
          </ul>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <img src="https://medicrov.com/wp-content/uploads/2024/01/Health-professional-team-bro.svg" alt="" className="mx-auto h-24 w-24 mb-4" />
          <h2 className="text-center text-xl text-blue-600 font-bold mb-2">Coordinated Care Giving & Management</h2>
          <ul className="text-base text-gray-800 list-disc pl-4">
            <li>Physician Directed Care Plans</li>
            <li>Managed By Licensed Nurses</li>
            <li>Complete Care Portfolio</li>
            <li>Medical Interview</li>
          </ul>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <img src="https://medicrov.com/wp-content/uploads/2024/01/Service-24_7-pana.svg" alt="" className="mx-auto h-24 w-24 mb-4" />
          <h2 className="text-center text-xl text-blue-600 font-bold mb-2">All-round medical support</h2>
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
