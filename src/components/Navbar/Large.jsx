
import React, { useState } from 'react';
import { HiMiniBars3BottomRight } from 'react-icons/hi2';
import { RxCross2 } from 'react-icons/rx';

export default function Large() {
  const [info, setInfo] = useState(false);

  return (
    <>
      <div className='w-full bg-transparent flex justify-center'>
        <div className='flex justify-between m-5 w-[1170px]'>
          <div>
            <img 
              src='https://wp.dynamiclayers.net/softgen/wp-content/themes/softgen/assets/img/logo.png' 
              alt='logo' 
              height={34} 
              width={160} 
            />
          </div>

          <div>
            <ul className='flex text-base font-medium gap-10'>
              <div className='relative group'>
                <li className='cursor-pointer'>Home</li>
                <ul className='absolute w-60 left-0 mt-8 p-5 rounded-lg bg-white border border-gray-200 shadow-lg opacity-0 group-hover:opacity-100 group-hover:inline-block hidden group-hover:relative'>
                  <li className='hover:text-blue-900 m-2'>Marketing Startup</li>
                  <li className='hover:text-blue-900 m-2'>App promotion</li>
                  <li className='hover:text-blue-900 m-2'>Software & Sass</li>
                  <li className='hover:text-blue-900 m-2'>IT solution</li>
                </ul>
              </div>

              <div className='relative group'>
                <li className='cursor-pointer'>Company</li>
                <ul className='absolute w-60 left-0 mt-8 p-5 rounded-lg bg-white border border-gray-200 shadow-lg opacity-0 group-hover:opacity-100 group-hover:block hidden'>
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
              </div>

              <div className='relative group'>
                <li className='cursor-pointer'>Projects</li>
                <ul className='absolute w-60 left-0 mt-8 p-5 rounded-lg bg-white border border-gray-200 shadow-lg opacity-0 group-hover:opacity-100 group-hover:block hidden'>
                  <li className='hover:text-blue-900 m-2'>Our Projects</li>
                  <li className='hover:text-blue-900 m-2'>Project Details</li>
                </ul>
              </div>

              <div className='relative group'>
                <li className='cursor-pointer'>Blog</li>
                <ul className='absolute w-60 left-0 mt-8 p-5 rounded-lg bg-white border border-gray-200 shadow-lg opacity-0 group-hover:opacity-100 group-hover:block hidden'>
                  <li className='hover:text-blue-900 m-2'>Blog Grid</li>
                  <li className='hover:text-blue-900 m-2'>Blog Classic</li>
                  <li className='hover:text-blue-900 m-2'>Blog Details</li>
                </ul>
              </div>

              <div>
                <li>Contact</li>
              </div>
            </ul>
          </div>

          <div className='flex gap-5'>
            <button className='w-40 h-11 bg-blue-600 text-white font-medium'>Start Free Trial</button>
            <HiMiniBars3BottomRight 
              onClick={() => setInfo(!info)} 
              className='m-2' 
              size={30} 
            />
          </div>
        </div>
      </div>

      {info && (
        <div className='fixed top-0 right-0 w-[410px] bg-white h-full text-gray-500 p-5 shadow-lg z-50'>
          <div className='flex flex-col text-start gap-5'>
            <div className='flex justify-end'>
              <RxCross2 onClick={() => setInfo(!info)} size={30} />
            </div>
            
            <div className='m-10'>
              <img 
                src='https://wp.dynamiclayers.net/softgen/wp-content/themes/softgen/assets/img/logo.png' 
                alt='logo' 
                height={34} 
                width={160} 
              />
            </div>

            <div className='text-lg font-medium'>
              <p>Our success in creating business solutions is due in large part to our talented and committed team.</p>
            </div>

            <div className='text-base font-medium'>
              <p>Call For Support:</p>
              <p className='text-blue-900 font-bold text-2xl'>5267-214-392</p>
            </div>

            <div className='text-base font-medium'>
              <p>You Can Find Us At:</p>
              <p className='font-medium text-2xl'>3770 Hidden Meadow Drive Venturia, ND 58489</p>
            </div>

            <div className='text-base font-medium'>
              <p>Email Now:</p>
              <p className='font-medium text-2xl'>info.softgen@mail.com</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}



// import React, { useState } from 'react';
// import { HiMiniBars3BottomRight } from 'react-icons/hi2';
// import { RxCross2 } from 'react-icons/rx';

// export default function Large() {
//   const [info, setInfo] = useState(false);

//   return (
//     <>
//       <div className='w-full bg-transparent flex justify-center sticky top-0 z-50'>
//         <div className='flex justify-between m-5 w-[1170px] sticky'>
//           <div>
//             <img 
//               src='https://wp.dynamiclayers.net/softgen/wp-content/themes/softgen/assets/img/logo.png' 
//               alt='logo' 
//               height={34} 
//               width={160} 
//             />
//           </div>

//           <div>
//             <ul className='flex text-base font-medium gap-10'>
//               <div className='relative group'>
//                 <li className='cursor-pointer'>Home</li>
//                 <ul className='absolute w-60 left-0 mt-8 p-5 rounded-lg bg-white border border-gray-200 shadow-lg opacity-0 group-hover:opacity-100 group-hover:inline-block hidden group-hover:relative'>
//                   <li className='hover:text-blue-900 m-2'>Marketing Startup</li>
//                   <li className='hover:text-blue-900 m-2'>App promotion</li>
//                   <li className='hover:text-blue-900 m-2'>Software & Sass</li>
//                   <li className='hover:text-blue-900 m-2'>IT solution</li>
//                 </ul>
//               </div>

//               <div className='relative group'>
//                 <li className='cursor-pointer'>Company</li>
//                 <ul className='absolute w-60 left-0 mt-8 p-5 rounded-lg bg-white border border-gray-200 shadow-lg opacity-0 group-hover:opacity-100 group-hover:block hidden'>
//                   <li className='hover:text-blue-900 m-2'>About Us</li>
//                   <li className='hover:text-blue-900 m-2'>Our Services</li>
//                   <li className='hover:text-blue-900 m-2'>Service Details</li>
//                   <li className='hover:text-blue-900 m-2'>Our Team</li>
//                   <li className='hover:text-blue-900 m-2'>Team Details</li>
//                   <li className='hover:text-blue-900 m-2'>Plans & Pricing</li>
//                   <li className='hover:text-blue-900 m-2'>Testimonials</li>
//                   <li className='hover:text-blue-900 m-2'>Help & Faq’s</li>
//                   <li className='hover:text-blue-900 m-2'>404 Error</li>
//                 </ul>
//               </div>

//               <div className='relative group'>
//                 <li className='cursor-pointer'>Projects</li>
//                 <ul className='absolute w-60 left-0 mt-8 p-5 rounded-lg bg-white border border-gray-200 shadow-lg opacity-0 group-hover:opacity-100 group-hover:block hidden'>
//                   <li className='hover:text-blue-900 m-2'>Our Projects</li>
//                   <li className='hover:text-blue-900 m-2'>Project Details</li>
//                 </ul>
//               </div>

//               <div className='relative group'>
//                 <li className='cursor-pointer'>Blog</li>
//                 <ul className='absolute w-60 left-0 mt-8 p-5 rounded-lg bg-white border border-gray-200 shadow-lg opacity-0 group-hover:opacity-100 group-hover:block hidden'>
//                   <li className='hover:text-blue-900 m-2'>Blog Grid</li>
//                   <li className='hover:text-blue-900 m-2'>Blog Classic</li>
//                   <li className='hover:text-blue-900 m-2'>Blog Details</li>
//                 </ul>
//               </div>

//               <div>
//                 <li>Contact</li>
//               </div>
//             </ul>
//           </div>

//           <div className='flex gap-5'>
//             <button className='w-40 h-11 bg-blue-600 text-white font-medium'>Start Free Trial</button>
//             <HiMiniBars3BottomRight 
//               onClick={() => setInfo(!info)} 
//               className='m-2' 
//               size={30} 
//             />
//           </div>
//         </div>
//       </div>

//       {info && (
//         <div className='fixed top-0 right-0 w-[410px] bg-white h-full text-gray-500 p-5 shadow-lg z-50'>
//           <div className='flex flex-col text-start gap-5'>
//             <div className='flex justify-end'>
//               <RxCross2 onClick={() => setInfo(!info)} size={30} />
//             </div>
            
//             <div className='m-10'>
//               <img 
//                 src='https://wp.dynamiclayers.net/softgen/wp-content/themes/softgen/assets/img/logo.png' 
//                 alt='logo' 
//                 height={34} 
//                 width={160} 
//               />
//             </div>

//             <div className='text-lg font-medium'>
//               <p>Our success in creating business solutions is due in large part to our talented and committed team.</p>
//             </div>

//             <div className='text-base font-medium'>
//               <p>Call For Support:</p>
//               <p className='text-blue-900 font-bold text-2xl'>5267-214-392</p>
//             </div>

//             <div className='text-base font-medium'>
//               <p>You Can Find Us At:</p>
//               <p className='font-medium text-2xl'>3770 Hidden Meadow Drive Venturia, ND 58489</p>
//             </div>

//             <div className='text-base font-medium'>
//               <p>Email Now:</p>
//               <p className='font-medium text-2xl'>info.softgen@mail.com</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
