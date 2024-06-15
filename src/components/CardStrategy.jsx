
import React from 'react';
import { MdOutlineArrowCircleRight } from "react-icons/md";
import { TbBellRinging2Filled } from "react-icons/tb";




export function CardStrategy() {
  return (
    <div className='w-full flex justify-center items-center'>
    <div className=" w-[320px] bg-[#c3c8ff99] text-white font-nunito p-5 flex justify-center items-left flex-col gap-5 rounded-lg lg:w-[420px] 2xl:w-[320px]">
      
      <div>
      <TbBellRinging2Filled size={100} className='text-blue-900'/>

      </div>
      <div>
        <h1 className="text-[20px] font-medium text-black mb-5">Market Research</h1>
        <p className="text-[0.85em] text-gray-500 w-[247px]  lg:w-[410px] lg:text-[17px] 2xl:w-[247px]">
        Having marketplace to your branded skilled team of designers and developers.
        </p>
      </div>
      <button >
      <MdOutlineArrowCircleRight size={50} className='text-4xl hover:text-blue-800 border-1'/>
      </button>
    </div>
    </div>
  );
}


