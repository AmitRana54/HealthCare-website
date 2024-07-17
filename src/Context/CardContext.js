import { createContext } from "react";

const CardContext = createContext({
    details: [
        {
            service: "ICU",
            img: "https://images.unsplash.com/photo-1601841162542-956af38ba052?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            miniDiscrip: "Comprehensive ICU service offering expert medical care, advanced technology, and round-the-clock monitoring for critical patients in need",
            route: "/icu"
        },
        {
            service: "Skill Nursing",
            img: 'https://images.pexels.com/photos/4006979/pexels-photo-4006979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            miniDiscrip: "Skill nursing service provides professional medical care at home, ensuring personalized treatment and assistance for patients with complex healthcare needs.",
            route:"/skillnursing"
        },
        {
            service: "Attendant",
            img: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=852&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            miniDiscrip: "Attendant service provides personalized assistance for daily tasks, enhancing independence and quality of life for individuals needing support.",
            route:"/attendant"

        }, {
            service: "Physiotherapist",
            img: "https://images.pexels.com/photos/5794059/pexels-photo-5794059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            miniDiscrip: "Professional physiotherapist service offers tailored treatments to improve mobility, alleviate pain, and enhance overall physical well-being effectively",
            route: "/physiotherapist"
        }, {
            service: "Japa Maid",
            img: "https://images.pexels.com/photos/6466302/pexels-photo-6466302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            miniDiscrip: "Japa Maid Service: Expert cleaning professionals delivering meticulous home cleaning with dedication, reliability, and a touch of Japanese precision",
            route: "/japamaid"
        }, {
            service: "Cancer Patient",
            img: "https://images.unsplash.com/photo-1564732005956-20420ebdab60?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            miniDiscrip: "Compassionate care tailored to cancer patients, providing support, treatment, and guidance throughout their journey towards healing and recovery.",
            route: "/cancerpatient"
        },{
            service: "Surgical Bed",
            img: "https://images.unsplash.com/photo-1579154491915-611e891d3a5b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            miniDiscrip: "Surgical bed service offers comfortable, adjustable beds tailored for medical procedures, ensuring patient safety and recovery in hospitals.",
            route: "/surgicalbed"

        },{
            service: "Suction Machine",
            img: "https://images.unsplash.com/photo-1550792436-181701c71f63?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            miniDiscrip: "Suction bed service offers efficient and comfortable patient positioning and support, ensuring optimal safety and convenience during medical procedures",
            route: "/suctionmachine"
        },
        
        
    ]

});
export default CardContext;