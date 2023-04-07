import { useState } from "react";
import * as Styles from "./styles";


import projects from "../../data/projects";
import { TitleDefaulted } from "../../components/Title";
import { ProjectItem } from "../../components/Project-item";

export const Project = () => {
  const [addStyles, setAddStyles] = useState<any[]>([3, "flex", "1600px", "1500px", "2050px", "1950px"]);

  const handleHideOrApper = () => {
    setAddStyles([4, "none", "2200px", "2100px", "2750px", "2500px"]);
  };

  return (
    <Styles.Container id="projetos" SetHeight={addStyles[2]} SetHeightMedium={addStyles[3]} SetHeightIntermediary={addStyles[4]} SetHeightSmall={addStyles[5]}>
      <TitleDefaulted text="Projetos" />

      <Styles.EffectShadow SetDisplay={addStyles[1]}>
        <Styles.Button onClick={handleHideOrApper} SetDisplay={addStyles[1]}>
          Ver mais
        </Styles.Button>

      </Styles.EffectShadow>
      {projects.slice(0, addStyles[0]).map((project) => (
        <ProjectItem project={project} />
      ))}
    </Styles.Container>
  );
};
