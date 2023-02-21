import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";

function Impact() {
  return (
    <div className="bg-[#faf7f5] sm:pt-6 pt-[60px] sm:pb-8  pb-[140px]">
      <h2 className="text-[#cc4100] sm:px-4 px-[122px]  mb-[25px] sm:mb-3  sm:text-[30px] leading-[56px] text-[38px] font-light">
        Impact
      </h2>
      <div className="relative">
        <img
          src="https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/883cc0a7-cdf9-41aa-b410-2bce37f7a554/001_VU_com_Davide-Ianuzzi_PeGe_2022_PG006556_lowres%5B28%5D.jpg?w=1250&h=600&fit=clip&rect=336%2C153%2C1664%2C799&fm=jpg&auto=format&dpr=1"
          alt="img"
          className="w-full h-[575px] sm:h-full object-cover sm:object-contain"
        />

        <div className="bg-[#ffffff] sm:w-full w-[576px] absolute sm:relative sm:left-0 sm:right-0 sm:-bottom-0 -bottom-14 left-96 right-60">
          <div className="w-[576px] grid grid-flow-col sm:hidden absolute -top-5  gap-0.5 overflow-hidden ">
            <div className="h-[20px] bg-white skew-x-[38deg] -translate-x-2"></div>
            <div className="h-[20px] col-span-5 bg-white -skew-x-[38deg] translate-x-2"></div>
          </div>
          <div className="border-t py-2 sm:hidden"></div>
          <div className="pt-[20px] sm:pt-[48px] sm:max-w-[350px] sm:mx-4  px-[60px] sm:px-0 pb-[20px]">
            <h3 className="text-[#cc4100] sm:text-[22px] sm:leading-[32px] leading-[36px] text-[36px] font-light">
              Science Impact
            </h3>
            <p className="text-[#333333] mb-[30px]  font-normal sm:flex sm:flex-wrap text-[18px] leading-[30px] mt-[15px]">
              An interview with entrepreneurial scientist Davide Iannuzzi, Chief
              Impact Officer of Vrije Universiteit Amsterdam
            </p>
            <span className="text-[#333333] text-[18px] flex items-center leading-[30px] font-medium sm:mt-2">
              Read more
              <BsArrowRight className="ml-3" />
            </span>
          </div>
          <div className="flex gap-[37px] justify-end ">
            <div className="flex items-center sm:hidden">
              {[1, 2, 3, 4].map((item, index) => {
                return (
                  <div
                    className={`${
                      index === 0
                        ? "w-[20px] bg-[#e8692d] rounded-full mx-3 h-[20px] "
                        : "w-[10px] bg-[#e8692d] rounded-full mx-3 h-[10px] "
                    }`}
                  ></div>
                );
              })}
            </div>
            <div className="bg-[#fcd3b6]  h-[60px] flex items-center w-[120px]  sm:-top-[60px] sm:absolute">
              <BsChevronLeft className="w-10 h-6 mx-auto" />
              <BsChevronRight className="w-10 h-6 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Impact;
