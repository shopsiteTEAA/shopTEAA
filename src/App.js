import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './front/cart/cart.jsx';
import Details from './front/details/details.jsx';
import Description from "./front/details/description.jsx";
import Related from "./front/details/relateditem.jsx";
import MainPageSaller from './seller/MainPageSaller';
import AddProduct from './seller/AddProduct';
import All from "./front/details/All.jsx"


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/all" element={<All/>}></Route> 
      <Route path="/rel" element={<Related/>}></Route> 
  <Route path="/cart" element={<Cart/>}></Route>
  <Route path="/details" element={<Details/>}></Route>
  <Route path="/" element={<Description/>}></Route>
        <Route path="/seler" element={<MainPageSaller/>}/>
        <Route path='/seler/addProduct' element={<AddProduct/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
