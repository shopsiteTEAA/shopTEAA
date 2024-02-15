import React from 'react'
import aboutUsImg from "./assests/download.jpg"
import Navbar from "../Ccomponents/Navbar.jsx"
import MinHeader from '../Ccomponents/MinHeader.jsx'

const AboutUs = () => {
  return (
    <div>
      <MinHeader/>
      <Navbar/>
    <div className=" bg-white py-12 flex flex-col lg:flex-row">
    <div className="max-w-4xl mx-auto px-4 lg:mr-10 lg:w-1/2">
      <h2 className="text-7xl font-bold text-gray-800 mb-4">About Us</h2>
      <p className="text-lg text-gray-700 mb-6">
        launced in 2015 ,Exclusive is North Africa premier online shoping market place with an active presence
        in tunisia Supported by wide range of tailored marketing ,data and service solutions Exclusive has 10,500
        sallers and servers 3 millions customers across the region 
      </p>
    </div>
    <div className="lg:w-1/2">
      <img className=" w-full shadow-lg rounded-xl" src={aboutUsImg} alt="About Us Image" />
    </div>
  </div>
  </div>
  )
}

export default AboutUs
