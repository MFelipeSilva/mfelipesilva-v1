import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import dark from "./styles/themes/dark";
import GlobalStyle, { Section } from "./styles/global";

import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Skills } from "./pages/skills";
import { Project } from "./pages/project";
import { Contact } from "./pages/contact";
import ScrollToTop from "./components/ScrollToTop";
import { NavBar } from "./components/Navbar";

function App() {
  return (
    <ThemeProvider theme={dark}>
      <div className="App">
        <GlobalStyle />

        <Router>
          <NavBar />
          <ScrollToTop />

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
