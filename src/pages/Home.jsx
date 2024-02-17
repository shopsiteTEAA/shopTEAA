import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Carousel from "../components/Caroussel/Carousel";
import Productcart from "../components/ProductCard/ProductCard";
import ProductSection from "../components/ProductSection/ProductSection";
import CategorySection from "../components/CategorySection/CategorySection";
import BestSellingProductSection from "../components/BestSellingProductSection/BestSellingProductSection";
import ImageBanner from "../components/ImageBanner/ImageBanner";
import OurProduct from "../components/OurProduct/OurProduct";
import axios from "axios";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import Fotter from "../components/Fotter1/Fotter";

  export const productcontext = createContext() ;
const Productprovider = ({ children }) => {
  const [products, setProducts] = useState([]);
  return (
    <productcontext.Provider value={{ products, setProducts }}>
      {children}
    </productcontext.Provider>
  );
};




function Home() {

 const navigateToProducts = () => {
  
 }

const navigate = useNavigate()



  return (
    <Productprovider>
      <div className="h-[5400px]">
        <Header></Header>
        <div
          style={{
            display: "flex",
            position: "absolute",
            height: "344px",
            width: "100%",
          }}
        >
          <Sidebar />
          <Carousel />
        </div>
        <div className="w-[1308px] absolute left-[135px] top-[666px]">
          <ProductSection data={{ name: "Today" }} />
          <button
            onClick={() => navigate("/products")}
            className="w-[234px] h-[56px] bg-red-500 text-center text-white 
         text-primary m-auto mt-10  flex items-center justify-center translate-x-[-50%]"
          >
            View all products
          </button>
          <hr className="top-[150px] relative" />
          <CategorySection />
          <hr className="top-[450px] relative" />
          <BestSellingProductSection
          
            data={{
              name: "this month",
              title: "Best selling Products",
              viewProducts: true,
              secondRow: false,
            }}
          />
          <ImageBanner />
          <OurProduct
            data={{
              name: "Our Product",
              title: "Explore Our Products",
              viewProducts: false,
              secondRow: true,
            }}
          />
          
        </div>
      </div>
      <Fotter />
    </Productprovider>
  );
}

export default Home;
