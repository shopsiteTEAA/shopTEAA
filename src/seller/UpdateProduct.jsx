import React, { useEffect, useState } from "react";
import MinHeader from "../Ccomponents/MinHeader";
import Navbar from "../Ccomponents/Navbar";
import Fotter from "../Ccomponents/Fotter";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const { idprod } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    axios
      .get(`http://localhost:3000/saler/getproduct/${idprod}`)
      .then((results) => {
        setData(results.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log('product ',data[0]);

  const [name, setName] = useState(data.name);
  const [Category, setCategory] = useState(data.category);
  const [rate, setRate] = useState(data.rate);
  const [intialPrice, setIntialPrice] = useState(data.initalprice);
  const [currentPrice, setCurrentPrice] = useState(data.currentPrice);
  const [quantity, setQuantity] = useState(data.quantity);
  const [description, setDiscription] = useState(data.description);
  const [photo, setPhoto] = useState(data.imgurlmain);


  const newProduct = {
    name: name,
    category: Category,
    rate: rate,
    status: "available",
    initalprice: intialPrice,
    currentprice: currentPrice,
    // image and the color need to be handled
    imgurlmain: photo,
    color: "blue",
    image: "img5",
    quantity: quantity,
    description: description,
  };
  const updateprodnew= (newProduct) => {
    axios
      .put(`http://localhost:3000/saler/update/${idprod}`, newProduct)
      .then(() => {
        console.log("data inserted !");
        navigate('/saler/allProduct')
      })
      .catch((err) => {
        console.log("err in insert data from the frontend", err);
      });
  };
  // now i need to get the cloudinary
  return (
    <div>
      <div>
        <MinHeader />
        <Navbar />
      </div>
      <div className="w-full h-full  font-semibold ml-36 mt-8 ">
        <p>
          Welcome! <span className="text-red-500">MR Amine</span>
        </p>
      </div>

      <div class="flex items-center justify-center p-12 text-center font-semibold ml-36 mt-3">
        <div class="mx-auto w-full max-w-[550px] bg-white ">
          <div class="">
            <label
              for="email"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              <span className="text-red-500">Product</span> name
            </label>
            <input
              onChange={(ele) => {
                setName(ele.target.value);
              }}
              name="email"
              id="email"
              placeholder={data.name}
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
            <div class="mb-5">
              <label
                for="text"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                <span className="text-red-500">Category</span> Product
              </label>
              <input
                onChange={(ele) => {
                  setCategory(ele.target.value);
                }}
                type="text"
                name="text"
                placeholder={data.category}
                class="w-full  rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div class="mb-5">
            <label
              for="email"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              <span className="text-red-500">Rate</span> Product
            </label>
            <input
              onChange={(ele) => {
                setRate(ele.target.value);
              }}
              type="number"
              placeholder={data.rate}
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label
              for="email"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              <span className="text-red-500">Inital</span> Price
            </label>
            <input
              onChange={(ele) => {
                setIntialPrice(ele.target.value);
              }}
              placeholder={data.initalprice}
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label
              for="email"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              <span className="text-red-500">Current</span> Price
            </label>
            <input
              onChange={(ele) => {
                setCurrentPrice(ele.target.value);
              }}
              placeholder={data.currentPrice}
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
            <div class="mb-5">
              <label
                for="email"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                <span className="text-red-500">Quantity</span>
              </label>
              <input
                onChange={(ele) => {
                  setQuantity(ele.target.value);
                }}
                type="number"
                placeholder={data.quantity}
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
        </div>
        <div class="mx-auto w-full max-w-[550px] bg-white ">
          <div class="mb-5">
            <label
              for="email"
              class="mb-4 block text-base font-medium text-[#07074D]"
            >
              <span className="text-red-500">Description</span>
            </label>
            <input
              onChange={(ele) => {
                setDiscription(ele.target.value);
              }}
              type="text"
              placeholder={data.description}
              class="w-full h-40  text-center rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div class="mb-6 pt-4">
            <label class="mb-5 block text-xl font-semibold text-[#07074D]">
              Upload File
            </label>

            <div class="mb-8">
              <input type="file" name="file" id="file" class="sr-only" />
              <label
                for="file"
                class="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
              >
                <div>
                  <span class="mb-2 block text-xl font-semibold text-[#07074D]">
                    Drop files here
                  </span>
                  <span class="mb-2 block text-base font-medium text-[#6B7280]">
                    Or
                  </span>
                  <span class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                    Browse
                  </span>
                </div>
              </label>
            </div>

            <div>
              <button
                onClick={() => {
                  updateprodnew(newProduct);
                }}
                class="hover:shadow-div w-full rounded-md bg-rose-600 py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Add The Updated Product
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Fotter />
      </div>
    </div>
  );
};

export default UpdateProduct;
