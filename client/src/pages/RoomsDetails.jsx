import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets'
import StarRating from '../components/StarRating'

const RoomsDetails = () => {
    const {id}=useParams()
    const [room, setRoom]=useState(null)
    const [mainImage, setmainImage]=useState(null)

    useEffect(()=>{
        const room = roomsDummyData.find(room =>room._id === id)
        room && setRoom(room)        
        room && setmainImage(room.images[0])        
    },[])

  return room && (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
        {/* Rooms Details */}
        <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
            <h1 className='text-3xl md:text-4xl'>{room.hotel.name} <span className='text-sm'>({room.roomType})</span>
            </h1>
            <p className='text-sm py-1.5 px-3 text-white bg-orange-500 rounded-full'>20% OFF</p>
        </div>

        <div className='flex item-center gap-1 mt-2'>
            <StarRating/>
            <p className='ml-2'>200+ reviews</p>
        </div>

        <div className='flex item-center gap-1 text-gray-500 mt-2'>
            <img className='flex' src={assets.locationIcon} alt="location" />
            <span>{room.hotel.address}</span>
        </div>

        <div className='flex flex-col lg:flex-row gap-6 mt-6'>
            <div className='lg:w-1/2 w-full' >
            <img src={mainImage} alt="room image" className='w-full rounded-xl shadow-lg object-cover'/>
            </div>
            <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
                {room?.images.length > 1 && room.images.map((image, index)=>(
                    <img onClick={()=>setmainImage(image)}
                    key={index} src={image} alt="room-image" className={`w-full rounded-xl shadow-lg object-cover cursor-pointer ${mainImage === image&& 'outline-3 outline-orange-500'}`}/>
                ))}
            </div>
        </div>
        {/* room highlights */}
        <div className='flex flex-col md:flex-row mt-10 md:justify-between'>
            <div className='flex flex-col'>
                <h1 className='text-3xl md:text-4xl'>Experience Luxury Like Never Before</h1>
                <div className='flex flex-wrap item-center gap-4 text-gray-500 mt-3 mb-6'>
                    {room.amenities.map((item, index)=>(
                        <div key={index} className='flex item-center gap-2 px-3 py-2 rounded-lg bg-gray-100'>
                            <img src={facilityIcons[item]} alt={item} className='w-5 h-5'/>
                            <p className='text-sm'>{item}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* room price */}
            <p className='text-2xl font-medium'>$ {room.pricePerNight} / night</p>
        </div>

        {/* form */}

        <form className='border bg-white text-gray-500 rounded-xl mt-16 mx:auto p-8 flex flex-col md:items-center justify-around shadow-lg gap-4 max-w-auto md:flex-row'>
                    <div >
                        <div className='flex items-center gap-2'>
                            <img src={assets.calenderIcon} alt="" className='h-4'/>
                            <label htmlFor="checkIndate">Check in</label>
                        </div>
                        <input id="checkIndate" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
                    </div>
        
                    <div>
                        <div className='flex items-center gap-2'>
                            <img src={assets.calenderIcon} alt="" className='h-4'/>
                            <label htmlFor="checkOutdate">Check out</label>
                        </div>
                        <input id="checkOutdate" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
                    </div>
        
                    <div className='flex md:flex-col max-md:gap-2 max-md:items-center'>
                        <label htmlFor="guests">Guests</label>
                        <input min={1} max={4} id="guests" type="number" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-20" placeholder="0" required/>
                    </div>
 
                    <button type='submit' className='flex items-center justify-center gap-1 rounded-4xl bg-indigo-600 py-2 px-8 text-white cursor-pointer max-md:w-full max-md:py-2'>
                        Check Availability
                    </button>
                </form>

                {/* common specification */}
                <div className='mt-25 space-y-4'>
                    {roomCommonData.map((spec, index)=>(
                        <div key={index} className='flex items-start gap-2'>
                            <img src={spec.icon} alt={`${spec.title}-icon`} 
                            className='w-6.5'/>
                            <p className='text-base'>{spec.title}</p>
                            <p className='text-gray-500'>{spec.description}</p>
                        </div>
                    ))}
                </div>

                <div className='max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500'>
                    <p>I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay provides.</p>
                </div>

                {/* owner/host */}
                <div className='flex flex-col items-start gap-4'>
                    <div className='flex gap-4'>
                        <img src={assets.hotelUser} alt="owner" className='h-14 w-14 rounded-full'/>
                        <div>
                            <p className='text-lg md:text-xl'>Hosted by {room.hotel.name}</p>
                            <div className='flex items-center mt-1'>
                                <StarRating/>
                                <p className='ml-2'>200+ reviews</p>
                            </div>
                        </div>
                    </div>
                    <button className='rounded-full bg-indigo-600 hover:bg-indigo-700 transition-all text-white py-2 px-7 max-md:w-full cursor-pointer mt-4'>Contact now</button>
                </div>
    </div>
  )
}

export default RoomsDetails