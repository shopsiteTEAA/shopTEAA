import React, { useContext,useState,useEffect } from "react";
import Countdown from "react-countdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import ProductCard from "../ProductCard/ProductCard";
import { productcontext } from "../../pages/Home";
import axios from "axios";


function ProductSection({ data, timer }) {
  const Completionist = () => <span>You are good to go!</span>;
const {products,setProducts}=useContext(productcontext)


useEffect(() => {
  axios.get("http://localhost:3000/saler/getallprod").then((res) => {
    setProducts(res.data);

    console.log(res.data);
  });
}, []);



  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className="flex items-center justify-between">
          <h1>Flash Sales</h1>
          <div className="time">
            <div>
              day<h1 className="font-bold">{days}</h1>
            </div>
            <b>:</b>
            <div>
              hours<h1 className="font-bold">{hours}</h1>
            </div>
            <b>:</b>
            <div>
              minutes
              <h1 className="font-bold">{minutes}</h1>
            </div>
            <b>:</b>
            <div>
              seconds
              <h1 className="font-bold"> {seconds}</h1>
            </div>
          </div>
        </div>
      );
    }
  };
  return (
    <div className="h-[493px] ">
      <div className="top-section flex h-[103px] w-[1170px] justify-between">
        <div className="left flex flex-col justify-between h-[103px] w-[600px]">
          <div className="section-name w-[200px] flex items-center">
            <div className="rounded border-1 h-[40px] w-[20px] bg-secondary"></div>
            <h2 className="px-4 font-semibold text-secondary">today</h2>
          </div>
          <div className="timer h-[50px]">
            <Countdown
              date={Date.now() + 1000 * 60 * 60 * 24 * 5}
              renderer={renderer}
            />
          </div>
        </div>
        <div className="right h-[103px] w-[570px] "></div>
      </div>
      <div className="products-list mt-10 grid-rows-1 gap-x-8 grid-flow-col grid">
        {products.map((e, i) => (
          <ProductCard data={e} key={i} />
        ))}
      </div>
    </div>
  );
}

export default ProductSection;
