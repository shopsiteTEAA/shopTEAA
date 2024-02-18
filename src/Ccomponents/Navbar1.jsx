import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Navigate, useNavigate } from "react-router-dom";


function Navbar1() {
  const navigate =useNavigate()
  return (
    <div className="h-[38px] w-[1170px] flex justify-between items-center mx-auto mt-10">
      <div className="h-[24px] w-[645px] flex justify-between items-center">
        <h1 className="font-bold	">Exclusive</h1>
        <ul className="w-[367px] flex justify-between items-center  font-semibold  ">
          <li>
            <a href="Home">Home</a>
          </li>
          <li onClick={()=>{navigate('/contact')}}> Contact</li>
          <li onClick={()=>{navigate('/About')}}>About</li>
          <li>Log Out</li>
        </ul>
      </div>
      <div className="flex justify-between items-center w-[395px]">
        <div className="search-box w-[243px] flex justify-between items-center bg-[#f5f5f5] p-4">
          <input
          style={{fontSize: '12px'}}
            className="w-[153px] bg-[#f5f5f5]"
            type="text"
            placeholder="What are you looking for?"
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <button>
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <button>
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
        <button className="border-1 text-[#f5f5f5] border-[#DB4444] rounded-full bg-[#DB4444] w-[32px] h-[32px]">
          <FontAwesomeIcon icon={faUser} />
        </button>
      </div>
    </div>
  );
}

export default Navbar1;
