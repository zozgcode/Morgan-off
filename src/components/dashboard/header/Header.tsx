"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function Header({ handleLogout, user }: any) {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full min-h-[30px] relative flex items-center justify-between bg-white border-b-4 border-[#B21D6E] p-[20px] py-[15px]">
      <div className="flex items-center gap-2">
        <Image src="https://i.imgur.com/jodPSnj.png" width={200} height={200} className="w-[50px]" alt="logo" />
        <p className="my-[2px] text-center text-[#B21D6E] font-medium text-base">Morgan Offshore Banking</p>
      </div>
      
      <div className="relative">
        <svg
          onClick={toggle}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-[30px] h-[30px] text-[#B21D6E]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          ></path>
        </svg>

        {open && (
          <div className="absolute z-50 shadow bg-white rounded-md right-0 flex flex-col justify-center border border-[#B21D6E] gap-[5px]">
            <p className="text-[14px] px-[15px] py-[5px] whitespace-nowrap font-medium text-[#B21D6E]">
              {user.holder.jointNames ? "" : `${user.holder.firstName} ${user.holder.lastName}`}
              
            </p>
            <p
              className="text-[14px] m-1 px-[15px] text-center rounded-md py-[5px] bg-[#B21D6E] border whitespace-nowrap text-white"
              onClick={handleLogout}
            >
              Sign out
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
