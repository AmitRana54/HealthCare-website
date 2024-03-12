import React, { useContext, useState, useEffect } from "react";
import SliderContext from "../../Context/Slidercontext";

function HomeServices() {
  const { serv } = useContext(SliderContext);
  const [service, setService] = useState(serv);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timerid = setInterval(() => {
      setIndex((idx) => (idx + 1) % serv.length);
    }, 5000);
    return () => clearInterval(timerid);
  }, [serv.length]);
  
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleExpanded = () => {
      setIsExpanded(!isExpanded);
    }

  return (
    <div className="md:w-1/2 lg:w-full sm:w-[96vw]  m-auto px-4 mb-8">
       <h1 className="relative lg:text-4xl text-xl text-center font-bold">
      Home Services We Provide
    </h1>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={service[index].image}
          alt={service[index].title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{service[index].title}</h3>
          <p className={`text-gray-700 ${isExpanded ? '' : 'line-clamp-3'}`}>
            {service[index].description}
          </p>
          {service[index].description.length  && (
            <button
              onClick={toggleExpanded}
              className="text-blue-500 font-semibold mt-2 focus:outline-none"
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomeServices;
