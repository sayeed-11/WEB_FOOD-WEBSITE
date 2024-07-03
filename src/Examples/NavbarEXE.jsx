import React from 'react'

const NavbarEXE = () => {
  return (
    <div className='flex justify-between bg-purple-500 px-10 py-2'>
        <h1>LOGO</h1>
        <ul className='flex'>
            <li><a className='px-2 bg-purple-500 mx-2 py-1 shadow-newmorph shadow-newmorphLow rounded-3xl' href="#">Home</a></li>
            <li><a className='px-2 bg-purple-500 mx-2 py-1 shadow-newmorph shadow-newmorphLow rounded-3xl' href="#">About Us</a></li>
            <li><a className='px-2 bg-purple-500 mx-2 py-1 shadow-newmorph shadow-newmorphLow rounded-3xl' href="#">Products</a></li>
            <li><a className='px-2 bg-purple-500 mx-2 py-1 shadow-newmorph shadow-newmorphLow rounded-3xl' href="#">Menu</a></li>
            <li><a className='px-2 bg-purple-500 mx-2 py-1 shadow-newmorph shadow-newmorphLow rounded-3xl' href="#">Contact Us</a></li>
        </ul>
    </div>
  )
}

export default NavbarEXE