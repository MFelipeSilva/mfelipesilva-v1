import React from "react";
import useStoredState from "./hooks/useStoredState";
import { ThemeProvider, DefaultTheme } from "styled-components";

import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import GlobalStyle from "./styles/global";

import { Home } from "./pages/home";
import { NavBar } from "./components/Navbar";

function App() {
  const [theme, setTheme] = useStoredState<DefaultTheme>("theme", dark);

  const toggleTheme = () => {
    return setTheme(theme.typeTheme === "dark" ? light : dark);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        
        <header>
          <NavBar toggleTheme={toggleTheme} />
        </header>
      
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
