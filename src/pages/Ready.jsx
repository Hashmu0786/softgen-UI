// import React from 'react'
import { FaCirclePlay } from "react-icons/fa6";

export default function Ready() {
  return (
    <>
    {/* lg:bg-gradient-to-r from-blue-200 to-purple-200 lg:w-full lg:m-0 lg:p-10 */}
   <div className='flex justify-center items-center m-10 overflow-hidden '>
   <div className="bg-gradient-to-r from-blue-200 to-purple-200 p-8 sm:p-16 flex flex-col rounded-lg md:w-[800px] lg:p-10 lg:w-[1000px] 2xl:w-[1300px] lg:flex-row items-center justify-center 2xl:gap-10">
     
        <div className="flex flex-col gap-5 justify-center item-center lg:w-1/2">
          
          <div>
            <p className="text-blue-500 text-base font-medium text-center md:text-lg">Engage Your Customers Instantly.</p>
          </div>
           
           <div>
            <h1 className="text-[28px] font-bold text-center md:text-[38px] lg:">
            Ready To Improve Your
            Customer Retention Rate?
                </h1>
           </div>
           <div>
            <p className="text-[17px] text-gray-500 text-center">
            Our success in creating business solutions is due in large part spacially
            to talented and highly committed team.
            </p>
           </div>
           <div className='m-5 flex flex-col gap-10 items-center md:justify-center md:flex-row md:gap-8'>
       <button className='w-40 h-11 bg-blue-600 text-white font-medium md:w-48 md:h-14 md:text-[17px]'>Start Free Trial</button>
       <FaCirclePlay  className='text-white'  size={60}/>

       </div>
        </div>
     
     
     </div>
     </div>
    </>
  );
}
