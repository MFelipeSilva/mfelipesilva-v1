import React, { useEffect, useRef, useState } from "react";
import useStoredState from "./hooks/useStoredState";
import { ThemeProvider, DefaultTheme } from "styled-components";

import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import GlobalStyle from "./styles/global";

import { NavBar } from "./components/Navbar";
import { Layout } from "./layout";
import { LoadingPageAnimate } from "./components/LoadingPageAnimate";
import { Home } from "./pages/home";

function App() {
  const [theme, setTheme] = useStoredState<DefaultTheme>("theme", dark);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [scrollY, setScrollY] = useState<string>("hidden");

  const toggleTheme = () => {
    return setTheme(theme.typeTheme === "dark" ? light : dark);
  };

  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setScrollY("scroll");
    }, 2400);
  }, []);
  

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle SetOverflow={scrollY}/>

       {isLoading ? <LoadingPageAnimate /> : 
          <header>
            <NavBar toggleTheme={toggleTheme} />
          </header>
        }

        {isLoading ? <LoadingPageAnimate   /> : <Layout />}
        
      </div>
    </ThemeProvider>
  );
}

export default App;
