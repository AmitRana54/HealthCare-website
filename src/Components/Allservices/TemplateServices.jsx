import React from "react";
import Steps from "../Booknow/Steps";
import BookNow from "../Booknow/BookNow";

function TemplateServices({ imgLink, serviceName, need, aboutService }) {
  return (
    <>
      <div className="lg:flex flex-col mt-36 lg:flex-col justify-center items-start">
        {/* Image Container */}
       
          <img
            className="h-80 w-[85vw] m-auto object-cover object-center"
            src={imgLink}
            alt=""
          />
       
        {/* Service Details */}
        <div className="w-full lg:w-auto mt-8 lg:mt-0 lg:ml-8 flex flex-col gap-5 lg:gap-10">
          <h1 className="text-3xl font-bold ml-4  text-black mt-4 mb-5 lg:mb-0 underline">
            {serviceName}
          </h1>
          <div className="flex flex-col gap-5">
            {aboutService.map((item, index) => (
              <p key={index} className="text-xl lg:ml-5 text-ellipsis text-wrap ml-5 text-zinc-800">
                {item}
              </p>
            ))}
          </div>
        </div>
        {/* Service Reasons */}
        <div className="w-full lg:w-auto mt-8 lg:mt-0 lg:ml-10 flex flex-col gap-5 lg:gap-10">
          <h2 className="text-3xl font-bold text-black mt-4 mb-5 capitalize text-center">
            Why you need {serviceName} service
          </h2>
          <div className="flex flex-col gap-5 lg:ml-5 text-ellipsis text-wrap ml-5 ">
            {need.map((item, index) => (
              <p key={index} className="text-xl text-zinc-800 list-disc ">
                {   item}
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
