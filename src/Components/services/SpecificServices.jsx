import React, { useContext } from "react";
import DetialsAbout from "./DetialsAbout";
import ServicesContext from "../../../Context/ServicesContext";

function SpecificServices({ imgUrl }) {
  const { serv } = useContext(ServicesContext);

  return (
    <>
      <div className=" w-full   imgcontainer">
        <img
          className="w-11/12 h-[50vh] m-auto"
          src="https://images.pexels.com/photos/2118656/pexels-photo-2118656.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
      </div>
      <ServicesContext.Provider value={services}>
        <DetialsAbout />
      </ServicesContext.Provider>
    </>
  );
}

export default SpecificServices;
