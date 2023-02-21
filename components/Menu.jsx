import React from "react";
import { BsArrowRight } from "react-icons/bs";

import Social from "./Social";

function Menu() {
  return (
    <div className="bg-[#ffffff] sm:py-[35px] py-[60px] sm:px-4 px-[20px]">
      <div className="mx-[122px] sm:mx-0">
        <div className="bg-[#ffffff] "></div>
        <div className="grid grid-flow-col sm:grid-flow-row sm:gap-0 gap-10 ">
          <div>
            <span className="text-[#0077b3] sm:text-[30px] sm:mb-0 text-[38px] mb-[15px] font-light leading-[56px]">
              VU main menu
            </span>
            <div className="bg-white w-[316px] h-[285px] sm:shadow-none shadow-card-shadow sm:mt-0 mt-[15px] p-[20px]  ">
              {[
                {
                  title: "Education",
                  description1: "Bachelor's program",
                  description2: "Master's program",
                  description3: "Honours program",
                  description4: "Education for proffetionals",
                  description5: "Study guide",
                },
              ].map((item) => {
                return (
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#333333] py-[5px] text-[18px] leading-[30px]">
                        {item.description1}
                      </span>
                      <BsArrowRight />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#333333] py-[5px] text-[18px] leading-[30px]">
                        {item.description2}
                      </span>
                      <BsArrowRight />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#333333] py-[5px] text-[18px] leading-[30px]">
                        {item.description3}
                      </span>
                      <BsArrowRight />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#333333] py-[5px] text-[18px] leading-[30px]">
                        {item.description4}
                      </span>
                      <BsArrowRight />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#333333] py-[5px] text-[18px] leading-[30px]">
                        {item.description5}
                      </span>
                      <BsArrowRight />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <span className="text-[#cc4100] sm:text-[30px] sm:mb-0 mb-[15px] text-[38px] font-light leading-[56px]">
              Most searched
            </span>
            <div className="bg-white w-[316px] h-[285px] shadow-card-shadow sm:shadow-none sm:mt-0 mt-[15px] p-[20px]">
              {[
                {
                  title: "Education",
                  description1: "Bachelor's program",
                  description2: "Master's program",
                  description3: "Honours program",
                  description4: "Education for proffetionals",
                  description5: "Study guide",
                },
              ].map((item) => {
                return (
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#333333]  py-[5px] text-[18px] leading-[30px]">
                        {item.description1}
                      </span>
                      <BsArrowRight />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#333333]  py-[5px] text-[18px] leading-[30px]">
                        {item.description2}
                      </span>
                      <BsArrowRight />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#333333]  py-[5px] text-[18px] leading-[30px]">
                        {item.description3}
                      </span>
                      <BsArrowRight />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#333333]  py-[5px] text-[18px] leading-[30px]">
                        {item.description4}
                      </span>
                      <BsArrowRight />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#333333]  py-[5px] text-[18px] leading-[30px]">
                        {item.description5}
                      </span>
                      <BsArrowRight />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <span className="text-[#008053] text-[38px] sm:text-[30px] sm:mb-0 mb-[15px] font-light leading-[56px]">
              Featured
            </span>
            <div className="bg-white shadow-card-shadow w-[316px] h-[285px] sm:shadow-none sm:mt-0  mt-[15px]  p-[20px]">
              {[
                {
                  title: "Education",
                  description1: "Bachelor's program",
                  description2: "Master's program",
                  description3: "Honours program",
                  description4: "Education for proffetionals",
                  description5: "Study guide",
                },
              ].map((item) => {
                return (
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#333333]  py-[5px] text-[18px] leading-[30px]">
                        {item.description1}
                      </span>
                      <BsArrowRight />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#333333]  py-[5px] text-[18px] leading-[30px]">
                        {item.description2}
                      </span>
                      <BsArrowRight />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#333333]  py-[5px] text-[18px] leading-[30px]">
                        {item.description3}
                      </span>
                      <BsArrowRight />
                    </div>

                    <Social />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
