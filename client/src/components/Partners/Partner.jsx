import React from "react";
import { NavLink } from "react-router-dom";
import Heading from "../General/Heading";
import Agon from "../../assets/Home/Partners/agon.svg";
import Monst from "../../assets/Home/Partners/monst.svg";
import Figwire from "../../assets/Home/Partners/figwire.svg";
import TheFlow from "../../assets/Home/Partners/the_flow.svg";
import Evara from "../../assets/Home/Partners/evara.svg";

function Partner() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <Heading className='text-lg md:text-xl lg:text-3xl font-bold w-2/3 md:w-3/5 lg:w-1/2'>Content publishing cooperation with my partners</Heading>
        <NavLink>
          <Heading className='text-sm md:text-base'>Learn More</Heading>
        </NavLink>
      </div>
      <div className="flex justify-between">
      <div className="w-1/2 sm:w-1/3 md:w-1/5 flex justify-center">
          <img src={Agon} alt="Agon" className="max-w-full" />
        </div>
        <div className="w-1/2 sm:w-1/3 md:w-1/5 flex justify-center">
          <img src={Monst} alt="Monst" className="max-w-full" />
        </div>
        <div className="w-1/2 sm:w-1/3 md:w-1/5 flex justify-center">
          <img src={Figwire} alt="Figwire" className="max-w-full" />
        </div>
        <div className="w-1/2 sm:w-1/3 md:w-1/5 flex justify-center">
          <img src={TheFlow} alt="TheFlow" className="max-w-full" />
        </div>
        <div className="w-1/2 sm:w-1/3 md:w-1/5 flex justify-center">
          <img src={Evara} alt="Evara" className="max-w-full" />
        </div>
      </div>
    </div>
  );
}

export default Partner;
