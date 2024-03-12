import React, {  useContext, useState } from "react";
import TemplateServices from "./TemplateServices";
import AllservicesContext from "../../Context/AllServices";

function Icu() {
  const {Allserv} = useContext(AllservicesContext)
  const [data, setdata] = useState(Allserv)
  return (
    <>
      <TemplateServices    imgLink={data[0]. ImgLink}  serviceName={data[0].Name}   aboutService={data[0].infoServ}  need={data[0].need}           />
    </>
  );
}

export default Icu;
