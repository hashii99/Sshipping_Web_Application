import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { reasons, testimonialsThoughts } from '../utilities/helpers';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';


export const HorizontalLineApply = () => {
    return (
        <div>
            <hr className="h-2 mt-2 mb-2" />
        </div>
    );
};

export const AddPlusIcon = () => {
    return (
        <div>
            <button className="inline-flex items-center text-black">
                <AddIcon className="bg-black text-white" fontSize="small" />
            </button>
        </div>
    );
};

export const QuoteCard = ({ name, position, thought }) => {
    return (
        <div className='flex justify-center'>
            <div className="relative max-w-3xl w-full">
                <div className="absolute -left-4 top-10 z-10 bg-red-700 text-white h-[40px] w-[60px] flex items-center justify-center pt-3">
                    <span className="text-5xl leading-none font-serif select-none">“</span>
                </div>

                <div className="bg-gray-100 p-8 pl-16 flex items-center max-w-l">
                    <div className="flex flex-col">
                        <p className="text-gray-600 text-xs leading-relaxed mb-8 font-medium">{thought}</p>
                    </div>
                </div>

                <div className="mt-2 mr-1">
                    <h3 className="font-bold text-gray-800 uppercase text-base text-right">{name}</h3>
                    <p className="text-gray-500 text-xs text-right font-semibold">{position}</p>
                </div>
            </div>
        </div>
    );
};

const Testimonials = () => {
    const [page, setPage] = useState(1);
    const testimonialsPerPage = 1;
    const totalPages = Math.ceil(testimonialsThoughts.length / testimonialsPerPage);

    const handleChange = (event, value) => {
        setPage(value);
    };
    const currentTestimonial = testimonialsThoughts[(page - 1)];

    return (
        <div className="px-4 sm:px-6 lg:px-8 py-12 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-4">
                <div className="flex flex-col py-4 px-5 rounded-lg text-left">
                    <p className="mb-2 font-extrabold text-xl">TRUSTED CLIENTS</p>
                    <p className="mb-6 text-xs text-gray-400 font-medium tracking-[0.1em]">
                        LOREM IPSUM DOLOR SIT AMET CONSECTETUR
                    </p>
                    <QuoteCard
                        thought={currentTestimonial?.thought}
                        name={currentTestimonial?.name}
                        position={currentTestimonial?.position}
                    />
                    <div className="flex justify-start">
                        <Pagination
                            count={totalPages}
                            page={page}
                            onChange={handleChange}
                            variant="outlined"
                            shape="rounded"
                            size="small"
                            color="primary"
                            renderItem={(item) => (
                                (item.type === 'previous' || item.type === 'next') && (
                                    <PaginationItem
                                        {...item}
                                        components={{ previous: () => <span>&lt;</span>, next: () => <span>&gt;</span> }}
                                    />
                                )
                            )}
                        />
                    </div>
                </div>

                <div className="flex flex-col py-4 px-5 rounded-lg text-left">
                    <p className="mb-2 font-extrabold text-xl">WHY CHOOSE US</p>
                    <p className="mb-6 text-xs text-gray-400 font-medium tracking-[0.1em]">
                        LOREM IPSUM DOLOR SIT AMET CONSECTETUR
                    </p>
                    {reasons.map((reason, index) => (
                        <div key={index}>
                            <HorizontalLineApply />
                            <div className="flex items-center justify-between">
                                <p className="py-2 text-xs text-gray-500 font-semibold">{reason?.text}</p>
                                {reason?.showIcon && <AddPlusIcon />}
                            </div>
                        </div>
                    ))}
                    <HorizontalLineApply />
                </div>
            </div>
        </div>
    )
};

export default Testimonials;
