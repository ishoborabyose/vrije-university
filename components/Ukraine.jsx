import React from "react";
import { BsArrowRight } from "react-icons/bs";

function Ukraine() {
  return (
    <div className="bg-[#ffff]">
      <div className="py-[60px] px-[20px] sm:px-0 mx-[122px] sm:mx-0 gap-10 grid sm:grid-flow-row grid-flow-col">
        {[1, 2].map((item) => {
          return (
            <div className="py-[25px] px-[30px]  shadow-card-shadow ">
              <p className="text-[#008053] text-[24px] font-light leading-[36px] mb-[20px]">
                Ukraine
              </p>
              <p className="text-[#333333] text-[18px] font-light leading-[30px]">
                Information and support
              </p>
              <BsArrowRight className="float-right mt-10" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Ukraine;
