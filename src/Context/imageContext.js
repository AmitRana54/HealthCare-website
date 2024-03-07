import React, { createContext } from "react";
const imageContext = createContext({
  department: [
    {
      depImg:
        "https://images.unsplash.com/photo-1601841162542-956af38ba052?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

      depName: "ICU Care",
    },
    {
      depImg:
        "https://images.pexels.com/photos/3376799/pexels-photo-3376799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      depName: "surgery",
    },
    {
      depImg:
        "https://images.pexels.com/photos/4266932/pexels-photo-4266932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      depName: "receptionist",
    },
    {
      depImg:
        "https://images.pexels.com/photos/5794059/pexels-photo-5794059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      depName: "physiotherapist",
    },
  ],
});
export default imageContext;