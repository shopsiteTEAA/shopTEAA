import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart, faStar } from "@fortawesome/free-regular-svg-icons";

const ProductCard = ({data}) => {


  return (
    <div className="h-[350px] transition-colors group w-[270px] bg-primary">
      <div className="top-box h-[250px] bg-[#f5f5f5] relative">
        <div className="add-to-cart-btn w-[270px] group-hover:h-[41px] transition-all duration-900 h-0 flex justify-center items-center absolute bottom-0 bg-[#000]">
          <button className="text-primary w-[96px] m-auto p-3 text-center" onClick={()=>{}}>
            Add to cart
          </button>
        </div>
        {data?.discount && (
          <div className="discount absolute top-3 left-3 w-[55px] h-[24px] bg-secondary text-primary text-center rounded">
            -42%
          </div>
        )}
        <div className="action absolute flex flex-col justify-between items-center top-3 right-3 h-[76px] w-[34px">
          <button className="h-[34px] w-[34px] bg-primary text-[#000] rounded-full">
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <button className="h-[34px] w-[34px] bg-primary text-[#000] rounded-full">
            <FontAwesomeIcon icon={faEye} />
          </button>
        </div>
        <img
          className="w-[172px] h-[152px] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]"
          src="https://s3-alpha-sig.figma.com/img/e59d/9f34/8cc24eeff489863523b63971c3ff8e4a?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g~ZjzGzyXqVJ-DenNClxIEH9JmngfGNuhk0Hu3hbQjOeAe7FWEBOdm6zRiuNFsTd37fVYh2S1wLHSTOR41JCIRb~x-ohVAV0YxvYnTUTOj-E7bkf2vGKVk9~zxQe-grlUonsmega18wLhydkFGEMC28EMy~fBvI8jtqb4i7kT9UHGZymje8d-yT6u2caujLRpnIwOVNJJGCN01dvnN2YamYr~TjqDJhoFVP0~ZATOT9~c7dWe4Y6Zh7FaU3MnCuE52bu~XOyEIUj4~Yj0BMoUYDWsXSVAF1L8LcJ9~3pIqI8RH2ZN8x8w1z3BbAJw7pWvD9crY-cfCg1LiDn77FSzA__"
          alt="image"
        ></img>
      </div>
      <div className="bottom-box  h-[100px]">
        <h3 className="text-[#000]">HAVIT HV-G92 Gamepad</h3>
        <span className="text-[#000]">$60</span>
        <div>
          <button className="text-secondary">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;