import React, { u, useState } from "react";
import TemplateServices from "./TemplateServices";
import { useHomeServData } from "../../Context/HomeservContext";
import BookNow from "../Booknow/BookNow";

function Icu() {
  const { Homeserv } = useHomeServData();
  const [card, setCard] = useState(Homeserv);
  return (
    <>
      <TemplateServices
        imgLink={card[0].ImgLink}
        serviceName={card[0].Name}
        aboutService={card[0].infoServ}
      />
      <span>
        {" "}
        <h1 className="text-2xl text-center font-bold text-pretty text-green-600 tracking-wider leading-3 m-4 ">
          {" "}
          {card[0].Name} services{" "}
        </h1>{" "}
      </span>
      <BookNow />
    </>
  );
}

export default Icu;
