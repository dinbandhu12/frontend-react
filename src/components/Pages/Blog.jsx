import React from "react"
import Blog01 from "../../assets/imgs/blog_01.jpg";
import Blog02 from "../../assets/imgs/blog_02.jpg";

const Blog = () => {
    return (
        // <div className="">
        <div id="blog" className="container mx-auto pt-4 mb-20">

            {/* heading */}
            <div className="mx-auto flex justify-between w-11/12 mb-8">
                <div className="w-96 ">
                    <h4 className='font-Inter'>BLOG UPDATES</h4>
                    <p className='w-12 bg-gray-600 h-0.5 rounded mt-5'></p>
                </div>
                <div className="w-auto ">
                    <h1 className='font-Playfair_Display mt-12 text-4xl'>Always inspired through our <span className="font-Italiana"> Blog </span> .</h1>
                </div>
            </div>

            <div className="mx-auto w-11/12 flex flex-row justify-between gap-2">
                
                {/* left */}
                <div className="h-auto w-1/2">
                    <div className="flex flex-col items-center justify-center relative rounded">
                        <div className="h-96 w-full bg-cover relative  overflow-hidden">
                            <img src={Blog01} alt="" className="w-full h-full rounded object-cover transform transition-transform hover:scale-105"/>
                        </div>
                        <div className="absolute top-0 bg-white left-0 px-12 py-3.5 mt-10 font-Inter text-lg">
                            <h1 className="">DESIGN</h1>
                        </div>
                    </div>

                    <div className="flex flex-col mt-6">
                        <h1 className="font-Inter text-2xl font-medium">Design that inspire everyone</h1>
                        <p className="font-Inter text-medium italic text-gray-600 mt-1">on April 2023</p>
                        <p className="font-Inter mt-6 w-11/12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut </p>
                        <a href="" className="mt-6 mb-3 w-28 font-medium font-Inter text-lg hover:underline text-gray-700">Read More</a>
                    </div>
                </div>

                {/* right */}
                <div className="h-auto w-1/2">
                    <div className="flex flex-col items-center justify-center relative rounded">
                        <div className="h-96 w-full bg-cover relative overflow-hidden">
                            <img src={Blog02} alt="" className="w-full h-full rounded object-cover transform transition-transform hover:scale-105"/>
                        </div>
                        <div className="absolute top-0 bg-white left-0 px-12 py-3.5 mt-10 font-Inter text-lg">
                            <h1 className="">LIFE STYLE</h1>
                        </div>
                    </div>

                    <div className="flex flex-col mt-6">
                        <h1 className="font-Inter text-2xl font-medium">How to chose the perfect design</h1>
                        <p className="font-Inter text-medium italic text-gray-600 mt-1">on June 2023</p>
                        <p className="font-Inter mt-6 max-w-screen-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut </p>
                        <a href="" className="mt-6 mb-3 w-28 font-medium font-Inter text-lg hover:underline text-gray-700">Read More</a>
                    </div>
                </div>
                
            </div>
        </div>
    // </div>
    )
}

export default Blog