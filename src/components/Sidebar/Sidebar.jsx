import React from "react";

const Sidebar = () => {
  return (
    <div
      style={{
        width: "25%",
        paddingLeft: "150px",
        borderRight: "0.5px solid black",
        display: "block",
      }}
      className="h-full "
    >
      <div className="sidebar-side">
        <select>
          <option value="Woman’s Fashion">Woman’s Fashion</option>
        </select><br />
        <select>
        <option value="Men’s Fashion">Men’s Fashion</option>
        </select>
        <br />
        <a href="">Electronics </a>
        <br />
        <a href="">Medicine </a>
        <br />
        <a href=""> Sports & Outdoor</a>
        <br />
        <a href="">Baby’s & Toys</a>
        <br />
        <a href="">Groceries & Pets</a>
        <br />
        <a href="">Health & Beauty </a>
      </div>
    </div>
  );
};

export default Sidebar;
