import React, {  useContext, useState } from "react";
import TemplateServices from "./TemplateServices";
import AllservicesContext from "../../Context/AllServices";

function Physiotherapist() {
    const {Allserv} = useContext(AllservicesContext)
    const [data, setdata] = useState(Allserv)
    return (
      <>
        <TemplateServices    imgLink={data[3]. ImgLink}  serviceName={data[3].Name}   aboutService={data[3].infoServ}  need={data[3].need}           />
      </>
    );
}

export default Physiotherapist