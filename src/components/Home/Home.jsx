import React from 'react'
import Background from '../../assets/imgs/bg_hero_img.jpg'


const Home = () => {
  return (
    <div id='#' className='relative h-screen overflow-hidden'>

      {/* background img */}
      <div className='absolute inset-0'>
        <img src={Background} alt="" className='object-cover object-center w-full h-full brightness-110'/>
      </div>

      {/* text */}
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center mt-[-50px]'>
        <h1 className='font-Playfair_Display text-text_color text-7xl mb-10'>Characterized by <span className='font-Italiana'> Excellence </span> & <span className='font-Italiana'> Artistry </span></h1>
        <button className='py-2 px-5 bg-btn_color hover:bg-btn_hover text-black font-semibold duration-200 rounded'>Read More</button>
      </div>
      
    </div>
  )
}

export default Home