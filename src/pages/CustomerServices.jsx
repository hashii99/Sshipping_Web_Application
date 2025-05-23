import React from "react";
import { Seperator, sampleImages } from "../utilities/helpers";

const CustomerServices = () => (
    <div className='p-6'>
        <h2 className="text-xl font-bold text-left text-white">Customer Service</h2>
        <Seperator />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {sampleImages.map((img, index) => (
                <div key={index} className="flex justify-center">
                    <img
                        src={img}
                        alt={`Service ${index + 1}`}
                        className="w-full h-auto max-w-xs rounded shadow-lg"
                    />
                </div>
            ))}
        </div>
    </div>
);
export default CustomerServices;