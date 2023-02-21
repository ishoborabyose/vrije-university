import React, { useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

function Amsterdam() {
  return (
    <div className="bg-white sm:mx-4">
      <div className="py-[60px] sm:py-0 px-[20px] sm:px-0 ">
        <h2 className="text-[#cc4100] mx-[112px] sm:text-[30px] sm:mb-0 text-[38px] sm:mx-0 font-light leading-[56px] mb-[25px]">
          We are VU Amsterdam
        </h2>

        <div className=" ">
          <div className="flex justify-center  h-[605px] mb-[30px] sm:mb-0 overflow-hidden">
            {[
              {
                img: "https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/ee314579-ae99-4e24-a166-e4275b7b26d7/MH_G3A6804_Spinozaprijs_Hero_2200x720_3.png?w=397&h=595&fit=clip&rect=673%2C125%2C397%2C595&fm=jpg&auto=format&dpr=1",
                title: "NWO Spinoza Prize winner Yvette van Kooyk",
              },
              {
                img: "https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/af80e288-3224-4918-a78c-14c99e741d32/Gustaaf-Peek_Foto_Maya-Hermes_2134x1600.jpg?fm=jpg&auto=format&dpr=1",
                title: "Vrije Schrijver (Writer in Residence)",
              },
              {
                img: "https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/c4f807f9-18b8-4d8a-ab3d-006f345289fb/DreamTeams_webbanner_1600x750_tcm289-955609.jpg?fm=jpg&auto=format&dpr=1",
                title: "VU Dream Teams",
              },
              {
                img: "https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/9e00b0fc-d631-4c75-ae17-df91cdf62d93/Peter%20Valckx_IMG_7957_Frank_van_Harmelen_MA_AI_Verander.jpg?w=397&h=595&fit=clip&rect=2558%2C0%2C2562%2C3840&fm=jpg&auto=format&dpr=1",
                title: "Gravitation Grant recipient Frank van Harmelen",
              },
              {
                img: "https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/ee314579-ae99-4e24-a166-e4275b7b26d7/MH_G3A6804_Spinozaprijs_Hero_2200x720_3.png?w=397&h=595&fit=clip&rect=673%2C125%2C397%2C595&fm=jpg&auto=format&dpr=1",
                title: "NWO Spinoza Prize winner Yvette van Kooyk",
              },
            ].map((item, index) => {
              return (
                <div
                  className={` ${
                    index == 1 ? " " : "sm:hidden block"
                  } p-[30px] sm:px-0  hover:shadow-card-shadow h-[597px]`}
                >
                  <img
                    src={item.img}
                    alt="image"
                    className="max-w-[269px] sm:max-w-full  h-[359px] object-cover"
                  />

                  <div className="pl-[30px] sm:mt-3 sm:w-[269px] sm:pl-0">
                    <span className="text-[#cc4100] sm:text-[22px] sm:leading-[30px]   text-[24px] font-light leading-[36px] mb-[10px]">
                      {item.title}
                    </span>
                    <p className="text-[#333333] sm:mb-0 mb-[50px] text-[18px] leading-[30px] mr-[25px]">
                      Read more
                    </p>
                    <BsArrowRight className="float-right" />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-[#FCD3B6] sm:hidden h-[60px] flex items-center w-[120px] px-2   ml-auto justify-end ">
            <BsChevronLeft className="w-10 h-6 mx-auto cursor-pointer" />
            <BsChevronRight className="w-10 h-6 mx-auto cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Amsterdam;
