import React, { useState } from "react";
import MinHeader from "../Ccomponents/MinHeader";
import Navbar from "../Ccomponents/Navbar";
// createContext ,useContext, 
// import TablesProd from "./TablesProd"; 

// export const usercontext = createContext()
const MainPageSaller = () => {
  // const[data,setdata]=useState('aaaa')

  return (
    <div>
      <div className="flex flex-col bg-white">
        <MinHeader />
        <Navbar />
      </div>
      <div className=" mt-10 ml-31 flex w-full h-full">
        <div className=" text-center mt-4 w-1/6 h-full">
        <img class="  ml-16 w-20 h-20 rounded" src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png" alt="Large avatar"/>
          <h3 className=" text-sm/[28px] font-semibold">
            <span className="text-red-500">Hello amine</span>
          </h3>
          <div className="text-sm/[24px] font-bold uppercase">
            <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
            Saler
          </div>
        </div>
        {/* <div className="bg-black w-px h-96">
        </div> */}
        <div className="w-full  ">
          <div className="flex w-full">
            
          </div>
          {/* <usercontext.Provider value={data} >
          <TablesProd />
          </usercontext.Provider> */}
          
        </div>
      </div>
    </div>
  );
};

export default MainPageSaller;
