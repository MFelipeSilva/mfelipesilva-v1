import React from "react";
import formato from "../../assets/formatogeometrico.svg";
import { Container, ContentHeader, Img , Section, Footer } from "./styles";

import { Button } from "../../components/Button";
import { TitleHome } from "../../components/Title";
import { NavBar } from "../../components/Navbar";

import { About } from "../about";
import { Skills } from "../skills";
import { Project } from '../project';
import { Contact } from "../contact";

export const Home = () => {
  return (
    <Container id="/">
      <ContentHeader>
        <TitleHome />

        <Button label="Currículo </>"></Button>

  
        <Img src={formato}></Img>
      </ContentHeader>

      <Section>
        <About />
      </Section>

      <Section>
        <Skills />
      </Section>

      <Section>
        <Project />
      </Section>

      <Section>
        <Contact />
      </Section>

      <Footer>
        © Site desenvolido por mutadofs · 2023 
      </Footer>
    </Container>
  );
};
