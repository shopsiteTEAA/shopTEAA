import React from "react";

function TopHeader() {
  return (
    <div className="w-full h-[48px] bg-[#000]">
      <div className="bg-[#000] h-[48px] absolute right-[135px] flex items-center">
        <div className="flex items-center justify-between  w-[859px]">
          <div className="flex">
            <h1 className="text-[#fafafa]  px-2 font-normal ">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </h1>
            <button className="text-[#fafafa] font-semibold	underline ">
              ShopNow
            </button>
          </div>
          <select className="bg-[#000] text-[#fafafa] ">
            <option value="english">English</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
