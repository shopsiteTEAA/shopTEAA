import React, { useContext } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { productcontext } from "../../pages/Home";
import { useNavigate } from "react-router-dom";

function OurProduct({ data }) {
  const navigate = useNavigate();
  const { products } = useContext(productcontext);

  return (
    <div className="relative top-[900px] h-[493px]">
      <div className="flex justify-between w-[1170px] h-[103px] top-section">
        <div className="flex flex-col justify-between w-[600px] h-[103px] left">
          <div className="flex items-center w-[200px] section-name">
            <div className="rounded h-[40px] w-[20px] border-1 bg-secondary bg-red-600"></div>
            <h2 className="px-4 font-semibold text-secondary text-red-600">{data.name}</h2>
          </div>
          <div className="h-[50px]">
            <h1 className="text-2xl font-semibold ">{data?.title}</h1>
          </div>
        </div>
        <div className="relative w-[570px] h-[103px] right">
          {data.viewProduct && (
            <button className="absolute top-[50%] right-0 transform -translate-y-1/2 w-[159px] h-[46px] bg-red-500 text-center text-white">
              View all
            </button>
          )}
        </div>
      </div>
      <div className="grid grid-flow-col gap-x-8 grid-rows-1 mt-10 products-list">
        {products.map((e, i) => (
          <ProductCard data={e} key={i} />
        ))}
      </div>
      <button
        onClick={() => navigate("/products")}
        className="left-[50%] translate-x-[-50%] w-[234px] h-[56px] bg-red-500 text-center text-white m-auto flex items-center justify-center"
      >
        View all products
      </button>
    </div>
  );
}

export default OurProduct;
