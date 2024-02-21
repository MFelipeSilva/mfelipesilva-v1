import { Container, Footer } from "./styles";

import { Home } from "../pages/home";
import { About } from "../pages/about";
import { Skills } from "../pages/skills";
import { Project } from "../pages/project";
import { Contact } from "../pages/contact";

export const Layout = () => {
  return (
    <Container id="/">
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer>© Site desenvolvido por felipe silva · 2023</Footer>
    </Container>
  );
};
