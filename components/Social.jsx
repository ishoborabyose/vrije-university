import React from "react";
import {
  FaInstagramSquare,
  FaLinkedin,
  FaYoutubeSquare,
  FaFacebookSquare,
  FaTwitterSquare,
} from "react-icons/fa";

function Social() {
  return (
    <div className="grid-cols-5 grid  mt-20 items-center">
      <FaInstagramSquare className="text-[#0077b3] w-[50px] h-[50px]" />
      <FaLinkedin className="text-[#0077b3] w-[50px] h-[50px]" />

      <FaFacebookSquare className="text-[#0077b3] w-[50px] h-[50px]" />
      <FaTwitterSquare className="text-[#0077b3] w-[50px] h-[50px]" />
      <FaYoutubeSquare className="text-[#0077b3] w-[50px] h-[50px]" />
    </div>
  );
}

export default Social;
