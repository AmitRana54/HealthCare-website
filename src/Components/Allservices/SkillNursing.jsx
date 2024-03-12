import React, { u, useContext, useState } from "react";
import TemplateServices from "./TemplateServices";
import AllservicesContext from "../../Context/AllServices";
function SkillNursing() {
    const {Allserv} = useContext(AllservicesContext)
    const [data, setdata] = useState(Allserv)
    return (
      <>
        <TemplateServices    imgLink={data[1]. ImgLink}  serviceName={data[1].Name}   aboutService={data[1].infoServ}  need={data[1].need}           />
      </>
    );
}

export default SkillNursing