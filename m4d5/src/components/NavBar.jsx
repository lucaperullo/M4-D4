import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
class NavBar extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <img
            className="logo"
            src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_logo.png"
            height="25px"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>TV Show</Nav.Link>
            <Nav.Link>Movies</Nav.Link>
            <Nav.Link>New & Popular</Nav.Link>
            <Nav.Link>My list</Nav.Link>
            <Nav.Link>Watch again</Nav.Link>
          </Nav>
          <Nav className="mr-sm-2">
            <Nav.Link>KIDS</Nav.Link>
            <ul>
              <Nav.Link>
                {" "}
                <img
                  src="./imgs/user.png"
                  height={30}
                  alt
                  className="rounded"
                />
              </Nav.Link>
              <li></li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
