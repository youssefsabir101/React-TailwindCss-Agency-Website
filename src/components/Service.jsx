import React from 'react'
import c1 from '../assets/clients/c1.png';
import c2 from '../assets/clients/c2.png';
import c3 from '../assets/clients/c3.png';
import c4 from '../assets/clients/c4.png';
import c5 from '../assets/clients/c5.png';
import c6 from '../assets/clients/c6.png';
import mo from '../assets/icons/mo.png';
import na from '../assets/icons/na.png';
import cl from '../assets/icons/cl.png';
const Service = () => {
  const services = [
    {id:1, title: "Membership Organisation", description: "our membership management software provides full automation of membership renwals and payments", img: mo},
    {id:2, title: "National Associations", description: "our membership management software provides full automation of membership renwals and payments", img: na},
    {id:3, title: "Clubs And Groups", description: "our membership management software provides full automation of membership renwals and payments", img: cl}
  ];
  return (
    <div className='md:px-14 px-14 py-16 max-w-screen-2xl mx-auto ' id='services'>
        <div className='text-center'>
            <h2 className='text-4xl text-neutralGrey font-semibold mb-2'>Our Clients</h2>
            <p className='text-neutralGrey '>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, fuga.
            </p>
            <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
                <img src={c1} alt="" className='lg:w-1/12 md:w-20 sm:w-16 max-sm:w-12'/>
                <img src={c2} alt="" className='lg:w-1/12 md:w-20 sm:w-16 max-sm:w-12'/>
                <img src={c3} alt="" className='lg:w-1/12 md:w-20 sm:w-16 max-sm:w-12'/>
                <img src={c4} alt="" className='lg:w-1/12 md:w-20 sm:w-16 max-sm:w-12'/>
                <img src={c5} alt="" className='lg:w-1/12 md:w-20 sm:w-16 max-sm:w-12'/>
                <img src={c6} alt="" className='lg:w-1/12 md:w-20 sm:w-16 max-sm:w-12'/>
            </div>
        </div>
        <div className='text-center'>
            <h2 className='text-4xl text-neutralGrey font-semibold mb-2'>Manage your entiere community in single system</h2>
            <p className='text-neutralGrey '>
                We have been working with some fortune 300+ clients
            </p>
        </div>
        <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
          {
            services.map(service => <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 
                                                                      hover:border-blue-500 transition-all duration-300 flex item-center justify-center h-full'>
                <div>
                    <div className='h-14 w-14 mb-4 mx-auto '>
                      <img src={service.img} alt="" className='-ml-5'/>
                    </div>
                    <h3 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>{service.title}</h3>
                    <p className='text-sm text-neutralGrey'>{service.description}</p>
                </div>
              </div>)
          }
        </div>
    </div>
  )
}
export default Service;