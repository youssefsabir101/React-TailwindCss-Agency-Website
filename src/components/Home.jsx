import React from 'react'
import { Carousel } from 'flowbite-react';
import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';
function Home() {
  return (
    <div className='bg-neutralSilver' id='home'>
        <div className='px-4 lg:px-14  mx-auto min-h-screen h-screen  '>
            <Carousel onSlideChange={slideIdx=>console.log(slideIdx)} className='w-full mx-auto px-20 max-sm:px-0'>


                <div className="my-28 py-12 flex flex-col sm:gap-12 md:flex md:flex-row-reverse items-center md:my-8 md:gap-0  lg:gap-0">
                    <div className='  md:w-2/5 lg:w-2/5 xl:w-3/5 xl:mr-40'>
                        <img src={banner1} alt="" className="sm:max-w-sm md:w-full    lg:mb-0 mx-auto h-auto "/>
                    </div>
                    <div className=' md:w-full sm:w-2xl  xl:ml-40' >
                        <h1 className='sm:text-3xl md:text-2xl lg:text-3xl xl:text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug pl-10'>
                        lessons and insights<br/>
                            <span className='text-brandPrimary leading-snug '>From 4 years</span>
                        </h1>
                        <p className='text-neutralGrey text-base mb-1 pl-10'>
                            where to grow your business as a photographer : 
                        </p>
                        <p className='text-neutralGrey text-base mb-4 pl-10'>
                            website or social media.
                        </p>
                        <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-brandSecondary transition-all duration-300 ml-10 sm:mb-8'>Register</button>
                    </div>
                </div>

                <div className="my-28 py-12 flex flex-col sm:gap-12 md:flex md:flex-row-reverse items-center md:my-8 md:gap-0  lg:gap-0">
                    <div className='  md:w-2/5 lg:w-2/5 xl:w-3/5 xl:mr-40'>
                        <img src={banner2} alt="" className="sm:max-w-sm md:w-full    lg:mb-0 mx-auto h-auto "/>
                    </div>
                    <div className=' md:w-full sm:w-2xl  xl:ml-40' >
                        <h1 className='sm:text-3xl md:text-2xl lg:text-3xl xl:text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug pl-10'>
                            lessons and insights<br/>
                            <span className='text-brandPrimary leading-snug '>From 4 years</span>
                        </h1>
                        <p className='text-neutralGrey text-base mb-1 pl-10'>
                            where to grow your business as a photographer : 
                        </p>
                        <p className='text-neutralGrey text-base mb-4 pl-10'>
                            website or social media.
                        </p>
                        <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-brandSecondary transition-all duration-300 ml-10 sm:mb-8'>Register</button>
                    </div>
                </div>

                <div className="my-28 py-12 flex flex-col sm:gap-12 md:flex md:flex-row-reverse items-center md:my-8 md:gap-0  lg:gap-0">
                    <div className='  md:w-2/5 lg:w-2/5 xl:w-3/5 xl:mr-40'>
                        <img src={banner3} alt="" className="sm:max-w-sm md:w-full    lg:mb-0 mx-auto h-auto "/>
                    </div>
                    <div className=' md:w-full sm:w-2xl  xl:ml-40' >
                        <h1 className='sm:text-3xl md:text-2xl lg:text-3xl xl:text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug pl-10'>
                            lessons and insights<br/>
                            <span className='text-brandPrimary leading-snug '>From 4 years</span>
                        </h1>
                        <p className='text-neutralGrey text-base mb-1 pl-10'>
                            where to grow your business as a photographer : 
                        </p>
                        <p className='text-neutralGrey text-base mb-4 pl-10'>
                            website or social media.
                        </p>
                        <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-brandSecondary transition-all duration-300 ml-10 sm:mb-8'>Register</button>
                    </div>
                </div>
            </Carousel>
        </div>
    </div>
  )
}
export default Home;