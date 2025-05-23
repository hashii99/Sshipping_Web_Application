import React from 'react';
import ShipingWorker from '../assests/shippingworker.jpg';
import ShipingWorker2 from '../assests/shippingworker2.jpg';

const Welcome = () => {
  return (
    <section className="w-full px-4 py-12 bg-white mb-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-full max-w-md">
            <img
              src={ShipingWorker}
              alt="Worker with clipboard"
              className="rounded-md w-3/4 sm:w-1/2 md:w-full h-auto object-cover mx-auto"
            />
            <div className="absolute -bottom-20 left-0 sm:-bottom-24 sm:-left-12 w-full sm:w-1/2">
              <img
                src={ShipingWorker2}
                alt="Worker with boxes"
                className="rounded-md object-cover h-52 sm:h-60 md:h-72 shadow-lg w-auto"
              />
            </div>
            <div className="absolute bottom-0 -right-6 translate-y-1/2 bg-orange-500 text-white p-4 rounded-md shadow-lg">
              <p className="text-2xl font-bold">15,350+</p>
              <p className="text-xs">Clients Worldwide</p>
            </div>
          </div>
        </div>
        <div className="flex-1 text-center md:text-left mt-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            TransMax Logistics <br />
            <span>
              Around <span className="text-orange-500">the World</span>
            </span>
          </h2>
          <p className="text-gray-800 mt-4 text-sm md:text-base font-medium mx-auto md:mx-0 md:w-4/5">
            Transmax is the world’s leading global logistics provider — we support industry and trade
            in the global exchange of goods through land transport.
          </p>
          <p className="text-gray-500 mt-4 text-sm md:text-base font-medium mx-auto md:mx-0 md:w-4/5">
            Our value-added services ensure the flow of goods continues seamlessly and supply chains
            remain lean and optimized for success.
          </p>
          <button className="mt-6 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-blue-800 shadow text-xs font-bold">
            MORE ABOUT US
          </button>
        </div>
      </div>
    </section>
  );
};
export default Welcome;