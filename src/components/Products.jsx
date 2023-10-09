import React from 'react'
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import c1 from '../assets/clients/c1.png';
import c2 from '../assets/clients/c2.png';
import c3 from '../assets/clients/c3.png';
import c4 from '../assets/clients/c4.png';
import c5 from '../assets/clients/c5.png';
import c6 from '../assets/clients/c6.png';

import arrows from '../assets/arrows.png';

function Products() {
  return (
    <div >
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='products'> 
            <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                <div className='md:w-2/5 mx-auto'>
                    <img src={img2} alt="" />
                </div>
                <div className='md:w-3/5 mx-auto'>
                    <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>How to design your website like we did</h2>
                    <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>
                    Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, 
                    augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque 
                    elit erat a magna. Donec quis erat at libero ultrices mollis. In hac 
                    habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi 
                    facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet 
                    urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur 
                    quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis 
                    libero. Donec consectetur faucibus ipsum id gravida.
                    </p>
                    <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-brandSecondary transition-all duration-300'>Learn More</button>
                </div>
            </div>
        </div>

        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16 rounded-md' id='Testimonial'>
            <div className='flex flex-col md:flex-row justify-between items-centergap-8'>
                <div className='md:w-1/3 px-4'>
                    <img src={img3} alt="" />
                </div>

                <div className='md:w-2/3 mx-auto '>
                    <div>
                        <p className='md:w-4/5 text-sm text-neutralGrey mb-8 leading-7'>
                        Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, 
                        vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, 
                        tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet 
                        elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, 
                        quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. 
                        Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, 
                        eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                        </p>
                        <h5 className='text-brandPrimary text-xl font-semibold mb-2'>
                            Ysf Sabir
                        </h5>
                        <p className='text-neutralGrey text-sm'>British Dragon Boat Racing Association</p>
                        <div>
                            <div className='my-8 flex flex-wrap justify-between items-center gap-0 px-0 mx-0'>
                                <img src={c1} alt="" className='lg:w-16 md:w-16 sm:w-14 max-sm:w-10'/>
                                <img src={c3} alt="" className='lg:w-16 md:w-16 sm:w-14 max-sm:w-10'/>
                                <img src={c2} alt="" className='lg:w-16 md:w-16 sm:w-14 max-sm:w-10'/>
                                <img src={c4} alt="" className='lg:w-16 md:w-16 sm:w-14 max-sm:w-10'/>
                                <img src={c5} alt="" className='lg:w-16 md:w-16 sm:w-14 max-sm:w-10'/>
                                <img src={c6} alt="" className='lg:w-16 md:w-16 sm:w-14 max-sm:w-10'/>
                                <div className='hover:-translate-y-2 transition-all duration-300'>
                                    <a href="/" className='font-bold text-brandPrimary '>Meet customers <img src={arrows} alt=""  className='w-4 inline-block ml-2'/></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
export default Products;