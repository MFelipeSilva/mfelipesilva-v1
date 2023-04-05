import * as Styles from "./styles";

/*--- routes ---*/
import { Home } from "../pages/home";
import { About } from "../pages/about";
import { Skills } from "../pages/skills";
import { Project } from "../pages/project";
import { Contact } from "../pages/contact";

export const Layout = () => {
  return (
    <Styles.Container id="/">
      <Styles.Section>
        <Home />
      </Styles.Section>

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
  )
}

