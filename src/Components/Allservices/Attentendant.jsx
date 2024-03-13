import React, {  useContext, useState } from "react";
import TemplateServices from "./TemplateServices";
import AllservicesContext from "../../Context/AllServices";


function Attentendant() {
    const {Allserv} = useContext(AllservicesContext)
    const [data, setdata] = useState(Allserv)
    return (
      <>
        <TemplateServices    imgLink={data[2]. ImgLink}  serviceName={data[2].Name}   aboutService={data[2].infoServ}  need={data[2].need}           />
      </>
    );
}

export default Attentendant