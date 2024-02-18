import React,{useState} from 'react';
import "../../App.css";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios"
import { AiOutlineSync } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";

function GamepadDetails() {
  const [sum,setSum]=useState(1)
  const handleAdd=()=>{
    axios.post(`http://localhost:3000/panier/addtoCart/1/1`,{sum}).then(()=>{
      console.log("added to basket");
    })
  }
  return (
    <div className="w-[600px] h-[450px]">
      <div><i><h1>Havic HV G-92 Gamepad</h1></i></div>
      <div>
        <button className="text-secondary">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </button>
        <div className="flex-auto">(150 Reviews)</div>
      </div>

      <div className="justify-center pl-4 text-green-500 whitespace-nowrap">
        In Stock
      </div>

      <div className="mt-4 text-2xl tracking-wider leading-6 text-black">
        $192.00
      </div>

      <div className="buttons flex flex-col justify-start items-start">
        <div id="colorChoice" className="flex gap-20 justify-center items-center">
          <p className="font-inter text-lg">Colors: </p>
          <div id="blue" className="h-6 w-6 border-2 border-black rounded-full bg-[#1da1f2]">
            <div className="h-full w-full bg-blue-200 rounded-full"></div>
          </div>
          <div id="red" className="h-6 w-6 bg-red-500 border-2 rounded-full bg-[#be123c]"></div>
        </div>

    

        <div className="mt-7 mr-9 text-sm leading-7  text-black ">
         <p> 
         PlayStation 5 Controller Skin High-quality vinyl with air
          channel adhesive for easy bubble-free install & mess-free
          removal Pressure-sensitive.
        </p>
        </div>

        <div className="flex gap-5 justify-between mt-6 whitespace-nowrap">
          <div className="grow my-auto text-xl tracking-wide leading-5 text-black">
            Size:
          </div>
          <div className="flex gap-4 pr-20 text-sm font-medium leading-5 text-black">
            <div className="justify-center items-center px-2 h-8 rounded border border-solid aspect-square border-black border-opacity-50">
              XS
            </div>
            <div className="justify-center items-center px-3 h-8 rounded border border-solid aspect-square border-black border-opacity-50">
              S
            </div>
            <div className="justify-center items-center px-2.5 h-8 bg-red-500 rounded aspect-square text-neutral-50">
              M
            </div>
            <div className="justify-center items-center px-3.5 h-8 rounded border border-solid aspect-square border-black border-opacity-50">
              L
            </div>
            <div className="justify-center items-center px-2 h-8 rounded border border-solid aspect-square border-black border-opacity-50">
              XL
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[1px] bg-gray-300 mt-4"></div>
      <div className="flex mt-4">
        <div className="w-15 h-11 relative rounded-tl rounded-bl border border-black border-opacity-50 flex items-center">
          <div className="w-[41px] h-9 flex justify-center items-center rounded-tr rounded-br">
            <button onClick={()=>{(sum!==1)&&setSum(sum-1)}} className="text-black text-2xl">-</button>
          </div>
        </div>
        <div className="w-[100px] h-11 flex border-t border-b border-black border-opacity-50 justify-center items-center">
        
  <p className="text-center">{sum}</p>
    </div>
    <div className="w-[41px] h-11 flex justify-center items-center bg-red-500 rounded-tr rounded-br">
      <button onClick={()=>{setSum(sum+1)}} className=" text-white ">+</button>
   </div>

   <div className="w-[165px] h-11 ml-5 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
   <div className="text-neutral-50 text-base font-medium font-['Poppins'] leading-normal">
     <button onClick={()=>{handleAdd()}}>Get it</button>
   </div>
 </div>
</div>





      <div className="w-full rounded border flex-col border-black border-opacity-50 mt-8">
      <div className="p-2">
        <div className="flex justify-start items-center gap-4">
        <BsTruck className='h-10 w-10'/>
          <div className="">
            <box-icon size="md" name="truck" type="solid"></box-icon>
          </div>

          <div className="p-2 flex-col">
          <div className="text-black text-base font-medium font-['Poppins'] leading-normal">
            Free Delivery
          </div>
          <div className="text-black text-xs font-medium font-['Poppins'] underline leading-none">
            Enter your postal code for Delivery Availability
          </div>
        </div>
      </div>
    </div>





   

      <div className="border border-black opacity-50"></div>
      <div className="p-2">
        <div className="flex justify-start items-center gap-4">
        <AiOutlineSync className='h-10 w-10'/>
          <div className="">
            <box-icon size="md" name="refresh" animation="spin"></box-icon>
          </div>
          <div className=" p-2 flex-col">
          
            <div className="text-black text-base font-medium font-['Poppins'] leading-normal">
           
           Return Delivery
            </div>
            <div>
           
              <span className="text-black text-xs font-medium font-['Poppins'] leading-none">
             
                Free 30 Days Delivery Returns.
                
              </span>
         
              <span className="text-black text-xs font-medium font-['Poppins'] underline leading-none">
                Details
              </span>
              </div>
              </div>
              </div>
              </div>
              </div>
</div>             

  
  );
}

export default GamepadDetails;





