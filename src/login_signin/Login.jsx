import React, { useEffect, useState } from "react";
import Navbar from "../Ccomponents/Navbar";
import MinHeader from "../Ccomponents/MinHeader";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import loginImage from "../images/image.png";
import NavbarUser from "../Ccomponents/NavbarUser";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const Logiin = (obj) => {
    axios.post("http://localhost:3000/user/login", obj)
      .then((res) => {
        console.log("logged in");
        // Navigate('/Signin')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <MinHeader />
      <NavbarUser />
      <br></br>
      <br></br>
      <br></br>

      <section class="bg-gray-50 dark:bg-gray-900">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/app-login-security-4897468-4077880.png?f=webp"
          alt="logo"
          style={{ height: 550, width: 700, marginLeft: 100 }}
        />

        <div
          class="flex flex-col items-center  py-8 mx-auto md:h-screen lg:py-0   "
          style={{ paddingLeft: 580, marginTop: -575 }}
        >
          <a
            href="#"
            class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          ></a>
          <div class="w-full  bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Connect to your account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                    onChange={(e)=>{setEmail(e.target.value)}}
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    onChange={(e)=>{setPassWord(e.target.value)}}
                  />
                </div>
                <div class="flex items-start"></div>
                <button
                  type="submit"
                  class="w-full text-Black bg-primary-600 bg-green-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  onClick={()=>{Logiin({email:email,pwd:password})}}
                >
                  Enter
                </button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  You are not a member?{" "}
                  <a
                    href="#"
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign in here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Login;
