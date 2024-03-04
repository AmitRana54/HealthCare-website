import React from "react";

function TemplateServices({ imgLink, serviceName, aboutService }) {
     console.log(aboutService);
  return (
     
    <div className=" h-scren w-full ">
     <div className="imgcontainer    h-1/2 w-full       ">
      <img
        className=" w-1/2 h-64 border-dotted boder-4 border-zinc-400 m-auto"
        src={imgLink}
        alt=""
      /></div>
     <div className=" h-1/2  w-full flex flex-col gap-8">
     <h1 className="text-3xl text-nowrap text-left font-bold text-zinc-500 ">{serviceName}</h1>
     <p className="text-xl text-pretty text-zinc-400 font-semibold ">
       {aboutService[0]}
     </p>
     <p> {aboutService[1]}</p>
     <p>{aboutService[2]}</p>
   </div>;
   </div>
   
  );
  
  }
export default TemplateServices;
