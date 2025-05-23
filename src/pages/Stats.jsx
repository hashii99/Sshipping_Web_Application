import React from 'react';
import { statusStack } from '../utilities/helpers';

export const StatusCard = ({ count, status }) => {
    return (
        <div className="relative flex flex-col items-start">
            <p className="absolute text-8xl font-extrabold text-white -top-4 left-0 z-0" style={{ textShadow: '2px 2px 8px rgba(128, 128, 128, 0.3)' }}>
                {count}
            </p>
            <div className="relative flex mt-2 z-10">
                <p className="text-5xl font-bold text-blue-900">{count}</p>
                <p className="text-sm font-bold mt-2 ml-1 w-1/2 text-blue-900">{status}</p>
            </div>
        </div>
    );
};

const StatsSection = () => (
    <div className="flex justify-center items-center py-12 bg-white shadow-2xl rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {statusStack.map((status) => (
            <StatusCard 
            count={status?.count} 
            status = {status?.status} />

        ))}
        </div>
    </div>
);

export default StatsSection;
