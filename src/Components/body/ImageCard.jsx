import React, { useContext, useEffect, useState } from "react";
import imageContext from "../../Context/imageContext"

function ImageCard() {
  const { department } = useContext(imageContext);

  const [data, setData] = useState(department);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timerid = setInterval(() => {
      setIndex((idx) => (idx + 1) % data.length);
    }, 2000);
    return () => clearInterval(timerid);
  }, [data.length]);

  return (
    
    <div className="h-[90vh] w-full">
      <div className="imgdiv">
        <img
          className="rounded-lg shadow-lg object-cover w-[60rem] h-96 border-4 border-spacing-8 m-auto duration-150"
          src={data[index].depImg}
          alt="Department Image"
        />
      </div>

      <div className="departName w-full h-auto text-center text-3xl font-bold text-green-600 capitalize tracking-wider leading-4 duration-150">
        <span className="text-zinc-900 text-3xl mx-7">Department: </span>
        {data[index].depName}
      </div>

      <div className="text-center mt-8">
        <p className="text-xl text-gray-900">
          Welcome to our department! We are committed to providing exceptional healthcare services to our patients.
          <br />
          Our team consists of highly trained professionals dedicated to your well-being.
        </p>
      </div>
    </div>
  );
}

export default ImageCard;
