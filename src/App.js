import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./handlerPages/AboutUs.jsx";
import Contact from "./handlerPages/Contact.jsx";
import NotFound from "./handlerPages/NotFound.jsx";
import Cloudinary from "./handlerPages/Cloudinary.jsx";
import MainPageSaller from "./seller/MainPageSaller.jsx";
import AddProduct from "./seller/AddProduct.jsx";
import Productsaler from "./seller/Productsaler.jsx";
import UpdateProduct from "./seller/UpdateProduct.jsx";
import Login from "./login_signin/Login.jsx";
import Signin from "./login_signin/Signin.jsx";
import UpdateUser from "./login_signin/UpdateUser.jsx";
import Leftsidebar from "./Ccomponents/Leftsidebar";
import CheckAllusers from "./login_signin/CheckAllusers.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/saler" element={<MainPageSaller />} />
        <Route path="/saler/addProduct" element={<AddProduct />} />
        <Route path="/saler/allProduct" element={<Productsaler />} />
        <Route path="/saler/updateprod/:idprod" element={<UpdateProduct />} />
        <Route path="/" element={<Login />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/UpdateUser" element={<UpdateUser />} />
        <Route path="/CheckAllusers" element={<CheckAllusers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/NotFound" element={<NotFound />} />
        <Route path="/Cloudinary" element={<Cloudinary />} />
        <Route path="/AddProduct" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
