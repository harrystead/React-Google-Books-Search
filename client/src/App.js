import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Search from "./pages/Search";
import Save from "./pages/Save";
import NavbarToggle from "./components/Nav"; 

function App() {
  return (
    <Router>
    <NavbarToggle/>
    <Route exact path="/" component={Search} />
    <Route path="/edit" component={Save} />
  </Router>
  );
}

export default App;
