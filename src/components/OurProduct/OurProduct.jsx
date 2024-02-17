import React, { useContext } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { productcontext } from "../../pages/Home";
import { useNavigate } from "react-router-dom";

function OurProduct({ data }) {
  const navigate= useNavigate()
  const { products } = useContext(productcontext)
  return (
    <div className="h-[493px] relative top-[900px]">
      <div className="top-section flex h-[103px] w-[1170px] justify-between">
        <div className="left flex flex-col justify-between h-[103px] w-[600px]">
          <div className="section-name w-[200px] flex items-center">
            <div className="rounded border-1 h-[40px] w-[20px] bg-secondary"></div>
            <h2 className="px-4 font-semibold text-secondary">{data.name}</h2>
          </div>
          <div className="h-[50px]">
            <h1 style={{ fontSize: "28px", fontWeight: "600" }}>
              {data?.title}
            </h1>
          </div>
        </div>
        <div className="right h-[103px] w-[570px] relative ">
          {data.viewProduct && (
            <button
              className="w-[159px] h-[46px] bg-#db4444 absolute top-[50%] right-0 translate-y-[-50%] text-center
                     text-primary"
            >
              View all
            </button>
          )}
        </div>
      </div>
      <div className="products-list mt-10 grid-rows-1 gap-x-8 grid-flow-col grid">
        {products.map((e, i) => (
          <ProductCard data={e} key={i} />
        ))}
      </div>
      <button
        onClick={() => navigate("/products")}
        className="w-[234px] h-[56px] bg-secondary text-center
         text-primary m-auto relative  left-[50%] translate-x-[-50%]"
      >
        View all products
      </button>
    </div>
  );
}

export default OurProduct;
