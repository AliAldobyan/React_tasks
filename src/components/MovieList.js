import React from "react";

// Data
import movies from "../movies.js";

// Styling
import { List } from "./styles.js";
// Components
import MovieItem from "./MovieItem";

const MovieList = () => {
  const movieList = movies.map((movie) => (
    <MovieItem movie={movie} key={movie.id} />
  ));
  return <List>{movieList}</List>;
};

export default MovieList;
