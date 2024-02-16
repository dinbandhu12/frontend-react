import React from 'react'
import ImageOne from '../../assets/imgs/about_01.jpg'
import ImageTwo from '../../assets/imgs/about_02.jpg'
import { HiArrowLongRight } from "react-icons/hi2";

const About = () => {
  return (
    <div id='about' className=''>
      <div className="container mx-auto grid grid-cols-2 pt-10 pb-10 ">
        {/* left section */}
        <div className='col-span-1 flex flex-col justify-center gap-2 items-start p-20'>
          <h4 className='font-Inter'>INTRODUCTION</h4>
          <span className='w-12 bg-gray-600 h-0.5 rounded '></span>
          <h1 className='font-Playfair_Display mt-10 text-4xl w-4/5'>A <span className='font-Italiana'> true design </span> that inspire every eyes.</h1>
          <p className='font-Inter mt-3 text-text_color w-11/12'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
          {/* <div className='flex flex-row mt-8'> */}
            <a className='flex flex-row mt-8 font-Inter mr-2 transition duration-200 hover:text-slate-600 hover:cursor-pointer'>Read More
            <HiArrowLongRight size={20} className='mt-1 ml-1 transition duration-200 hover:translate-x-1' />
            </a>
          {/* </div> */}
          
        </div>

        {/* right section */}
        <div className='col-span-1 flex gap-5 pt-20 pb-20 pl-10 pr-10 mx-auto'>
          <img src={ImageOne} alt="" className='rounded h-auto w-1/2 max-h-96 object-contain'/>

          <img src={ImageTwo} alt="" className='rounded h-auto w-1/2 max-h-96 object-contain' />
        </div>
      </div>
    </div>
  )
}

export default About