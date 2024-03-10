import React, { useContext, useState, useEffect } from "react";

import SliderContext from "../../Context/Slidercontext";

function HomeServices() {
  const { serv } = useContext(SliderContext);
  const [services, setServices] = useState(serv);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timerid = setInterval(() => {
      setIndex((idx) => (idx + 1) % serv.length);
    }, 2000);
    return () => clearInterval(timerid);
  }, [serv.length]);

  return (
    <div className="div h-screen w-screen ">
      <div key={index} className="px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={`/images/${services.image}`}
            alt={services[index].title}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">
              {services[index].title}
            </h3>
            <p className="text-gray-700">{services[index].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeServices;
