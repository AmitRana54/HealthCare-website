import React, { useContext, useState } from "react";
import ServicesCard from "../services/ServicesCard";
import CardContext from "../../Context/CardContext";

export default function () {
  const { details } = useContext(CardContext);
  const [card, setCard] = useState(details);

  return (
    <div className="container mx-auto  p-10">
    <h1 className="lg:text-center sm:text-2xl text-center font-bold lg:text-3xl text-[#00446B] lg:mb-6 text-lg ">
      Medical Services Offered At Our Hospital
    </h1>
    <h2 className="text-center text-sm text-gray-800 lg:text-xl mt-3 mb-3 ">
      Aadesh Health Care offers a variety of healthcare services in the comfort of our patients’ homes including:
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {card?.map((items, index) => (
        <ServicesCard
          key={index}
          name={items.service} 
          image={items.img}
          miniDiscrip={items.miniDiscrip}
          route={items.route}
        />
      ))}
    </div>
  </div>
  );
}
