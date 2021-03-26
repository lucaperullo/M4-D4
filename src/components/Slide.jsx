import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
class Slide extends React.Component {
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
        <SplideSlide>
          <img
            height="200"
            width="250"
            src="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
            alt="Image 1"
          />
        </SplideSlide>
      </Splide>
    );
  }
}
export default Slide;
