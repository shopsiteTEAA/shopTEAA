import React from "react";
import MinHeader from "../Ccomponents/MinHeader";
import Navbar from "../Ccomponents/Navbar";
import Fotter from "../Ccomponents/Fotter";

const AddProduct = () => {
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
                type="email"
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
                type="email"
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
                type="email"
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
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                <span className="text-red-500">Description</span>
              </label>
              <input
                type="text"
                placeholder="Description"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
                <button class="hover:shadow-div w-full rounded-md bg-rose-600 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                  Send File
                </button>
              </div>
            </div>
          </div>
        </div>
      
      <div>
         <Fotter/>
      </div>
     
      
    </div>
  );
};

export default AddProduct;
