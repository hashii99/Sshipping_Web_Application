import React from "react";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import ApiIcon from '@mui/icons-material/Api';
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import TwitterIcon from '@mui/icons-material/Twitter';
import { IconButton } from "@mui/material";
import NorthIcon from '@mui/icons-material/North';

const iconsList = [
    { Icon: FacebookOutlinedIcon, url: 'https://www.facebook.com' },
    { Icon: ApiIcon, url: 'https://www.google.com/search?q=api' },
    { Icon: TwitterIcon, url: 'https://www.twitter.com' },
    { Icon: FlutterDashIcon, url: 'https://flutter.dev' },
    { Icon: WhatshotIcon, url: 'https://www.whatsapp.com/android?l=en' }
];

const IconSetup = ({ Icon, url }) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            <IconButton sx={{ backgroundColor: '#9e9e9e' }} size="small">
                <Icon sx={{ color: 'white', fontSize: 20 }} />
            </IconButton>
        </a>
    );
};

const FinalBar = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className='flex w-full'>
            <div className="w-full px-4 md:px-24 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Left Side */}
                <p className="text-xs text-white text-center md:text-left w-full md:w-1/2">
                    Copyright © 2021 All Rights Reserved. Site By Xiteb
                </p>

                {/* Right Side (Icons) */}
                <div className="flex flex-wrap justify-center md:justify-end gap-2 w-full md:w-1/2">
                    {iconsList.map(({ Icon, url }, index) => (
                        <IconSetup key={index} Icon={Icon} url={url} />
                    ))}
                </div>
            </div>

            {/* Scroll to top icon */}
            <div className='flex items-end justify-end px-4 md:px-24 pb-4'>
                <button onClick={scrollToTop} className='bg-yellow-500 p-1 rounded'>
                    <NorthIcon sx={{ color: 'white', fontSize: 16 }} />
                </button>
            </div>
        </div>
    );
};

export default FinalBar;
