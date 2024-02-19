import React, { useState,useEffect } from "react";
import axios from "axios";

function Images({data}){
  const arr = {data}
 console.log(arr.data[0],'this in description');
  console.log(arr.data[0]);
   
    return (
        <div className="flex justify-center items-center w-[600px]">
            <div className="flex flex-col justify-between mt-4 w-[200px]">
            <div className="w-[150px] m-2">
          {/* <img className="p-2 hover:scale-125" src={arr.data[0].imgproducts[0].image1} />
            <img className="p-2 hover:scale-125" src={arr.data[0].imgproducts[0].image2} />
            <img className="p-2 hover:scale-125" src={arr.data[0].imgproducts[0].image3}  />
    <img className="p-2 hover:scale-125" src={arr.data[0].imgproducts[0].image1} />       */}
    </div>
            </div>
            <div className="w-500 h-600  bg-gray-200 rounded-md">
            <div className="w-446 h-315 left-27 top-154 bg-cover bg-center" >
              {/* main */}
            <img className="hover:scale-105 hover:mr-2 " src={arr.data[0].imgurlmain}  />
            </div>
            </div>
            </div>
            
            )





}
export default Images;