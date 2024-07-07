import React from "react";

function MidFooter() {
  return (
    <div className="w-1/3 flex flex-col gap-4">
      <h3 className="text-white font-semibold">Categories</h3>
      <div className="flex justify-between w-2/3">
        <div className="text-custom-gray flex flex-col gap-1">
          <span>Action</span>
          <span>Business</span>
          <span>Adventure</span>
          <span>Canada</span>
          <span>America</span>
          <span>Curosity</span>
        </div>
        <div className="text-custom-gray flex flex-col gap-1">
          <span>Animal</span>
          <span>Dental</span>
          <span>Biology</span>
          <span>Design</span>
          <span>Breakfast</span>
          <span>Desert</span>
        </div>
      </div>
    </div>
  );
}

export default MidFooter;
