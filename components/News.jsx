import React from "react";
import { BsArrowRight } from "react-icons/bs";

function News() {
  return (
    <div className="bg-[#faf7f5] sm:px-4">
      <div className="py-[60px] px-[20px] sm:py-[30px] sm:px-0 sm:mx-0 mx-[112px]">
        <h2 className="text-[#3b2171] sm:text-[30px] sm:leading-[36px] text-[38px] font-light leading-[56px] mb-[25px]">
          News
        </h2>

        <div className="flex sm:flex-col sm:justify-center justify-between sm:gap-0 gap-20">
          <div className="space-y-[25px] sm:space-y-5">
            {[
              {
                img: "https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/83279044-76f1-4736-8fe6-383f0530dae1/2N3337X.jpg?w=1250&h=600&fit=clip&rect=0,1254,6720,3226",
                words: "Earthquakes Turkey and Syria",
              },
              {
                img: "https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/d8e771d2-c135-499c-a67c-d1da825f453b/robofinch%20def.png",
                words: "Robot bird gives singing lessons to zebra finches",
              },
            ].map((item) => {
              return (
                <div className="flex">
                  <img
                    src={item.img}
                    alt="image"
                    className="w-[284px] h-[216px] sm:w-[146px] sm:h-[110px] object-cover"
                  />

                  <div className="pl-[30px]">
                    <span className="text-[#3b2171] text-[18px] font-bold leading-[30px] ">
                      08 Feb 2022
                    </span>
                    <p className="text-[#333333] mt-[10px] mb-[100px] font-light sm:mb-0 sm:text-[18px] text-[23.94px] leading-[30px] m[25px]">
                      {item.words}
                    </p>
                    <BsArrowRight className="float-right" />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="space-y-[105px] sm:space-y-5">
            {[
              {
                img: "https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/45e509b2-1cf3-49a7-b40d-53310c2e2219/7%20ton%20voor%20welzijn%20Oekrai%CC%88ne%20vluchtelingen_afb_1250x600.jpg",
                words: "EU grant to improve mental well-being of Ukrainian ",
              },
              {
                img: "https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/c49919f7-968b-41d7-8776-e9e555f737c5/Sapiens_VUweb_2200x720.jpg?w=1250&h=600&fit=clip&rect=350,0,1500,720",
                words: "Sapiens' partnership ended",
              },
              {
                img: "https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/f9f7b751-4e22-4175-add9-3aec344e16ed/Wouter-Botzen.png",
                words: "ERC Consolidator Grant for Wouter Botzen",
              },
            ].map((item) => {
              return (
                <div className="flex">
                  <img
                    src={item.img}
                    alt="image"
                    className="w-[113px] h-[86px] sm:w-[146px] sm:h-[110px] object-cover"
                  />

                  <div className="pl-[30px] h-[90px]">
                    <span className="text-[#3b2171] text-[18px] font-medium leading-[30px] mb-[10px]">
                      08 Feb 2022
                    </span>
                    <p className="text-[#333333] sm:text-[18px] font-light text-[18px] leading-[30px] mr-[25px]">
                      {item.words}
                    </p>
                    <BsArrowRight className="float-right" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <span className="text-[#333333] text-[18px] font-medium leading-[30px] sm:mt-14 flex mt-[125px] gap-2 items-center justify-center">
          News overview <BsArrowRight />
        </span>
      </div>
    </div>
  );
}

export default News;
