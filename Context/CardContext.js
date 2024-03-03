import React from "react";
import { createContext } from "react";

const CardContext = createContext({
    details: [
        {
            service: "icu",
            img: "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=600",
            backGround: "#6CB3AE",
        },
        {
            service: "Cinical",
            img: 'https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=600',
            backGround: "#6CB3AE",
        }
        
    ]

});
export default CardContext;