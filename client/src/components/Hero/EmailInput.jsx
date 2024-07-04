import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

function EmailInput() {
  return (
    <div className="bg-[#222f43] pr-[2%] py-[1%] w-2/3 flex justify-between rounded-lg">
        <input type="email" name="" id="" placeholder="Type your email address" className="bg-transparent h-full w-full pl-[5%] text-custom-gray font-semibold" />
        <button className="bg-gradient-to-r from-custom-blue to-custom-cyan px-4 py-2 rounded-lg text-white font-medium flex items-center gap-2">
          Subscribe <FaArrowRight />
        </button>
      </div>
  )
}

export default EmailInput
