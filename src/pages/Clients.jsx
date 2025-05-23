import React from 'react';
import GenesusLogo from "../assests/genesis.jpg";
import ZikZag from "../assests/zikzak.jpg";
import Resus from "../assests/resus.jpg";

const icons = [GenesusLogo, ZikZag, Resus, GenesusLogo, ZikZag];

const Clients = () => {
    return (
        <div className="flex flex-wrap justify-center gap-6 p-4 mt-4 mb-8">
            {icons.map((icon, index) => (
                <img
                    key={index}
                    src={icon}
                    alt={`icon-${index + 1}`}
                    className="w-32 h-32 object-contain rounded-md shadow-md hover:scale-105 transition-transform duration-300"
                />
            ))}
        </div>
    )
}
export default Clients;