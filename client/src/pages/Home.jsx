import React from 'react'
import Hero from '../components/Hero'
import FeaturedDestination from '../components/FeaturedDestination'
import Offers from '../components/Offers'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div>
        <Hero/>
        <FeaturedDestination/>
        <Offers/>
        <Testimonials/>
    </div>
  )
}

export default Home