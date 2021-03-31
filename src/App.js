import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import MovieDetail from "./components/MovieDetail";
import HomeBody from "./parentComponents/HomeBody";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Header />

      <Route exact path="/">
        <HomeBody />
      </Route>
      <Route
        exact
        path="/details/:movieID"
        render={(props) => <MovieDetail {...props} />}
      />
    </Router>
  );
}

export default App;
