import React from "react";
import "../../styles/TextGradient.css";
import Avatar from "./Avatar";
import EmailInput from "./EmailInput";

function HeroLeft() {
  return (
    <div className="flex flex-col w-full lg:w-1/2 justify-center items-start gap-[9%]">
      <span className="text-custom-gray text-lg font-medium">
        Hello Everyone
      </span>
      <span className="text-7xl font-bold text-white">
        I'm <span className="gradient-text">Steven Job</span>
      </span>
      <p className="text-custom-gray">
        I use animation as a third dimension by which to simplify experiences
        and kuiding thro each and every interaction. I'm not adding motion just
        to spruce things up, but doing it in ways that.
      </p>
      <EmailInput />
      <div>
        <Avatar />
      </div>
    </div>
  );
}

export default HeroLeft;
