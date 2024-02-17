import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import axios from 'axios';
import ProductCard from '../components/ProductCard/ProductCard';

function Products() {

    const [products,setProducts] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/saler/getallprod").
        then(res => {
            setProducts(res.data);
            console.log("oo",res.data)
        }).catch(err=>console.log(err))
    },[])
  return (
    <>
      <Header />
      <div className="products w-[80%] m-auto grid grid-cols-4 gap-10 grid-auto-rows-minmax">
        {products.map((e, j) => (
          <ProductCard data={e} key={j} />
        ))}
      </div>
    </>
  );
}

export default Products