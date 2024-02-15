import React, { useState } from "react";
import axios from "axios";
import Leftsidebar from "../Ccomponents/Leftsidebar";
import Navbar from "../Ccomponents/Navbar";
import MinHeader from "../Ccomponents/MinHeader";



function UpdateUser() {
    const [newfirstname, setNewFirstName] = useState("");
    const [newlastname, setNewLastName] = useState("");
    const [newemail, setNewEmail] = useState("");
    const [newpassword, setNewPassword] = useState("");
    const [newnumber, setNewNumber] = useState("");
    const [newadress, setNewAdress] = useState("");
    const [newrole, setNewRole] = useState("");

    const updatee=(id)=>{
        axios.put(`http://localhost:3000/user/update/updateuser/${id}`, {
        firstname :newfirstname, 
        lastname : newlastname,
        email :newemail,
        role: newrole,
        phone: newnumber,
        adress: newadress,
        pwd : newpassword
     } )
        .then(()=>{console.log("updated");})
        .catch(()=>{console.log("error");})
      }
      
       
  return (
    <div>
        <MinHeader/>
        <Navbar/>
   <Leftsidebar/>
<div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md" style={{marginBottom:150}}>
      <h2 className="text-2xl font-bold mb-4">Update Profile</h2>
      <form >
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            onChange={(e)=>{setNewFirstName(e.target.value)}}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            onChange={(e)=>{setNewLastName(e.target.value)}}

          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            onChange={(e)=>{setNewEmail(e.target.value)}}

          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            onChange={(e)=>{setNewNumber(e.target.value)}}

          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            onChange={(e)=>{setNewAdress(e.target.value)}}

          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            onChange={(e)=>{setNewPassword(e.target.value)}}

          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
          onClick={()=>{updatee(id)}}
        >
          Update Profile
        </button>
      </form>
    </div>
    </div>
  )
}

export default UpdateUser
