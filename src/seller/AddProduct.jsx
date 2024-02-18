import React, { useState } from "react";
import MinHeader from "../Ccomponents/MinHeader";
import Navbar from "../Ccomponents/Navbar";
import Fotter from "../Ccomponents/Fotter";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [Category, setCategory] = useState("");
  const [rate, setRate] = useState("");
  const [intialPrice, setIntialPrice] = useState("");
  const [currentPrice, setCurrentPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDiscription] = useState("");
  const [photo, setPhoto] = useState([]);

  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    console.log(selectedImages);
    setPhoto(selectedImages);
  };

  const uploadImage = async (image) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "AmineTessiku");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/du0wpkjrs/upload",
        formData
      );
      return response.data.secure_url;
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
    }
  };

  const notifySuccess = () => toast.success("Product added successfully!");

  const insertProduct = async () => {
    try {
      const mainImageUrl = await uploadImage(photo[0]);
      const additionalImageUrls = await Promise.all(photo.slice(1).map(uploadImage));
  
      const newProduct = {
        name: name,
        category: Category,
        rate: rate,
        status: "available",
        initalprice: intialPrice,
        currentprice: currentPrice,
        imgurlmain: mainImageUrl,
        color: "blue",
        quantity: quantity,
        description: description,
        image :{
        image1: additionalImageUrls[0] || "",
        image2: additionalImageUrls[1] || "",
        image3: additionalImageUrls[2] || "",
        image4: additionalImageUrls[3] || "",
        }
      };
  
      await axios.post("http://localhost:3000/saler/createprod/1", newProduct);
      console.log(newProduct);
      notifySuccess();
      // navigate('/saler')
    } catch (err) {
      console.log('Error in insert data from the frontend', err);
    }
  };
  // now i need to get the cloudinary
  return (
    <div className="h-full w-full">
      <div>
        <MinHeader />
        <Navbar />
        <ToastContainer/>
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
              onChange={(ele)=>{
                setName(ele.target.value)
              }}
              
              name="email"
              id="email"
              placeholder="name product"
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
               onChange={(ele)=>{
                setCategory(ele.target.value)
              }}
                type="text"
                name="text"
                placeholder="Category"
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
             onChange={(ele)=>{
              setRate(ele.target.value)
            }}
              type="number"
              placeholder="rate"
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
               onChange={(ele)=>{
                setIntialPrice(ele.target.value)
              }}
              placeholder="Initial Price"
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
               onChange={(ele)=>{
                setCurrentPrice(ele.target.value)
              }}
              placeholder="Initial Price"
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
                 onChange={(ele)=>{
                  setQuantity(ele.target.value)
                }}
                type="number"
                placeholder="Quantity"
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
               onChange={(ele)=>{
                setDiscription(ele.target.value)
              }}
              type="text"
              placeholder="Description"
              class="w-full h-40  text-center rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div class="mb-6 pt-4">
            <label class="mb-5 block text-xl font-semibold text-[#07074D]">
              Upload File
            </label>

            <div class="mb-8">
              <input type="file" name="file" id="file" class="sr-only" multiple  onChange={
                // need to make it not files not file[0] (for one image input ! )
                    // setPhoto(ele.target.files[0])
                    handleImageChange
              }/>
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
              <button onClick={()=>{
                insertProduct()
              }} class="hover:shadow-div w-full rounded-md bg-rose-600 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Add The New Product
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

export default AddProduct;
