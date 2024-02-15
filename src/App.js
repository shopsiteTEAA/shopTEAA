
import { Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter } from 'react-router-dom';
import Wishlist from './pages/Wishlist';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Wishlist />} path="/wishlist" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
