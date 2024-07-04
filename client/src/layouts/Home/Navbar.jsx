import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full py-4 flex justify-between items-center bg-transparent text-white">
      {/* Logo  */}
      <NavLink to="/" className="flex items-center gap-3">
        <img src="/logo.png" alt="" className="size-10 rotate-[30deg]" />
        <span className="font-bold text-2xl">GenZ</span>
      </NavLink>
      {/* Links  */}
      <div className="w-1/2 flex justify-between items-center text-#94a9c9">
        <NavLink to="/" className='text-custom-gray hover:text-custom-blue'>Home</NavLink>
        <NavLink to="portfolio" className='text-custom-gray hover:text-custom-blue'>Portfolio</NavLink>
        <NavLink to="clients" className='text-custom-gray hover:text-custom-blue'>Clients</NavLink>
        <NavLink to="pricing" className='text-custom-gray hover:text-custom-blue'>Pricing</NavLink>
        <NavLink to="blog" className='text-custom-gray hover:text-custom-blue'>Blog</NavLink>
        <NavLink to="contact" className='text-custom-gray hover:text-custom-blue'>Contact</NavLink>
      </div>
      {/* Button  */}
      <div>
        <NavLink to="login" className=" border-none p-0">
          <button className="bg-gradient-to-r from-custom-blue to-custom-cyan px-6 py-1 rounded-lg text-white font-medium">
            Subscribe
          </button>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
