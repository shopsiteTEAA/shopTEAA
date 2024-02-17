import React, { useContext, useEffect } from "react";
import Countdown from "react-countdown";
import ProductCard from "../ProductCard/ProductCard";
import { productcontext } from "../../pages/Home";
import axios from "axios";

function ProductSection({ data, timer }) {
  const Completionist = () => <span>You are good to go!</span>;
  const { products, setProducts } = useContext(productcontext);

  useEffect(() => {
    axios.get("http://localhost:3000/saler/getallprod").then((res) => {
      setProducts(res.data);
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
          <h1 className="text-black font-bold ">Flash Sales</h1>
          <div className="time flex text-black  space-x-5">
            <div className="font-bold text-red-500">
              {days} : <span className="text-sm">day</span>
            </div>
            <div className="font-bold text-red-500">
                {hours}   : <span className="text-sm">hours</span>
            </div>
            <div className="font-bold text-red-500">
              {minutes} : <span className="text-sm">minute </span>
            </div>
            <div className="font-bold text-red-500">
              {seconds} <span className="text-sm">s</span>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="relative h-[493px]  text-black p-8">
      <div className="flex justify-between w-[1170px] h-[103px] top-section">
        <div className="flex flex-col justify-between w-[600px] h-[103px] left">
          <div className="flex items-center w-[200px] section-name">
            <div className="rounded h-[40px] w-[20px] border-1 bg-red-600"></div>
            <h2 className="px-4 font-semibold text-red-500">today</h2>
          </div>
          <div className="timer h-[50px]">
            <Countdown
              date={Date.now() + 1000 * 60 * 60 * 24 * 5}
              renderer={renderer}
            />
          </div>
        </div>
        <div className="w-[570px] h-[103px] right"></div>
      </div>
      <div className="grid grid-flow-col gap-x-8 grid-rows-1 mt-10 products-list">
        {products.map((e, i) => (
          <ProductCard data={e} key={i} />
        ))}
      </div>
    </div>
  );
}

export default ProductSection;
