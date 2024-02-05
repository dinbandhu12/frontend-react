import React from "react"
import FooterLogo from "../../assets/imgs/logo_02.png"
import { RiFacebookCircleLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { RiPinterestLine } from "react-icons/ri";


const Footer = () => {
    return (
        <div id="contact" className="bg-slate-800">
            <div className="container mx-auto">

                <div className="mx-auto w-full flex flex-row justify-between gap-2">
                    <div className="h-auto w-1/3">
                        <div className="font-Inter">
                            <img src={FooterLogo} alt="" className="h-20 mb-3"/>
                            <p className="w-4/5 text-sm mb-6 text-gray-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <div className="social flex flex-row gap-3 mb-6 text-gray-100">
                                <RiFacebookCircleLine size={34} />
                                <RiInstagramLine size={34} />
                                <RiTwitterXFill size={34} />
                                <RiLinkedinBoxLine size={34} />
                                <RiPinterestLine size={34} />
                            </div>
                            <a href="#" className="text-blue-300 hover:cursor-pointer hover:text-blue-400">
                                <p className="text-[12px]">All Right Reserved by CORA @ 2024</p>
                            </a>
                        </div>
                    </div>

                    <div className="h-auto w-1/3 text-gray-100 font-Inter pr-2 pl-2 pt-5 pb-8">
                    <h1 className="text-xl uppercase mb-10 ml-16">Contact</h1>
                        <div className="flex flex-col gap-4 text-md ml-16">
                            <p className="w-4/5">41 City Galena New-York Code - 4021115</p>
                            <p>name@yourmail.com</p>
                            <p>+1 (2541) 2354 6547</p>
                            <p>urouwebsite.desing.com</p>
                        </div>
                    </div>
                
                    <div className="h-auto w-1/3 text-gray-100 font-Inter pr-2 pl-2 pt-5 pb-8">
                        <h1 className="text-xl uppercase mb-10">Latest Posts</h1>
                        <div className="flex flex-col text-md">
                            <h2>Blog post heading one</h2>
                            <p className="mb-4">on March 2023</p>
                            <h2>Blog post heading one</h2>
                            <p className="mb-4">on March 2023</p>
                            <h2>Blog post heading one</h2>
                            <p>on March 2023</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer