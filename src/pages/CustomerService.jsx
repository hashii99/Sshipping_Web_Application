import React from "react";
import { Seperator, customerServices } from "../utilities/helpers";
import PanToolAltOutlinedIcon from '@mui/icons-material/PanToolAltOutlined';

const CustomerService = () => (
  <div className="p-6 text-left">
    <h2 className="text-xl font-bold text-white">Customer Service</h2>
    <Seperator />

    <ul className="space-y-1">
      {customerServices.map((service, index) => (
        <li key={index} className="text-xs text-gray-400">
          <PanToolAltOutlinedIcon fontSize="small" className="mr-1" style={{ transform: 'rotate(90deg)' }} />
          {service}
        </li>
      ))}
    </ul>
  </div>
);

export default CustomerService;