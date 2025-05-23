import React from 'react';
import ShipingWorker from '../assests/shippingworker.jpg';
import ShipingWorker2 from '../assests/shippingworker2.jpg';
import SquareShape from '../assests/square.png';

const Welcome = () => {
  return (
    <section className="w-full px-4 py-12 bg-white mb-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
            <img
              src={ShipingWorker}
              alt="Worker with clipboard"
              className="rounded-md w-full h-auto object-cover"
            />
            <div className="absolute -bottom-16 left-0 sm:-bottom-20 sm:-left-12 w-2/3 sm:w-1/2">
              <img
                src={ShipingWorker2}
                alt="Worker with boxes"
                className="rounded-md object-cover h-44 sm:h-60 md:h-72 shadow-lg"
              />
            </div>
            <div className="absolute bottom-0 -right-4 translate-y-1/2 bg-orange-500 text-white p-3 sm:p-4 rounded-md shadow-lg text-center">
              <p className="text-xl sm:text-2xl font-bold">15,350+</p>
              <p className="text-xs sm:text-sm">Clients Worldwide</p>
            </div>
          </div>
        </div>

        <div className="flex-1 text-center md:text-left mt-16 md:mt-10 relative px-2">
          <div className="inline-block relative">
            <img
              src={SquareShape}
              alt="Shadow shape"
              className="absolute -top-16 -left-6 w-20 h-28 sm:w-24 sm:h-32 md:w-28 md:h-40"
              style={{ transform: 'rotate(-35deg)' }}
            />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-tight relative z-10">
              TransMax Logistics <br />
              <span>
                Around <span className="text-orange-500">the World</span>
              </span>
            </h2>
          </div>
          <p className="text-gray-800 mt-4 text-sm sm:text-base md:text-base font-medium mx-auto md:mx-0 max-w-lg">
            Transmax is the world’s leading global logistics provider — we support industry and trade
            in the global exchange of goods through land transport.
          </p>
          <p className="text-gray-500 mt-4 text-sm sm:text-base md:text-base font-medium mx-auto md:mx-0 max-w-lg">
            Our value-added services ensure the flow of goods continues seamlessly and supply chains
            remain lean and optimized for success.
          </p>
          <button className="mt-6 px-5 sm:px-6 py-2.5 sm:py-3 bg-gray-200 hover:bg-gray-300 text-blue-800 shadow text-xs sm:text-sm font-bold">
            MORE ABOUT US
          </button>
        </div>
      </div>
    </section>
  );
};
export default Welcome;