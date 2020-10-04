import React from "react";

// Styling
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles.js";

//Components
import Header from "./components/Header.js";
import MovieList from "./components/MovieList.js";

//Theme
const theme = {
  primaryColor: "#1fb6ed",
  secondaryColor: "white",
  primaryBackground: "#282c34",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        <Header />
        <MovieList />
      </div>
    </ThemeProvider>
  );
}

export default App;
