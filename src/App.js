import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPageSaller from './seller/MainPageSaller.jsx';
import Login from './login_signin/Login.jsx';
import Signin from './login_signin/Signin.jsx';
import UpdateUser from './login_signin/UpdateUser.jsx';
import Leftsidebar from './Ccomponents/Leftsidebar';
import CheckAllusers from './login_signin/CheckAllusers.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/saler" element={<MainPageSaller/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/Signin" element={<Signin/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/UpdateUser" element={<UpdateUser/>}/>
        <Route path="/CheckAllusers" element={<CheckAllusers/>}/>



        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
