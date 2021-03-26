import React from "react";
import { Navbar, Nav } from "react-bootstrap";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar expand="lg">
        <Navbar.Brand>
          <img
            className="logo"
            src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_logo.png"
            height="25px"
            alt="logo-img"
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
            <Nav.Link className="kids">KIDS</Nav.Link>
            <ul>
              <Nav.Link>
                <img
                  src="https://media.discordapp.net/attachments/819321346629566514/825058288768516096/user.png"
                  height={30}
                  alt="user-img"
                  className="rounded"
                />
              </Nav.Link>
              <li>
                <div>
                  <ul>
                    <li>
                      <div className="users">
                        <img
                          src="https://media.discordapp.net/attachments/819321346629566514/825058288768516096/user.png"
                          height={30}
                          alt="user-img"
                          className="rounded"
                        />
                        <p>Gengrit</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
