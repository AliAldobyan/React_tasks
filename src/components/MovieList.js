import React from "react";

// Data
import movies from "../movies.js";

// Styling
import styles from "../styles";
// Components
import MovieItem from "./MovieItem";

const MovieList = () => {
  let movieList = movies.map((movie) => (
    <MovieItem movie={movie} key={movie.id} />
  ));
  return <div style={styles.list}>{movieList}</div>;
};

export default MovieList;
