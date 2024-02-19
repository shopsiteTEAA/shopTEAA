import React, { useEffect, useState } from "react";
import MinHeader from "../Ccomponents/MinHeader";
import Navbar from "../Ccomponents/Navbar";
import Fotter from "../Ccomponents/Fotter";
import CategoryCards from "../components/CategoryCards/CategoryCards";
import axios from "axios";
import NotFound from "../handlerPages/NotFound.jsx";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
const [datastore , setDataSotre] = useState([])
const [toprate,setToprate] = useState([])
const navigate = useNavigate()
useEffect(()=>{
  const getdata = async()=>{
    try{
      const data  = await axios.get(`http://localhost:3000/saler/newestproductStore`);
      const datatop  = await axios.get(`http://localhost:3000/saler/toprateprod`);
        setDataSotre(data.data);
        setToprate(datatop.data);
      }
      catch(err){
         return <NotFound/>
      }
  }

  getdata()
},[])

console.log(datastore,'datastore');
console.log(toprate,'toprate');

const detailsprod =(id)=>{
  navigate(`/all/${id}`)
}

  return (
    <div>
      <MinHeader />
      <Navbar />

      <div className="flex flex-col px-5">
        <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col">
            <div className="flex gap-4 max-w-full w-[126px]">
              <div className="flex flex-col justify-center aspect-[0.5]">
                <div className="shrink-0 h-10 bg-red-500 rounded" />
              </div>
              <div className="my-auto text-base font-semibold text-red-500">
                Categories
              </div>
            </div>
            <div className="mt-5 text-4xl font-semibold tracking-widest leading-10 text-black whitespace-nowrap">
              Browse By Category
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <CategoryCards />
        </div>

        <div className="mt-16 w-full bg-black min-h-[1px] max-md:mt-10 max-md:max-w-full" />
        <div className="flex gap-5 justify-between mt-16 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col">
            <div className="flex gap-4 max-w-full w-[125px]">
              <div className="flex flex-col justify-center aspect-[0.5]">
                <div className="shrink-0 h-10 bg-red-500 rounded" />
              </div>
              <div className="my-auto text-base font-semibold text-red-500">
                This Month
              </div>
            </div>
            <div className="mt-5 text-4xl font-semibold tracking-widest leading-10 text-black whitespace-nowrap">
              the New Product In The Store
            </div>
          </div>
          <div className="justify-center self-end px-12 py-4 mt-14 text-base font-medium leading-6 whitespace-nowrap bg-red-500 rounded text-neutral-50 max-md:px-5 max-md:mt-10">
            View All
          </div>
        </div>

        {/* map for the products  */}
        <div className="mt-16 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-wrap gap-5 max-md:flex-col max-md:gap-0 max-md:">
              {datastore.map((ele) => (
                <div
                  className="  ml-5 flex flex-col justify-center items-center w-60 max-md:w-full"
                  key={ele.id}
                >
                  <img
                  onClick={()=>{
                      detailsprod(ele.idproduct)
                  }}
                    loading="lazy"
                    src={ele.imgurlmain}
                    className="w-full aspect-[1.08]"
                  />
                  <div className="mt-4 text-black">
                    {ele.name} 
                  </div>
                  <div className="flex gap-3 justify-between mt-2 whitespace-nowrap">
                    <div className="text-red-500">{ele.currentprice} DT</div>
                    
                  </div>
                  <div className="flex gap-2 justify-between mt-2 text-sm font-semibold text-black whitespace-nowrap">
                    <span>{ele.name}</span>
                    <div className="flex-auto">(65)</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="px-14 py-12 mt-36 w-full bg-black max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto text-base font-semibold text-neutral-50 max-md:mt-10 max-md:max-w-full">
                <div className="text-green-500 max-md:max-w-full">
                  Categories
                </div>
                <div className="mt-11 text-5xl tracking-widest leading-[60px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[56px]">
                  Enhance Your Music Experience
                </div>
                <div className="justify-center self-start px-12 py-4 mt-10 font-medium whitespace-nowrap bg-green-500 rounded leading-[150%] max-md:px-5">
                  Buy Now!
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/548d5d7fa4e4b89804c39714bac0820798d5a801ca3a5fb7a73fde2fe5af5dd7?apiKey=fd869f2637a440ed9834ce82e88a7ee8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/548d5d7fa4e4b89804c39714bac0820798d5a801ca3a5fb7a73fde2fe5af5dd7?apiKey=fd869f2637a440ed9834ce82e88a7ee8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/548d5d7fa4e4b89804c39714bac0820798d5a801ca3a5fb7a73fde2fe5af5dd7?apiKey=fd869f2637a440ed9834ce82e88a7ee8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/548d5d7fa4e4b89804c39714bac0820798d5a801ca3a5fb7a73fde2fe5af5dd7?apiKey=fd869f2637a440ed9834ce82e88a7ee8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/548d5d7fa4e4b89804c39714bac0820798d5a801ca3a5fb7a73fde2fe5af5dd7?apiKey=fd869f2637a440ed9834ce82e88a7ee8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/548d5d7fa4e4b89804c39714bac0820798d5a801ca3a5fb7a73fde2fe5af5dd7?apiKey=fd869f2637a440ed9834ce82e88a7ee8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/548d5d7fa4e4b89804c39714bac0820798d5a801ca3a5fb7a73fde2fe5af5dd7?apiKey=fd869f2637a440ed9834ce82e88a7ee8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/548d5d7fa4e4b89804c39714bac0820798d5a801ca3a5fb7a73fde2fe5af5dd7?apiKey=fd869f2637a440ed9834ce82e88a7ee8&"
                className="self-stretch my-auto w-full aspect-[1.72] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-between mt-16 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col">
            <div className="flex gap-4 max-w-full w-[142px]">
              <div className="flex flex-col justify-center aspect-[0.5]">
                <div className="shrink-0 h-10 bg-red-500 rounded" />
              </div>
              <div className="flex-auto my-auto text-base font-semibold text-red-500">
                Our Products
              </div>
            </div>
            <div className="mt-5 text-4xl font-semibold tracking-widest leading-10 text-black whitespace-nowrap">
              Explore Our Top rated Products
            </div>
          </div>
        </div>
        <div className="mt-16 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-wrap gap-5 max-md:flex-col max-md:gap-0 max-md:">
              {toprate.map((ele) => (
                <div
                  className="  ml-5 flex flex-col justify-center items-center w-60 max-md:w-full"
                  key={ele.id}
                >
                  <img 
                  onClick={()=>{

                  }}
                    loading="lazy"
                    src={ele.imgurlmain}
                    className="w-full aspect-[1.08]"
                  />
                  <div className="mt-4 text-black">
                    {ele.name}
                  </div>
                  <div className="flex gap-3 justify-between mt-2 whitespace-nowrap">
                    <div className="text-red-500">{ele.currentprice}<span className="text-red-600">DT</span></div>
                    
                  </div>
                  <div className="flex gap-2 justify-between mt-2 text-sm font-semibold text-black whitespace-nowrap">
                    <span>Rate</span>
                    <div className="flex-auto">{ele.rate}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Fotter />
    </div>
  );
};

export default WelcomePage;
