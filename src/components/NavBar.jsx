import React from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import MyModal from "./MyModal";
import { Navbar, Nav, Container } from "react-bootstrap";
import { ImSearch } from "react-icons/im";
import { BrowserRouter as Router, Link } from "react-router-dom";
class NavBar extends React.Component {
  state = {
    spiderMan: [],
    harryPotter: [],
    superMan: [],
    batMan: [],
    hulkMovies: [],
    selected: null,
    type: null,
    title: null,
    image: null,
    year: null,
    modalShow: false,
    searchResults: null,
  };

  getData = async (e) => {
    console.log(e.currentTarget.value);

    let query = e.currentTarget.value;
    let key = `b0ba7bdf`;
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${key}&s=${query}`
    );
    const data = await response.json();
    const array = data.Search;
    this.setState({ searchResults: array });
    console.log(this.state.searchResults);
  };

  render() {
    return (
      <>
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
              <Nav.Link className="searchLink">
                <ImSearch className="searchIcon" />

                <input
                  onClick={this.getData}
                  type="text"
                  placeholder="search.."
                ></input>
              </Nav.Link>

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
                        <div className="usersContainer">
                          <div className="users">
                            <div className="singleUser">
                              <img
                                src="https://media.discordapp.net/attachments/819321346629566514/825058288768516096/user.png"
                                height={30}
                                alt="user-img"
                                className="rounded"
                              />
                              <p>Gengrit</p>
                            </div>
                            <div className="singleUser">
                              <img
                                src="https://media.discordapp.net/attachments/819321346629566514/825058288768516096/user.png"
                                height={30}
                                alt="user-img"
                                className="rounded"
                              />
                              <p>Luca</p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container fluid>
          {this.state.searchResults ? (
            <Splide
              options={{
                type: "loop",
                autoplay: true,
                speed: 35000,
                interval: 100,
                perPage: 6,
                gap: "1em",
                pagination: false,
                drag: true,
                focus: 0,
                perMove: 3,
                breakpoints: {
                  1583: {
                    perPage: 5,
                  },
                  1483: {
                    perPage: 4,
                  },
                  1020: {
                    perPage: 3,
                  },
                  763: {
                    perPage: 2,
                  },
                  514: {
                    perPage: 1,
                  },
                },
              }}
            >
              {this.state.searchResults.map((movie) => (
                <SplideSlide key={movie.imdbID}>
                  <img
                    className="slideImg"
                    height="300"
                    width="250"
                    src={movie.Poster}
                    id={movie.imdbID}
                    alt={movie.imdbID}
                  />
                  <div className="slideOptions">
                    <Link to={"/details/" + movie.imdbID}>
                      <button>details</button>
                    </Link>

                    <button
                      onClick={() =>
                        this.setState({
                          modalShow: true,
                          selected: movie.imdbID,
                          image: movie.Poster,
                          title: movie.Title,
                          year: movie.Year,
                          type: movie.Type,
                        })
                      }
                    >
                      reviews
                    </button>
                  </div>
                </SplideSlide>
              ))}
              <MyModal
                type={this.state.type}
                year={this.state.year}
                title={this.state.title}
                image={this.state.image}
                selected={this.state.selected}
                show={this.state.modalShow}
                onHide={() => this.setState({ modalShow: false })}
              />
            </Splide>
          ) : (
            console.log("Secret message!")
          )}
        </Container>
      </>
    );
  }
}

export default NavBar;
