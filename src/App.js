import React from "react";
import logo from "./logo.svg";
import "./App.css";

// Data
import movies from "./movies.js";

// Styling
import styles from "./styles";

//Components
import Header from "./components/Header.js";
import MovieList from "./components/MovieList.js";

function App() {
  return (
    <div className="App-header">
      <Header />
      <MovieList />
    </div>
  );
}

export default App;
