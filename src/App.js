import React from "react";
import logo from "./logo.svg";
import "./App.css";

// Data
import movies from "./movies.js";

// Styling
import styles from "./styles";

function App() {
  const movieList = movies.map((movie) => (
    <div style={styles.movie} key={movie.id}>
      <img style={styles.movieImage} alt={movie.Title} src={movie.Poster} />
      <p style={styles.text}>{movie.Title}</p>
      <p style={styles.text}>{movie.Year}</p>
    </div>
  ));
  return (
    <div className="App">
      <header className="App-header">
        <h2>Batman Movies</h2>
        <br></br>
        <br></br>
        <div style={styles.list}>{movieList}</div>
      </header>
    </div>
  );
}

export default App;
