import React, { useContext, useState } from "react";
import ServicesCard from "../services/ServicesCard";
import CardContext from "../../Context/CardContext";

export default function () {
  const { details } = useContext(CardContext);
  const [card, setCard] = useState(details);

  return (
    <div className="h-max-screen w-full mb-10 ">
      <h1 className="text-center  font-bold text-3xl text-zinc-900">
        Medical Services Offered At our Hodipital
      </h1>
      <h2 className="text-center text-zinc-500 text-sm ">
        medicrov offers a variety of healthcare services in the comfort of
        ourpatient’s homes including:
      </h2>
      <div className=" w-[96vw] m-auto mt-5 flex flex-wrap gap-2  ">
        <CardContext.Provider value={{ details }}>
          {card?.map((items, index) => {
            return (
              <ServicesCard
                key={index}
                name={items.service}
                image={items.img}
                bgColor={items.backGround}
                route={items.route}
              />
            );
          })}
        </CardContext.Provider>
      </div>
    </div>
  );
}
