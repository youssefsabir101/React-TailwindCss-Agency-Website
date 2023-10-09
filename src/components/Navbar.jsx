import React, { useEffect, useState } from 'react';
import sabcoding from '../assets/sabcoding.png';
import { FaXmark, FaBars } from 'react-icons/fa6';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    // set toggle menu
    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);
    }
    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 100){
                setIsSticky(true);
            }
            else{
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.addEventListener('scroll', handleScroll);
        }
    });
    //items 
    const navItems = [
        {link: "Home", path: "home", },
        {link: "Services", path: "services", },
        {link: "About", path: "about", },
        {link: "Products", path: "products", },
        {link: "Testimonial", path: "Testimonial", },
        {link: "FAQ", path: "faq", }
    ];
  return (

        <header className='w-full bg-white md:bg-transparent fixed top-0 right-0 ' >
            <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 border-b bg-white duration-300" : ""}`} >
                <div className='flex justify-between items-center taxt-base gap-8'>
                    <a href='#' className='text-2xl font-semibold flex items-center space-x-3'>
                        <img src={sabcoding} alt="" className='w-10 inline-block items-center'/> 
                        <span className='text-brandPrimary'>SabCoding</span>
                    </a>
                    {/* nav item for large devices */}
                    <ul className='md:flex space-x-11 hidden '>
                        {navItems.map(({ link, path }) => (
                            <Link key={path}
                                    to={path}
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    className='block text-base text-gray900 hover:text-brandPrimary first:font-medium cursor-pointer '>
                                    {link}
                            </Link>
                        ))}
                    </ul>
                    {/* btn for large devices */}
                    <div className='space-x-12 hidden lg:flex items-center'>
                        <a href="#" className='hidden lg:flex item text-brandPrimary'>
                            Login
                        </a>
                        <button className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-brandSecondary'>
                            Sign up
                        </button>
                    </div>

                    {/* menu btn for mobile */}
                    <div className='md:hidden'>
                            <button className='focus:outline-none focus:text-gary-500'
                            
                            onClick={toggleMenu}>
                            {isMenuOpen ? <FaXmark className="h-6 text-brandSecondary" /> : <FaBars className="h-6 text-brandSecondary" />}
                                
                            </button>
                    </div>
                </div>
                {/* nav items for mobile */}
                <div className={`space-y-4 px-4 mt-16 py-7 bg-white bg-opacity-20 backdrop-blur-lg ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                        {navItems.map(({ link, path }) => (
                            <Link key={path}
                                    to={path}
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    className='block text-base text-gray900 hover:text-brandPrimary first:font-medium'>
                                    {link}
                            </Link>
                        ))}
                </div>
            </nav>
        </header>
  );
};
export default Navbar;