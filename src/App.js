import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPageSaller from './seller/MainPageSaller';
import AddProduct from './seller/AddProduct';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPageSaller/>}/>
        <Route path='/seler/addProduct' element={<AddProduct/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
