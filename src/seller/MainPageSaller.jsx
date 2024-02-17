import React from "react";
import MinHeader from "../Ccomponents/MinHeader";
import Navbar from "../Ccomponents/Navbar";
import TablesProd from "./TablesProd";

const MainPageSaller = () => {
  return (
    <div>
      <div className="flex flex-col bg-white">
        <MinHeader />
        <Navbar />
      </div>
      <div className=" mt-10 flex w-full h-full">
        <div className=" text-center mt-4 w-1/6 h-full">
          <div class="  m-auto relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <svg
              class="   absolute w-12 h-12 text-gray-400 -left-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <h3 className=" text-sm/[24px] font-semibold">
            Mohamed Amine
          </h3>
          <div className="text-sm/[24px] font-bold uppercase">
            <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
            Saler
          </div>
        </div>
        <div className="bg-black w-px h-96">
        </div>
        <div className="w-full  ">
          <div className="flex w-full">
            <div className=" w-1/3 h-52">
              <h1>m</h1>
            </div>
            <div className=" w-1/3 ">
              <h1>m1</h1>
            </div>
            <div className=" w-1/3 ">
              <h1>m2</h1>
            </div>
          </div>
          <TablesProd/>
        </div>
      </div>
    </div>
  );
};

export default MainPageSaller;
