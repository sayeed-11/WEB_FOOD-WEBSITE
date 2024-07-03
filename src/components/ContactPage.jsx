import React from 'react'

const ContactPage = () => {
    return (
        <div id='Contact' className='w-full max-w-[1300px] grid grid-cols-1 lg:grid-cols-2 py-16 md:py-20 px-5 md:px-10 bg-gradient-to-b from-amber-300 to-slate-100 gap-x-10 space-y-16'>
            <LeftContent />
            <RightContent />
        </div>
    )
}

export default ContactPage

const LeftContent = () => {
    return (
        <div className='space-y-10'>
            <h1 className='font-header text-3xl'>Contact Us</h1>
            <div className='flex flex-col gap-y-3 '>
                <div className='flex gap-x-3 flex-col gap-y-3 md:flex-row'>
                    <input className='w-full py-3 px-3 bg-white rounded-2xl text-sm outline-none border-2 border-amber-400 shadow-md' type="text" placeholder='First Name' />
                    <input className='w-full py-3 px-3 bg-white rounded-2xl text-sm outline-none border-2 border-amber-400 shadow-md'  type="text" placeholder='Last Name' />
                </div>
                <input className='w-full py-3 px-3 bg-white rounded-2xl text-sm outline-none border-2 border-amber-400 shadow-md' type="text" placeholder='Subject' />
                <textarea className='w-full py-3 px-3 bg-white rounded-2xl text-sm outline-none border-2 border-amber-400 shadow-md' rows={4} name="" id="" placeholder='Message'></textarea>
                <button className='w-full py-3 px-3 bg-amber-400 rounded-2xl text-sm outline-none border-2 border-white shadow-md font-header active:scale-[0.98]'>Send Message</button>
            </div>
        </div>
    )
}


const RightContent = () => {
    return (
        <div  className='space-y-10'>
            <h1 className='font-header text-2xl'>Get in Touch</h1>
            <p className='font-text'>Thank you for your interest in connecting with us! Whether you have a question, feedback, or would like to collaborate, we'd love to hear from you. Here are a few ways to get in touch:</p>
            <Contacts />
        </div>
    )
}


const Contacts = () => {
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 space-y-3 md:space-y-0 '>
            <div className='space-y-3'>
                <div className='flex items-center gap-x-3'>
                    <i className="fa-solid fa-phone bg-white p-4 rounded-full border-2 border-amber-400 shadow-md" />
                    <div className='font-header text-sm'>
                        <p>Phone Number</p>
                        <p className='font-text'>9807658912</p>
                    </div>
                </div>

                <div className='flex items-center gap-x-3'>
                    <i className="fa-solid fa-envelope bg-white p-4 rounded-full border-2 border-amber-400 shadow-md" />
                    <div  className='font-header text-sm'>
                        <p>Email Address</p>
                        <p className='font-text'>foodiefaster@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className='space-y-3'>
                <div className='flex items-center gap-x-3'>
                    <i className="fa-brands fa-internet-explorer bg-white p-4 rounded-full border-2 border-amber-400 shadow-md" />
                    <div  className='font-header text-sm '>
                        <p>Our Another Site</p>
                        <a className='font-text' href="#">www.connie.com</a>
                    </div>
                </div>
                <div className='flex items-center gap-x-3'>
                    <i className="fa-solid fa-address-book bg-white p-4 rounded-full border-2 border-amber-400 shadow-md" />
                    <div  className='font-header text-sm'>
                        <p>Address</p>
                        <p className='font-text'>West Bengal, Malda Town, 732141</p>
                    </div>
                </div>
            </div>
        </div>
    )
}