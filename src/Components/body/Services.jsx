import React, { useContext, useState } from "react";
import ServicesCard from "../services/ServicesCard";
import CardContext from "../../Context/CardContext";

export default function () {
  const { details } = useContext(CardContext);
  const [card, setCard] = useState(details);

  return (
    <div className="container mx-auto mt-24 p-10">
    <h1 className="text-center font-bold text-4xl text-gray-900 mb-6">
      Medical Services Offered At Our Hospital
    </h1>
    <h2 className="text-center text-gray-600 text-lg mb-8">
      Medicrov offers a variety of healthcare services in the comfort of our patients’ homes including:
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {card?.map((items, index) => (
        <ServicesCard
          key={index}
          name={items.service}
          image={items.img}
          bgColor={items.backGround}
          route={items.route}
        />
      ))}
    </div>
  </div>
  );
}
