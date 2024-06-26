import React from 'react'
import Nav from '../components/Nav'
import { FaCirclePlay } from "react-icons/fa6";
import "../App.css"


export default function Home() {
  return (
    <>
    <div className='w-full  '>
    <div className='p-5'>
       <Nav/>
   </div>
  <div className='flex flex-col justify-center items-center lg:flex-row '>
 
    <div className='flex justify-center items-center flex-col  lg:flex lg:justify-between lg:items-start 2xl:mt-[-150px] lg:m-0 '>

  <div className='m-10 w-72 h-6 shadow bg-yellow-500 lg:ml-5 lg:m-0 lg:flex  '>
     <p>👋 Engage Your Customers Instantly.</p>
  </div>    
       
       <div className='m-5 w-[337px] md:w-[690px] '>
          <h2 className='text-[24px] font-bold text-center md:text-[45px]  lg:text-start'>Digital Transformation to Grow Your Company!</h2>
       </div>

       <div className='m-5 w-[337px]  md:w-[690px]'>
       <p className='text-[17px] text-gray-500 font-medium text-center lg:text-start'>Our success in creating business solutions is due in large part to our talented and highly committed team.</p>
       </div>

       <div className='m-5 mb-14 flex flex-col gap-5 items-center md:flex-row md:gap-8'>
     
  <button className='w-40 h-11 text-white font-medium transition-all duration-300 ease-in-out  hover:text-white'>
        Start Free Trial
      </button>
       <FaCirclePlay  className='text-white play-btn'  size={10}/>
       </div>

{/* <div className='m-5 mb-14 flex flex-col gap-5 items-center md:flex-row md:gap-8'>
      <button className='w-40 h-11 text-white font-medium transition-all duration-300 ease-in-out bg-slide-right hover:text-white'>
        Start Free Trial
      </button>
      <div className='play-btn'>
        <FaCirclePlay className='bg-white' size={60} />
      </div>
    </div> */}

       </div>

       {/* <div className=' relative mt-10 hidden md:block  2xl:m-0 2xl:mt-[-60px] 2xl:ml-20'>
         <img src='https://wp.dynamiclayers.net/softgen/wp-content/plugins/softgen-core/assets/img/illustrations/hero-element01.png' alt='' height={53} width={70} 
          className='absolute left-96 top-24'
         />
         <img src='https://wp.dynamiclayers.net/softgen/wp-content/plugins/softgen-core/assets/img/illustrations/hero-element02.png' alt=''  height={53} width={70}
          className='absolute left-36 top-10'
         />
        <img src='https://wp.dynamiclayers.net/softgen/wp-content/plugins/softgen-core/assets/img/illustrations/illustration01.png'
         alt='' width={350} height={440}
          className='lg:mt-[-70px] 2xl:mt-0'
         />
       <img src='https://wp.dynamiclayers.net/softgen/wp-content/plugins/softgen-core/assets/img/illustrations/hero-element03.png' alt=''  height={100} width={80}
        className='absolute left-96 top-60'
       />
        <img src='https://wp.dynamiclayers.net/softgen/wp-content/plugins/softgen-core/assets/img/illustrations/hero-element05.png' alt=''  height={100} width={80}
          className='absolute top-56'
        />
        <img src='https://wp.dynamiclayers.net/softgen/wp-content/plugins/softgen-core/assets/img/illustrations/hero-element04.png' alt=''  height={70} width={53}
         className='absolute left-96 top-96'
        />


       </div> */}

<div className='relative mt-10 hidden md:block 2xl:m-0 2xl:mt-[-60px] 2xl:ml-20'>
      <img 
        src='https://wp.dynamiclayers.net/softgen/wp-content/plugins/softgen-core/assets/img/illustrations/hero-element01.png' 
        alt='' 
        height={53} 
        width={70} 
        className='absolute left-96 top-24 transition-transform transform hover:dl-animation hover:sg-fadeInTop'
      />
      <img 
        src='https://wp.dynamiclayers.net/softgen/wp-content/plugins/softgen-core/assets/img/illustrations/hero-element02.png' 
        alt=''  
        height={53} 
        width={70} 
        className='absolute left-36 top-10 transition-transform transform hover:dl-animation hover:sg-fadeInTop'
      />
      <img 
        src='https://wp.dynamiclayers.net/softgen/wp-content/plugins/softgen-core/assets/img/illustrations/illustration01.png' 
        alt='' 
        width={350} 
        height={440} 
        className='lg:mt-[-70px] 2xl:mt-0 transition-transform transform hover:dl-animation hover:sg-fadeInTop'
      />
      <img 
        src='https://wp.dynamiclayers.net/softgen/wp-content/plugins/softgen-core/assets/img/illustrations/hero-element03.png' 
        alt=''  
        height={100} 
        width={80} 
        className='absolute left-96 top-60 transition-transform transform hover:dl-animation hover:sg-fadeInTop'
      />
      <img 
        src='https://wp.dynamiclayers.net/softgen/wp-content/plugins/softgen-core/assets/img/illustrations/hero-element05.png' 
        alt=''  
        height={100} 
        width={80} 
        className='absolute top-56 transition-transform transform hover:dl-animation hover:sg-fadeInTop'
      />
      <img 
        src='https://wp.dynamiclayers.net/softgen/wp-content/plugins/softgen-core/assets/img/illustrations/hero-element04.png' 
        alt=''  
        height={70} 
        width={53} 
        className='absolute left-96 top-96 transition-transform transform hover:dl-animation hover:sg-fadeInTop'
      />
    </div>


  </div>




  </div>
    </>
  
  )
}


