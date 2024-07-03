import React from 'react'
import mainImage from '../assets/pngwing.png'

import dish from '../assets/dish.png'
import desert from '../assets/desert.png'
import platter from '../assets/platter.png'
import drink from '../assets/drink.png'
import snack from '../assets/snack.png'




const Homepage = () => {
    return (
        <div id='Home' className='w-full max-w-[1300px] min-h-screen pt-14 md:pt-20 grid grid-cols-1 px-5 md:px-10 relative bg-gradient-to-t from-amber-300 to-slate-100 md:gap-y-10 lg:grid-cols-2 lg:gap-y-0 space-y-8 sm:space-y-0'>
            <LeftContent />
            <RightContent/>
        </div>
    )
}

export default Homepage


const LeftContent = () => {
    return (
        <div className="left-content flex flex-col justify-center items-start gap-y-10 ">
            <h1 className='font-header text-[2rem] md:text-[4rem]'>
                <p>we serve the test</p>
                <p className='-mt-3 md:-mt-6'>you love 😍</p>
            </h1>
            <p className='font-text text-black/[0.7]'>This is a type of restuarant which typically serves food and drinks, in addition to light refreshment such as baked goods and snacks.The term comes from the rench word meaning food.</p>
            <div className="buttons flex-col space-y-5 space-x-5 sm:flex-row gap-x-5">
                <button className="explore bg-amber-400 px-8 py-2.5 rounded-3xl border-2 border-white shadow-md font-text font-bold active:scale-[0.97]">Explore Food</button>
                <button className="search px-8 py-2 rounded-3xl bg-white shadow-md space-x-2 active:scale-[0.97]"><i className="fa-solid fa-magnifying-glass text-xl" /> <b className='font-text'>Search</b></button>
            </div>
        </div>
    )
}

const RightContent = () => {
    return (
        <div className="right-content ">
            <div className="main-img h-full flex justify-center items-center">
                <div className='bg-amber-100/[0.5] w-[80%] aspect-square rounded-full flex justify-center items-center shadow-sm -translate-x-5 sm:-translate-x-0'>
                    <div className='border-[1px] border-black/[0.1] w-[80%] aspect-square rounded-full flex justify-center items-center relative'>
                        <div className='absolute -right-20 z-40'>
                            <ul className='space-y-3'>
                                <li className='pl-1 pr-3 py-1 bg-white shadow-sm rounded-3xl text-sm flex items-center gap-x-2 font-semibold border-[1.5px] border-amber-400 -translate-x-16 active:scale-[0.97] hover:cursor-pointer'><img src={dish} alt="" className='w-8 aspect-square ' /> Dishes</li>
                                <li className='pl-1 pr-3 py-1 bg-white shadow-sm rounded-3xl text-sm flex items-center gap-x-2 font-semibold border-[1.5px] border-amber-400 -translate-x-8 active:scale-[0.97] hover:cursor-pointer'><img src={desert} alt="" className='w-8 aspect-square ' /> Deserts</li>
                                <li className='pl-1 pr-3 py-1 bg-white shadow-sm rounded-3xl text-sm flex items-center gap-x-2 font-semibold border-[1.5px] border-amber-400 active:scale-[0.97] hover:cursor-pointer'><img src={drink} alt="" className='w-8 aspect-square ' /> Drinks</li>
                                <li className='pl-1 pr-3 py-1 bg-white shadow-sm rounded-3xl text-sm flex items-center gap-x-2 font-semibold border-[1.5px] border-amber-400 -translate-x-8 active:scale-[0.97] hover:cursor-pointer'><img src={platter} alt="" className='w-8 aspect-square ' /> Platter</li>
                                <li className='pl-1 pr-3 py-1 bg-white shadow-sm rounded-3xl text-sm flex items-center gap-x-2 font-semibold border-[1.5px] border-amber-400 -translate-x-16 active:scale-[0.97] hover:cursor-pointer'><img src={snack} alt="" className='w-8 aspect-square ' /> Snacks</li>
                            </ul>
                        </div>
                        <div className='border-[1px] border-black/[0.1] w-[90%] aspect-square rounded-full flex justify-center items-center -translate-x-4'>
                            <img src={mainImage} alt="" className=' w-full -translate-x-10 translate-y-4' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}