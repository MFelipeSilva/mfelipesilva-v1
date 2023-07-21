import { CardContent, Container, Img } from "./styles";

import skills from "../../data/skills";

import { SkillItem } from "../../components/Skill-item";

import { TitleDefaulted } from "../../components/Title";

export const Skills = () => {
  return (
    <Container id="habilidades">
      <TitleDefaulted text="Habilidades" />
      <CardContent>
        <Img></Img>
        {skills.map((skill) => (
          <SkillItem skill={skill} key={skill.id} />
        ))}
      </CardContent>
    </Container>
  );
};
