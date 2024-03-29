import React, { useState, useEffect } from "react";
import Navbar from "../../Ccomponents/Navbar.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import Fotter from "../../Ccomponents/Fotter.jsx";

function Cart() {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const navigate = useNavigate();

  useEffect(
    (id) => {
      axios
        .get(`http://localhost:3000/panier/getAllcarts/${1}`)
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        })

        .catch((error) => {
          console.log(error);
        });
    },
    [refresh]
  );
  console.log(data, "datta");

  const deletee = (product) => {
    axios
      .delete(`http://localhost:3000/panier/deletecart/${1}/${product}`)
      .then((res) => {
        console.log(res);
        setRefresh(!refresh);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const total = (quantity, price) => {
    console.log(quantity, price);
    return quantity * price;
  };

  return (
    <div>
      <Navbar />
      <div className="ml-40 mt-20">
        <h1 className="text-gray-300">
          Home / <span className="text-black"> Cart</span>
        </h1>

        <div>
          <div className="grid grid-cols-4 mt-10 shadow items-center h-14 w-5/6 ">
            <h1 className="ml-20">Product</h1>
            <h1 className="ml-20">Price</h1>
            <h1 className="ml-20">Quantity</h1>
            <h1 className="ml-10">Subtotal</h1>
          </div>

          {data.map((item, i) => {
            return (
              <div
                key={i}
                className="grid grid-cols-4 mt-10 shadow items-center h-14 w-5/6 "
                style={{ display: "flex", justifyContent: "space-around" }}
              >
                <img
                  className="w-10 ml-10"
                  src={item.product.imgurlmain}
                  alt=""
                />
                <h1 className="ml-10">{item.product.initalprice}</h1>
                <input
                  className="w-10 ml-10 border-gray-300 border rounded"
                  type="number"
                  value={item.sum}
                  onChange={(e) => {
                    const quantityP = parseInt(e.target.value);
                    setData((myData) => {
                      const newData = [...myData];
                      newData[i].sum = isNaN(quantityP) ? 1 : quantityP;
                      return newData;
                    });
                  }}
                />
                <h1 className="ml-10">
                  {total(item.sum, item.product.initalprice)} $
                </h1>
                <MdDelete
                  className="ml-10 cursor-pointer"
                  onClick={() => {
                    deletee(item.product.idproduct);
                  }}
                />
              </div>
            );
          })}

          <div className="mt-20 ">
            <input
              className="border-black rounded w-48 h-12 text-center text-sm"
              type="text"
              placeholder="Coupon Code"
            />
            <button className="shadow border-gray-300 border rounded-full ml-20 bg-red-600 text-white w-40 h-12 mt-4">
              Apply Coupon
            </button>
          </div>

          <div className="float-right -mt-28 mr-56  shadow border-black border rounded w-80  text-start  ">
            <h1 className="ml-5 mt-2">Cart Total</h1>
            <h3 className="ml-5 mt-6">
              Subtotal:
              {data.reduce(
                (tota, e) => tota + total(e.sum, e.product.initalprice),
                0
              )}{" "}
              $
            </h3>
            <hr className="text-gray-300 w-5/6 text-center" />
            <h3 className="ml-5 mt-6">
              Shipping: <i>Free</i>
            </h3>
            <hr className="text-gray-300 w-5/6" />
            <h3 className="ml-5 mt-6">
              {data.reduce(
                (tota, e) => tota + total(e.sum, e.product.initalprice),
                0
              )}
            </h3>
            <button
              onClick={() => navigate("/paiment")}
              className="shadow border-gray-300 border rounded-full ml-20 bg-red-600 text-white w-40 h-12 mt-4"
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
      {/* <Fotter/>   */}
    </div>
  );
}

export default Cart;
