import React from "react";
import Steps from "../Booknow/Steps";
import BookNow from "../Booknow/BookNow";

function TemplateServices({ imgLink, serviceName, need, aboutService }) {
  return (
    <>
      <div className="lg:flex flex-col lg:flex-col justify-center items-start">
        {/* Image Container */}
        <div className="imgcontainer h-72 mt-8 lg:mt-36 w-full lg:w-auto lg:max-w-[95vw] flex justify-center  bg-slate-950 items-center">
          <img
            className="h-full w-full object-cover object-center"
            src={imgLink}
            alt=""
          />
        </div>
        {/* Service Details */}
        <div className="w-full lg:w-auto mt-8 lg:mt-0 lg:ml-8 flex flex-col gap-5 lg:gap-10">
          <h1 className="text-3xl font-bold text-blue-500 mt-4 mb-5 lg:mb-0 underline">
            {serviceName}
          </h1>
          <div className="flex flex-col gap-5">
            {aboutService.map((item, index) => (
              <p key={index} className="text-xl text-gray-600">
                {item}
              </p>
            ))}
          </div>
        </div>
        {/* Service Reasons */}
        <div className="w-full lg:w-auto mt-8 lg:mt-0 lg:ml-10 flex flex-col gap-5 lg:gap-10">
          <h2 className="text-3xl font-bold text-blue-500 mt-4 mb-5 capitalize text-center">
            Why you need {serviceName} service
          </h2>
          <div className="flex flex-col gap-5">
            {need.map((item, index) => (
              <p key={index} className="text-xl text-gray-600">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
      <Steps />
      <BookNow />
    </>
  );
}
export default TemplateServices;
