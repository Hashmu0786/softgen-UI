
// import React from 'react';

// export default function Strength() {

//   const timelineEvents = [
//     { 
      
//       title: "Financial Strategy",
//       description: "Having these marketplace to your branded skilled team.",
//     },
//     {
    
//       title: "Message Experience",
//       description: "Having these marketplace to your branded skilled team."
//     },
//     {
//       title: "Data Tracking",
//       description: "Having these marketplace to your branded skilled team"
//     }
//   ]; 

//   return (
//     <div className='flex justify-center items-center m-10 overflow-hidden'>
//       <div className=" bg-gradient-to-r from-blue-200 to-purple-200  p-16 flex flex-col rounded-lg md:w-[800px] lg:w-[1000px] 2xl:w-[1300px] lg:flex-row items-center justify-center 2xl:gap-10">

//       <div className="lg:w-1/2 flex flex-col justify-center items-start space-y-4 py-10">
//         <h1 className="text-3xl font-bold text-gray-900">
//           Better Security for Better Protection & 
//           <span className="text-blue-600"> Strength</span>
//         </h1>
//         <p className="text-gray-600 text-base">
//           Our success in creating business solutions is due in large part to our talented and highly committed team.
//         </p>
    
//     <ol className="relative border-l border-blue-500 dark:border-gray-700">                  
//       {timelineEvents.map((event, index) => (
//         <li className="mb-10 ml-10" key={index}>
//           <div className="absolute w-10 h-10 bg-blue-700 rounded-full mt-1.5 -left-1.5  dark:border-gray-900 dark:bg-gray-700 ml-[-15px] text-center">
//             <p className='mt-1.5 text-white'>{index+1}</p></div>
//           <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{event.title}</h3>
//           <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{event.description}</p>
         
//         </li>
//       ))}
//     </ol>
//       </div>
//       {/* <div className="lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">       */}
       
//           <div className="w-80 h-72 mt-10">
//             <img src="https://wp.dynamiclayers.net/softgen/wp-content/uploads/sites/13/2024/04/illustration02.png" alt="Illustration" className="w-full h-full object-cover rounded-lg" /> 
//         </div>
//       {/* </div> */}
//     </div>
//     </div>
//   );
// }


import React from 'react';

export default function Strength() {
  const timelineEvents = [
    { 
      title: "Financial Strategy",
      description: "Having these marketplace to your branded skilled team.",
    },
    {
      title: "Message Experience",
      description: "Having these marketplace to your branded skilled team."
    },
    {
      title: "Data Tracking",
      description: "Having these marketplace to your branded skilled team"
    }
  ]; 

  return (
    <div className='flex justify-center items-center m-10 overflow-hidden  '>
      <div className="bg-gradient-to-r from-blue-200 to-purple-200 p-8 sm:p-16 flex flex-col rounded-lg md:w-[800px] lg:p-0 lg:w-[1000px] 2xl:w-[1300px] lg:flex-row items-center justify-center 2xl:gap-10">
        <div className=" lg:w-1/2 flex flex-col justify-center items-start space-y-4 py-10 px-4 md:px-8 lg:px-10">
          <h1 className="text-3xl font-bold text-gray-900 lg:w-[550px] lg:text-5xl">
            Better Security for Better Protection & 
            <span className="text-blue-600"> Strength</span>
          </h1>
          <p className="text-gray-600 text-base lg:w-[492px] lg:text-[17px]">
            Our success in creating business solutions is due in large part to our talented and highly committed team.
          </p>
          <ol className="relative border-l border-blue-500 dark:border-gray-700 w-[300px]">                  
            {timelineEvents.map((event, index) => (
              <li className="mb-10 ml-10" key={index}>
                <div className="absolute w-10 h-10 bg-blue-700 rounded-full mt-1.5 -left-1.5 dark:border-gray-900 dark:bg-gray-700 ml-[-15px] text-center">
                  <p className='mt-1.5 text-white'>{index+1}</p>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{event.title}</h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{event.description}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="w-80 h-72 md:w-[646px] md:h-[546px] mt-10 lg:w-96 lg:w-80 lg:flex lg:items-end lg:w-[438px] lg:h-[408px]">
          <img src="https://wp.dynamiclayers.net/softgen/wp-content/uploads/sites/13/2024/04/illustration02.png" alt="Illustration" className=" object-cover rounded-lg" /> 
        </div>
      </div>
    </div>
  );
}
