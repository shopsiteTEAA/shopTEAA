import React from "react";
import "./ProductCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart, faStar } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ data, best }) => {



const addcart = () => {
  axios
    .post(`http://localhost:3000/panier/addtoCart/1/${data.idproduct}`)
    .then((res) => {
      console.log(res.data);
      if (localStorage.getItem("cart")) {
        // If there is existing data in the cart in local storage
        let oldData = JSON.parse(localStorage.getItem("cart"));
        console.log({ oldData });
        // Assuming res.data contains the new item data you want to add
        let newData = { id: res.data.id };
        // Add the new item data to the existing cart data
        oldData.push(newData);
        // Update the cart data in local storage with the new combined data
        localStorage.setItem("cart", JSON.stringify(oldData));
      } else {
        // If there is no existing data in the cart in local storage
        // Create a new cart data with the new item data
        localStorage.setItem("cart", JSON.stringify([{ id: res.data.id }]));
      }
     
    })
    .catch((err) => {
      console.log(err);
    });
};

  return (
    <div className="h-[350px] transition-colors group w-[270px] ">
      {best && <div className="w-full bg-secondary text-primary text-center rounded">BEST!</div>}
      <div className="top-box h-[250px] bg-[#f5f5f5] relative">
        <div className="add-to-cart-btn w-[270px] group-hover:h-[41px] transition-all duration-900 h-0 flex justify-center items-center absolute bottom-0 bg-[#000]">
          <button
            className="text-primary w-[96px] m-auto p-3 text-center"
            onClick={addcart}
          >
            Add to cart
          </button>
        </div>
        {data?.status === "promo" && (
          <div className="discount absolute top-3 left-3 w-[55px] h-[24px] bg-secondary text-primary text-center rounded">
            {100 - Math.round((data.currentprice / data.initalprice) * 100)}%
          </div>
        )}
        <div className="action absolute flex flex-col justify-between items-center top-3 right-3 h-[76px] w-[34px">
          <button className="h-[34px] w-[34px]  text-[#000] rounded-full">
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <button className="h-[34px] w-[34px]  text-[#000] rounded-full">
            <FontAwesomeIcon icon={faEye} />
          </button>
        </div>
        <img
          className="w-[172px] h-[152px] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]"
          src={data?.imgurlmain}
          alt="image"
        ></img>
      </div>
      <div className="bottom-box  h-[100px]">
        <h3 className="text-[#000]">{data?.name}</h3>
        <span className="text-[#000]">{data?.currentprice}</span>
        <div>
          <button className="text-[#f8d94d] flex">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
