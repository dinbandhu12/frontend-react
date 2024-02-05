import React from "react";
import Service01 from "../../assets/imgs/service_01.jpg";
import Service02 from "../../assets/imgs/service_02.jpg";
import Service03 from "../../assets/imgs/service_03.jpg";

const Services = () => {
    return (
    <div className="bg-secondary_one">
        <div className=" container mx-auto">
            <div className="mx-auto flex w-11/12 flex-row justify-between gap-2 pt-28 pb-28">
                <div className="w-1/3">
                    <h5 className="font-Inter text-sm">Service 01</h5>
                    <p className='w-8 bg-gray-700 h-px rounded mt-2'></p>
                    <h1 className="font-Playfair_Display text-3xl font-medium mt-5">Residential Design</h1>
                    <p className="font-Inter text-sm mt-7 mb-5 w-11/12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
                    <div className="w-full h-64 rounded p-1 bg-cover overflow-hidden">
                        <img src={Service01} alt="" className="w-full h-full object-cover rounded transition-transform hover:scale-105 duration-300"/>
                    </div>
                </div>
                <div className="w-1/3">
                    <h5 className="font-Inter text-sm">Service 01</h5>
                    <p className='w-8 bg-gray-700 h-px rounded mt-2'></p>
                    <h1 className="font-Playfair_Display text-3xl font-medium mt-5">Office Design</h1>
                    <p className="font-Inter text-sm mt-7 mb-5 w-11/12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
                    <div className="w-full h-64 rounded p-1 bg-cover overflow-hidden">
                        <img src={Service02} alt="" className="w-full h-full object-cover rounded transition-transform hover:scale-105 duration-300"/>
                    </div>
                </div>
                <div className="w-1/3">
                    <h5 className="font-Inter text-sm">Service 01</h5>
                    <p className='w-8 bg-gray-700 h-px rounded mt-2'></p>
                    <h1 className="font-Playfair_Display text-3xl font-medium mt-5">Interior Design</h1>
                    <p className="font-Inter text-sm mt-7 mb-5 w-11/12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
                    <div className="w-full h-64 rounded p-1 bg-cover overflow-hidden">
                        <img src={Service03} alt="" className="w-full h-full object-cover rounded transition-transform hover:scale-105 duration-300"/>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
)}

export default Services;