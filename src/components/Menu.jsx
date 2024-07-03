import React from 'react'
import { useState } from 'react';
import { popularDish } from '../data/popularDish';


const menuList = ["Special Food", "Mexican", "Italian", "Japanese", "Drinks", "Lunch", "More Item+"];

const Menu = () => {
    const [isSelected, setSelect] = useState("Special Food");
  return (
    <div id='Menu' className='w-full max-w-[1300px] bg-gradient-to-b from-amber-300 to-slate-100 px-5 md:px-10 py-16 md:py-20 space-y-10 md:space-y-10'>
        <h1 className='font-header text-3xl text-center'>Our Regular Menu Pack</h1>
        <div className='flex justify-start lg:justify-center gap-x-2 sm:gap-x-4 overflow-auto py-5 -mx-3'>
            {
                menuList.map((item, index) => {
                    return(
                        <button onClick={() => {setSelect(item)}} className={` px-3 min-w-[130px] py-2 rounded-3xl font-text text-sm ${isSelected === item ? "bg-amber-400 text-white border-2 border-white shadow-md" :"bg-white text-black"} active:scale-[0.95] `}>{item}</button>
                    )
                })
            }
        </div>
        {
            <PopularDishes/>
        }
        {
            <PopularDishes/>
        }

    </div>
  )
}

export default Menu



const PopularDishes = () => {
    return(
        <div className="grid grid-cols-1 gap-y-16 md:gap-y-10 md:grid-cols-2 lg:grid-cols-4 md:gap-x-5">
        {
            popularDish.map((item, index) => {
                return (
                    <div className='bg-gradient-to-b from-gray-200 to-white px-8 py-4 rounded-xl flex flex-col justify-between shadow-lg'>
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
    )
}