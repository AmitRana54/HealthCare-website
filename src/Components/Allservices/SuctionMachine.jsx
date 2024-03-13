import React, { u, useContext, useState } from "react";
import TemplateServices from "./TemplateServices";
import AllservicesContext from "../../Context/AllServices";

function SictionMachine() {
    const {Allserv} = useContext(AllservicesContext)
    const [data, setdata] = useState(Allserv)
    return (
      <>
        <TemplateServices    imgLink={data[7]. ImgLink}  serviceName={data[7].Name}   aboutService={data[7].infoServ}  need={data[7].need}           />
      </>
    );
}

export default SictionMachine