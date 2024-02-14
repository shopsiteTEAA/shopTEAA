import './App.css';
import AboutUs from "./Components/AboutUs.jsx";
import Contact from "./Components/Contact.jsx";

import { BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Router>
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/Contact" component={Contact} />
    </Router>
    </div>
  );
}

export default App;
