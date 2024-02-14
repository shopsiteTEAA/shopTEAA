import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="container mx-auto py-8 bg-slate-100">
            <h1 className="text-7xl font-bold text-gray-800 mb-4">Contact Us</h1>
            <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">Our Address</h2>
                    <p>RBK EL GHAZELA</p>
                    <p>ARIANA</p>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">Phone Number</h2>
                    <p>(216)20 014 819</p>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">Email Address</h2>
                    <p>info@example.com</p>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
                    <div className="flex space-x-4">
                        <a href="#" className="text-blue-500 hover:text-blue-600">
                            <FaFacebook className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-blue-500 hover:text-blue-600">
                            <FaTwitter className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-blue-500 hover:text-blue-600">
                            <FaInstagram className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Contact
