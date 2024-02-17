import React, { useEffect, useState } from "react";
import MinHeader from "../Ccomponents/MinHeader";
import Navbar from "../Ccomponents/Navbar";
import LeftSideBar from "../seller/LeftSideBar";
import axios from "axios";
import Fotter from "../Ccomponents/Fotter";

// createContext ,useContext,
// import TablesProd from "./TablesProd";

// export const usercontext = createContext()
const MainPageSaller = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/saler/newestproductStore`)
      .then((data) => {
        setdata(data.data);
      })

      .catch((err) => {
        console.log("err", err);
      });
  }, []);
  console.log(data);

  return (
    <div>
      <div className="flex flex-col bg-white">
        <MinHeader />
        <Navbar />
      </div>
      {/* card */}
      <div className=" mt-10 ml-31  w-full h-full">
        <div className=" text-center mt-4 w-full items-center h-full flex justify-center">

          <div class=" items-center bg-white shadow-lg rounded-2xl w-96 ">
            <img
              alt="profil"
              src="https://images.unsplash.com/photo-1509773896068-7fd415d91e2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlnaHQlMjBza3l8ZW58MHx8MHx8fDA%3D"
              class="w-full mb-4 rounded-t-lg h-28"
            />
            <div class="flex flex-col items-center justify-center p-4 -mt-16">
              <a href="#" class="relative block">
                <img
                  alt="profil"
                  src="https://images.unsplash.com/photo-1509773896068-7fd415d91e2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlnaHQlMjBza3l8ZW58MHx8MHx8fDA%3D"
                  class="mx-auto object-cover rounded-full h-16 w-16  border-2 border-white dark:border-gray-800"
                />
              </a>
              <p class="mt-2 text-xl font-medium text-gray-800 ">
                Amine
              </p>
              <p class="mb-4 text-xs text-gray-400">Nantes</p>
              <p class="p-2 px-4 text-xs text-white bg-black rounded-full">
                saller
              </p>
              <div class="w-full p-2 mt-4 rounded-lg">
                <div class="flex items-center justify-between text-sm text-gray-600">
                  <p class="flex flex-col">
                    Products
                    <span class="font-bold text-black ">34</span>
                  </p>
                  <p class="flex flex-col">
                    Followers
                    <span class="font-bold text-black ">
                      455
                    </span>
                  </p>
                  <p class="flex flex-col">
                    Rating
                    <span class="font-bold text-black ">
                      9.3
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="ml-10">
            <LeftSideBar />
          </div> */}
        </div>
        <div className="w-full  ">
          <div className="flex w-full">
            <div className="w-full h-full font-semibold ml-36 mt-8">
              <p className="mb-7">
                Welcome! <span className="text-red-500">What's new here </span>
              </p>
              <div className="flex flex-col  w-10/12 mb-3">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-white">
                          <tr>
                            {[
                              "Name",
                              "Category /Description",
                              "Status",
                              "Rate",
                            ].map((heading, index) => (
                              <th
                                key={index}
                                scope="col"
                                className={`px-${
                                  index === 0 ? 16 : 14
                                } py-3 text-left text-xs font-semibold text-red-500 uppercase tracking-wider`}
                              >
                                {heading}
                              </th>
                            ))}
                            <th scope="col" className="relative px-6 py-3">
                              <span className="sr-only">Edit</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 font-semibold">
                          {data?.map((data) => (
                            <tr key={data?.idproduct}>
                              <td className="px-16 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="flex-shrink-0 h-10 w-10">
                                    <img
                                      className="h-10 w-10 rounded-full"
                                      src={data.imageurlmain}
                                      alt=""
                                    />
                                  </div>
                                  <div className="ml-4">
                                    <div className="text-sm font-semibold text-gray-900">
                                      {data.name}
                                    </div>
                                    <div className="text-sm">{data.email}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-16 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">
                                  {data.category}
                                </div>
                                <div className="text-sm">
                                  {data.description}
                                </div>
                              </td>
                              <td className="px-16 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                  {data.status}
                                </span>
                              </td>
                              <td className="px-16 py-4 whitespace-nowrap text-sm">
                                {data.rate}
                              </td>
                              <td className="flex px-6 py-4 whitespace-nowrap text-right text-sm font-semibold"></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <Fotter />
    </div>
  );
};

export default MainPageSaller;
