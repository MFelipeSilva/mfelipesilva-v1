import { useState } from "react";
import * as Styles from "./styles";


import projects from "../../data/projects";
import { TitleDefaulted } from "../../components/Title";
import { ProjectItem } from "../../components/Project-item";

export const Project = () => {
  const [addStyles, setAddStyles] = useState<any[]>([3, "flex", "1800px", "2100px", "2000px"]);

  const handleHideOrApper = () => {
    setAddStyles([4, "none", "2200px", "2700px", "2700px"]);
  };

  return (
    <Styles.Container id="projetos" SetHeight={addStyles[2]} SetHeightMedium={addStyles[3]} SetHeightSmall={addStyles[4]}>
      <TitleDefaulted text="Projetos" />

      <Styles.EffectShadow SetDisplay={addStyles[1]}>
        <Styles.Button onClick={handleHideOrApper} SetDisplay={addStyles[1]}>
          Ver mais
        </Styles.Button>

      </Styles.EffectShadow>
      {projects.slice(0, addStyles[0]).map((project) => (
        <ProjectItem project={project} />
      ))};
    </Styles.Container>
  );
};
