import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
class Slide extends React.Component {
  state = {
    heroMovies: [],
  };
  componentDidMount = async () => {
    let key = `b0ba7bdf`;
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${key}&s=harry%20potter`
    );
    const data = await response.json();
    const array = data.Search;
    this.setState({ heroMovies: array });
    console.log(this.state.heroMovies);
  };

  // handleClick = (e) => {
  //   console.log(e.currentTarget);
  // };

  render() {
    return (
      <Splide
        options={{
          // options={ {
          //     rewind : true,
          //     perPage: 2,
          //     gap    : '1rem',
          // } }
          perPage: 6,
          pagination: false,
          drag: true,
          speed: 800,
          easing: "cubic-bezier(.42,.65,.27,.99)",
          perMove: 1,
          breakpoints: {
            800: {
              perPage: 4,
            },
            640: {
              perPage: 2,
            },
            480: {
              perPage: 1,
            },
          },
        }}
      >
        {console.log(this.state.heroMovies)}
        {this.state.heroMovies.map((movie) => (
          <SplideSlide key={movie.imdbID}>
            <img
              height="200"
              width="250"
              src={movie.Poster}
              id={movie.imdbID}
              alt="Image1"
              onClick={(e) => {
                console.log(e.currentTarget.id);
              }}
            />
          </SplideSlide>
        ))}
      </Splide>
    );
  }
}
export default Slide;
