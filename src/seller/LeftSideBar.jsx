import React, { useState } from 'react'

function Leftsidebar() {
    
    const [isManageAccountSubMenuOpen, setIsManageAccountSubMenuOpen] = useState(false);
    const [isMyOrdersSubMenuOpen, setIsMyOrdersSubMenuOpen] = useState(false);
    const toggleManageAccountSubMenu = () => {
      setIsManageAccountSubMenuOpen(!isManageAccountSubMenuOpen);
      };
    const toggleMyOrdersSubMenu = () => {
      setIsMyOrdersSubMenuOpen(!isMyOrdersSubMenuOpen);
    };
  return (
        <div className="flex w-1/3" >
          <div className="bg-white text-black w-1/1 max-w-xs flex flex-col">
            <ul className="py-4 w-1/1" >
              
              <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer" onClick={toggleManageAccountSubMenu}>
                <a href="#" className="flex items-center font-semibold">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-20 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7 " />
                  </svg>
                  Manage My Account
                </a>
                <ul className={`pl-4 ${isManageAccountSubMenuOpen ? '' : 'hidden'}`}>
                  <li className="py-2 hover:bg-gray-300 cursor-pointer font-semibold">
                    <a href="#">My Profile</a>
                  </li>
                  <li className="py-2 hover:bg-gray-300 cursor-pointer font-semibold">
                    <a href="#">Address Book</a>
                  </li>
                  <li className="py-2 hover:bg-gray-300 cursor-pointer font-semibold">
                    <a href="#">My Payments</a>
                  </li>
                </ul>
              </li>
              <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer " onClick={toggleMyOrdersSubMenu}>
                <a href="#" className="flex items-center font-semibold">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-20 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7 font-semibold" />
                  </svg>
                  My Orders
                </a>
                <ul className={`pl-4 ${isMyOrdersSubMenuOpen ? '' : 'hidden'}`}>
                  <li className="py-2 hover:bg-gray-300 cursor-pointer font-semibold">
                    <a href="#">My Returns</a>
                  </li>
                  <li className="py-2 hover:bg-gray-300 cursor-pointer font-semibold">
                    <a href="#">My Cancellations</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
  )
}
export default Leftsidebar
