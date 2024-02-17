import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPageSaller from './seller/MainPageSaller.jsx';
import AddProduct from './seller/AddProduct.jsx';
import Productsaler from './seller/Productsaler.jsx';
import UpdateProduct from './seller/UpdateProduct.jsx';
import Login from './login_signin_adminpart/Login.jsx';
import Signin from './login_signin_adminpart/Signin.jsx';
import UpdateUser from './login_signin_adminpart/UpdateUser.jsx';
import Leftsidebar from './Ccomponents/Leftsidebar';
import CheckAllusers from './login_signin_adminpart/CheckAllusers.jsx';
import UpdateList from './login_signin_adminpart/UpdateList.jsx';
import ProfileAdmin from './login_signin_adminpart/ProfileAdmin.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/saler" element={<MainPageSaller/>}/>
        <Route path='/saler/addProduct' element={<AddProduct/>}/>
        <Route path='/saler/allProduct' element={<Productsaler/>}/>
        <Route path='/saler/updateprod/:idprod' element={<UpdateProduct/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/Signin" element={<Signin/>}/>
        <Route path="/UpdateUser" element={<UpdateUser/>}/>
        <Route path="/CheckAllusers" element={<CheckAllusers/>}/>
        <Route path="/UpdateList/:iduser" element={<UpdateList/>}/>
        <Route path="/profileAdmin" element={<ProfileAdmin/>}/>




        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
