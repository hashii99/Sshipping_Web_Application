import React, { useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PaginationItem from '@mui/material/PaginationItem';
import { services } from '../utilities/helpers';

const ITEMS_PER_PAGE = 2;

const Services = () => {
    const [page, setPage] = useState(1);
    const pageCount = Math.ceil(services.length / ITEMS_PER_PAGE);
    const handleChange = (event, value) => {
        setPage(value);
    };
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const currentServices = services.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
        <div className="bg-white px-6 lg:px-24 py-12">
            <p className="text-lg font-bold text-lime-500">Real Solution, Real Fast!</p>
            <h1 className="text-3xl mt-2 font-robotocon font-extrabold">Best Global Logistics Solutions</h1>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentServices.map((service, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden"
                    >
                        <img
                            src={service?.image}
                            alt={service?.title}
                            className="w-full md:w-[300px] h-[200px] object-cover"
                        />
                        <div className="p-8 flex flex-col">
                            <h2 className="text-base font-bold text-left mb-4 font-robotocon">{service?.title}</h2>
                            <p className=" text-gray-500 text-xs font-medium text-left mb-4">
                                {service?.description}
                            </p>
                            <button className="mt-1 inline-flex items-center text-black text-xs font-bold">
                                <ArrowForwardIcon className="bg-black text-white rounded-full p-1.5 mr-2" fontSize="small" />
                                Read More
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 flex justify-between">
                <div className="flex flex-col md:flex-row justify-between items-center p-4 rounded-lg">
                    <p className="text-xs text-gray-600 font-medium text-center md:text-left">
                        Logistic & Transport Solutions Saves Your Time.
                        <span className="font-bold"> Finds Your Solutions</span>
                    </p>
                    <button className="mt-4 md:mt-0 inline-flex items-center text-black text-xs font-semibold">
                        <ArrowForwardIcon className="bg-black text-white rounded-full p-1.5 ml-2" fontSize="small" />
                    </button>
                </div>
                <Stack spacing={2}>
                    <Pagination
                        count={pageCount}
                        page={page}
                        onChange={handleChange}
                        siblingCount={0}
                        boundaryCount={0}
                        shape="rounded"
                        renderItem={(item) => (
                            <PaginationItem
                                {...item}
                                disableRipple
                                sx={{
                                    width: 10,
                                    height: 10,
                                    minWidth: 10,
                                    borderRadius: '50%',
                                    border: '1px solid #ccc',
                                    bgcolor: item.selected ? 'black' : 'white',
                                    '&.Mui-selected': {
                                        bgcolor: 'black',
                                    },
                                    '&:hover': {
                                        bgcolor: '#333',
                                    },
                                }}
                            />
                        )}
                    />
                </Stack>
            </div>
        </div>
    );
};
export default Services;