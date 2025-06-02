import React from "react";
import "./hero.css";
import Image from "next/image";
import image from "../../public/images/one.png";
import image1 from "../../public/images/tow.png";
import image2 from "../../public/images/three.png";

const Hero = () => {
  return (
    <div className="hero">

           <div className=" w-full">
 <div className="text-center w-full h-screen py-5">
          <h1 className="text-1xl py-2 font-light text-white sm:text-5xl">
            الاستضافات  المشتركة
          </h1>
          <p className=" text-white text-sm font-medium">
            كلام و وصف للاستضافات المشتركة كلام و وصف للاستضافات المشتركة كلام و
       
            وصف للاستضافات كلام و المشتركة كلام      <br /> و وصف للاستضافات المشتركة{" "}
          </p>

          <div className="btns mt-5 flex justify-center gap-7">
           
             <a
  className="inline-block rounded-sm bg-white px-8 py-3 text-sm font-medium text-blue-950 text-2xl transition hover:scale-110 hover:rotate-2 focus:ring-3 focus:outline-hidden"
  href="#"
>
    أنشاء حساب
</a>
         <a
  className="inline-block rounded-sm border border-current px-8 py-3 text-sm font-medium text-2xl text-white cursor-pointer transition hover:scale-110 hover:rotate-2 focus:ring-3 focus:outline-hidden"
  href="#"
>
  عرض الاسعار
</a>
          </div>
        </div> 
        <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mx-auto text-center">
            <Image src={image} className="one" alt="one" />

            <Image src={image1} className="tow" alt="one" />
            <Image src={image2} className="three" alt="one" />
          </div>
        </div> 
           </div>
  
      








      {/* <section className="bg-gray-200 lg:grid lg:h-screen hero lg:w-full xlg:h-screen"> */}
        {/**/}
        {/* */}
      {/* </section> */}
        
    </div>
  );
};

export default Hero;
