import React from "react";
import AddressMap from "./Map";

function Contactus() {
    return (
        <div className="bg-gray-100 py-12">
            <div className="lg:text-center">
                <h1 className="text-base text-indigo-800 font-semibold tracking-wide uppercase ">Contact Us</h1>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Reach Us Anyway
                </p>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                    We are available from 8am-8pm (Mon-Sun)   
                </p>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl">Saharanpur Office</p>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">5, 1st Floor, Nagar Market Barola, Sec.-49, Near Sec. -76 Metro Station Noida

                    info@medicrov.in
                    (+91) 8279917442</p>
                    <hr />
            </div>
            <div >
                <AddressMap/>
            </div>
            
            
        </div>
    )
}
export default Contactus