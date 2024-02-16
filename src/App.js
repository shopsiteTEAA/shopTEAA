import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPageSaller from './seller/MainPageSaller.jsx';
import AddProduct from './seller/AddProduct.jsx';
import Productsaler from './seller/Productsaler.jsx';
import UpdateProduct from './seller/UpdateProduct.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/saler" element={<MainPageSaller/>}/>
        <Route path='/saler/addProduct' element={<AddProduct/>}/>
        <Route path='/saler/allProduct' element={<Productsaler/>}/>
        <Route path='/saler/updateprod/:idprod' element={<UpdateProduct/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
