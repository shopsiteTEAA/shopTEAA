import React from 'react'

import axios from 'axios';
import { useEffect,useState } from 'react';
import { useContext } from 'react';
import ProductCard from '../components/ProductCard/ProductCard';
import Header from '../components/Header/Header';
import Fotter from '../components/Fotter1/Fotter';





function Bestproduct() {

  const [filtered, setfiltered] = useState([]);

  //   console.log(products, "dataaaaaa");
  useEffect(() => {
    axios
      .get("http://localhost:3001/wishlist/getAllwishlist/1")
      .then((res) => {
        
        const sortedProducts = Object.values(
          Object.groupBy(res.data, (product) => product.product.category)
        );
        setfiltered(sortedProducts);
        console.log(sortedProducts);

       
    })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log("kkkk");

  
  console.log("datafilterddd", filtered);

  return (
    <div>
      <Header />
      <div className="relative left-[90px]">
        <div className="top-section flex h-[103px] w-[1170px] justify-between">
          <div className="left flex flex-col justify-between h-[40px] w-[600px]">
            <div className="section-name w-[200px] flex items-center">
              <div className="rounded border-1 h-[40px] w-[20px] bg-secondary"></div>
              <h2 className="px-4 font-semibold  text-secondary">
                BestSellingProductSection
              </h2>
            </div>
          </div>
        </div>
        {/* <div className="products-list grid-rows-1 gap-x-8 grid-flow-col grid">
        {filtered.length === 0 ? products.map((e, i) => <ProductCard data={e.product} key={i}/> ): filtered.map((e, i) => <ProductCard data={e} key={i}/>)}
      </div> */}

        {filtered.map((productGroup, i) => (
          <div className="products-list grid-rows-1 gap-x-8 grid-flow-col grid" key={i}>
            {productGroup.map((e, j) => (
              <ProductCard data={e.product} key={j} best={i === 0} />
            ))}
          </div>
        ))}
      </div>
      <Fotter />
    </div>
  );
}

export default Bestproduct