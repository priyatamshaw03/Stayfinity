import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='bg-gradient-to-b from-[#F1EAFF] to-[#FFFFFF] text-gray-800 pt-8 px-6 md:px-16 lg:px-24 xl:px-32'>
            <div className='flex flex-wrap justify-between gap-12 md:gap-6'>
                <div className='max-w-80'>
                    <img src={assets.logo} alt="logo" className='mb-4 h-9' />
                    <p className='text-sm'>
                        Discover the world's most extraordinary places to stay, from boutique hotels to luxury villas and private islands. Explore the endless comfort with us.
                    </p>
                    <div className='flex items-center gap-3 mt-4'>
                        {/* Instagram */}
                        <img src={assets.instagramIcon} alt="instagram" className='w-6'/>
                        {/* Facebook */}
                        <img src={assets.facebookIcon} alt="facebook" className='w-6'/>
                        {/* Twitter */}
                        <img src={assets.twitterIcon} alt="twitter" className='w-6'/>
                        {/* LinkedIn */}
                        <img src={assets.linkendinIcon} alt="linkedin" className='w-6'/>
                    </div>
                </div>

                <div>
                    <p className='text-lg text-gray-800'>Quick links</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Offers</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact us</a></li>
                    </ul>
                </div>

                <div>
                    <p className='text-lg text-gray-800'>Get in touch</p>
                    <div className="mt-4 text-sm space-y-2">
                    <p>+91 9876543210</p>
                    <p>stafinity25@gmail.com</p>
                </div>
                </div>

                <div className='max-w-80'>
                    <p className='text-lg text-gray-800'>Stay updated</p>
                    <p className='mt-3 text-sm'>
                        Subscribe to our newsletter for inspiration and special offers.
                    </p>
                    <div className='flex items-center mt-4'>
                        <form className="flex items-center border gap-2 bg-white border-gray-500/30 h-12 max-w-md w-full rounded-full overflow-hidden">
                        <input type="email" placeholder="Enter your email" className="w-full h-full pl-4 outline-none text-sm bg-transparent placeholder-gray-500" required/>
                        <button type="submit" className="bg-indigo-500 active:scale-95 transition w-44 h-10 rounded-full text-sm text-white cursor-pointer mr-1">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
            <hr className='border-gray-300 mt-8' />
            <div className='flex text-sm justify-center md:flex-row gap-2 items-center py-5'>
                <p>Copyright {new Date().getFullYear()} © Stayfinity. All rights reserved.</p>
            </div>
        </div>
  )
}

export default Footer