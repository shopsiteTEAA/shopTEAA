import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPageSaller from './seller/MainPageSaller';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPageSaller/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
