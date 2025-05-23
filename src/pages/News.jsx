import React from 'react';
import { cardsData } from '../utilities/helpers';

const Card = ({ image, date, month, title, admin, comments, description }) => {
  return (
    <div className="bg-white shadow-md overflow-hidden flex flex-col md:flex-row w-4/5 mx-auto">
      <div className="relative w-full md:w-1/2">
        <img className="w-full h-full object-cover" src={image} alt="Card visual" />
        <div className="absolute top-0 left-0 bg-blue-900 text-white px-2 py-1 rounded">
          <p className="text-2xl">{date}</p>
          <p className="text-[9px]">{month}</p>
        </div>
      </div>

      <div className="p-5 w-full md:w-1/2">
        <h3 className="font-bold text-blue-900 text-sm text-left">{title}</h3>
        <div className="text-gray-500 text-sm flex flex-col sm:flex-row gap-2 my-2">
          <span className="text-xs">{admin}</span>
          <span className="flex items-center gap-1 text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8h2a2 2 0 012 2v9a2 2 0 01-2 2H7a2 2 0 01-2-2v-9a2 2 0 012-2h2M12 3v11m-4-4h8"
              />
            </svg>
            {comments}
          </span>
        </div>
        <p className="text-gray-600 text-xs text-left w-4/5">{description}</p>
      </div>
    </div>
  )
};

const News = () => {
  return (
    <div className="p-4 mt-2 mb-2 bg-white">
      <p className="text-lg font-bold text-blue-900">LATEST NEWS</p>
      <div className="flex text-center items-center justify-center mb-8">
        <div className='w-2 h-2 bg-blue-500 mr-2 mt-0.5' />
        <h1 className="text-xs text-gray-400 font-semibold">INTEGER CONGUE ELIT</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};
export default News;