import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import useStoredState from "./hooks/useStoredState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import GlobalStyle, { Section } from "./styles/global";

import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Skills } from "./pages/skills";
import { Project } from "./pages/project";
import { Contact } from "./pages/contact";

import { NavBar } from "./components/Navbar";

function App() {
  const [theme, setTheme] = useStoredState('theme', dark);

  const toggleTheme = () => {
    return setTheme(theme.typeTheme === 'dark' ? light : dark)
  }
  
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />

        <Router>
          <NavBar toggleTheme={toggleTheme}/>
          

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/habilidades" element={<Skills />} />
            <Route path="/projetos" element={<Project />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
