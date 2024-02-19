// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './front/cart/cart.jsx';
import Details from './front/details/details.jsx';
import Description from "./front/details/description.jsx";
import Related from "./front/details/relateditem.jsx";
import MainPageSaller from './seller/MainPageSaller.jsx';
import AddProduct from './seller/AddProduct.jsx';
import Productsaler from './seller/Productsaler.jsx';
import UpdateProduct from './seller/UpdateProduct.jsx';
import Login from './login_signin_adminpart/Login.jsx';
import Signin from './login_signin_adminpart/Signin.jsx';
import UpdateUser from './login_signin_adminpart/UpdateUser.jsx';
import CheckAllusers from './login_signin_adminpart/CheckAllusers.jsx';
import All from "./front/details/All.jsx";
import Payment from "./front/cart/payment.jsx";
import Contact from './handlerPages/Contact.jsx'
import NotFound from './handlerPages/NotFound.jsx'
import AboutUs from './handlerPages/AboutUs.jsx'
import Home from './pages/Home.jsx';
import Wishlist from './pages/Wishlist.jsx';
import Products from './pages/Products.jsx';
import Bestproduct from './pages/Bestproduct';
import CategoryProduct from './pages/CategoryProduct.jsx';
import Editsaller from "./seller/Editsaler.jsx";
import WelcomePage from "./seller/WelcomePage.jsx";
import ProfileAdmin from "./login_signin_adminpart/ProfileAdmin.jsx"

function App() {


  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<WelcomePage/>}/>
        <Route path="/Signin" element={<Signin />} />
        <Route path="/UpdateUser" element={<UpdateUser />} />
        <Route path="/CheckAllusers" element={<CheckAllusers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/NotFound" element={<NotFound />} />
        <Route path="/AddProduct" element={<AddProduct />} />
        <Route path="/client" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/bestproduct"  element={<Bestproduct />} />
        <Route path="/categoryProduct" element={<CategoryProduct />} />
        <Route path="/saler" element={<MainPageSaller/>}/>
        <Route path='/saler/addProduct' element={<AddProduct/>}/>
        <Route path='/saler/allProduct' element={<Productsaler/>}/>
        <Route path='/saler/updateprod/:idprod' element={<UpdateProduct/>}/>
        {/* <Route path="/" element={<Login/>}/> */}
        <Route path="/Signin" element={<Signin/>}/>
        <Route path="/UpdateUser" element={<UpdateUser/>}/>
        <Route path="/all" element={<All/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/paiment" element={<Payment/>}/>
        <Route path="/Profileadmin" element={<ProfileAdmin/>}/>
        {/* <Route path="/homepageadmin" element={<HomepageAdmin/>}/> */}
        <Route path="/saler/edit" element={<Editsaller/>}/>
        {/* <Route path="/StatisticsAdmin" element={<StatisticsAdmin />} /> */}
        {/* <Route path="/ProfileAdmin" element={<ProfileAdmin />} /> */}
        {/* <Route path="/Login" element={<Login />} /> */}
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
