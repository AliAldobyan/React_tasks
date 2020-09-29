import React from "react";

// Styling
import styles from "../styles";

const MovieItem = (props) => {
  const { movie } = props;
  return (
    <div style={styles.movie} key={movie.id}>
      <img style={styles.movieImage} alt={movie.Title} src={movie.Poster} />
      <p style={styles.text}>{movie.Title}</p>
      <p style={styles.text}>{movie.Year}</p>
    </div>
  );
};

export default MovieItem;
