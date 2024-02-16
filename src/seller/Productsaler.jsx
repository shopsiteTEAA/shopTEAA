import React, { useEffect, useState } from "react";
import MinHeader from "../Ccomponents/MinHeader";
import Navbar from "../Ccomponents/Navbar";
import Fotter from "../Ccomponents/Fotter";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Productsaler = () => {
    const [data,setData]= useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get(`http://localhost:3000/saler/getallprod`)
        .then((results)=>{
            setData(results.data)
        }) 
        .catch((err)=>{
            console.log('err',err);
        })
        
    },[])
    console.log(data);
    const updateProductspecific = (id)=>{
        navigate(`/saler/updateprod/${id}`)
    }
    const deleteProductspecific =(id)=>{
        axios.delete(`http://localhost:3000/saler/deleteprod/${id}`)
        .then(()=>{
            window.location.reload()
        })
        .catch((err)=>{
            console.log('err',err);
        })
    }
 
  return (
    <div>
      <div>
        <MinHeader />
        <Navbar />
      </div>
      <div>
        <div className="w-full h-full  font-semibold ml-36 mt-8 ">
          <p>
            Welcome! <span className="text-red-500">MR Amine</span>
          </p>
        </div>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 ">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-white">
                    <tr>
                      <th
                        scope="col"
                        className="px-16 py-3 text-left text-xs  font-semibold text-red-500 uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-16 py-3 text-left text-xs  font-semibold text-red-500 uppercase tracking-wider"
                      >
                       Category /Description 
                      </th>
                      <th
                        scope="col"
                        className="px-14 py-3 text-left text-xs  font-semibold text-red-500 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-7 py-3 text-left text-xs  font-semibold text-red-500 uppercase tracking-wider"
                      >
                        Rate
                      </th>
                      <th
                        scope="col"
                        className="px-8 py-6 text-left text-xs  font-semibold text-red-500 uppercase tracking-wider"
                      >
                        Manging
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                      
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200  font-semibold">
                    {data?.map((ele,) => (
                      <tr key={ele.idproduct}>
                        <td className="px-16 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={ele.imageurlmain}
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm  font-semibold text-gray-900">
                                {ele.name}
                              </div>
                              <div className="text-sm ">{ele.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {ele.category}
                          </div>
                          <div className="text-sm ">{ele.description}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className="px-2 inline-flex text-xs leading-5
                      font-semibold rounded-full bg-green-100 text-green-800"
                          >
                            {ele.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm ">
                          {ele.rate}
                        </td>
                        <td className=" flex px-6 py-4 whitespace-nowrap text-right text-sm  font-semibold">
                          <button
                            onClick={()=>{
                                deleteProductspecific(ele.idproduct)
                            }}
                            className=" text-black-500 hover:text-red-400"
                          >
                            Delete
                          </button>
                          <div className="ml-6">
                          <button
                            onClick={()=>{
                                updateProductspecific(ele.idproduct)
                            }}
                            className=" text-red-500 hover:text-black"
                          >
                            Edit
                          </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Fotter/>
    </div>
  );
};

export default Productsaler;
