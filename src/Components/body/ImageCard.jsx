import React, { useContext, useEffect, useState } from "react";
import imageContext from "../../Context/imageContext"

function ImageCard() {
  const { department } = useContext(imageContext);

  const [data, setData] = useState(department);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timerid = setInterval(() => {
      setIndex((idx) => (idx + 1) % data.length);
    }, 5000);
    return () => clearInterval(timerid);
  }, [data.length]);

  return (
    <div>
    <div className="h-[60vh] w-full">
      <h1 className="lg:text-center lg:text-3xl text-zinc-900 sm:text-lg sm:text-center font-bold sm:font-semibold m-9"> Department at our hospital </h1>
      <div className="imgdiv">
        <img
          className="rounded-lg shadow-lg object-cover w-[60rem] h-96 border-4 border-spacing-8 m-auto duration-150"
          src={data[index].depImg}
          alt="Department Image"
        />
      </div>

      <div className="departName w-full h-auto text-center font-serif rounded-xl   text-3xl font-bold text-blue-400 uppercase md:text-xl tracking-wider leading-4  mt-10">
        {data[index].depName}
      </div>

    
    </div>
  
    <div className="departName w-full h-auto text-center font-serif rounded-xl lg:text-3xl text-lg font-bold text-zinc-800 capitalize tracking-wider leading-6 mt-8 px-4 py-2 shadow-md md:m-0 m-6">
      {data[index].depName}
    </div>
  </div>
  );
}

export default ImageCard;
