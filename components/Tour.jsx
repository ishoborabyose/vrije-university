import React from "react";
import { BsArrowRight } from "react-icons/bs";

function Tour() {
  return (
    <div className="bg-[#FAF7F5] py-[60px] sm:px-0 px-[20px] ">
      <div className="mx-[122px] sm:mx-0">
        <span className="text-[#008053] text-[38px] font-light leading-[56px] mb-[10px]">
          Take a look
        </span>

        <div className=" p-[30px] w-[316px] h-[240px] shadow-card-shadow bg-white mt-10 max-w-[316px] max-h-[240px]">
          <p className="text-[#008053] text-[24px] font-light leading-[36px] mb-[130px]">
            VU Campus Tour
          </p>
          <BsArrowRight className="float-right" />
        </div>
      </div>
    </div>
  );
}

export default Tour;
