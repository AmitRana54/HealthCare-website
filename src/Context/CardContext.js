import { createContext } from "react";

const CardContext = createContext({
    details: [
        {
            service: "ICU",
            img: "https://images.unsplash.com/photo-1601841162542-956af38ba052?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            backGround: "bg-[#38A169]",
            route: "/icu"
        },
        {
            service: "Skill Nursing",
            img: 'https://images.pexels.com/photos/4006979/pexels-photo-4006979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            backGround: "bg-[#6CB3AE]",
        },
        {
            service: "Attendant",
            img: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=852&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            backGround: "b-[#A7EFF4]",

        }, {
            service: "physiotherapist",
            img: "https://images.pexels.com/photos/5794059/pexels-photo-5794059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            backGround: "b-[#F1DEB3]",
            route: "/icu"
        }, {
            service: "Japa Maid",
            img: "https://images.pexels.com/photos/6466302/pexels-photo-6466302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            backGround: "b-[#9EE7E8]",
            route: "/icu"
        }, {
            service: "Cancer Patient",
            img: "https://images.unsplash.com/photo-1564732005956-20420ebdab60?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            backGround: "b-[#9BDD94]",
            route: "/icu"
        },{
            service: "Surgical Bed",
            img: "https://images.unsplash.com/photo-1579154491915-611e891d3a5b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            backGround: "b-[#E4ECF1]",
        },{
            service: "Suction Machine",
            img: "https://images.unsplash.com/photo-1550792436-181701c71f63?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            backGround: "b-[#ABE7F6]",
        },
        
        
    ]

});
export default CardContext;