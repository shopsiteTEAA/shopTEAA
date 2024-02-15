import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPageSaller from './seller/MainPageSaller';
import Login from './login_signin/Login';
import Signin from './login_signin/Signin';
import UpdateUser from './login_signin/UpdateUser';
import Leftsidebar from './Ccomponents/Leftsidebar';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UpdateUser/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
