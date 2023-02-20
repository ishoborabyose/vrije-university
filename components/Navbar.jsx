import React from "react";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose, AiOutlineCaretUp } from "react-icons/ai";
import { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

function Navbar() {
  const [show, setShow] = useState(false);
  const [shows, setShows] = useState(false);
  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "auto";
    return () => (document.body.style.overflow = "scroll");
  }, [show]);
  return (
    <>
      <div className="flex justify-between sm:w-full shadow-card-shadow fixed w-[1256px]  z-30 bg-white ">
        <div className="px-[30px] sm:px-0 sm:py-2 py-[15px]">
          <Link href="/">
            <img
              src="https://vu.nl/assets/images/VU-logo-nobg.svg"
              alt="logo"
              className="w-[185px] h-[45px]"
            />
          </Link>
        </div>

        <div className="flex space-x-6 sm:space-x-2 bg-[#F2EFED] px-[30px] py-6 text-[#333333]">
          <Link href="/nl">
            <span className="text-[23.94px] leading-[30px] font-light cursor-pointer">
              NL
            </span>
          </Link>

          <CiUser
            onClick={() => setShows(!shows)}
            className="w-7 h-7 cursor-pointer"
          />
          <Link href="/search">
            <CiSearch className="w-7 h-7 cursor-pointer" />
          </Link>

          <FiMenu
            onClick={() => setShow(!show)}
            className="w-7 h-7 cursor-pointer"
          />
        </div>
      </div>{" "}
      {show && (
        <div className="bg-white w-[1256px] sm:w-[100%]  shadow-card-shadow fixed z-50 top-0 h-full">
          <div className="">
            <div className="bg-[#f2efed] p-4 flex w-[70px] cursor-pointer ml-auto">
              <AiOutlineClose
                className={`${
                  show && "rotate-180"
                } duration-500 text-[#333333] w-[20px]  h-[30px]`}
                onClick={() => setShow(!show)}
              />
            </div>

            <div className="flex py-56  px-32 w-[419px] h-[450px] pl-[100px] sm:pl-0 flex-col space-y-10 mr-auto">
              {[
                "Study at VU Amsterdam",
                "Research",
                "About VU Amsterdam",
                "VU press office",
                "Alumni",
                "Student",
                "Employee",
              ].map((item, i) => {
                return (
                  <Link
                    href={item}
                    key={i}
                    className="text-[#333333] w-[349px] justify-between cursor-pointer  text-[23.94px] leading-[30px] font-bold flex "
                  >
                    <span className="">{item}</span>
                    <BsArrowRight className="text-[#333333] font-bold w-[20px] h-[30px]" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
      {shows && (
        <div className="bg-white pb-10 sm:top-[77px] px-[30px] fixed top-[93px] right-56  sm:right-10  sm:w-[80%] w-1/4 shadow-card-shadow  z-50">
          <AiOutlineCaretUp className="relative -right-64 -top-12 sm:-right-48 h-20 w-16 text-white" />
          <AiOutlineClose
            className="text-[#333333] w-[20px] h-[30px] relative -right-80 sm:-right-60 cursor-pointer -top-12"
            onClick={() => setShows(!shows)}
          />
          {[
            "Prospective student - login",
            "Student - login",
            "Employee - login",
          ].map((item, i) => {
            return (
              <Link
                href={item}
                key={i}
                className="flex items-center justify-between"
              >
                <span className="text-[#0077b3] p-2 font-medium text-[18px] leading-[1.15rem]">
                  {item}
                </span>

                <BsArrowRight className="text-[#0077b3]" />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Navbar;
