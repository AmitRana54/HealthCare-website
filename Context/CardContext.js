import React from "react";
import { createContext } from "react";
const CardContext = createContext({
    details: [
        {
            service: "lorem xyz",
            img: "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=600",
            backGround: 'regal-blue',
        },
        {
            service: "amit rana",
            img: 'https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=600',
            backGround: 'bluee',
        }
    ]

});
export default CardContext;