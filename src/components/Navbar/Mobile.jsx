
import React, { useState } from 'react';
import { HiMiniBars3BottomRight } from 'react-icons/hi2';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';

export default function Mobile() {
  const [showMenu, setShowMenu] = useState(false);
  const [home, setHome] = useState(true);
  const [company, setCompany] = useState(true);
  const [project, setProject] = useState(true);
  const [blog, setBlog] = useState(true);

  return (
    <>
      <div className='w-full'>
        <div className='flex justify-between mt-0 m-4'>
          <div>
            <img src='https://wp.dynamiclayers.net/softgen/wp-content/themes/softgen/assets/img/logo.png' alt='logo' height={34} width={160} />
          </div>
          <div>
            <HiMiniBars3BottomRight 
              onClick={() => setShowMenu(true)} 
              size={30} 
            />
          </div>
        </div>

        {showMenu && (
          <div className='fixed top-0 left-0 w-full h-full bg-white  p-5 shadow-lg z-50'>
            <div className='flex justify-end m-10'>
              <RxCross2 
                className='hover:bg-blue-900 rounded-xl' 
                onClick={() => setShowMenu(false)} 
                size={30} 
              />
            </div>
            <ul className='m-5 font-bold text-lg'>
              <div className='flex justify-between m-5'>
                <li className='hover:text-blue-900'>Home</li>
                {home ? (
                  <FaPlus onClick={() => setHome(false)} />
                ) : (
                  <FaMinus onClick={() => setHome(true)} />
                )}
              </div>
              {!home && (
                <ul className='m-10 mt-5 text-gray-500'>
                  <li className='hover:text-blue-900 m-2'>Marketing Startup</li>
                  <li className='hover:text-blue-900 m-2'>App promotion</li>
                  <li className='hover:text-blue-900 m-2'>Software & Sass</li>
                  <li className='hover:text-blue-900 m-2'>IT solution</li>
                </ul>
              )}

              <div className='flex justify-between m-5'>
                <li className='hover:text-blue'>Company</li>
                {company ? (
                  <FaPlus onClick={() => setCompany(false)} />
                ) : (
                  <FaMinus onClick={() => setCompany(true)} />
                )}
              </div>
              {!company && (
                <ul className='m-10 mt-5 text-gray-500'>
                  <li className='hover:text-blue-900 m-2'>About Us</li>
                  <li className='hover:text-blue-900 m-2'>Our Services</li>
                  <li className='hover:text-blue-900 m-2'>Service Details</li>
                  <li className='hover:text-blue-900 m-2'>Our Team</li>
                  <li className='hover:text-blue-900 m-2'>Team Details</li>
                  <li className='hover:text-blue-900 m-2'>Plans & Pricing</li>
                  <li className='hover:text-blue-900 m-2'>Testimonials</li>
                  <li className='hover:text-blue-900 m-2'>Help & Faq’s</li>
                  <li className='hover:text-blue-900 m-2'>404 Error</li>
                </ul>
              )}

              <div className='flex justify-between m-5'>
                <li className='hover:text-blue'>Project</li>
                {project ? (
                  <FaPlus onClick={() => setProject(false)} />
                ) : (
                  <FaMinus onClick={() => setProject(true)} />
                )}
              </div>
              {!project && (
                <ul className='m-10 mt-5 text-gray-500'>
                  <li className='hover:text-blue-900 m-2'>Our Projects</li>
                  <li className='hover:text-blue-900 m-2'>Project Details</li>
                </ul>
              )}

              <div className='flex justify-between m-5'>
                <li className='hover:text-blue'>Blog</li>
                {blog ? (
                  <FaPlus onClick={() => setBlog(false)} />
                ) : (
                  <FaMinus onClick={() => setBlog(true)} />
                )}
              </div>
              {!blog && (
                <ul className='m-10 mt-5 text-gray-500'>
                  <li className='hover:text-blue-900 m-2'>Blog Grid</li>
                  <li className='hover:text-blue-900 m-2'>Blog Classic</li>
                  <li className='hover:text-blue-900 m-2'>Blog Details</li>
                </ul>
              )}

              <div className='flex justify-between m-5'>
                <li className='hover:text-blue'>Contact</li>
              </div>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}


