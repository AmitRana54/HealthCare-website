import React, { createContext } from "react";
const imageContext = createContext({
  department: [
    {
      depImg:
        "https://images.pexels.com/photos/15973991/pexels-photo-15973991/free-photo-of-erupting-volcano-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=600",

      depName: "hello",
    },
    {
      depImg:
        "https://images.pexels.com/photos/15477558/pexels-photo-15477558/free-photo-of-cascades-of-ban-gioc-waterfall-at-ba-be-lake-in-vietnam.jpeg?auto=compress&cs=tinysrgb&w=600",
      depName: "surgery",
    },
    {
      depImg:
        "https://images.pexels.com/photos/15578735/pexels-photo-15578735/free-photo-of-snow-on-mountainside.jpeg?auto=compress&cs=tinysrgb&w=600",
      depName: "repensist",
    },
  ],
});
export default imageContext;
