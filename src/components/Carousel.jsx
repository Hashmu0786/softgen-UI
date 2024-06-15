import React from 'react';
import '../App.css'

const items = [
  { title: 'Title 1', subtitle: 'Subtitle 1' },
  { title: 'Title 2', subtitle: 'Subtitle 2' },
  { title: 'Title 3', subtitle: 'Subtitle 3' },
  { title: 'Title 4', subtitle: 'Subtitle 4' },
  { title: 'Title 5', subtitle: 'Subtitle 5' },
  { title: 'Title 6', subtitle: 'Subtitle 6' }
];

export default function Carousel() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="overflow-hidden w-full">
        <div className="flex animate-slide duration-[30s] infinite">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-none w-full md:w-1/3 lg:w-1/4 p-2"
            >
              <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg relative h-[300px] w-full">
                {/* Replace with your image */}
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                  <h2 className="text-white text-lg font-bold">{item.title}</h2>
                  <p className="text-white">{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
