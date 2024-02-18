import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart, faStar } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Fotter from "../components/Fotter1/Fotter";
import { FaStar } from "react-icons/fa";

import { createContext } from "react";
import axios from "axios";

const wishlistcontext = createContext();
const WishlistProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  return (
    <wishlistcontext.Provider value={{ products, setProducts }}>
      {children}
    </wishlistcontext.Provider>
  );
};

const ProductCard = ({ data }) => {
  const { products, setProducts } = useContext(wishlistcontext);
  const addcart = () => {
    axios
      .post(`http://localhost:3000/wishlist/toCart/1/${data.idproduct}`)
      .then((res) => {
        console.log(res.data);
        const newProducts = products.filter(
          (product) => product.productIdproduct !== data.idproduct
        );
        setProducts(newProducts);
        console.log(newProducts, "rrr");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const del = () => {
    axios
      .delete(
        `http://localhost:3001/wishlist/deletewishlist/1/${data.idproduct}`
      )
      .then((res) => {
        console.log(res.data);
        const newProducts = products.filter(
          (product) => product.productIdproduct !== data.idproduct
        );
        setProducts(newProducts);
        console.log(newProducts, "rrr");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="h-[350px] transition-colors group w-[270px] ">
      <div className="top-box h-[250px] bg-[#f5f5f5] relative">
        <div className="add-to-cart-btn w-[270px] group-hover:h-[41px] transition-all duration-900 h-0 flex justify-center items-center absolute bottom-0 bg-[#000]">
          <button
            className="text-primary w-[126px] m-auto p-3 text-center"
            onClick={addcart}
          >
            <FontAwesomeIcon icon={faCartShopping} />
            Add to cart{" "}
          </button>
        </div>
        {data.status === "promo" && (
          <div className="discount absolute top-3 left-3 w-[55px] h-[24px] bg-secondary text-primary text-center rounded">
            {100 - Math.round((data.currentprice / data.initalprice) * 100)}%
          </div>
        )}
        <div className="action absolute flex flex-col justify-between items-center top-3 right-3 h-[76px] w-[34px">
          <button
            className="h-[34px] w-[34px]  text-[#000] rounded-full"
            onClick={del}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
          <button className="h-[34px] w-[34px]  text-[#000] rounded-full">
            <FontAwesomeIcon icon={faEye} />
          </button>
        </div>
        <img
          className="w-[172px] h-[152px] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]"
          src={data.imgurlmain}
          alt="image"
        ></img>
      </div>
      <div className="bottom-box  h-[100px]">
        <h3 className="text-[#000]">{data.name}</h3>
        <span className="text-[#000]">{data.currentprice}</span>
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

const WishlistTop1 = ({ data }) => {
  const { products, setProducts } = useContext(wishlistcontext);
  const [filtered, setfiltered] = useState([]);
  const test = data;
  //   console.log(products, "dataaaaaa");
  useEffect(() => {
    axios
      .get("http://localhost:3001/wishlist/getAllwishlist/1")
      .then((res) => {
        setProducts(res.data);
        setfiltered([res.data])
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log("kkkk", );

  const seeAll = () => {
    // test.map((e) => {
    //   e.product.category === "electronic"
    //     ? setfiltered(e)
    //     : console.log(e.product.category);
    // });
    const sortedProducts = Object.values(
      Object.groupBy(products, (product) => product.product.category)
    );
    setfiltered(sortedProducts)
    console.log(sortedProducts)

    // axios.get(
    //     `http://localhost:3001/saler/productcategory/${products[0].product.category}`
    //   )
    //   .then((results) => {
    //     setfiltered(results.data);
    //     console.log(results.data);
    //   })
    //   .catch((err) => {
    //     console.log("err", err);
    //   });
  };
  console.log("datafilterddd", filtered);

  return (
    <div className="h-[393px] relative left-[90px] top-[190px]">
      <div className="top-section flex h-[103px] w-[1170px] justify-between">
        <div className="left flex flex-col justify-between h-[40px] w-[600px]">
          <div className="section-name w-[200px] flex items-center">
            <div className="rounded border-1 h-[40px] w-[20px] bg-secondary"></div>
            <h2 className="px-4 font-semibold  text-secondary">{data.name}</h2>
          </div>
        </div>
        <div className="right h-[40px] w-[570px] relative ">
          <button
            className="w-[159px] border-[1px] border-[#000] border-solid h-[46px] bg-red-600 absolute top-[50%] right-0 translate-y-[-50%] text-center
         text-[#000]"
            onClick={() => {
              seeAll();
              console.log("filter", filtered);
            }}
          >
            See All
          </button>
        </div>
      </div>
      {/* <div className="products-list grid-rows-1 gap-x-8 grid-flow-col grid">
        {filtered.length === 0 ? products.map((e, i) => <ProductCard data={e.product} key={i}/> ): filtered.map((e, i) => <ProductCard data={e} key={i}/>)}
      </div> */}
      {filtered.map((productGroup, i) => (
        <div className="products-list grid-rows-1 gap-x-8 grid-flow-col grid">
          {productGroup.map((e, j) => (
            <ProductCard data={e.product} key={j} />
          ))}
        </div>
      ))}
    </div>
  );
};

const WishlistTop = ({ data }) => {
  const { products, setProducts } = useContext(wishlistcontext);
  useEffect(() => {
    axios
      .get("http://localhost:3000/wishlist/getAllwishlist/1")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addcart1 = () => {
    axios
      .post(`http://localhost:3000/wishlist/allCart/1`)
      .then((res) => {
        console.log(res.data);
        setProducts([]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="h-[393px] relative left-[90px] top-[70px]">
      <div className="top-section flex h-[103px] w-[1170px] justify-between">
        <div className="left flex flex-col justify-between h-[40px] w-[600px]">
          <div className="section-name w-[200px] flex items-center">
            <div className="rounded border-1 h-[40px] w-[20px] bg-secondary"></div>
            <h2 className="px-4 font-semibold text-secondary">{data.name}</h2>
          </div>
        </div>
        <div className="right h-[40px] w-[570px] relative ">
          <button
            className="w-[159px] border-[1px] border-[#000] border-solid h-[46px]  absolute top-[50%] right-0 translate-y-[-50%] text-center
         text-[#000]"
            onClick={addcart1}
          >
            Move All To Bag
          </button>
        </div>
      </div>
      <div className="products-list grid-rows-1 gap-x-8 grid-flow-col grid">
        {products.map((e, i) => {
          return <ProductCard data={e.product} key={i} />;
        })}
      </div>
    </div>
  );
};

function Wishlist() {
  return (
    <WishlistProvider>
      <div className="h-[1200px]">
        <Header />

        <WishlistTop
          data={{
            name: "wishlist",
            title: "Best selling Products",
            viewProducts: true,
            secondRow: false,
          }}
        />
        <WishlistTop1
          data={{
            name: "Just For You",
            title: "Best selling Products",
            viewProducts: true,
            category: "electronic",

            secondRow: false,
          }}
        />
      </div>
      <Fotter />
    </WishlistProvider>
  );
}

export default Wishlist;
