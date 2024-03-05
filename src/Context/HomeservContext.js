import React, { useContext } from "react";
import { createContext } from "react";
const HomeServContext = createContext({
  Homeserv: [
    {
      ImgLink:
        "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=600",
      Name: "ICU",
      infoServ: [
        "hello this depart is for icu services here we provide one of services in sharanpur we have given this serv to thousand of people and in our hosipital we have best doctor",
        "hello this depart is for icu services here we provide one of services in sharanpur we have given this serv to thousand of people and in our hosipital we have best doctor",
        "hello this depart is for icu services here we provide one of services in sharanpur we have given this serv to thousand of people and in our hosipital we have best doctor",
      ],
    },
  ],

});
export default HomeServContext ;
export const useHomeServData = ()=> {
  return useContext(HomeServContext);
}