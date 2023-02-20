import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

function Amsterdam() {
  return (
    <div className="bg-white">
      <div className="py-[60px] px-[20px] sm:px-0 ">
        <h2 className="text-[#cc4100] mx-[112px] text-[38px] sm:mx-0 font-light leading-[56px] mb-[25px]">
          We are VU Amsterdam
        </h2>

        <div className=" ">
          <div className="flex justify-center overflow-hidden">
            {[1, 2, 3, 4, 5].map((item, index) => {
              return (
                <div
                  className={` ${
                    index == 0 ? " " : "sm:hidden block"
                  } p-[30px] sm:px-0 ] hover:shadow-card-shadow`}
                >
                  <img
                    src="https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/af80e288-3224-4918-a78c-14c99e741d32/Gustaaf-Peek_Foto_Maya-Hermes_2134x1600.jpg?fm=jpg&auto=format&dpr=1"
                    alt="image"
                    className="max-w-[269px]"
                  />

                  <div className="pl-[30px]">
                    <span className="text-[#cc4100] text-[24px] font-light leading-[36px] mb-[10px]">
                      Vrije Schrijver (Writer in Residence)
                    </span>
                    <p className="text-[#333333] mb-[50px] text-[18px] leading-[30px] mr-[25px]">
                      Read more
                    </p>
                    <BsArrowRight className="float-right" />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-[#FCD3B6] sm:hidden px-2 py-4 flex w-[120px] h-[70px] ml-auto justify-end ">
            <BsChevronLeft className="w-10 h-6" />
            <BsChevronRight className="w-10 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Amsterdam;
