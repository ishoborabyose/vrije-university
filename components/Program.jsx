import React from "react";
import { BsArrowRight } from "react-icons/bs";

function Program() {
  return (
    <div className="relative  -top-24 z-10">
      <div className="bg-[#ffffff] p-[85px]"></div>

      <div className="grid grid-flow-col sm:grid-flow-row  gap-[20px] sm:px-0 px-[122px] mb-[-98px]   bg-[#faf7f5]">
        {[
          {
            title: "Education",
            description1: "Bachelor's program",
            description2: "Master's program",
            description3: "Honours program",
            description4: "Education for proffetionals",
            description5: "Study guide",
          },
          {
            title: "Research",
            description1: "Research highlights",
            description2: "Valorisation",
            description3: "Our scientists",
            description4: "Prizes and distinctions",
            description5: "Interdisciplinary research institutes",
          },
        ].map((item) => {
          return (
            <div className="bg-white mx-4 shadow-card-shadow p-[30px] relative -top-20 z-10">
              <div>
                <div className="flex justify-between">
                  <span className="text-[#0077b3] sm:text-[30px] sm:leading-[36px] sm:mb-2 mb-[30px] text-[38px] font-light leading-[56px]">
                    {item.title}
                  </span>
                  <BsArrowRight className="text-[#0077b3] w-[33px] h-[38px]" />
                </div>
                <div className="flex justify-between">
                  <span className="text-[#333333] text-[18px] leading-[30px]">
                    {item.description1}
                  </span>
                  <BsArrowRight />
                </div>
                <div className="flex justify-between">
                  <span className="text-[#333333] text-[18px] leading-[30px]">
                    {item.description2}
                  </span>
                  <BsArrowRight />
                </div>
                <div className="flex justify-between">
                  <span className="text-[#333333] text-[18px] leading-[30px]">
                    {item.description3}
                  </span>
                  <BsArrowRight />
                </div>
                <div className="flex justify-between">
                  <span className="text-[#333333] text-[18px] leading-[30px]">
                    {item.description4}
                  </span>
                  <BsArrowRight />
                </div>
                <div className="flex justify-between">
                  <span className="text-[#333333] text-[18px] leading-[30px]">
                    {item.description5}
                  </span>
                  <BsArrowRight />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Program;
