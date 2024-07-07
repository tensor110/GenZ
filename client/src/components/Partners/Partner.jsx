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
        <Heading className='text-3xl font-bold w-2/5'>Content publishing cooperation with my partners</Heading>
        <NavLink>
          <Heading>Learn More</Heading>
        </NavLink>
      </div>
      <div className="flex justify-between">
        <img src={Agon} alt="Agon" />
        <img src={Monst} alt="Monst" />
        <img src={Figwire} alt="Figwire" />
        <img src={TheFlow} alt="TheFlow" />
        <img src={Evara} alt="Evara" />
      </div>
    </div>
  );
}

export default Partner;
