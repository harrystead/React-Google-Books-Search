import "./styles/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Search from "./pages/Search";
import Save from "./pages/Save";
import NavbarToggle from "./components/Nav/index";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <NavbarToggle />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route path="/save" component={Save} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
