import React from "react";
import { Link } from "react-router-dom";

function ServicesCard({
  name ,
  image ,
  miniDiscrip ,
  route ,
}) {

  return (
    <div className=" w-[420px] lg:w-[300px]  m-auto lg:h-30 rounded-md border mt-5">
      <img
        src={image}
        alt="services image"
        className="h-[200px] w-full rounded-t-md object-cover"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center  underline underline-offset-2  hover:text-green-500  text-lg font-semibold">
        <Link to={route}>{name}</Link>
        </h1>
        <p className="mt-3 text-sm text-gray-600">
          {miniDiscrip}
        </p>
        
        <button
          type="button"
          className="mt-4 w-full rounded-md bg-green-700 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
         <Link    to="/book"  > Book Now     </Link>
        </button>
      </div>
    </div>
  );
}

export default ServicesCard;
