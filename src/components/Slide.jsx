import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import MyModal from "./MyModal";

class Slide extends React.Component {
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
  };
  componentDidMount = async () => {
    {
      let key = `b0ba7bdf`;
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${key}&s=Spider%20Man`
      );
      const data = await response.json();
      const array = data.Search;
      this.setState({ spiderMan: array });
      console.log(this.state.spiderMan);
    }
    {
      let key = `b0ba7bdf`;
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${key}&s=harry%20potter`
      );
      const data = await response.json();
      const array = data.Search;
      this.setState({ harryPotter: array });
      console.log(this.state.harryPotter);
    }
    {
      let key = `b0ba7bdf`;
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${key}&s=batman`
      );
      const data = await response.json();
      const array = data.Search;
      this.setState({ batMan: array });
      console.log(this.state.batMan);
    }
    {
      let key = `b0ba7bdf`;
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${key}&s=harry%20potter`
      );
      const data = await response.json();
      const array = data.Search;
      this.setState({ hulkMovies: array });
      console.log(this.state.hulkMovies);
    }
  };

  // handleClick = (e) => {
  //   console.log(e.currentTarget);
  // };

  render() {
    return (
      <>
        <Splide
          options={{
            rewind: true,
            autoplay: true,
            interval: 500,
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
          {this.state.spiderMan.map((movie) => (
            <SplideSlide key={movie.imdbID}>
              <img
                height="300"
                width="250"
                src={movie.Poster}
                id={movie.imdbID}
                alt={movie.imdbID}
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
              />
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
        <Splide
          options={{
            rewind: true,
            autoplay: true,
            interval: 500,
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
          {this.state.harryPotter.map((movie) => (
            <SplideSlide key={movie.imdbID}>
              <img
                height="300"
                width="250"
                src={movie.Poster}
                id={movie.imdbID}
                alt={movie.imdbID}
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
              />
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
        <Splide
          options={{
            rewind: true,
            autoplay: true,
            interval: 500,
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
          {this.state.batMan.map((movie) => (
            <SplideSlide key={movie.imdbID}>
              <img
                height="300"
                width="250"
                src={movie.Poster}
                id={movie.imdbID}
                alt={movie.imdbID}
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
              />
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
        <Splide
          options={{
            rewind: true,
            autoplay: true,
            interval: 500,
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
          {this.state.hulkMovies.map((movie) => (
            <SplideSlide key={movie.imdbID}>
              <img
                height="300"
                width="250"
                src={movie.Poster}
                id={movie.imdbID}
                alt={movie.imdbID}
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
              />
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
      </>
    );
  }
}
export default Slide;
