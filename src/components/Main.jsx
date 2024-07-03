import React from 'react'
import Navbar from './Navbar'
import Homepage from './Homepage'
import PopularDish from './PopularDish'
import AboutUs from './AboutUs'
import Menu from './Menu'
import Reservation from './Reservation'
import Reviews from './Reviews'
import MobileApp from './MobileApp'
import ContactPage from './ContactPage'
import Footer from './Footer'

const Main = () => {
  return (
    <div className='w-full min-h-screen bg-slate-200/[0.3] relative flex items-center flex-col scroll-smooth'>
      <Navbar/>
      <Homepage/>
      <PopularDish/>
      <AboutUs/>
      <Menu/>
      <Reservation/>
      <Reviews/>
      <MobileApp/>
      <ContactPage/>
      <Footer/>
    </div>
  )
}

export default Main