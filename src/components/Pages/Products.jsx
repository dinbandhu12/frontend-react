import React from "react";
import { PiShoppingBagDuotone } from "react-icons/pi";
import Product01 from "../../assets/imgs/product_01.png";
import Product02 from "../../assets/imgs/product_02.png";
import Product03 from "../../assets/imgs/product_03.png";
import Product04 from "../../assets/imgs/product_04.png";
import Product05 from "../../assets/imgs/product_05.png";

const Products = () => {
    
    return (
        // <div className="">
        <div id="shop" className=" container mx-auto">
            <div className="pt-20 pb-20">
                {/* heading */}
                <div className="mx-auto flex justify-between w-11/12">
                    <div className="w-96 ">
                        <h4 className='font-Inter'>PRODUCTS</h4>
                        <p className='w-12 bg-gray-600 h-0.5 rounded mt-5'></p>
                    </div>
                    <div className="w-auto ">
                        <h1 className='font-Playfair_Display mt-12 text-4xl'>Simplify your <span className="font-Italiana"> Shopping </span> journey in one go.</h1>
                    </div>
                </div>

                <div className="mx-auto w-11/12 flex flex-row justify-between gap-2 mt-8">
                    {/* left */}
                    <div className="h-auto w-1/2 bg-secondary_one flex items-center justify-center relative">
                        <div className="w-96 h-96 m-20 bg-cover relative transform transition-transform hover:scale-105">
                            <img src={Product01} alt="" className="w-full h-full rounded object-cover"/>
                        </div>
                        <div className="absolute top-0 right-0 z-10 p-3 mr-6 mt-6 bg-gray-500">
                            <PiShoppingBagDuotone size={34} className="text-white "/>
                        </div>
                        
                        <div className="absolute bottom-0 left-0 z-10 mb-6 ml-10 p-4">
                            <h1 className="font-Inter text-lg font-medium">Royal White Chair</h1>
                            <p className="font-Inter text-md font-normal text-gray-600">$ 499.00</p>
                        </div> 
                    </div>

                    {/* right */}
                    <div className="h-auto w-1/2 grid grid-cols-2 gap-2">
                        
                        <div className=" bg-secondary_one flex items-center justify-center relative">
                            <div className="h-44 w-44 bg-cover relative transform transition-transform hover:scale-105">
                                <img src={Product02} alt="" className="w-full h-full rounded object-cover mt-[-14px]"/>
                            </div>
                            <div className="absolute bottom-0 left-0 z-10 mb-1 ml-2 p-4">
                                <h1 className="font-Inter text-base font-small">Luxury White Chair</h1>
                                <p className="font-Inter text-sm font-normal text-gray-600">$ 399.00</p>
                            </div>
                        </div>

                        <div className=" bg-secondary_one flex items-center justify-center relative">
                            <div className=" h-48 w-48 relative transform transition-transform hover:scale-105">
                                <img src={Product03} alt="" className="w-full h-full rounded object-cover mt-[-14px]" />
                            </div>  
                            <div className="absolute bottom-0 left-0 z-10 mb-1 ml-2 p-4">
                                <h1 className="font-Inter text-base font-small">Luxury Wooden Chair</h1>
                                <p className="font-Inter text-sm font-normal text-gray-600">$ 199.00</p>
                            </div>
                        </div>
                        
                        <div className=" bg-secondary_one flex items-center justify-center relative">
                            <div className=" h-48 w-48 relative transform transition-transform hover:scale-105">
                                <img src={Product04} alt="" className="w-full h-full rounded object-cover mt-[-14px]"/>
                            </div>
                            <div className="absolute bottom-0 left-0 z-10 mb-1 ml-2 p-4">
                                <h1 className="font-Inter text-base font-small">Office White Chair</h1>
                                <p className="font-Inter text-sm font-normal text-gray-600">$ 249.00</p>
                            </div>
                        </div>
                        
                        <div className=" bg-secondary_one flex items-center justify-center relative">
                            <div className=" h-48 w-48 relative transform transition-transform hover:scale-105">
                                <img src={Product05} alt="" className="w-full h-full rounded object-cover mt-[-14px]"/>
                            </div>
                            <div className="absolute bottom-0 left-0 z-10 mb-1 ml-2 p-4">
                                <h1 className="font-Inter text-base font-small">Modern Gray Chair</h1>
                                <p className="font-Inter text-sm font-normal text-gray-600">$ 289.00</p>
                            </div>
                        </div>

                    </div>
                    
                </div>
            </div>
        </div>
    // </div>
    )
}

export default Products;