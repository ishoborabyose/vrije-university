import React from "react";
import { BsArrowRight } from "react-icons/bs";

function Footer() {
  return (
    <div className="bg-[#0077b3] px-[20px] sm:px-0">
      <div className="py-[30px] mx-[122px]  sm:mx-0 ">
        <div className="justify-between flex flex-wrap">
          {[1, 2, 3, 4, 5, 6].map((item) => {
            return (
              <span className="text-white text-[16px] leading-[27px] font-normal flex items-center">
                Privacy Statement
                <BsArrowRight className="ml-3 text-white" />
              </span>
            );
          })}
        </div>
        <p className="text-white text-[16px] mt-6 leading-[27px] font-normal flex items-center">
          Copyright © 2023 - Vrije Universiteit Amsterdam
        </p>
      </div>
    </div>
  );
}

export default Footer;
