import React from 'react'
import { Card } from './Card'
import image1 from "../../public/images/a.png"
import image2 from "../../public/images/b.png"
import image3 from "../../public/images/c.png"
import image4 from "../../public/images/e.png"
import image5 from "../../public/images/f.png"
import image6 from "../../public/images/g.png"
import image7 from "../../public/images/d.png"

export const Servicses = () => {
    let card=[
        {
            image:image1
        },
         {
            image:image2
        },
         {
            image:image3
        },
         {
            image:image4
        },
         {
            image:image5
        },
         {
            image:image6
        },
         {
            image:image7
        },
         {
            image:image1
        }
    ]
  return (
    <div className='w-full   py-11 relative'>
        <h2 className='text-center text-5xl text-blue-900'>هل تحتاج الى تراخيص مفرده؟</h2>
        <h5 className='text-center text-3xl text-blue-900 mt-3'>احصل على ترخيص مفرد للخوادم الخاصة و الخوادم المخصصة الكاملة</h5>


   <div className="w-10/12 mx-auto  py-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {card.map((i, index) => (
    <Card image={i.image} key={index} />
  ))}
</div>


    </div>
  )
}
