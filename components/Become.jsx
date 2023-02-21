import React from "react";
import { CiSearch } from "react-icons/ci";
import { BsArrowRight } from "react-icons/bs";

function Become() {
  return (
    <div className="bg-[#FEFEFE] sm:pt-16 pt-[108px]  sm:px-0 px-[122px]">
      <h1
        className="text-[#333333] sm:px-3 font-light leading-[60px] sm:text-[33px] sm:leading-[40px] text-[45px] sm:mt-[30px]
       mb-[20px] sm:mb-[27.5px] sm:ml-0 ml-[94px] max-w-[904px]"
      >
        You don’t just become something, you become someone
      </h1>
      <div className="grid grid-flow-col px-[10px] sm:px-0 h-[95px] shadow-card-shadow sm:grid-flow-row sm:-bottom-0 -bottom-10 z-10 relative">
        <div className="py-[30px] sm:py-[20px] justify-between sm:px-[14px] col-span-2  flex px-[40px] bg-[#0077B3]">
          <input
            placeholder="Search..."
            type="search"
            className="border-b-2 border-b-white outline-none  bg-[#0077B3] w-[100%] text-white placeholder-white placeholder:text-[21.96px] placeholder:leading-[34.02px] sm:placeholder:text-[1rem] sm:placeholder:leading-[1.83rem] placeholder:font-light "
          />
          <CiSearch className="text-white font-black w-7 h-7 pb-1 -ml-6" />
        </div>
        <div className="p-[20px] flex items-center sm:col-span-2 justify-between bg-[#ffffff] ">
          <span className="text-[#0077b3] leading-[30px] text-[22px] font-light">
            About VU Amsterdam
          </span>
          <BsArrowRight className="text-[#0077b3] font-black  w-6 h-6" />
        </div>
      </div>
    </div>
  );
}

export default Become;
