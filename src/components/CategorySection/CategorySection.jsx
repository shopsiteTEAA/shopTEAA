import React from "react";
import CategoryCards from "../CategoryCards/CategoryCards";

function CategorySection() {
  return (
    <div className="top-[280px] relative ">
      <div className="top-section flex h-[103px] w-[1170px] justify-between">
        <div className="left flex flex-col justify-between h-[103px] w-[600px]">
          <div className="section-name w-[200px] flex items-center">
            <div className="rounded border-1 h-[40px] w-[20px] bg-secondary bg-red-600"></div>
            <h2 className="px-4 font-semibold text-secondary text-red-600">Categories</h2>
          </div>
          <div className="h-[50px]">
            <h1 style={{ fontSize: "28px", fontWeight: "600" }}>
              Browse by category
            </h1>
          </div>
        </div>
        <div className="right h-[103px] w-[570px] "></div>
      </div>
      <CategoryCards />
    </div>
  );
}

export default CategorySection;
