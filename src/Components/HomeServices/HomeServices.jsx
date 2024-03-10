import React, { useContext, useState, useEffect } from "react";
import SliderContext from "../../Context/Slidercontext";

function HomeServices() {
  const { serv } = useContext(SliderContext);
  const [service, setService] = useState(serv);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timerid = setInterval(() => {
      setIndex((idx) => (idx + 1) % serv.length);
    }, 2000);
    return () => clearInterval(timerid);
  }, [serv.length]);
  
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleExpanded = () => {
      setIsExpanded(!isExpanded);
    }

  return (
    <div className="md:w-1/2 lg:w-1/3 px-4 mb-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
          <p className={`text-gray-700 ${isExpanded ? '' : 'line-clamp-3'}`}>
            {service.description}
          </p>
          {service.description.length > 30 && (
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
