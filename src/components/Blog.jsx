import React from 'react'
import b1 from '../assets/b1.jpg';
import b2 from '../assets/b2.jpg';
import b3 from '../assets/b3.jpg';
import arrows from '../assets/arrows.png';
function Blog() {
    const blog = [
        {id:1, title: "Creating Streamlined Sefeguard Processing with OneRen", img: b1},
        {id:2, title: "What are you Sefeguard responsibilities and how can you mange them ?",  img: b2},
        {id:3, title: "Revamping the Membership Model with Triathlon Australia", img: b3}
    ];
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12' id='faq'>
        <div className='text-center md:w-1/2 mx-auto'>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-4'>Caring is the new marketing</h2>
            <p className='md:w-3/4 text-sm text-neutralGrey mb-8 mx-auto'>
                The Nextcent blog is the best place to read about the latest membership insights, 
                trends and more. See who's joining the community, read about how our community 
                are increasing their membership income and lot's more.​
            </p>
        </div>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 item-center justify-between'>
            {
                blog.map(blog => <div key={blog.id} className='mx-auto relative mb-12 cursor-pointer'>
                                        <img src={blog.img} alt='' className='hover:scale-95 transition-all duration-300 rounded-lg'/>
                                        <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12'>
                                            <h3 className='mb-3 text-neutralGrey font-semibold'>{blog.title}</h3>
                                            <div className='hover:-translate-y-2 transition-all duration-300'>
                                                <a href="/" className='font-bold text-brandPrimary '>Meet customers <img src={arrows} alt=""  className='w-4 inline-block ml-2'/></a>
                                            </div>
                                        </div>
                                 </div>
                        )
            }
        </div>
    </div>
  )
}
export default Blog;