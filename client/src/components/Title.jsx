import React from 'react'

const Title = ({title, subTitle, align, font}) => {
  return (
    <div className={`flex flex-col justify-center items-center text-center ${align === "left" && "md:items-start md:text-left"}`}>
        <h1 className={`text-4xl font-medium md:text-[40px]${font}`}>{title}</h1>
        <p className='text-md md:text-base text-gray-500 mt-10 max-w-174'>{subTitle}</p>
    </div>
  )
}

export default Title