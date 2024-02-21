import skills from "../../data/skills";

import { CardSkill } from "../../components/CardSkill";
import { TitleDefaulted } from "../../components/Title";

import { CardContent, Container, Img } from "./styles";

export const Skills = () => {
  return (
    <Container id="habilidades">
      <TitleDefaulted text="Habilidades" />
      <CardContent>
        <Img />
        {skills.map((skill) => (
          <CardSkill skill={skill} key={skill.id} />
        ))}
      </CardContent>
    </Container>
  );
};
