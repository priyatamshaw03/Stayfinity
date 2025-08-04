import React from 'react'
import { assets, cities } from '../assets/assets'
import { Link } from 'react-router-dom';
import hotel1 from '../assets/hotel1.jpg';
import hotel2 from '../assets/hotel2.jpg';
import hotel3 from '../assets/hotel3.jpg';
import hotel4 from '../assets/hotel4.jpg';
import hotel5 from '../assets/hotel5.jpg';
import hotel6 from '../assets/hotel6.jpg';


const Hero = () => {
    const images = [hotel1, hotel2, hotel3, hotel4, hotel5, hotel6];
  return (
    <section
      className="bg-gradient-to-b from-[#F5F7FF] via-[#fffbee] to-[#E6EFFF] h-screen"
    >
    <main className="flex-grow flex flex-col items-center px-6 sm:px-10 max-w-7xl mx-auto w-full">

      <a href="#destination"
        className="mt-36 mb-6 flex items-center space-x-2 border border-indigo-600 text-indigo-600 text-xs rounded-full px-4 pr-1.5 py-1.5 hover:bg-indigo-50 transition"
      >
        <span>Explore Endless Comfort with Stayfinity</span>
        <span className="flex items-center justify-center size-6 p-1 rounded-full bg-indigo-600">
          <svg
            width="14"
            height="11"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 6.5h14M9.5 1 15 6.5 9.5 12"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </a>

      <h1 className="text-center text-gray-900 font-bold text-3xl sm:text-4xl md:text-5xl max-w-2xl leading-tight">
        Stay Where Moments{' '}
        <span className="text-indigo-600">Become Memories</span>
      </h1>

      <p className="mt-4 text-center text-gray-600 max-w-md text-sm sm:text-base leading-relaxed">
        Whether you're planning a weekend gateway or a dream vacation, we make finding the right place to stay simple and seamless.
      </p>
      <Link to={'/rooms'}
        className="mt-8 bg-indigo-600 text-white px-6 pr-2.5 py-2.5 rounded-full text-sm font-medium flex items-center space-x-2 hover:bg-indigo-700 transition cursor-pointer"
      >
        <span>Get Started</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.821 11.999h13.43m0 0-6.714-6.715m6.715 6.715-6.715 6.715"
            stroke="#fff"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>

      <div
        className="mt-14 flex sm:overflow-x-auto max-md:overflow-x-auto gap-6 max-w-5xl w-full pb-6"
      >
        {images.map((src, index) => (
            <img
              key={index}
              alt={`Hotel ${index + 1}`}
              className="w-36 h-44 rounded-lg hover:scale-105 transition duration-300 object-cover shadow-lg"
              src={src}
              width="120"
              height="140"
            />
          ))}

      </div>
    </main>
    </section>
  )
}
export default Hero
       