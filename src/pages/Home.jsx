import React from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Carousel from "../components/Caroussel/Carousel";
import Productcart from "../components/ProductCard/ProductCard";
import ProductSection from "../components/ProductSection/ProductSection";
import CategorySection from "../components/CategorySection/CategorySection";
import BestSellingProductSection from "../components/BestSellingProductSection/BestSellingProductSection";
import ImageBanner from "../components/ImageBanner/ImageBanner";
import OurProduct from "../components/OurProduct/OurProduct";

function Home() {
  return (
    <div className="h-[6000px]">
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
        <ProductSection data={{ name: "Today's" }} />
        <button
          className="w-[234px] h-[56px] bg-secondary text-center
         text-primary m-auto relative left-[50%] translate-x-[-50%]"
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
        <button
          className="w-[234px] h-[56px] bg-secondary text-center
         text-primary m-auto relative top-[1370px] left-[50%] translate-x-[-50%]"
        >
          View all products
        </button>
      </div>
    </div>
  );
}

export default Home;
