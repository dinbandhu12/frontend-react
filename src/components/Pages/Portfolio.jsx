import React from "react";
import Client01 from "../../assets/imgs/client_01.png";
import Client02 from "../../assets/imgs/client_02.png";
import Client03 from "../../assets/imgs/client_03.png";
import Client04 from "../../assets/imgs/client_04.png";

const Portfolio = () => {
    return (
        <div id="portfolio" className=" bg-secondary_one">
        <div className=" container mx-auto">
            <div className="mx-auto flex w-11/12 flex-row justify-between gap-2 mt-10 mb-20">
                <div className="h-40 w-40">
                    <img src={Client01} alt="" className="p-3"/>
                </div>
                <div className="h-40 w-40">
                    <img src={Client02} alt="" className="p-4"/>
                </div>
                <div className="h-40 w-40">
                    <img src={Client03} alt="" className="p-5"/>
                </div>
                <div className="h-40 w-40">
                    <img src={Client04} alt="" className="p-2"/>
                </div>
                
            </div>
        </div>
    </div>
    )
}

export default Portfolio;