import React from "react";

function WhyIHCS() {
  return (
    <>
      <h1 className=" text-center text-3xl mt-7  font-bold          ">
        Indain Heath Care Services
      </h1>
      <div className="h-[60vh] w-[90vw] mb-10 flex m-auto">
        <div className="left  h-full w-1/3     flex items-center   flex-col                ">
          <img
            className=" h-48 w-28"
            src="https://medicrov.com/wp-content/uploads/2024/01/Physical-therapy-exercise-bro.svg"
            alt=""
          />
          <h2 className="text-norap text-2xl text-blue-600 font-bold mb-2">
            Trained and Verified Nurses & Attendants
          </h2>
          <ul className="text-xl  text-black list-disc gap-4 ">
            <li>Background verification</li>
            <li>Recognized Onboarding & Training Programs</li>
            <li>Frequent on-the-job training</li>
            <li>Medical Interview</li>
          </ul>
        </div>
        <div className="center  h-full w-1/3   flex items-center    flex-col         ">
          <img
            className=" h-48 w-28"
            src="https://medicrov.com/wp-content/uploads/2024/01/Health-professional-team-bro.svg"
            alt=""
          />
          <h2 className="text-norap text-2xl text-blue-600 font-bold mb-2">
            Coordinated Care Giving & Management
          </h2>
          <ul className="text-xl  text-black list-disc gap-4 ">
            <li>Physician Directed Care Plans.</li>
            <li>Managed By Licensed Nurses</li>
            <li>Complete Care Portfolio</li>
            <li>Medical Interview</li>
          </ul>
        </div>
        <div className="right   h-full w-1/3  flex items-center      flex-col        ">
          <img
            className="h-48 w-28"
            src="https://medicrov.com/wp-content/uploads/2024/01/Service-24_7-pana.svg"
            alt=""
          />
          <h2 className="text-norap text-2xl text-blue-600 font-bold mb-2 ">
            All-round medical support
          </h2>
          <ul className="text-xl  text-black list-disc gap-4">
            <li>12-hour and 24-hour caregivers</li>
            <li>24/7 customer support</li>
            <li>Leave replacements for continued care</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default WhyIHCS;
