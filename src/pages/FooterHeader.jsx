import React from "react";

const FooterHeader = () => (
  <div className="text-white px-4 py-8 bg-gray-500">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-left">Weekly Newsletter</h1>
        <p className="text-left text-xs mt-4 mb-2">
          There are many variations of passages of lorem ipsum available.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-2 md:mt-0">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Your Mail"
          className="text-black w-full sm:w-2/3 h-[40px] p-3 rounded-md text-xs font-semibold"
        />
        <button className="bg-yellow-500 text-white w-full sm:w-1/3 h-[40px] rounded-md text-xs font-semibold">
          SUBSCRIBE
        </button>
      </div>
    </div>
  </div>
);

export default FooterHeader;
