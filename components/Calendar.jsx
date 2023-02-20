import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";

function Calendar() {
  return (
    <div className="bg-white">
      <div className="mx-[122px] py-[60px] sm:mx-0 sm:px-0 px-[20px]">
        <div className="flex sm:flex-col justify-between">
          <h2 className="text-[#0077b3] text-[38px] leading-[56px] font-light">
            Calendar
          </h2>
          <div className="flex  space-x-[25px]">
            {[1, 2].map((item) => {
              return (
                <div className="bg-[#ffffff] sm:px-0 shadow-card-shadow py-[10px] px-[20px] items-center flex justify-between">
                  <span className="text-[#333333] text-[18px] font-medium leading-[30px] pr-[30px]">
                    All categories
                  </span>
                  <BsChevronDown className="mr-[20px]" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="sm:overflow-x-scroll sm:max-w-[480px] scroll-bar-hidden">
          <div className="grid grid-flow-col sm:grid-cols-[repeat(4,_135px)] mt-10">
            {[1, 2, 3, 4].map((item) => {
              return (
                <ul>
                  <li className="text-[#333333] text-[18px] leading-[30px] mb-[5px] underline">
                    PhD Defences
                  </li>
                  <li className="text-[#0077b3] text-[18px] leading-[30px] mb-[5px] font-bold">
                    20 February 2023
                  </li>
                  <li className="text-[23.94px] leading-[30px] text-[#333333] font-light">
                    PhD defence by T.J.H.
                  </li>
                  <li className="text-[23.94px] leading-[30px] text-[#333333] font-light">
                    Jonkers
                  </li>
                </ul>
              );
            })}
          </div>{" "}
        </div>

        <div className="flex justify-between sm:justify-center border-t mt-[100px] sm:border-t-0 border-t-[#9dd3f3]">
          <span className="text-[#333333] sm:text-center text-[18px] font-medium leading-[30px] flex  gap-2 items-center ">
            View calendar <BsArrowRight />
          </span>
          <div className="bg-[#DFF2FD] px-2 py-4 flex sm:hidden ">
            <BsChevronLeft className="w-10 h-6" />
            <BsChevronRight className="w-10 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
