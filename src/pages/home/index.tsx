import React from "react";
import bannerformat from "../../assets/bannerformat.svg";
import * as Styles from "./styles";

import { Button } from "../../components/Button";
import { TitleHome } from "../../components/Title";

import { About } from "../about";
import { Skills } from "../skills";
import { Project } from '../project';
import { Contact } from "../contact";

export const Home = () => {
  return (
    <Styles.Container id="/">
      <Styles.ContentHeader>

        <TitleHome />

          <Styles.Link target="_blank" href="https://drive.google.com/file/d/17GjPpfhXGIDx6x9e6VA6wlHXb2K8u6MH/view?usp=share_link">
            <Button label="Currículo </>"></Button>
          </Styles.Link>
               
        <Styles.Img src={bannerformat} />
      </Styles.ContentHeader>

      <Styles.Section>
        <About />
      </Styles.Section>

      <Styles.Section>
        <Skills />
      </Styles.Section>

      <Styles.Section>
        <Project />
      </Styles.Section>

      <Styles.Section>
        <Contact />
      </Styles.Section>

      <Styles.Footer>
        © Site desenvolvido por felipe silva · 2023 
      </Styles.Footer>
    </Styles.Container>
  );
};
