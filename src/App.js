import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import HomeBody from "./parentComponents/HomeBody";
import FilteredBody from "./parentComponents/FilteredBody";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Header />

      <Switch>
        <Route exact path="/">
          <HomeBody />
        </Route>
        <Route path="/reserchedParam">
          <FilteredBody />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
