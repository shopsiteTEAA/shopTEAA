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
    
        <div className="flex">
          {/* Sidebar container */}
          <div className="bg-white text-black w-1/3 max-w-xs flex flex-col">
            {/* Sidebar header */}
            <div className="flex items-center justify-center h-16 border-b border-gray-800">
            </div>
    
            {/* Sidebar items */}
            <ul className="py-4">
              <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer">
                <a href="#" className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                  My Account
                </a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer" onClick={toggleManageAccountSubMenu}>
                <a href="#" className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                  Manage My Account
                </a>
                {/* Submenu for Manage My Account */}
                <ul className={`pl-4 ${isManageAccountSubMenuOpen ? '' : 'hidden'}`}>
                  <li className="py-2 hover:bg-gray-300 cursor-pointer">
                    <a href="#">My Profile</a>
                  </li>
                  <li className="py-2 hover:bg-gray-300 cursor-pointer">
                    <a href="#">Address Book</a>
                  </li>
                  <li className="py-2 hover:bg-gray-300 cursor-pointer">
                    <a href="#">My Payments</a>
                  </li>
                </ul>
              </li>
              <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer" onClick={toggleMyOrdersSubMenu}>
                <a href="#" className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                  My Orders
                </a>
                {/* Submenu for My Orders */}
                <ul className={`pl-4 ${isMyOrdersSubMenuOpen ? '' : 'hidden'}`}>
                  <li className="py-2 hover:bg-gray-300 cursor-pointer">
                    <a href="#">My Returns</a>
                  </li>
                  <li className="py-2 hover:bg-gray-300 cursor-pointer">
                    <a href="#">My Cancellations</a>
                  </li>
                </ul>
              </li>
              {/* Add more items similarly */}
            </ul>
          </div>
    
          {/* Main content */}
          <div className="flex-1">
            {/* Your main content goes here */}
          </div>
        </div>

  )
}

export default Leftsidebar
