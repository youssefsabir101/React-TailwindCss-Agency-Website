import React from 'react'
import { Footer } from 'flowbite-react';
import {  BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import sabcoding from '../assets/sabcoding.png';
function FooterSection() {
  return (
    <div className='mt-8 '>
        <Footer container className='bg-neutralSilver'>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className='space-y-4 mb-8 lg:ml-40 lx:ml-40'>
            <a href='#' className='text-2xl font-semibold flex items-center space-x-3'>
                <img src={sabcoding} alt="" className='w-10 inline-block items-center'/> 
                <span className='text-brandPrimary'>SabCoding</span>
            </a>
            <div>
              <p className='mb-2'>Copyright &copy; 2023 SabCoding</p>
              <p>All rights reserved</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 lg:mr-40 lx:mr-40">
            <div>
              <Footer.Title title="link" />
              <Footer.LinkGroup col>
                <Footer.Link href="home">
                  Home
                </Footer.Link>
                <Footer.Link href="about">
                  About
                </Footer.Link>
                <Footer.Link href="Services">
                  Services
                </Footer.Link>
                <Footer.Link href="Products">
                  Products
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  Github
                </Footer.Link>
                <Footer.Link href="#">
                  Linkdin
                </Footer.Link>
                <Footer.Link href="#">
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="#">
                  Terms & Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            by="By Youssef Sabir"
            href="#"
            year={2023}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="#"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="#"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="#"
              icon={BsTwitter}
            />
            <Footer.Icon
              href="#"
              icon={BsGithub}
            />
          </div>
        </div>
      </div>
    </Footer>
    </div>
  )
}
export default FooterSection;