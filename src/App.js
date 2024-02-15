import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './front/cart/cart.jsx';
import Details from './front/details/details.jsx';
import Description from "./front/details/description.jsx";



function App() {
  return (
    <BrowserRouter>
      <Routes>
  {/*<Route path="/" element={<Cart/>}></Route>*/}
  {/*<Route path="/details" element={<Details/>}></Route>*/}
  <Route path="/" element={<Description/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
