import React, { useState } from 'react'
import { assets, facilityIcons, roomsDummyData } from '../assets/assets'
import {useNavigate} from 'react-router-dom'
import StarRating from '../components/StarRating'

const CheckBox = ({label, selected=false, onChange=()=>{ }})=>{
  return (
    <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm'>
        <input type='CheckBox' defaultChecked={selected} onChange={(e)=> onChange(e.target.checked,label)}/>
        <span className='font-light select-none'>{label}</span>
    </label>
  )
}

const RadioButton = ({label, selected=false, onChange=()=>{ }})=>{
  return (
    <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm'>
        <input type='radio' name='SortOption' defaultChecked={selected} onChange={()=> onChange(label)}/>
        <span className='font-light select-none'>{label}</span>
    </label>
  )
}


const Rooms = () => {
  const navigate = useNavigate()
  const [openfilter, setOpenfilter] = useState(false)

  const roomTypes = [
    "Single Bed",
    "Double Bed",
    "Luxury Room",
    "Family Suite",
  ];
  const princeRange = [
    "300 - 500",
    "500 - 1000",
    "1000 - 2000",
    "2000 - 3000",
    "3000 - 5000",
  ];
  const sortOption = [
    "Price Low to High",
    "Price High to Low",
    "Newest Arrival",
  ];



  return (
    <div className='flex lg:flex-grow items-start justify-between pt-20 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32'>
      <div>
        <div className='flex flex-col items-start text-left'>
          <h1 className='text-4xl md:text-[40px]'>Hotel Rooms</h1>
          <p className='text-lg md:text-base text-gray-500/90 mt-2 max-w-174'>Take advantages of our limited-time offers and special packages to enhance your stay and create unforgettable memories.</p>
        </div>
        {roomsDummyData.map((room)=>(
          <div key={room._id} className='flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300 last:pb-30 last:border-0'>
            <img onClick={()=> {navigate(`/rooms/${room._id}`), scrollTo(0,0)}} src={room.images[0]} alt="hotel-images" title='View Room Details' className='max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer'/>
            <div className='md:w-1/2 flex flex-col gap-2'>
              <p className='text-gray-500'>{room.hotel.city}</p>
              <p onClick={()=> {navigate(`/rooms/${room._id}`), scrollTo(0,0)}} className='text-gray-800 text-3xl cursor-pointer'>{room.hotel.name}</p>
              <div className='flex items-center'>
                <StarRating/>
                <p className='ml-2'>200+ reviews</p>
              </div>
              <div className='flex items-center gap-1 text-gray-500 mt-2 text-sm'>
                <img src={assets.locationIcon} alt="location" />
                <span>{room.hotel.address}</span>
              </div>
                {/* room amenities */}
              <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
                  {room.amenities.map((item, index)=>(
                    <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-[#f5f5ff]/70'>
                      <img src={facilityIcons[item]} alt={item} className='w-5 h-5'/>
                      <p className='text-sm'>{item}</p>
                    </div>
                  ))}
              </div>
              {/* room price per night */}
              <div>
                <p className='text-xl font-medium text-gray-700'>${room.pricePerNight} / night</p>
              </div>
            </div>
          </div>
        ))}
      </div>
        {/* filters */}
      <div className='bg-white w-80 border border-gray-300 text-gray-600 xl:mt-2 xl:mb-6 max-lg:mb-8 min-lg:mt-16 rounded'>
        <div className={`flex items-center justify-between px-5 py-2.5 min-lg:border-b border-gray-300 ${openfilter && "border-b"}`}>
          <p className='text-base font-medium text-gray-800'>Filter</p>
          <div className='text-sm cursor-pointer'>
            <span onClick={()=> setOpenfilter(!openfilter)} className='lg:hidden'>
              {openfilter ? 'Hide' : 'Show'}
            </span>
            <span className='hidden lg:block'>clear</span>
          </div>
        </div>

        <div className={`${openfilter ? 'h-auto': 'h-0 lg:h-auto'} overflow-hidden transition-all duration-700`}>
          <div className='px-5 pt-4'>
            <p className='font-medium text-gray-800'>Popular filters</p>
            {roomTypes.map((room,index)=>(
              <CheckBox key={index} label={room}/>
            ))}
          </div>
          <div className='px-5 pt-5'>
            <p className='font-medium text-gray-800'>Price Range</p>
            {princeRange.map((range,index)=>(
              <CheckBox key={index} label={`$ ${range}`}/>
            ))}
          </div>
          <div className='px-5 pt-5 pb-5'>
            <p className='font-medium text-gray-800'>Short By</p>
            {sortOption.map((option,index)=>(
              <RadioButton key={index} label={option}/>
            ))}
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Rooms