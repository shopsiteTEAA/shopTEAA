import React, { useState } from 'react';
import axios from 'axios';
import { AiOutlineSync } from 'react-icons/ai';
import { BsTruck } from 'react-icons/bs';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function GamepadDetails() {
  const [sum, setSum] = useState(1);

  const handleAdd = () => {
    axios.post(`http://localhost:3000/panier/addtoCart/1/1`,
     { sum }).then(() => {
      console.log('added to basket');
    });
  };

  return (
    <div className="w-2/4 h-72 ml-4 font-semibold p-4 bg-white">
      <div>
        <i>
          <h1 className="text-2xl font-semibold">Havic HV G-92 Gamepad</h1>
        </i>
      </div>
      <div className="flex items-center gap-2">
        <button className="text-secondary">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <FontAwesomeIcon key={index} icon={faStar} />
          ))}
        </button>
        <div className="flex-auto">(150 Reviews)</div>
      </div>

      <div className="mt-4 text-2xl font-semibold text-black"> $192.00 </div>

      <div className="flex flex-col mt-4">
        <div id="colorChoice" className="flex gap-4 items-center">
          <p className="font-inter text-lg">Colors:</p>
          <div className="h-6 w-6 border-2 border-black rounded-full bg-[#1da1f2]">
            <div className="h-full w-full bg-blue-200 rounded-full"></div>
          </div>
          <div className="h-6 w-6 bg-red-500 border-2 rounded-full"></div>
        </div>

        <div className="mt-7 text-sm leading-7 text-black">
          <p>
            PlayStation 5 Controller Skin High-quality vinyl with air channel adhesive for easy
            bubble-free install & mess-free removal Pressure-sensitive.
          </p>
        </div>

      
      </div>

      <div className="w-full h-[1px] bg-gray-300 mt-4"></div>

      <div className="flex mt-4">
        <div className="w-15 h-11 relative rounded-l border border-white">
          <button
            onClick={() => {
              (sum !== 1) && setSum(sum - 1);
            }}
            className="w-15 h-11 flex justify-center items-center rounded-l bg-red-600 text-white"
          >
            -
          </button>
        </div>
        <div className="w-32 h-11 flex border-t border-b border-gray-300 justify-center items-center">
          <p className="text-center">{sum}</p>
        </div>
        <div className="w-15 h-11 relative rounded-r bg-red-500">
          <button onClick={() => { setSum(sum + 1) }} className="w-full h-full flex justify-center items-center text-white">
            +
          </button>
        </div>

        <div className="w-[165px] h-11 ml-5 bg-red-500 rounded flex justify-center items-center gap-2.5">
          <button onClick={() => { handleAdd() }} className="text-white">Get it</button>
        </div>
      </div>

      <div className="w-full mt-4 border border-gray-300"></div>

      <div className="p-2">
        <div className="flex items-center gap-4">
          <BsTruck className='h-10 w-10' />
          <div className="flex-col">
            <div className="text-base font-medium text-black">Free Delivery</div>
            <div className="text-xs font-medium text-black underline">
              Enter your postal code for Delivery Availability
            </div>
          </div>
        </div>
      </div>

      <div className="border border-gray-300 "></div>

      <div className="p-2">
        <div className="flex items-center gap-4">
          <AiOutlineSync className='h-10 w-10' />
          <div className="flex-col">
            <div className="text-base font-medium text-black">Return Delivery</div>
            <div>
              <span className="text-xs font-medium text-black">
                Free 30 Days Delivery Returns.
              </span>
              <span className="text-xs font-medium underline text-black">
                Details
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamepadDetails;
