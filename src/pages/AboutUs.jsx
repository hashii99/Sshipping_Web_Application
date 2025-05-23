import React from "react";
import { Seperator } from "../utilities/helpers";
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const AboutUs = () => (
    <div className="p-6 text-left">
        <h2 className="text-xl font-bold text-white">About Us</h2>
        <Seperator />
        <p className="text-xs text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p className="mt-4 mb-2 text-xs text-gray-400">
            <CallIcon sx={{marginRight:'2px', fontSize:'14px'}} />
            |  (+94) 11 434 7575
        </p>
        <p className="text-xs text-gray-400">
            <LocationOnIcon sx={{marginRight:'2px', fontSize:'14px'}} />
            | 42 Lily Ave, Colombo 00600
        </p>

    </div>
);

export default AboutUs;