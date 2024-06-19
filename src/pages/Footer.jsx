import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsFillSendFill } from "react-icons/bs";






export default function Footer() {
  return (
    <>
    <div className="bg-gradient-to-r from-yellow-100 to-purple-100 py-10">
      <div className="container px-6 lg:px-8 lg:m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-5 lg:justify-center lg:items-center">
          
         
          <div className='lg:grid lg:grid-cols-2 lg:gap-5'>
            <div>
            <div className="mb-4 md:m-5">
              <img src="https://wp.dynamiclayers.net/softgen/wp-content/uploads/sites/13/2024/05/logo-dark.png" alt="Softgen Logo" width={200} height={42} />
            </div>
            <p className="text-gray-600 text-[17px] font-normal lg:text-xl">Our success in creating business solutions is due in part specially to talented committed team.</p>
            <div className="mt-4 flex space-x-4 md:m-5 lg:mt-5 lg:m-0">
            
              <a href="#" className="bg-white p-2 hover:bg-blue-500  lg:p-5 m-2">
              <FaFacebookF className=''/>
              </a>
              <a href="#" className="bg-white p-2 hover:bg-blue-500 lg:p-5 lg:m-2">
              <FaTwitter />
              </a>
              <a href="#" className="bg-white p-2 hover:bg-blue-500 lg:p-5 lg:m-2">
              <FaInstagram />              </a>
              <a href="#" className="bg-white p-2 hover:bg-blue-500 lg:p-5 lg:m-2">
              <FaXTwitter />

              </a>
            </div>
            </div>
          
          
        
          <div className='md:m-5'>
            <h2 className="text-xl font-semibold text-gray-900 lg:text-2xl">Company</h2>
            <ul className="mt-4 space-y-2 lg:text-xl">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Our Team</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Help & FAQ's</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">News Insights</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Get In Touch</a></li>
            </ul>
          </div>
          </div>
          
          {/* Information */}
          
          <div className=' lg:grid lg:grid-cols-2 lg:gap-5 lg:justify-center 2xl:items-center'>
            <div className=''>
            <h2 className="text-xl font-semibold text-gray-900 lg:text-2xl lg:m-2">Information</h2>
            <div className="mt-4 space-y-2 lg:text-xl">
              <p className="text-gray-600 m-2">3770 Hidden Meadow Drive<br />Venturia, ND 58489</p>
              <p className="text-gray-600 m-2">(704) 555-0127</p>
              <p className="text-gray-600 m-2">softgen@example.com</p>
            </div>
            </div>
            <div className="mt-4">
            <div className='hidden lg:block lg:m-10 lg:mt-[-110px]'>
                        <img src='https://wp.dynamiclayers.net/softgen/wp-content/plugins/softgen-core/assets/img/subscrive-illustration.png' alt='' height={180} width={214} />
                    </div>
              <form>
                <div className="flex items-center py-2 mb-5 lg:mt-[-50px]">
                  <input className="bg-white w-full text-gray-700  p-5 lg:w-96 leading-tight focus:outline-none relative" type="email" placeholder="Your email address" aria-label="Email"/>
                  <button className="bg-yellow-500  text-sm text-white p-5 rounded absolute right-6 md:end-10 lg:end-20 2xl:end-56" type="button">
                  <BsFillSendFill className='text-blue-500' size={20} />

                  </button>
                </div>
              </form>
              <p className="text-gray-600 text-base font-normal mt-2 lg:text-xl  ">Get the latest updates and offers for business services yearly.</p>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-300 pt-4">
          <p className="text-gray-600 text-center font-normal text-base lg:text-xl">&copy; Copyright 2024 DynamicLayers. All Rights Reserved.</p>
        </div>
      </div>
    </div>
    </>
  );
}
