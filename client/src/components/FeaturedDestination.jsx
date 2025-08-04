import React from 'react'
import { assets, roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'
import { useNavigate } from 'react-router-dom'

const FeaturedDestination = () => {
    const navigate = useNavigate()

  return (

    <div id='destination' className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>
        <Title title='Featured Destination' subTitle='Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experience.'/>
        <div className='flex flex-wrap items-center justify-center gap-6 mt-20'>
            {roomsDummyData.slice(0,4).map((room, index)=>(
                <HotelCard key={room._id} room={room} index={index}/>
            ))}
        </div>
        <button onClick={()=>{navigate('/rooms'); scrollTo(0,0)}}
            className='group flex items-center px-6 py-2.5 gap-2 border border-gray-300 rounded-4xl bg-white hover:bg-gray-100 transition-all cursor-pointer mt-14'>
            View all Destination <img src={assets.arrowIcon} alt="arrow-icon" className='group-hover:translate-x-1 transition-all'/>
            </button>
    </div>
  )
}

export default FeaturedDestination