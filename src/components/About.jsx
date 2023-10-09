import React from 'react'
import img1 from '../assets/img1.png';
import member from '../assets/icons/member.png';
import club from '../assets/icons/club.png';
import event from '../assets/icons/event.png';
import payment from '../assets/icons/payment.png';

function About() {
  return (
    <div id='about'>
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'> 
            <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                <div className='md:w-2/5 mx-auto'>
                    <img src={img1} alt="" />
                </div>
                <div className='md:w-3/5 mx-auto'>
                    <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>The unseen of spending three years at Pixelgrade</h2>
                    <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Vitae pariatur cupiditate saepe ullam eveniet, maxime adipisci 
                        iure voluptate incidunt. Saepe voluptatem quibusdam pariatur ad 
                        tenetur animi libero, accusantium rem error?
                    </p>
                    <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-brandSecondary transition-all duration-300'>Learn More</button>
                </div>
            </div>
        </div>
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16 rounded-md'>
            <div className='flex flex-col md:flex-row justify-between items-centergap-8'>

                <div className='md:w-1/2'>
                    <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3'>Helping a local
                        <br/>
                        <span className='text-brandPrimary'>Helping a local business reinvent itself</span>
                    </h2>
                    <p>We reached here with our hard work and dedication</p>
                </div>

                <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
                    <div className='space-y-8'>
                        <div className='flex items-center gap-4'>
                            <img src={member} alt="" className='w-14'/>
                            <div>
                                <h4 className='text-2xl text-neutralDGrey font-semibold'>87,654</h4>
                                <p>Members</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <img src={club} alt="" className='w-14'/>
                            <div>
                                <h4 className='text-2xl text-neutralDGrey font-semibold'>16,120</h4>
                                <p>Clubs</p>
                            </div>
                        </div>
                    </div>

                    <div className='space-y-8'>
                        <div className='flex items-center gap-4'>
                            <img src={event} alt="" className='w-14'/>
                            <div>
                                <h4 className='text-2xl text-neutralDGrey font-semibold'>16,324</h4>
                                <p>Events </p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <img src={payment} alt="" className='w-14'/>
                            <div>
                                <h4 className='text-2xl text-neutralDGrey font-semibold'>1,951,753</h4>
                                <p>Payments</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
  )
}
export default About;