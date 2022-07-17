import React from "react";

export function Timeline() {
  return (
    <div className="bg-[#ED63D2]/[0.1] mt-10 rounded-[70px] p-2">
        <div className="flex justify-center">
           <div className="w-[420px] flex justify-end">
           <div className="text-center bg-white rounded-[50%] p-3 mr-[24px] w-[76px] h-[80px]">
                <span className="font-extrabold text-[43px] text-[#A35592] ">1.</span>
            </div>
           </div>
            <div className="w-1 bg-[#F4C8EB]">
            </div>
            <div className="text-left ml-2 bg-white rounded-r-xl rounded-b-xl p-2 max-w-[420px]">
                <h4 className="font-bold text-[20px] text-[#1C2D41]">Share a little about yourself.</h4>
                <p className="max-w-[420px] text-[#8392A5] text-[15px]">
                Access the best mortgages in seconds with our AI-powered algorithm. We screen the entire market in seconds to present you the best possible rates from 2,000+ mortgage products
                </p>
            </div>
        </div>

        <div className="flex justify-center">
           <div className="text-left bg-white rounded-r-xl rounded-b-xl p-2 -ml-[8px] mt-10 w-[420px]">
                <h4 className="font-bold text-[20px] text-[#1C2D41]">Share a little about yourself.</h4>
                <p className="max-w-[420px] text-[#8392A5] text-[15px]">
                Access the best mortgages in seconds with our AI-powered algorithm. We screen the entire market in seconds to present you the best possible rates from 2,000+ mortgage products
                </p>
            </div>
            <div className="w-1 bg-[#F4C8EB] mr-2 ml-2">
            </div>
            <div className="w-[420px] flex justify-start mt-10">
           <div className="text-center bg-white rounded-[50%] p-3 w-[76px] h-[80px]">
                <span className="font-extrabold text-[43px] text-[#A35592] ">2.</span>
            </div>
           </div>
           
        </div>

        <div className="flex justify-center">
           <div className="w-[420px] flex justify-end">
           <div className="text-center bg-white rounded-[50%] p-3 mr-[24px] w-[76px] h-[80px] mt-10">
                <span className="font-extrabold text-[43px] text-[#A35592] ">3.</span>
            </div>
           </div>
            <div className="w-1 bg-[#F4C8EB]">
            </div>
            <div className="text-left ml-2 bg-white rounded-r-xl rounded-b-xl p-2 max-w-[420px] mt-10">
                <h4 className="font-bold text-[20px] text-[#1C2D41]">Share a little about yourself.</h4>
                <p className="max-w-[420px] text-[#8392A5] text-[15px]">
                Access the best mortgages in seconds with our AI-powered algorithm. We screen the entire market in seconds to present you the best possible rates from 2,000+ mortgage products
                </p>
            </div>
        </div>

        <div className="flex justify-center">
           <div className="text-left bg-white rounded-r-xl rounded-b-xl p-2 -ml-[8px] mt-10 w-[420px]">
                <h4 className="font-bold text-[20px] text-[#1C2D41]">Share a little about yourself.</h4>
                <p className="max-w-[420px] text-[#8392A5] text-[15px]">
                Access the best mortgages in seconds with our AI-powered algorithm. We screen the entire market in seconds to present you the best possible rates from 2,000+ mortgage products
                </p>
            </div>
            <div className="w-1 bg-[#F4C8EB] mr-2 ml-2">
            </div>
            <div className="w-[420px] flex justify-start mt-10">
           <div className="text-center bg-white rounded-[50%] p-3 w-[76px] h-[80px]">
                <span className="font-extrabold text-[43px] text-[#A35592] ">4.</span>
            </div>
           </div>
           
        </div>


      {/* <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
        <div className="flex flex-row-reverse md:contents">
          <div className="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
            <h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3>
            <p className="leading-tight text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              quaerat?
            </p>
          </div>
          <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
          </div>
        </div>

        <div className="flex md:contents">
          <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
          </div>
          <div className="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
            <h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3>
            <p className="leading-tight text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae,
              facilis.
            </p>
          </div>
        </div>

        <div className="flex flex-row-reverse md:contents">
          <div className="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
            <h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3>
            <p className="leading-tight text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              quaerat?
            </p>
          </div>
          <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
          </div>
        </div>

        <div className="flex flex-row-reverse md:contents">
          <div className="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
            <h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3>
            <p className="leading-tight text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              quaerat?
            </p>
          </div>
          <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
          </div>
        </div>

        <div className="flex md:contents">
          <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
          </div>
          <div className="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
            <h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3>
            <p className="leading-tight text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae,
              facilis.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

