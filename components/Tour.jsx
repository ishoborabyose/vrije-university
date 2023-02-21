import React from "react";
import { BsArrowRight } from "react-icons/bs";

function Tour() {
  return (
    <div className="bg-[#FAF7F5] py-[60px]  sm:py-8 sm:px-4 px-[20px] ">
      <div className="mx-[122px] sm:mx-0">
        <span className="text-[#008053] sm:text-[30px] text-[38px] font-light leading-[56px] mb-[10px]">
          Take a look
        </span>

        <div className=" p-[30px] sm:w-full  w-[316px] sm:h-[150px] h-[240px] shadow-card-shadow bg-white sm:mt-4 mt-10  ">
          <p className="text-[#008053] text-[24px] font-light leading-[36px] mb-[130px] sm:mb-12">
            VU Campus Tour
          </p>
          <BsArrowRight className="float-right" />
        </div>
      </div>
    </div>
  );
}

export default Tour;
