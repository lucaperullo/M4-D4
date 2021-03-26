import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import HomeBody from "./parentComponents/HomeBody";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <HomeBody />
    </div>
  );
}

export default App;
