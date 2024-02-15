import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AboutUs from "./Components/AboutUs.jsx";
import Contact from "./Components/Contact.jsx";



function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route path="/" element={<AboutUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
