import React from 'react'
// import image from "../../public/images/a.png"
import Image from 'next/image'
import "./card.css"
export const Card = ({image}) => {
  return (
    <div className='w-2xs h-64 shadow-2xl shadow-blue-200 card hover:scale-105 cursor-pointer hover:shadow-blue-500 transition-all rounded-2xl'>
        <Image src={image} alt='one'/>
        <hr className='border-x-neutral-500' />
        <div className="flex justify-around align-middle">
            <h2 className='text-2xl text-blue-950 mt-2'>15.00$ <sub className='text-gray-400'>/month</sub></h2>
           <div>
             <i className=" bg-blue-950 text-white p-1.5 rounded-3xl cursor-pointer mt-3 fa-solid fa-plus"></i>
           </div>
        </div>

    </div>
  )
}
