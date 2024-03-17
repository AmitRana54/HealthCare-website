import React, {  useContext, useState } from "react";
import TemplateServices from "./TemplateServices";
import AllservicesContext from "../../Context/AllServices";


function JapaMaid() {
  const { Allserv } = useContext(AllservicesContext);
  const [data, setdata] = useState(Allserv);
  return (
    <>
      <TemplateServices
        imgLink={data[4].ImgLink}
        serviceName={data[4].Name}
        aboutService={data[4].infoServ}
        need={data[4].need}
      />
    </>
  );
}

export default JapaMaid;
