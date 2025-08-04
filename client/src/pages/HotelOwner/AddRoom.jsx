import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets } from '../../assets/assets'

const AddRoom = () => {
    const [images, setImages] = useState({
        1: null,
        2: null,
        3: null,
        4: null,

    })
    const [input, setInput]=useState({
        roomType: '',
        pricePerNight: 0,
        amenities: {
            'Free WiFi': false,
            'Free Breakfast': false,
            'Room Service': false,
            'Mountain View': false,
            'Pool Access': false,
        }
    })
  return (
    <form>
        <Title align='left' font='outfit' title='Add Room' subTitle='Fill in the details carefully and accurate room details, pricing and amenities to enhance the user booking experience.'/>

        <p className='text-gray-800 mt-2 md:mt-10'>Images</p>
        <div className='grid grid-cols-2 sm:flex gap-4 my-3 md:my-6 flex-wrap'>
            {Object.keys(images).map((key)=>(
                <label htmlFor={`roomImage ${key}`} key={key}>
                    <img className='max-h-20 cursor-pointer opacity-90'
                    src={images[key] ? URL.createObjectURL(images[key]) : assets.uploadArea} alt="" />
                    <input type="file" accept='image/*' id={`roomImage ${key}`}  hidden onChange={e=> setImages({...images, [key]: e.target.files[0]})}/>
                </label>
            ))}
        </div>
        <div className='w-full flex max-sm:gap-6 sm:gap-4 mt-4'>
            <div className='flex-1 max-w-48'>
                <p className='text-gray-800 mt-2 md:mt-4'>Room Type</p>
                <select onChange={e=> setInput({...input, roomType: e.target.value})}
                className='border opacity-70 text-sm border-gray-300 mt-1 rounded p-2 w-full'>
                    <option value="">Select Room Type</option>
                    <option value="Single Bed">Single Bed</option>
                    <option value="Double Bed">Double Bed</option>
                    <option value="Luxury Room">Luxury Room</option>
                    <option value="Family Suite">Family Suite</option>
                </select>
            </div>
            <div>
                <p className='text-gray-800 mt-2 md:mt-4'>
                    Price <span className='text-sm'>/ night</span>
                </p>
                <input type="number" placeholder='0' className='border border-gray-300 mt-1 rounded py-1 px-2 w-22' value={input.pricePerNight} onChange={e=> setInput({...input, pricePerNight: e.target.value})}/>
            </div>
        </div>

        <p className='text-gray-800 mt-4 '>Facilities</p>
        <div className='flex flex-col flex-wrap text-gray-800 mt-1 text-sm max-w-sm'>
            {Object.keys(input.amenities).map((amenity, index)=>(  
                <div key={index}>
                    <input type="checkbox" id={`amenities ${index+1}`} checked={input.amenities[amenity]} onChange={()=> setInput({...input, amenities: {...input.amenities, [amenity]: !input.amenities[amenity]}})}/>
                    <label htmlFor={`amenities ${index+1}`}> {amenity}</label>
                </div>
            ))}
        </div>
        <button className='bg-indigo-600 text-white px-8 py-1.5 rounded-full mt-3 md:mt-6 cursor-pointer'>Add</button>
    </form>
  )
}

export default AddRoom