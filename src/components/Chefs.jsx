import React from 'react'
import { ourChefs } from '../data/ourChefs';

const Chefs = () => {
    return (
        <div className='mt-10 space-y-10'>
            <ContentTitle />
            <ChefCards />
        </div>
    )
}

export default Chefs;


const ContentTitle = () => {
    return (
        <div className="titles w-full flex justify-between">
            <h1 className='font-header text-3xl'>Our Chefs</h1>
            <div className="buttons space-x-2 hidden sm:block">
                <button className="left"><i className="fa-solid fa-arrow-left bg-white border-2 border-amber-400 shadow-md text-xl p-2 rounded-full w-10 h-10 flex justify-center items-center active:scale-[0.95]" /></button>
                <button className="right"><i className="fa-solid fa-arrow-right bg-white border-2 border-amber-400 shadow-md text-xl p-2 rounded-full w-10 h-10 flex justify-center items-center active:scale-[0.95]" /></button>
            </div>
        </div>
    )
}

const ChefCards = () => {
    return (
        <div className='flex overflow-x-auto pb-10 gap-x-5'>
            {
                ourChefs.map((item, index) => {
                    return (
                        <div className='min-w-[250px] overflow-hidden rounded-se-3xl rounded-ee-xl rounded-es-xl p-2 bg-white space-y-3 shadow-md'>
                            <img className='w-full aspect-square object-cover rounded-se-2xl rounded-es-3xl' src={item.img} alt="" />
                            <div>
                                <h1 className='font-header text-center text-[1.1rem]'>{item.name}</h1>
                                <p className='font-text text-center text-xs'>{item.about}</p>
                            </div>
                            <p className='text-center font-text text-sm'>{item.experience} years of experience</p>
                        </div>
                    )
                })
            }
        </div>
    )
}