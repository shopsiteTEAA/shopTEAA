import React, { useState } from 'react';
import MinHeader from '../Ccomponents/MinHeader';
import Navbar from '../Ccomponents/Navbar';
import LeftsidebarAdmin from '../Ccomponents/LeftsidebarAdmin';
import axios from 'axios';
import { jwtDecode } from "jwt-decode"; 
import { useCookies } from 'react-cookie';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import NavbarAdmin from '../Ccomponents/NavbarAdmin';




function UpdateList() {
    const [newfirstname, setNewFirstName] = useState("");
    const [newlastname, setNewLastName] = useState("");
    const [newemail, setNewEmail] = useState("");
    const [newpassword, setNewPassword] = useState("");
    const [newnumber, setNewNumber] = useState("");
    const [newadress, setNewAdress] = useState("");
    const [newrole, setNewRole] = useState("");
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const token = cookies.token;
    const decodetoken = jwtDecode(token).id;
    const {iduser} = useParams()
    


    const updateProfile = () => {
        axios.put(`http://localhost:3000/user/updateuser/${iduser}`, {
            firstname: newfirstname, 
            lastname: newlastname,
            email: newemail,
            role: newrole,
            phone: newnumber,
            adress: newadress,
            pwd: newpassword
        })
        .then(() => {
            console.log("updated");
        })
        .catch(() => {
            console.log("error");
        });
    };

    return (
        <div>
            <div>
                <MinHeader />
                <NavbarAdmin />
            </div>
        
            <div className="flex mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
                <LeftsidebarAdmin />
                <div className="flex flex-col items-center w-full max-w-lg">
                    <h2 className="text-2xl font-bold mb-4">Update Profile</h2>
                    <div className="mb-4">
                        <label htmlFor="firstName" className="block text-gray-700">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            onChange={(e) => { setNewFirstName(e.target.value); }}
                            style={{ width: 600 }}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastName" className="block text-gray-700">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            className="mt-1 px-4 py-2  border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            onChange={(e) => { setNewLastName(e.target.value); }}
                            style={{ width: 600 }}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 px-4 py-2  border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            onChange={(e) => { setNewEmail(e.target.value); }}
                            style={{ width: 600 }}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-700">Phone</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            onChange={(e) => { setNewNumber(e.target.value); }}
                            style={{ width: 600 }}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="address" className="block text-gray-700">Address</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            onChange={(e) => { setNewAdress(e.target.value); }}
                            style={{ width: 600 }}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            onChange={(e) => { setNewPassword(e.target.value); }}
                            style={{ width: 600 }}
                        />
                    </div>
                    <div className="mb-4 flex items-center">
                        <label htmlFor="role" className="block text-gray-700 mr-2">Role:</label>
                        <input
                            type="checkbox"
                            id="seller"
                            name="role"
                            value="seller"
                            onChange={(e) => { setNewRole(e.target.checked ? "seller" : ""); }}
                            className="mr-1 h-6 w-6"
                        />
                        <label htmlFor="seller" className="mr-2">Seller</label>
                        <input
                            type="checkbox"
                            id="user"
                            name="role"
                            value="user"
                            onChange={(e) => { setNewRole(e.target.checked ? "user" : ""); }}
                            className="mr-1 h-6 w-6"
                        />
                        <label htmlFor="user">Client</label>
                    </div>
                    <button
                        type="submit"
                        className="bg-red-600 text-black px-4 py-2 rounded-md hover:bg-gray-200 focus:outline-none focus:ring focus:ring-blue-500"
                        onClick={()=>{updateProfile(iduser)}}
                    >
                        Update Profile
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UpdateList;
