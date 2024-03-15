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
    
    <div className="h-80 w-full ">
    <h1 className="text-center lg:text-4xl  capitalize text-[#00446B] text-2xl sm:text-center font-bold mb-2"> Department at our hospital </h1>
    <div className="relative">
      <img
        className="rounded-lg object-cover w-full h-72 lg:w-[70rem] lg:h-[30rem] border-4 border-spacing-8 m-auto duration-150"
        src={data[index].depImg}
        alt="Department Image"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white bg-opacity-75 p-6 rounded-lg">
          <div className="departName text-center text-lg lg:text-3xl font-bold text-gray-800 capitalize tracking-wider leading-6">
            {data[index].depName}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ImageCard;
