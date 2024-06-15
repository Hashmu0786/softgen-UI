
import React from 'react';

export default function BuildStrategy() {
  return (
    <div className='w-full m-10 flex justify-center items-center overflow-hidden md:m-0 lg:m-0'>
      <div className='flex flex-col justify-center items-start gap-10 w-[347px] mb-10 md:flex-row md:w-[720px] lg:w-[920px] lg:justify-between 2xl:w-[1170px] 2xl:justify-between'>
           
           <div className='flex flex-col gap-5 md:flex md:flex-col md:gap-5 lg:m-0'>
          <h1 className='text-start text-2xl font-bold md:text-3xl'>Build A Future Strategy!</h1>
        
        <div className='md:flex md:flex-wrap md:w-[492px] 2xl:w-[560px]'>
          <p className='text-base text-gray-600 mr-10 md:mr-0 md:text-[19px] '>
            Our success in creating business solutions is due in large part to our talented and highly committed team.
          </p>
          </div>
          </div>
          <div className='m-0 md:mt-5'>
          <button className='w-40 h-11 bg-blue-600 text-white font-medium md:w-48 md:h-14 md:text-[17px]'>
            Explore Services
          </button>
          </div>
       
      </div>
    </div>
  );
}
