import React from 'react'
import aImage from '../assets/aboutPageImage.png';

import fastDelivery from '../assets/fast-delivery.png';
import onlineOrder from '../assets/online-order.png';
import allTimeDelivery from '../assets/24x7delivery.png';
import organized from '../assets/organized.png';
import pre_order from '../assets/pre-order.png';
import superChef from '../assets/chef.png';

const AboutUs = () => {
    return (
        <div id='About' className='w-full max-w-[1300px] grid grid-cols-1 lg:grid-cols-2 py-16 md:py-20 px-5 md:px-10 bg-gradient-to-t from-amber-300 to-slate-100'>
            <LeftContent/>
            <RightContent/>
        </div>
    )
}

export default AboutUs


const LeftContent = () => {
    return (
        <div className="left-content">
            <h1 className='font-header text-3xl'>About Us</h1>
            <div className=' w-full aspect-square flex justify-center items-center'>
                <div className='w-[80%] aspect-square flex justify-center items-center border-l-[1px] border-black rounded-full'>
                    <div className='flex justify-center items-center w-[80%]'>
                        <img src={aImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

const RightContent = () => {
    return(
        <div className="right-content flex flex-col justify-center gap-y-10">
        <h1 className='text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-header'><p>We are more than</p><p className='-mt-4'>multiple survice</p></h1>
        <p className='font-text text-black/[0.7]'>This is a type of restuarant which typically serves food and drinks,in addition to light refreshments such as baked goods or snacks.The term comes from the rench word meaning food.</p>
        <div className='grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-y-0'>
           <LeftComponent/>
           <RightComponent/>
        </div>
    </div>
    )
}


const LeftComponent = () => {
    return(
        <div className='space-y-5'>

        <div className='flex  items-center gap-x-2'>
            <div className='p-1 bg-white w-14 aspect-square rounded-full flex justify-center items-center border-dashed border-black border-2'><img className='w-12' src={onlineOrder} alt="" /></div>
            <p className='font-header'>online order</p>
        </div>
        <div className='flex items-center gap-x-2'>
            <div className='p-1 bg-white w-14 aspect-square rounded-full flex justify-center items-center border-dashed border-black border-2'><img className='w-12' src={fastDelivery} alt="" /></div>
            <p className='font-header'>fast delivery</p>
        </div>
        <div className='flex items-center gap-x-2'>
            <div className='p-1 bg-white w-14 aspect-square rounded-full flex justify-center items-center border-dashed border-black border-2'><img className='w-12' src={allTimeDelivery} alt="" /></div>
            <p className='font-header'>24x7 Delivery</p>
        </div>

    </div>
    )
}

const RightComponent = () => {
    return(
        <div className='space-y-5'>

        <div className='flex items-center gap-x-2'>
            <div className='p-1 bg-white w-14 aspect-square rounded-full flex justify-center items-center border-dashed border-black border-2'><img className='w-12' src={pre_order} alt="" /></div>
            <p className='font-header'>Pre-Reservation</p>
        </div>
        <div className='flex items-center gap-x-2'>
            <div className='p-1 bg-white w-14 aspect-square rounded-full flex justify-center items-center border-dashed border-black border-2'><img className='w-12' src={organized} alt="" /></div>
            <p className='font-header'>organized foodie place</p>
        </div>
        <div className='flex items-center gap-x-2'>
            <div className='p-1 bg-white w-14 aspect-square rounded-full flex justify-center items-center border-dashed border-black border-2'><img className='w-12' src={superChef} alt="" /></div>
            <p className='font-header'>super chef</p>
        </div>

    </div>
    )
}