import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPageSaller from './seller/MainPageSaller';
import AddProduct from './seller/AddProduct';
import Home from './pages/Home';
import Wishlist from './pages/Wishlist';
import Products from './pages/Products';
import Bestproduct from './pages/Bestproduct';
import CategoryProduct from './pages/CategoryProduct';

function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/saller" element={<MainPageSaller />} />
          <Route path="/seler/addProduct" element={<AddProduct />} />
          <Route element={<Home />} path="/" />
          <Route element={<Products />} path="/products" />
          <Route element={<Wishlist />} path="/wishlist" />
          <Route element={<Bestproduct/>} path="/bestproduct" />
          <Route element={<CategoryProduct/>} path="/categoryProduct" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
