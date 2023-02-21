import React from "react";
import { BsArrowRight } from "react-icons/bs";

function Ukraine() {
  return (
    <div className="bg-[#ffff] sm:mx-4">
      <div className="py-[60px] sm:py-[30px] px-[20px] sm:px-0 mx-[122px] sm:gap-4 sm:mx-0 gap-10 grid sm:grid-flow-row grid-flow-col">
        {[
          {
            title: "Ukraine",
            desc: "Information and support",
          },
          {
            title: "VU & Corona",
            desc: "",
          },
        ].map((item, index) => {
          return (
            <div
              key={index}
              className="py-[25px] px-[30px] sm:py-[10px]  shadow-card-shadow "
            >
              <p
                className={`${
                  index === 1 ? "text-[#333333]" : "text-[#008053]"
                }  sm:text-[22px] sm:leading-[32px] text-[24px] font-light leading-[36px] mb-[20px]`}
              >
                {item.title}
              </p>
              <p className="text-[#333333] text-[18px] font-light leading-[30px]">
                {item.desc}
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
