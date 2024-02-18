import React from "react";
import { SlScreenSmartphone } from "react-icons/sl";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { CiHeadphones } from "react-icons/ci";
import { VscGame } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

function CategoryCards() {
  const navigate = useNavigate();

  const categoryCardStyles =
    "border border-solid border-opacity-30 hover:bg-secondary hover:text-primary transition-all duration-700 flex justify-evenly items-center flex-col h-[145px] w-[170px] cursor-pointer";

  return (
    <div className="categories-list w-[1170px] mt-10 grid-rows-1 gap-x-8 grid-flow-col grid">
      <div className={`${categoryCardStyles}`} onClick={() => navigate('/categoryProduct', { state: "smartphone" })}>
        <div style={{ fontSize: "38px" }} className="icons">
          <SlScreenSmartphone />
        </div>
        <div className="text">Phones</div>
      </div>
      <div className={`${categoryCardStyles}`} onClick={() => navigate('/categoryProduct', { state: "computer" })}>
        <div style={{ fontSize: "38px" }} className="icons">
          <HiOutlineDesktopComputer />
        </div>
        <div className="text">Computer</div>
      </div>
      <div className={`${categoryCardStyles}`} onClick={() => navigate('/categoryProduct', { state: "smartwatch" })}>
        <div style={{ fontSize: "38px" }} className="icons">
          <BsSmartwatch />
        </div>
        <div className="text">SmartWatch</div>
      </div>
      <div className={`${categoryCardStyles}`} onClick={() => navigate('/categoryProduct', { state: "camera" })}>
        <div style={{ fontSize: "38px" }} className="icons">
          <IoCameraOutline />
        </div>
        <div className="text">Camera</div>
      </div>
      <div className={`${categoryCardStyles}`} onClick={() => navigate('/categoryProduct', { state: "headphone" })}>
        <div style={{ fontSize: "38px" }} className="icons">
          <CiHeadphones />
        </div>
        <div className="text">Headphones</div>
      </div>
      <div className={`${categoryCardStyles}`} onClick={() => navigate('/categoryProduct', { state: "gaming" })}>
        <div style={{ fontSize: "38px" }} className="icons">
          <VscGame />
        </div>
        <div className="text">Gaming</div>
      </div>
    </div>
  );
}

export default CategoryCards;
