import React from "react";
import { Link } from "react-router-dom";

function ServicesCard({ name, image, miniDiscrip, route }) {
  return (
    <div className="w-full md:w-[300px] rounded-md border mt-5">
      <img
        src={image}
        alt="services image"
        className="h-[200px] md:h-[250px] w-full rounded-t-md object-center object-cover"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center underline underline-offset-2 hover:text-[#0D857B] text-lg font-semibold">
          <Link to={route}>{name}</Link>
        </h1>
        <p className="mt-3 text-sm text-gray-600">{miniDiscrip}</p>
        <Link to="/book">
          <button
            type="button"
            className="mt-4 w-full rounded-md bg-[#0D857B] px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ServicesCard;
