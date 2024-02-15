import React from "react";
import { SlScreenSmartphone } from "react-icons/sl";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { CiHeadphones } from "react-icons/ci";
import { VscGame } from "react-icons/vsc";

function CategoryCards() {
  return (
    <div className="categories-list  w-[1170px] mt-10 grid-rows-1 gap-x-8 grid-flow-col grid">
      <div
        style={{ border: "1px solid rgba(0,0,0,0.3)" }}
        className="hover:bg-secondary hover:text-primary transition-all duration-700 flex justify-evenly items-center cursor-pointer flex-col h-[145px] w-[170px]"
      >
        <div style={{ fontSize: "38px" }} className="icons">
          <SlScreenSmartphone />
        </div>
        <div className="text">Phones</div>
      </div>
      <div
        style={{ border: "1px solid rgba(0,0,0,0.3)" }}
        className="hover:bg-secondary hover:text-primary transition-all duration-700 flex justify-evenly cursor-pointer items-center flex-col h-[145px] w-[170px]"
      >
        <div style={{ fontSize: "38px" }} className="icons">
          <HiOutlineDesktopComputer />
        </div>
        <div className="text">Computer</div>
      </div>
      <div
        style={{ border: "1px solid rgba(0,0,0,0.3)" }}
        className=" cursor-pointer hover:bg-secondary hover:text-primary transition-all duration-700 flex justify-evenly items-center flex-col h-[145px] w-[170px]"
      >
        <div style={{ fontSize: "38px" }} className="icons">
          <BsSmartwatch />
        </div>
        <div className="text">SmartWatch</div>
      </div>
      <div
        style={{ border: "1px solid rgba(0,0,0,0.3)" }}
        className="  cursor-pointer hover:bg-secondary hover:text-primary transition-all duration-700 flex justify-evenly items-center flex-col h-[145px] w-[170px]"
      >
        <div style={{ fontSize: "38px" }} className="icons">
          <IoCameraOutline />
        </div>
        <div className="text">Camera</div>
      </div>
      <div
        style={{ border: "1px solid rgba(0,0,0,0.3)" }}
        className="  cursor-pointer hover:bg-secondary hover:text-primary transition-all duration-700 flex justify-evenly items-center flex-col h-[145px] w-[170px]"
      >
        <div style={{ fontSize: "38px" }} className="icons">
          <CiHeadphones />
        </div>
        <div className="text">Headphones</div>
      </div>
      <div
        style={{ border: "1px solid rgba(0,0,0,0.3)" }}
        className=" cursor-pointer hover:bg-secondary hover:text-primary transition-all duration-700 flex justify-evenly items-center flex-col h-[145px] w-[170px]"
      >
        <div style={{ fontSize: "38px" }} className="icons">
          <VscGame />
        </div>
        <div className="text">Gaming</div>
      </div>
    </div>
  );
}

export default CategoryCards;
