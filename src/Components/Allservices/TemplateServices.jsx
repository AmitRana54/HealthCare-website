import React from "react";

function TemplateServices({ serviceName, aboutService }) {
  return (
    <>
      <div className="h-auto w-auto ml-8  flex flex-col gap-24 ">
        <h1 className="text-3xl font-bold text-blue-500  text-center"> {serviceName} </h1>
        <p className="text-xl text-zinc-900 text-pretty  ">{aboutService[0]}</p>
       <p     className="text-xl text-zinc-900 text-pretty  "             >    {aboutService[1]}                    </p>
        <p className="text-xl text-zinc-900 text-pretty  ">{aboutService[2]}</p>
      </div>
    </>
  );
}
export default TemplateServices;
