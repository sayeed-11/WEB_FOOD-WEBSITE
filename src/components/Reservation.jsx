import React from 'react'
import bookedImage from '../assets/bookedImage.png';

const Reservation = () => {
    return (
        <div className='w-full max-w-[1300px] py-10 md:py-20 grid grid-cols-1 gap-y-16 lg:gap-y-0 lg:grid-cols-2 px-5 md:px-10 relative bg-gradient-to-t from-amber-300 to-slate-100'>
            <LeftContent/>
            <RightContent/>
        </div>
    )
}

export default Reservation


const LeftContent = () => {
    return (
        <div className='flex flex-col justify-center items-start space-y-10'>
            <h1 className='text-[1.5rem] sm:text-[2rem] md:text-[3rem] font-header'>
                <p>Do You Have Any Dinner</p>
                <p className='-mt-2 sm:-mt-4'>Plan Today? Reserve</p>
                <p className='-mt-2 sm:-mt-4'>Your Table</p>
            </h1>
            <p className='font-text text-black/[0.7]'>Make online reservations, read restaurant reviews from dinners, and earn points towards free meals.Open Table is a real-time online reservation.</p>
            <button className="explore bg-amber-400 px-8 py-2.5 rounded-3xl border-2 border-white shadow-md font-text font-bold active:scale-[0.95]">Make Reservation</button>
        </div>
    )
}

const RightContent = () => {
    return (

        <div className='flex justify-center items-center'>
            <div className='w-[70%]  aspect-square rounded-full flex justify-center items-center border-l-2 border-black relative overflow-hidden bg-white'>
                <div className='absolute w-1/2 right-0 top-0 h-full  bg-amber-400' />
                <div className='w-[90%] aspect-square rounded-full flex justify-center items-center border-r-2 border-black z-40'>
                    <img className='w-[90%]' src={bookedImage} alt="" />
                </div>
            </div>
        </div>
    )
}