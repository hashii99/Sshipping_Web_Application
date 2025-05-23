import React, { useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { slides } from '../utilities/helpers';

const HomeSlider = () => {
    const [current, setCurrent] = useState(0);
    const prevSlide = () => {
        setCurrent((current - 1 + slides.length) % slides.length);
    };
    const nextSlide = () => {
        setCurrent((current + 1) % slides.length);
    };
    return (
        <div className="relative w-full">
            <div className="w-full min-h-screen flex flex-col md:flex-row px-2 md:px-6 py-4 md:py-8">
                <div className="relative z-10 px-4 py-6 md:px-6 md:py-12 max-w-full md:max-w-xl bg-white mb-4 mt-12 md:mb-0 md:mr-6">
                    <div className='flex flex-row items-center mb-6'>
                        <div className="bg-yellow-500 w-1 h-5 mr-2" />
                        <p className="text-sm font-bold tracking-[0.3em]">LOGISTIC</p>
                    </div>

                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 leading-snug text-left">
                        Best Shipping
                    </h1>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl text-yellow-500 font-bold mb-4 leading-snug text-left">
                        Partner
                    </h2>
                    <p className="text-gray-600 text-xs sm:text-sm mb-8 mt-10 text-left w-5/6">
                        Amet, tempus egestas facilisis volutpat viverra molestie lobortis posuere maecenas.
                        Viverra molestie lobortis posuere maecenas.
                    </p>
                    <button className="flex justify-start bg-yellow-500 text-white px-6 py-3 text-xs sm:text-xs font-medium hover:bg-yellow-600 transition">
                        DISCOVER MORE
                    </button>
                </div>
                <div className="w-full md:w-2/3 h-[250px] sm:h-[400px] md:h-auto ml-auto relative">
                    <img
                        src={slides[current]}
                        alt="Slide"
                        className="w-full h-full object-cover rounded"
                    />
                </div>
            </div>

            <div className="absolute bottom-4 left-10 flex items-center gap-4 bg-yellow-500 px-4 py-2 rounded shadow z-20">
                <span className="text-sm font-semibold text-white">
                    {current + 1} / {slides.length}
                </span>
                <div className="flex gap-2">
                    <button onClick={prevSlide} className="p-2 hover:bg-yellow-600 rounded">
                        <ArrowBackIcon className="text-white" fontSize="small" />
                    </button>
                    <button onClick={nextSlide} className="p-2 hover:bg-yellow-600 rounded">
                        <ArrowForwardIcon className="text-white" fontSize="small" />
                    </button>
                </div>
            </div>
        </div>
    );
};
export default HomeSlider;