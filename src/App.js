import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AboutUs from "./handlerPages/AboutUs.jsx";
import Contact from "./handlerPages/Contact.jsx";
import NotFound from './handlerPages/NotFound.jsx';
import Cloudinary from './handlerPages/Cloudinary.jsx';


function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/NotFound" element={<NotFound />} />
          <Route path="/Cloudinary" element={<Cloudinary />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
