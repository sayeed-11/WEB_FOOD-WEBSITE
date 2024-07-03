import React from 'react'
import logo from '../assets/foodie_faster.jpg'

const Footer = () => {
    return (
        <div className='w-full max-w-[1300px] bg-slate-100 px-5 md:px-10 pb-10'>
            <div className="headline border-b-[1.5px] border-black/[0.3] flex items-center gap-3 py-6">
                <img className='w-12 rounded-full aspect-square object-cover' src={logo} alt="" />
                <h1 className='font-header text-xl'>Foodie Faster</h1>
            </div>
            <FooterDetails />
        </div>
    )
}

export default Footer

const FooterDetails = () => {
    return (
        <div className='flex justify-evenly flex-col md:flex-row gap-y-10 w-full pt-16'>
            <Newsletter />
            <Details />
        </div>
    )
}

const Newsletter = () => {
    return (
        <div className='w-full md:w-1/2 space-y-5'>
            <div className='font-header text-xl'>Subscribe Our Newsletter</div>
            <div className='flex gap-3 items-center'>
                <input className='py-2 px-2 outline-none bg-transparent border-b-[1.5px] border-black/[0.5] w-full' type="email" placeholder='Enter your email' />
                <button className="right"><i className="fa-solid fa-arrow-right bg-amber-400 text-xl p-2 rounded-full w-10 h-10 flex justify-center items-center border-2 border-white shadow-md active:scale-[0.95]" /></button>
            </div>
            <div className='flex gap-x-2' >
                <i className="fa-brands fa-facebook-f bg-amber-400 border-2 border-white w-12 h-12 flex justify-center items-center rounded-full shadow-xl active:scale-[0.95]" />
                <i className="fa-brands fa-twitter bg-amber-400 border-2 border-white rounded-full  w-12 h-12 flex justify-center items-center shadow-xl active:scale-[0.95]" />
                <i className="fa-brands fa-youtube bg-amber-400 border-2 border-white rounded-full  w-12 h-12 flex justify-center items-center shadow-xl active:scale-[0.95]" />
                <i className="fa-brands fa-instagram bg-amber-400 border-2 border-white rounded-full  w-12 h-12 flex justify-center items-center shadow-xl active:scale-[0.95]" />
            </div>
        </div>
    )
}

const Details = () => {
    return (
        <div className='flex w-full justify-between md:justify-evenly '>
            <Service />
            <QuickLinks />
            <About />
            <Help />
        </div>
    )
}

const Service = () => {
    return (
        <div className='flex flex-col gap-y-3'>
            <h1 className='font-header'>Service</h1>
            <a className='font-text text-sm' href='#'>Online Order</a>
            <a className='font-text text-sm' href='#'>Fast Delivery</a>
            <a className='font-text text-sm' href='#'>24x7 Delivery</a>
            <a className='font-text text-sm' href='#'>Foodie Place</a>
            <a className='font-text text-sm' href='#'>Pre-Reservation</a>
            <a className='font-text text-sm' href='#'>Super Chefs</a>
        </div>
    )
}

const QuickLinks = () => {
    return (
        <div className='flex flex-col gap-y-3'>
            <h1 className='font-header'>Quick Links</h1>
            <a className='font-text text-sm' href="#">Home</a>
            <a className='font-text text-sm' href="#">Popular</a>
            <a className='font-text text-sm' href="#">About Us</a>
            <a className='font-text text-sm' href="#">Menu</a>
            <a className='font-text text-sm' href="#">Reviews</a>
            <a className='font-text text-sm' href="#">Contact Us</a>
        </div>
    )
}

const About = () => {
    return (
        <div className='flex flex-col gap-y-3'>
            <h1 className='font-header'>About</h1>
            <a className='font-text text-sm' href="#">Our Story</a>
            <a className='font-text text-sm' href="#">Benefits</a>
            <a className='font-text text-sm' href="#">Career</a>
            <a className='font-text text-sm' href="#">Our Chefs</a>
        </div>
    )
}

const Help = () => {
    return (
        <div className='flex flex-col gap-y-3'>
            <h1 className='font-header'>Help</h1>
            <a className='font-text text-sm' href='#'>Contact</a>
            <a className='font-text text-sm' href='#'>Support</a>
            <a className='font-text text-sm' href='#'>FAQ</a>
        </div>
    )
}