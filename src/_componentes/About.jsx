import React from 'react'
import image1 from "../../public/images/right-blocks.png"
import image2 from "../../public/images/leftblocks.png"
import Image from 'next/image'
import "./about.css"
import Box from './Box'
const About = () => {
  return (
    <div className='w-full  bg-yellow-50-300 py-11 relative'>

        <h2 className='text-5xl font-medium  py-9 text-center text-blue-950'>اختار الخطط</h2>
<Image className='right' src={image1} alt='image'/>
<Image src={image2} className='left' alt='image2'/>

<div className="flex flex-col items-center gap-y-6 lg:flex-row lg:justify-center lg:gap-x-16">
  <Box title={"box1"} />
  <Box title={"box2"} />
  <Box title={"box3"} />
</div>




    </div>
  )
}

export default About