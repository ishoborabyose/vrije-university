import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
// import { AiOutlineCaretUp } from "react-icons/ai";

function Impact() {
  return (
    <div className="bg-[#faf7f5] pt-[60px] sm:pb-8 pb-[140px]">
      <h2 className="text-[#cc4100] px-[122px] sm:px-0 mb-[25px] leading-[56px] text-[38px] font-light">
        Impact
      </h2>
      <div className="relative">
        <img
          src="https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/883cc0a7-cdf9-41aa-b410-2bce37f7a554/001_VU_com_Davide-Ianuzzi_PeGe_2022_PG006556_lowres%5B28%5D.jpg?w=1250&h=600&fit=clip&rect=336%2C153%2C1664%2C799&fm=jpg&auto=format&dpr=1"
          alt="img"
          className="w-full"
        />
        {/* <AiOutlineCaretUp className=" absolute bottom-60 left-96  h-20 w-16 text-red-800" /> */}
        <div className="bg-[#ffffff]  absolute sm:relative sm:left-0 sm:right-0 sm:-bottom-0 -bottom-14 left-96 right-60">
          <div className="border-b py-2 "></div>
          <div className="pt-[60px]   px-[60px] sm:px-0 pb-[30px]">
            <h3 className="text-[#cc4100]  leading-[36px] text-[36px] font-light">
              Science Impact
            </h3>
            <p className="text-[#333333] mb-[30px] font-normal text-[18px] leading-[30px] mt-[15px]">
              An interview with entrepreneurial scientist Davide Iannuzzi, Chief
              Impact Officer of Vrije Universiteit Amsterdam
            </p>
            <span className="text-[#333333] text-[18px] flex items-center leading-[30px] font-medium sm:mt-2">
              Read more
              <BsArrowRight className="ml-3" />
            </span>
          </div>
          <div className="flex  items-center justify-end">
            <div className="flex sm:hidden">
              {[1, 2, 3, 4].map((item) => {
                return (
                  <div className="bg-[#e8692d] rounded-full mx-3 h-[10px] w-[10px]"></div>
                );
              })}
            </div>
            <div className="bg-[#fcd3b6] px-2 py-4 flex sm:-top-14 sm:absolute">
              <BsChevronLeft className="w-10 h-6" />
              <BsChevronRight className="w-10 h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Impact;
