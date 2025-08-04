import React from 'react'
import Title from './Title'
import { useNavigate } from 'react-router-dom'
import { assets, exclusiveOffers } from '../assets/assets'

const Offers = () => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col items-center px-6 ,md:px-16 lg:px-24 xl:px-32 pt-20 pb-30'>
        <div className='flex flex-col md:flex-row items-center justify-between w-full'>
          <Title align='left' title='Exclusive Offers' subTitle='Take advantages of our limited-time offers and special packages to enhance your stay and create unforgettable memories.'/>
          
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
          {exclusiveOffers.map((item)=>(
            <div key={item._id} className='group relative flex flex-col item-start justify-between gap-1 pt-12 md:pt-18 px-4 rounded-2xl text-white bg-no-repeat bg-cover bg-center' style={{backgroundImage: `url(${item.image})`}}>
              <p className='px-3 py-1 absolute top-4 left-4 text-md bg-white text-gray-800 font-medium rounded-full'>{item.priceOff}% OFF</p>
              <div>
                <p className='text-2xl font-medium'>{item.title}</p>
                <p>{item.description}</p>
                <p className='text-sm text-white/70 mt-3'>Expires {item.expiryDate}</p>
              </div>
              <button className='flex items-center gap-2 font-medium cursor-pointer mt-4 mb-5'>
                View Offers
                <img src={assets.arrowIcon} alt="" className='invert group-hover:translate-x-1 transition-all'/>
              </button>
            </div>
          ))}
        </div>

        <button onClick={()=>{navigate('/offers'); scrollTo(0,0)}}
            className='group flex items-center px-6 py-2.5 gap-2 border border-gray-300 rounded-4xl bg-white hover:bg-gray-100 transition-all cursor-pointer mt-14'>View all Offers <img src={assets.arrowIcon} alt="arrow-icon" className='group-hover:translate-x-1 transition-all'/></button>
    </div>
  )
}

export default Offers