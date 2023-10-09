import React from 'react'
function Newsletter() {
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16 rounded-lg'>
        <div className='flex items-center justify-center lg:w-2/5 mx-auto'>
            <div className='text-center'>
                <h2 className='lg:text-5xl text-3xl text-neutral-800 font-semibold mb-6 lg:leading-snug'>Lorem ipsum dolor sit amet.</h2>
                <div className='flex items-center justify-center gap-8'>
                    <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-brandSecondary transition-all duration-300'>Get a Demo</button>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Newsletter;