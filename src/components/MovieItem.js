import React from "react";

// Styling
import { MovieWrapper } from "./styles.js";

const MovieItem = (props) => {
  const { movie } = props;
  return (
    <MovieWrapper key={movie.id}>
      <img alt={movie.Title} src={movie.Poster} />
      <p>{movie.Title}</p>
      <p>{movie.Year}</p>
    </MovieWrapper>
  );
};

export default MovieItem;
