import React from "react";
import { BsArrowRight } from "react-icons/bs";

function News() {
  return (
    <div className="bg-[#faf7f5]">
      <div className="py-[60px] px-[20px] sm:px-0 sm:mx-0 mx-[112px]">
        <h2 className="text-[#3b2171] text-[38px] font-light leading-[56px] mb-[25px]">
          News
        </h2>

        <div className="flex sm:flex-col sm:justify-center justify-between sm:space-x-0 space-x-20">
          <div className="space-y-[25px] sm:space-y-2">
            {[1, 2].map((item) => {
              return (
                <div className="flex">
                  <img
                    src="https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/620eb879-353a-48fc-88d7-ee3c1324aec8/VUvlag.png"
                    alt="image"
                    className="w-[284px] h-[216px] sm:w-[146px] sm:h-[110px]"
                  />

                  <div className="pl-[30px]">
                    <span className="text-[#3b2171] text-[18px] font-bold leading-[30px] mb-[10px]">
                      08 Feb 2022
                    </span>
                    <p className="text-[#333333] mb-[100px] font-light sm:mb-0 sm:text-[18px] text-[23.94px] leading-[30px] mr-[25px]">
                      Earthquakes Turkey and Syrie
                    </p>
                    <BsArrowRight className="float-right" />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="space-y-[70px] sm:space-y-2">
            {[1, 2, 3].map((item) => {
              return (
                <div className="flex">
                  <img
                    src="https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/45e509b2-1cf3-49a7-b40d-53310c2e2219/7%20ton%20voor%20welzijn%20Oekrai%CC%88ne%20vluchtelingen_afb_1250x600.jpg"
                    alt="image"
                    className="w-[113px] h-[86px] sm:w-[146px] sm:h-[110px]"
                  />

                  <div className="pl-[30px] ">
                    <span className="text-[#3b2171] text-[18px] font-bold leading-[30px] mb-[10px]">
                      08 Feb 2022
                    </span>
                    <p className="text-[#333333] sm:text-[18px] font-light text-[23.94px] leading-[30px] mr-[25px]">
                      Earthquakes Turkey and Syrie
                    </p>
                    <BsArrowRight className="float-right" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <span className="text-[#333333] text-[18px] font-medium leading-[30px] flex mt-[125px] gap-2 items-center justify-center">
          News overview <BsArrowRight />
        </span>
      </div>
    </div>
  );
}

export default News;
