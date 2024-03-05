import React, { useContext, useEffect, useState } from "react";
import imageContext from "../../Context/imageContext"

function ImageCard() {
  const { department } = useContext(imageContext);

  const [data, setData] = useState(department);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timerid = setInterval(() => {
      setIndex((idx) => (idx + 1) % data.length);
    }, 3000);
    return () => clearInterval(timerid);
  }, [data.length]);

  return (
    <div className="h-[70vh] w-full ">
      <div className="imgdiv">
        <img
          className="rounded-lg shadow-lg object-cover w-[60rem] h-72  border-4 border-spacing-8 border-x-red-600 m-auto  duration-150 "
          src={data[index].depImg}
          alt="img not found"
        />
      </div>
      <div className="departName   w-full h-auto text-center text-3xl font-bold text-zinc-900  underline mt-10 capitalize  tracking-wider  leading-4    duration-150    ">
        {data[index].depName}
      </div>
    </div>
  );
}

export default ImageCard;
