import React from 'react'
import googlePlay from '../assets/googlePlay.png';
import appStore from '../assets/appStore.png';
import mobileApp from '../assets/foodApp.png';

const MobileApp = () => {
    return (
        <div className='w-full max-w-[1300px] grid grid-cols-1 space-y-10 lg:grid-cols-2 py-5 md:py-20 px-5 md:px-10 bg-gradient-to-t from-amber-300 to-slate-100'>
            <LeftContent/>
           <RightContent/>
        </div>
    )
}

export default MobileApp




const RightContent = () => {
    return (
        <div className='space-y-5 sm:space-y-10 flex flex-col justify-center'>
            <h1 className='font-header text-[1.7rem] sm:text-[3rem]'>
                <p>Never Feel Hungry!</p>
                <p className='-mt-2 sm:-mt-4'>Download Our Mobile App</p>
                <p className='-mt-2 sm:-mt-4'>Enjoy Delicious Foods</p>
            </h1>
            <p className='font-text'>Make online reservations, read restaurant reviews from dinners, and earn points towards free meals.Open Table is a real-time online reservation.</p>
            <div className="buttons flex flex-wrap">
                <img className='w-40 sm:w-52 active:scale-[0.95]' src={googlePlay} alt="" />
                <img className='w-40 sm:w-52 active:scale-[0.95]' src={appStore} alt="" />
            </div>
        </div>
    )
}

const LeftContent = () => {
    return(
        <div className='grid place-items-center'>
            <img className='w-[40%] drop-shadow-sm' src={mobileApp} alt="" />
        </div>
    )
}