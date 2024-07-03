import React from 'react'
import { customerReviews } from '../data/CustomeReviews'
import Chefs from './Chefs'

const Reviews = () => {
    return (
        <div id='Reviews' className='w-full max-w-[1300px] bg-gradient-to-b from-amber-300 to-slate-100 px-5 md:px-10 py-20 sm:py-10 md:py-20 '>
            <div className="titles w-full flex justify-between">
                <h1 className='font-header text-3xl'>What Our Customer Says?</h1>
                <div className="buttons space-x-2 hidden sm:block">
                    <button className="left"><i className="fa-solid fa-arrow-left bg-white border-2 border-amber-400 shadow-md text-xl p-2 rounded-full w-10 h-10 flex justify-center items-center active:scale-[0.95]" /></button>
                    <button className="right"><i className="fa-solid fa-arrow-right bg-white border-2 border-amber-400 shadow-md text-xl p-2 rounded-full w-10 h-10 flex justify-center items-center active:scale-[0.95]" /></button>
                </div>
            </div>
            <ReviewsCard/>
            <Chefs/>
        </div>
    )
}

export default Reviews

const ReviewsCard = () => {
    return (
        <div className='w-auto overflow-auto flex gap-x-5 py-10'>
            {
                customerReviews.map((item, index) => {
                    return (
                        <div className='min-w-[300px] bg-gradient-to-b from-slate-100 shadow-md to-white p-5 rounded-3xl flex flex-col items-start justify-between gap-y-5'>
                            <p className='font-text text-sm'>{item.review}</p>
                            <div className='space-y-3'>
                                <img className='w-12 aspect-square object-cover rounded-full' src={item.img} alt="" />
                                <p className='font-header'>{item.name}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}