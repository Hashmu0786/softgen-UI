import React from 'react'
import { CiStar } from "react-icons/ci";
import Profile from './Profile';


export default function Trusted() {
  return (
    <>
    <div className='lg:flex m-0'>
         <div className='hidden lg:block'>
           <Profile/>
      </div>
     <div className='w-full flex justify-center items-center'>
        <div className='flex flex-col gap-5 p-10 text-center'>
            <div className='flex flex-col gap-5'>
            <h1 className='text-[28px]  font-bold  w-96 mx-auto md:text-[32px] 2xl:text-[38px] '>
            Trusted by Millions
            of Customers.
            </h1>
            <p className='text-[17px] text-gray-500 md:font-medium'>
            Our success in creating business solutions is due in large part
            to our talented and highly committed team.
            </p>
            </div>

            <div className='flex gap-0 text-yellow-500 justify-center'>
              <CiStar size={30}/><CiStar size={30} /><CiStar size={30} /><CiStar size={30} />
            </div>
            <div className='flex flex-col gap-2 mt-5'>
                <p className='text-[18px] text-gray-500 font-medium 2xl:text-[28px]'>
                Softgen is a trusted for providing assistants. Initially their main objective was to ensure service they provide these people are loyal to their industry.
                </p>
                <h3 className='text-[22px] font-medium  mt-5'>Timothy Paradis</h3>
                <h4 className='text-[14px] text-gray-500 font-medium'> Financial .INC</h4>
            </div>
        </div>
     </div>
     <div className='hidden lg:block'>
     <Profile/>
           </div>
           </div>
    </>
  )
}
