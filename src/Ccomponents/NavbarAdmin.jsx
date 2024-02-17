import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="h-[38px] w-[1170px] flex justify-between items-center mx-auto mt-10">
      <div className="h-[24px] w-[645px] flex justify-between items-center">
        <h1 className="font-bold">Exclusive</h1>
        <ul className="w-[367px] flex justify-between items-center  text-sm/[24px] font-semibold  ">
          <li>
            <a href="Home">Home</a>
          </li>
          <Link to={'/seler/addProduct'}><li><a>Manage Accounts</a></li></Link>
          <li><a href="">See ALL Product</a></li>
          <li><a href="">Log out</a></li>
        </ul>
      </div>
      <div className="flex justify-between items-center w-[395px]">
        <div className="search-box w-[243px] flex justify-between items-center bg-[#f5f5f5] p-4">
          <input
            className="w-[153px] bg-[#f5f5f5] text-xs    "
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

export default Navbar;