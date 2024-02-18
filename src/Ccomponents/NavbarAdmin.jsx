import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";


function NavbarAdmin() {

    const cookies=new Cookies('token')
    const logout = () => {
      cookies.remove('token')
      window.location.href='/Signin'
    };
    
  return (
    <div className="h-[38px] w-[1170px] flex justify-between items-center mx-auto mt-10">
      <div className="h-[24px] w-[645px] flex justify-between items-center">
        <h1 className="font-bold">Exclusive</h1>
        <ul className="w-[367px] flex justify-between items-center text-sm/[24px] font-semibold" style={{ whiteSpace: 'nowrap' }}> {/* Ensure items stay on a single line */}
          <li>
            <a href="Home">Home</a>
          </li>
          <Link to={'/CheckAllusers'}><li style={{ marginLeft: '20px' }}><a>Manage Accounts</a></li></Link> {/* Add margin-left for spacing */}
          <li style={{ marginLeft: '20px' }}><a href="">See ALL Product</a></li> {/* Add margin-left for spacing */}
          <Link to={'/ProfileAdmin'} style={{ marginLeft: '20px' }}><a href="">Menu</a></Link> {/* Add margin-left for spacing */}

          <li style={{ marginLeft: '20px', color: 'red' }}><a onClick={()=>{logout()}} href="">Log out</a></li> {/* Add margin-left for spacing */}
        </ul>
      </div>
      <div className="flex justify-between items-center w-[395px]">
        <div className="search-box w-[243px] flex justify-between items-center bg-[#f5f5f5] p-4">
          <input
            className="w-[153px] bg-[#f5f5f5] text-xs"
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

export default NavbarAdmin;
