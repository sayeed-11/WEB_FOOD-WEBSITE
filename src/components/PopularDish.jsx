import React from 'react'

import { popularDish } from '../data/popularDish';

const PopularDish = () => {
    return (
        <div id='Popular' className='w-full max-w-[1300px] bg-gradient-to-b from-amber-300 to-slate-100 px-5 md:px-10 py-20 sm:py-10 md:py-20 space-y-16'>
            <div className="titles w-full flex justify-between">
                <h1 className='font-header text-3xl'>Popular Dish</h1>
                <div className="buttons space-x-2 hidden sm:block">
                    <button className="left"><i className="fa-solid fa-arrow-left bg-white text-xl p-2 rounded-full w-10 h-10 flex justify-center items-center border-2 border-amber-400 shadow-md active:scale-[0.95]"/></button>
                    <button className="right"><i className="fa-solid fa-arrow-right bg-white text-xl p-2 rounded-full w-10 h-10 flex justify-center items-center border-2 border-amber-400 shadow-md active:scale-[0.95]"/></button>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-y-16 md:gap-y-10 md:grid-cols-2 lg:grid-cols-4 md:gap-x-5 place-items-center md:place-items-stretch">
                {
                    popularDish.map((item, index) => {
                        return (
                            <div className='max-w-[440px] bg-gradient-to-b from-gray-200 to-white px-8 py-4 rounded-xl flex flex-col justify-between shadow-lg'>
                                <div className=' aspect-square flex justify-center items-center'>
                                    <img src={item.img} alt="" className='w-[90%]' />
                                </div>
                                <div className='flex flex-col items-center  aspect-video gap-y-4'>
                                    <h1 className='font-header text-xl'>{item.name}</h1>
                                    <div className='flex gap-x-1 text-amber-400'>
                                        {
                                            new Array(5).fill(0).map(() => {
                                                return (
                                                    <i className="fa-solid fa-star"/>
                                                )
                                            })
                                        }
                                    </div>
                                    <p className='text-center font-text text-xs '>{item.description}</p>
                                    <div className='flex justify-between items-center w-full mt-3'>
                                        <p className='font-header'>$45.50</p>
                                        <button className='px-5 py-2.5 bg-amber-400 rounded-3xl border-2 border-white font-text font-bold text-xs shadow-md active:scale-[0.95]'>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PopularDish