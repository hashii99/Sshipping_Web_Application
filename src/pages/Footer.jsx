import React from 'react';
import AboutUs from './AboutUs';
import CustomerService from './CustomerService';
import CustomerServices from './CustomerServices';
import FinalBar from './finalBar';
import FooterHeader from './FooterHeader';
import LatestNews from './LatestNews';

const Footer = () => {
    return (
        <div className="bg-gray-500 mt-2">
            <FooterHeader />
            <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <AboutUs />
                <LatestNews />
                <CustomerService />
                <CustomerServices />
            </div>
            <FinalBar />
        </div>
    )
}
export default Footer;