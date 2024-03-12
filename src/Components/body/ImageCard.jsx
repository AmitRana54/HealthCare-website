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
    
<<<<<<< HEAD
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

    
=======
    <div className="h-[70vh] w-full flex items-center shadow-lg  flex-col justify-center">
    <h1 className="lg:text-center lg:text-3xl text-center text-blue-400 sm:text-xl font-bold sm:font-semibold my-6">Department at our hospital</h1>
    <div className="imgdiv">
      <img
        className="rounded-lg shadow-lg object-cover lg:w-[80vw]  md:max-w-3xl h-72 border-4 border-indigo-600 m-auto md:m-0 duration-150"
        src={data[index].depImg}
        alt="Department Image"
      />
>>>>>>> fd14f028d38399876a98e3dccd0a8ef53005d6ff
    </div>
  
    <div className="departName w-full h-auto text-center font-serif rounded-xl text-2xl md:text-xl font-bold text-zinc-500 uppercase tracking-wider leading-6 mt-8 px-4 py-2 shadow-md md:m-0 m-6">
      {data[index].depName}
    </div>
  </div>
  );
}

export default ImageCard;
