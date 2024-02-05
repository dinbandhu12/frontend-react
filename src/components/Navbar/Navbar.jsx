import React from 'react'
import Logo from '../../assets/imgs/logo_01.png'

// menus
const Menus = [
  {
    id: 1,
    name: "Home",
    link: "#",
},
  {
    id: 2,
    name: "About",
    link: "/#about",
},
  {
    id: 3,
    name: "Services",
    link: "/#services",
},
  {
    id: 4,
    name: "Shop",
    link: "/#shop",
},
  {
    id: 5,
    name: "Portfolio",
    link: "/#portfolio",
},
  {
    id: 6,
    name: "Blog",
    link: "/#blog",
}]

const Navbar = () => {
  return (
    <div className='bg-gray-200'>
        <div className='container py-4 '>
            <div className='flex justify-between items-center gap-4'>
                {/* logo */}
                <div >
                  <a href="#">
                    <img src={Logo} alt="Logo" 
                    className='w-20'/>
                  </a>
                </div>
                {/* links  */}
                <div className='flex justify-between items-center'>
                  <ul className='hidden sm:flex items-center gap-4'>
                    
                    {Menus.map((data, index) => (
                      <li key={index}>
                        <a href={data.link} className='inline-block text-base py-4 px-4 font-medium text-gray-600  hover:text-black duration-200 ease-in-out font-Inter'>
                          {data.name}
                        </a>
                      </li>
                    ))}
                    <a href="#contact">
                      <button className='bg-gray-700 px-6 py-2 rounded text-white hover:bg-gray-800 duration-300 font-medium'>Contact</button>
                    </a>
                  </ul>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Navbar