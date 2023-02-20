import React from "react";
import { SlGraduation } from "react-icons/sl";

function Education() {
  return (
    <div className="px-[122px] sm:px-0  bg-white py-[34px] flex flex-wrap justify-between relative -top-14 z-10">
      {[1, 2, 3, 4].map((item) => {
        return (
          <div>
            <div className="flex ">
              <SlGraduation className="text-[#0077b3] w-[37px] h-[30px] mr-[15px]" />
              <span className="text-[#333333] leading-[20.25px] font-medium text-center text-[18px]">
                31.704 students
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Education;
