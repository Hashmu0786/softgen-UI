import React from 'react'


export default function Success() {
  return (
    <div className='flex justify-center items-center m-10 overflow-hidden'>

    <div className=" w-[400px] flex flex-col rounded-lg md:w-[800px] lg:w-[1000px] 2xl:w-[1300px] 2xl:flex-row items-center justify-center 2xl:gap-10">
          <div className="mb-5 md:mt-5 relative md:p-28 lg:ml-28">
            
            <img src="https://wp.dynamiclayers.net/softgen/wp-content/uploads/sites/13/2024/04/illustration03.png" alt="first" height={600} width={947} className=" lg:w-1/2 2xl:w-[500px] 2xl:h-[731px]" />
              <div className='absolute top-52 md:top-1/2 lg:left-[-50px]'>
                <img src='https://wp.dynamiclayers.net/softgen/wp-content/uploads/sites/13/2024/04/uikit07.png' alt='' width={150} height={290} className='md:w-[220px] md:h-[290px]' />
              </div>
              <div className='absolute top-20 left-24 md:top-80 md:left-1/2 lg:top-52 lg:left-40 2xl:left-64 2xl:top-72'>
                <img src='https://wp.dynamiclayers.net/softgen/wp-content/uploads/sites/13/2024/04/uikit06.png' alt='' width={150} height={290} className='md:w-[220px] md:h-[230px]'/>
              </div>
          </div>
         
        

      <div className=" flex flex-col  flex wrap gap-5 text-left text-gray-500 m-10 md:items-start lg:m-0 lg:w-[956px] 2xl:my-12 2xl:ml-10">
        <h1 className="text-3xl lg:text-4xl font-bold text-black mb-2 w-[307px] md:w-[640px] md:ml-14 md:text-[32px] 2xl:text-[38px] 2xl:w-[320px] 2xl:w-[505px]">
        Strategies that get you on the Path to  <span className="text-yellow-400">Success!</span>
        </h1>
        <p className="text-base text-gray-700 md:w-[550px] md:text-[17px] md:ml-14 2xl:w-[320px] lg:text-base 2xl:w-[505px]">
          Our success in creating business solutions is due in large part to our talented and highly committed team.
        </p>
        <ul className="text-gray-700 mb-6   md:text-xl md:ml-14 lg:text-base">
          <li className="flex items-center mb-2">
            <img src='https://wp.dynamiclayers.net/softgen/wp-content/uploads/sites/13/2024/04/icon03.png' alt='grap' height={80} width={80} />
            <div className='m-5'>
            <h2 className='text-lg font-bold'> 
            User Interface
            </h2>
            <p className='text-base text-gray-500 md:w-[250px]'>Having these marketplace to your
            branded skilled team.</p>
            </div>

            </li>
          <li className="flex items-center mb-2">
          <img src='https://wp.dynamiclayers.net/softgen/wp-content/uploads/sites/13/2024/04/icon05.png' alt='grap' height={80} width={80} />
          <div className='m-5'>
            <h2 className='text-lg font-bold'> 
            Branding Strategy

            </h2>
            <p className='text-base text-gray-500 md:w-[250px]'>Having these marketplace to your
            branded skilled team.</p>
            </div>
                  </li>
          <li className="flex items-center mb-2">
          <img src='https://wp.dynamiclayers.net/softgen/wp-content/uploads/sites/13/2024/04/icon15.png' alt='grap' height={80} width={80} />
          <div className='m-5'>
            <h2 className='text-lg font-bold'> 
            Data Analytics

            </h2>
            <p className='text-base text-gray-500 md:w-[250px]'>Having these marketplace to your
            branded skilled team.</p>
            </div>
                  </li>
        </ul>
         
      </div>
    </div>
  
    </div>
  )
}
