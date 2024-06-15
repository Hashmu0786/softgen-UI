import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import "../App.css"

export default function TrademarkSection() {
  return (
    <div className='flex justify-center items-center m-10 overflow-hidden'>
    <div className=" bg-gradient-to-r from-blue-200 to-purple-200 w-[400px] flex flex-col rounded-lg md:w-[800px] lg:w-[1000px] 2xl:w-[1300px] lg:flex-row items-center justify-center 2xl:gap-10">
      <div className="flex flex-col items-center lg:items-start ">
        <div className="m-5 flex gap-12 md:m-0">
         
          <div className="mb-5 md:mt-5">
            
            <img src="https://wp.dynamiclayers.net/softgen/wp-content/uploads/sites/13/2024/04/uikit01.png" alt="first" className=" w-[123px] h-[228px] md:w-[290px] md:h-[536px] lg:w-[186px] lg:h-[346px] 2xl:w-[222px] 2xl:h-[411px] lg:w-1/2" />
          </div>
          <div className="mb-5 mt-5 md:mt-14">
            
            <img src="https://wp.dynamiclayers.net/softgen/wp-content/uploads/sites/13/2024/04/uikit02.png" alt="second" className=" w-[123px] h-[228px] md:w-[290px] md:h-[536px] lg:w-[186px] lg:h-[346px] 2xl:w-[222px] 2xl:h-[411px] lg:w-1/2 " />
          </div>
        </div>
      </div>

      <div className=" flex flex-col  flex wrap gap-5 text-left text-gray-500 m-10 lg:my-12  lg:ml-10">
        <h1 className="text-3xl lg:text-4xl font-bold text-black mb-4 md:w-[640px] md:text-[38px] lg:text-3xl lg:w-[320px] 2xl:w-[505px]">
          Manage Everything for Brand and <span className="text-yellow-400">Trademark!</span>
        </h1>
        <p className="text-xl text-gray-700 mb-6 md:w-[550px] lg:w-[320px] lg:text-base 2xl:w-[505px]">
          Our success in creating business solutions is due in large part to our talented and highly committed team.
        </p>
        <ul className="text-gray-700 mb-6  md:text-xl lg:text-base">
          <li className="flex items-center mb-2">
            <FaCheckCircle className="text-blue-500 mr-2" />
            Solutions & Integration With Blockchain
          </li>
          <li className="flex items-center mb-2">
            <FaCheckCircle className="text-blue-500 mr-2" />
            AI Machine & Deep Learning
          </li>
          <li className="flex items-center mb-2">
            <FaCheckCircle className="text-blue-500 mr-2" />
            Over 100+ Payment Gateways Support
          </li>
          <li className="flex items-center mb-2">
            <FaCheckCircle className="text-blue-500 mr-2" />
            Dedicated Support 24/7
          </li>
        </ul>
       
         <button className='w-40 h-11 bg-blue-600 text-white font-medium md:w-48 md:h-14 md:text-[17px]'>How It Works</button>

      </div>
    </div>
    </div>
  );
}
