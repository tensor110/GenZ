import React from "react";
import Avatar from "@mui/material/Avatar";

function Card() {
  return (
    <div className="relative w-[100%]  h-[70vh]">
      <div className="absolute inset-0 bg-[url('/image.jpg')] bg-cover bg-center bg-no-repeat rounded-2xl"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-2xl"></div>
      <div className="relative z-10 flex flex-col justify-between h-full p-6">
        <div className="flex justify-end">
          <Avatar alt="" src="/person.jpg" sx={{width: 20, height: 20}} />
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-white text-2xl font-medium">The Best Cities to Travel Alone in the USA</h4>
          <div className="flex justify-between items-center text-custom-gray w-4/5">
            <Avatar alt="" src="/person.jpg" />
            <h6 className="font-semibold">Thompson</h6>
            <span className="font-thin text-sm">25 April 2022</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
