import React from "react";
import TopHeader from "../TopHeader/TopHeader";
import Navbar from "../Navbar/Navbar";

function Header() {
  return (
    <div style={{borderBottom: '0.5px solid rgba(0,0,0,0.3)'}} className="h-[142px] bg-[#fafafa]">
      <TopHeader />
      <Navbar />
      
    </div>
  );
}

export default Header;
