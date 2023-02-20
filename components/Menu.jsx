import React from "react";
import { BsArrowRight } from "react-icons/bs";
import {
  BsInstagram,
  BsTwitter,
  BsFacebook,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";

function Menu() {
  return (
    <div className="bg-[#ffffff] py-[60px] sm:px-0 px-[20px]">
      <div className="mx-[122px] sm:mx-0">
        <div className="bg-[#ffffff] "></div>
        <div className="grid grid-flow-col sm:grid-flow-row gap-10 ">
          <div>
            <span className="text-[#0077b3] text-[38px] mb-[15px] font-light leading-[56px]">
              VU main menu
            </span>
            <div className="bg-white sm:shadow-none shadow-card-shadow mt-[15px] p-[20px]  ">
              {[
                {
                  title: "Education",
                  description1: "Bachelor's program",
                  description2: "Master's program",
                  description3: "Honours program",
                  description4: "Education for proffetionals",
                  description5: "Study guide",
                },
              ].map((item) => {
                return (
                  <div>
                    <div className="flex justify-between">
                      <span className="text-[#333333] py-2 text-[18px] leading-[30px]">
                        {item.description1}
                      </span>
                      <BsArrowRight />
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#333333] py-2 text-[18px] leading-[30px]">
                        {item.description2}
                      </span>
                      <BsArrowRight />
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#333333] py-2 text-[18px] leading-[30px]">
                        {item.description3}
                      </span>
                      <BsArrowRight />
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#333333] py-2 text-[18px] leading-[30px]">
                        {item.description4}
                      </span>
                      <BsArrowRight />
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#333333] py-2 text-[18px] leading-[30px]">
                        {item.description5}
                      </span>
                      <BsArrowRight />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <span className="text-[#cc4100]  mb-[15px] text-[38px] font-light leading-[56px]">
              Most searched
            </span>
            <div className="bg-white shadow-card-shadow sm:shadow-none  mt-[15px] p-[20px]">
              {[
                {
                  title: "Education",
                  description1: "Bachelor's program",
                  description2: "Master's program",
                  description3: "Honours program",
                  description4: "Education for proffetionals",
                  description5: "Study guide",
                },
              ].map((item) => {
                return (
                  <div>
                    <div className="flex justify-between">
                      <span className="text-[#333333] py-2 text-[18px] leading-[30px]">
                        {item.description1}
                      </span>
                      <BsArrowRight />
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#333333] py-2 text-[18px] leading-[30px]">
                        {item.description2}
                      </span>
                      <BsArrowRight />
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#333333] py-2 text-[18px] leading-[30px]">
                        {item.description3}
                      </span>
                      <BsArrowRight />
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#333333] py-2 text-[18px] leading-[30px]">
                        {item.description4}
                      </span>
                      <BsArrowRight />
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#333333] py-2 text-[18px] leading-[30px]">
                        {item.description5}
                      </span>
                      <BsArrowRight />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <span className="text-[#008053] text-[38px] mb-[15px] font-light leading-[56px]">
              Featured
            </span>
            <div className="bg-white shadow-card-shadow sm:shadow-none  mt-[15px]  p-[20px]">
              {[
                {
                  title: "Education",
                  description1: "Bachelor's program",
                  description2: "Master's program",
                  description3: "Honours program",
                  description4: "Education for proffetionals",
                  description5: "Study guide",
                },
              ].map((item) => {
                return (
                  <div>
                    <div className="flex justify-between">
                      <span className="text-[#333333] py-2 text-[18px] leading-[30px]">
                        {item.description1}
                      </span>
                      <BsArrowRight />
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#333333] py-2 text-[18px] leading-[30px]">
                        {item.description2}
                      </span>
                      <BsArrowRight />
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#333333] py-2 text-[18px] leading-[30px]">
                        {item.description3}
                      </span>
                      <BsArrowRight />
                    </div>

                    <div className="flex gap-3 mt-12">
                      <BsInstagram className="text-[#0077b3] w-[45px] h-[45px]" />
                      <BsLinkedin className="text-[#0077b3] w-[45px] h-[45px]" />
                      <BsFacebook className="text-[#0077b3] w-[45px] h-[45px]" />
                      <BsTwitter className="text-[#0077b3] w-[45px] h-[45px]" />
                      <BsYoutube className="text-[#0077b3] w-[45px] h-[45px]" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
