import React from "react";
import AddressMap from "./Map";

function Contactus() {
    return (
        <div className="bg-gray-100  mt-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h1 className="text-3xl text-[#00446B] font-bold lg:text-6xl leading-8 tracking-wide uppercase mt-8 sm:mt-28">Contact Us</h1>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Reach Us Anyway
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        We are available from 8am-8pm (Mon-Sun)   
                    </p>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl">Rishikesh Head Office</p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">5, 1st Floor, Nagar Market ,76 Railway Station Rishikesh

                        info@aadeshhealthcare.in
                        (+91) 8279917442</p>
                    <hr className="mt-8" />
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                <div className="flex justify-center">
                    <AddressMap />
                </div>
            </div>
        </div>
    )
}
export default Contactus;
