import React from "react";
import { SlGraduation } from "react-icons/sl";
import { GiWorld } from "react-icons/gi";
import { CiMedal } from "react-icons/ci";
import { BsFillPuzzleFill } from "react-icons/bs";

function Education() {
  return (
    <div className="px-[122px] sm:px-0 py-[30px] grid grid-cols-4   bg-white h-[90px]  relative -top-14 z-20">
      {[
        {
          title: "31.704 students",
          icon: (
            <SlGraduation className="text-[#0077b3] sm:w-[22px] sm:h-[18px] w-[40px] h-[40px]" />
          ),
        },

        {
          title: "5.190 international students",
          icon: (
            <GiWorld className="text-[#0077b3] sm:w-[22px] sm:h-[18px] w-[40px] h-[40px] " />
          ),
        },

        {
          title: "459 PhD defences",
          icon: (
            <CiMedal className="text-[#0077b3] sm:w-[22px] sm:h-[18px] w-[40px] h-[40px] " />
          ),
        },
        {
          title: "9 faculties",
          icon: (
            <BsFillPuzzleFill className="text-[#0077b3] sm:w-[22px] sm:h-[18px] w-[40px] h-[40px]" />
          ),
        },
      ].map((item, index) => {
        return (
          <div className="px-[20px]  sm:px-0  mx-[7px]" key={index}>
            <div className="flex sm:flex-col sm:gap-2 sm:w-[86px] items-center ">
              <div className="">{item.icon}</div>

              <span className="text-[#333333] leading-[1.125rem] px-3  font-medium text-center text-[1rem]">
                {item.title}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Education;
