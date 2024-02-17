import React from "react";

const Sidebar = () => {
  return (
    <div className="w-1/4 border-r border-gray-300 p-8">
      <div className="sidebar-side">
        <select className="mb-2">
          <option value="Woman’s Fashion">Woman’s Fashion</option>
        </select>
        <br />
        <select className="mb-2">
          <option value="Men’s Fashion">Men’s Fashion</option>
        </select>
        <br />
        <a href="" className="mb-2 block">Electronics</a>
        <br />
        <a href="" className="mb-2 block">Medicine</a>
        <br />
        <a href="" className="mb-2 block">Sports & Outdoor</a>
        <br />
        <a href="" className="mb-2 block">Baby’s & Toys</a>
        <br />
        <a href="" className="mb-2 block">Groceries & Pets</a>
        <br />
        <a href="" className="mb-2 block">Health & Beauty</a>
      </div>
    </div>
  );
};

export default Sidebar;
