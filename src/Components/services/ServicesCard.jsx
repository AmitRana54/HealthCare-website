import React from "react";
import { Link } from "react-router-dom";

function ServicesCard({
  name ,
  image ,
  bgColor ,
  route
}) {

  return (
    <div
      className={`h-52 w-[22rem] flex border-[${bgColor}]-600  border-2 rounded-xl overflow-hidden bg-[${bgColor}]`}
    >
      <div className="  mt-4 h-full w-60 rounded-sm border- flex  flex-col   justify-between">
        <h1
          className={`text-2xl font-bold underline decoration-2 text-blue-500 capitalize text-nowrap px-9 `}
        >
         <Link   to={route}   > {name}</Link>
        </h1>
        <Link
          to="/book"
          className="mb-12 ml-8  bg- text-green-800 font-bold text-pretty text-lg underline-offset-1"
        >
          Booknow
        </Link>
      </div>
      <div className="imgdiv relative h-full  flex items-center  ">
        <img className=" w-32 rounded-xl mr-8" src={image} alt="" />
      </div>
    </div>
  );
}

export default ServicesCard;
