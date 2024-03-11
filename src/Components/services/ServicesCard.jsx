import React from "react";
import { Link } from "react-router-dom";

function ServicesCard({
  name ,
  image ,
  bgColor ,
  route ,
}) {

  return (
    <div className="w-[300px] rounded-md border mt-5">
      <img
        src={image}
        alt="services image"
        className="h-[200px] w-full rounded-t-md object-cover"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
         {name} 
        </h1>
        <p className="mt-3 text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
        </p>
        
        <button
          type="button"
          className="mt-4 w-full rounded-md bg-green-700 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
         <Link    to='/book'    > Book Now     </Link>
        </button>
      </div>
    </div>
  );
}

export default ServicesCard;
