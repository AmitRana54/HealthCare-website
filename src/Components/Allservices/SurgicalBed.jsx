import React, {  useContext, useState } from "react";
import TemplateServices from "./TemplateServices";
import AllservicesContext from "../../Context/AllServices";


function SurgicalBed() {
    const {Allserv} = useContext(AllservicesContext)
    const [data, setdata] = useState(Allserv)
    return (
      <>
        <TemplateServices    imgLink={data[6]. ImgLink}  serviceName={data[6].Name}   aboutService={data[6].infoServ}  need={data[6].need}           />
      </>
    );
}

export default SurgicalBed