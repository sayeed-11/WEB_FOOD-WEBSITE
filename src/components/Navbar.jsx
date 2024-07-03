import React from 'react'
import logo from '../assets/foodie_faster.jpg'
import { useState } from 'react';

const navList = ["Home", "Popular", "About", "Menu", "Reviews", "Contact"];

const Navbar = () => {

  const [active, setActive] = useState("Home");
  const [isBar, setBar] = useState(false);

  return (
    <nav className='flex justify-between items-center text-3xl w-full max-w-[1300px] z-50  px-5 pt-2.5 pb-2.5 fixed top-0 backdrop-blur-3xl'>
        <div className="logo flex items-center gap-3">
            <div className='relative w-10 h-10'>
            <img src={logo} alt="" className='absolute w-full h-full object-cover rounded-full' />
            </div>
            <h1 className='text-sm md:text-xl font-header'>Foodie Faster</h1>
        </div>

        <div className='flex items-center gap-4'>
            <ul className={`font-text flex flex-col items-center font-bold absolute bg-gradient-to-b from-white to-amber-400 pt-10 top-[60px] w-full h-screen z-50 space-y-7 ${isBar ? "right-[0%]" : "right-[-100%]"} transition-all   lg:flex-row lg:relative lg:w-auto lg:h-auto lg:top-0 lg:bg-gradient-to-t lg:from-transparent lg:to-transparent lg:pt-0 lg:items-center lg:space-y-0 lg:right-0 overflow-auto lg:overflow-visible`}>
                {
                  navList.map((item, index) => {
                    return(
                      <li className='active:scale-[0.95]'>
                        <a href={`#${item}`} onClick={() => {setActive(item); setBar(!isBar)}} className={`px-6 rounded-xl py-2 text-xl lg:text-xs text-black lg:text-black -translate-x-20 uppercase lg:capitalize ${active === item ? "bg-white border-2 border-amber-400 shadow-md": "bg-none "}`}>{item === "About" || item === "Contact" ? item + " Us" : item }</a>
                      </li>
                    )
                  })
                }
            </ul>
            <button className="cart w-10 h-10 rounded-full border-2 border-white flex justify-center items-center bg-amber-400 shadow-md active:scale-[0.95]"><i className="fa-solid fa-cart-shopping text-[14px] text-white"/></button>
            <button><i className="fa-solid fa-bookmark lg:hidden text-amber-400 active:scale-[0.95]"/></button>
            <button className="reserve-button text-xs bg-amber-400 px-6 py-2.5 rounded-3xl font-semibold border-2 border-white shadow-md hidden lg:block active:scale-[0.95]">Reserve Table</button>
           { !isBar ? <button onClick={() => {setBar(!isBar)}} className='lg:hidden'><i className="fa-solid fa-bars active:scale-[0.95]"/></button> :
            <button onClick={() => {setBar(!isBar)}} className='lg:hidden'><i className="fa-solid fa-xmark scale-[1.3] active:scale-[1]"/></button>}
        </div>
    </nav>
  )
}

export default Navbar