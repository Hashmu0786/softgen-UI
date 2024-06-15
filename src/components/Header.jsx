import React from 'react';

export default function Header() {
  return (
    <div className="w-full h-14 bg-black">
        
        <div className='my-auto flex justify-between'>
        <a className="m-4" href=''>
        <span className="text-white  text-xl font-medium m-1">envato</span>
        <span className="text-green-900 text-xl	font-medium">market</span>
        </a>
      
     <button className='bg-[#6f9a37] text-white text-sm p-2 rounded-md m-2 mr-4 w-24 h-10 md:w-28 md:text-base'>Buy now</button>

      </div>
      </div>
  );
}
