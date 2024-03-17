import React, { useContext, useState } from "react";
import TemplateServices from "./TemplateServices";
import AllservicesContext from "../../Context/AllServices";

function CancerPatient() {
  const { Allserv } = useContext(AllservicesContext);
  const [data, setdata] = useState(Allserv);
  return (
    <>
      <TemplateServices
        imgLink={data[5].ImgLink}
        serviceName={data[5].Name}
        aboutService={data[5].infoServ}
        need={data[5].need}
      />
    </>
  );
}

export default CancerPatient;
