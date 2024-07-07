import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function FooterDown() {
  return (
    <div className="flex justify-between">
      <div>
        <span className="flex items-center gap-2 text-white font-extralight">
          <FaRegCopyright /> Created by AliThemes.com
        </span>
      </div>
      <div className="flex justify-between text-custom-gray w-1/3">
        <span className="flex items-center gap-3">
          <FaTwitter /> Twitter
        </span>
        <span className="flex items-center gap-3">
          <FaLinkedin /> Linkedin
        </span>
        <span className="flex items-center gap-3">
          <FaInstagram /> Instagram
        </span>
      </div>
    </div>
  );
}

export default FooterDown;
