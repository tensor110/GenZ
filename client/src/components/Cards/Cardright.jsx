import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/Glassmorph.css";
import Subline from "../General/Subline";
import Post from "./Post";
import ImageMasonry from "./Masonry";

function Cardright() {
  return (
    <div className='flex flex-col glassmorph w-full md:min-w-[30%] lg:w-[33%] p-[2%] gap-4'>
      <div className="flex flex-col gap-3">
        <NavLink to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="" className="size-10 rotate-[30deg]" />
          <Subline className="font-bold text-4xl">GenZ</Subline>
        </NavLink>
        <Subline className="font-medium text-sm">
          Follow us on Instagram
        </Subline>
      </div>
      <div>
        <ImageMasonry />
      </div>
    </div>
  );
}

export default Cardright;
