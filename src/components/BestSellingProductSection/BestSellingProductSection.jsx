import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import axios from "axios";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router";


function BestSellingProductSection({ data }) {
const navigate= useNavigate()
 const [filtered, setfiltered] = useState([]);
 
 useEffect(() => {
   axios
     .get("http://localhost:3000/saler/getallprod")
     .then((res) => {
        console.log(res.data,"data");
       const sortedProducts = Object.values(
         Object.groupBy(res.data, (product) =>product.category)
       );
       setfiltered(sortedProducts);
       console.log(sortedProducts);
     })
     .catch((err) => {
       console.log(err);
     });
 }, []);
 console.log("kkkk");

 const viewAll = () => {
   
  

   
 };
 console.log("datafilterddd", filtered);



  return (
    <div className=" relative top-[550px]">
      <div className="top-section flex h-[103px] w-[1170px] justify-between">
        <div className="left flex flex-col justify-between h-[103px] w-[600px]">
          <div className="section-name w-[200px] flex items-center">
            <div className="rounded border-1 h-[40px] w-[20px] bg-red-600"></div>
            <h2 className="px-4 font-semibold text-red-600 ">{data.name}</h2>
          </div>
          <div className="h-[50px] text-black">
            <h1 style={{ fontSize: "28px", fontWeight: "600" }}>
              Best selling Products
            </h1>
          </div>
        </div>
        <div className="right h-[103px] w-[570px] relative ">
          <button
            className="w-[159px] h-[46px] bg-secondary absolute top-[50%] right-0 translate-y-[-50%] text-center
         text-primary"
            onClick={() => navigate("/bestproduct")}
          >
            View all
          </button>
        </div>
      </div>
      {/* <div className="products-list mt-10 grid-rows-1 gap-x-8 grid-flow-col grid">
        <ProductCard data={{ discount: false }} />
        <ProductCard data={{ discount: false }} />
        <ProductCard data={{ discount: false }} />
        <ProductCard data={{ discount: false }} />
      </div> */}

      {filtered.map((productGroup, i) => (
        <div className="products-list grid-rows-1 gap-x-8 grid-flow-col grid">
          {productGroup.map((e, j) => (
            <ProductCard data={e} key={j} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default BestSellingProductSection;
