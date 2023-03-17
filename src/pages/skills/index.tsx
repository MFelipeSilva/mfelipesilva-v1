import * as Styles from "./styles";

import skills from "../../data/skills";
import { SkillItem } from "../../components/Skill-item";
import teste from "../../assets/teste.png"

import { TitleDefaulted } from "../../components/Title";

export const Skills = () => {
  return (
    <Styles.Container id="habilidades">
      <TitleDefaulted text="Habilidades" />

      <Styles.CardContent>
        <Styles.Img></Styles.Img>
        {skills.map((skill) => (
          <SkillItem skill={skill} key={skill.id} />
        ))}
      </Styles.CardContent>
    </Styles.Container>
  );
};
