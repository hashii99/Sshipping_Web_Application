import React from "react";
import { Seperator, latestNewsList } from "../utilities/helpers";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const LatestNews = () => (
  <div className="p-6 text-left">
    <h2 className="text-xl font-bold text-white">Latest News</h2>
    <Seperator />
    <ul>
      {latestNewsList.map((news, index) => (
        <>
        <li key={index} className="text-xs text-gray-400 flex items-start gap-1 mb-2">
          <KeyboardArrowRightIcon fontSize="small" className="text-yellow-500 mt-0.5" />
          {news?.news}
        </li>
        <p className="text-xs text-gray-400 flex items-start mb-2 ml-6">{news?.time}</p>
        </>
      ))}
    </ul>
  </div>
);
export default LatestNews;