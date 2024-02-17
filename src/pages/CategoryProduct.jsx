import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import axios from 'axios';
import ProductCard from '../components/ProductCard/ProductCard';
import { useLocation } from 'react-router-dom';

function CategoryProduct() {
    const { state: category } = useLocation()
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3001/saler/productcategory/" + category).
            then(res => {
                setProducts(res.data);
            }).catch(err => console.log(err))
    }, [])
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

export default CategoryProduct