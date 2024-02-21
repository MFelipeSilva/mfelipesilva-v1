import imgcontainer from "../../assets/imgcontainer.svg";

import { Container, ContentImage, Icon, Image, Title, Text } from "./styles";

interface CardSkillProps {
  skill: any;
}

export const CardSkill = ({ skill }: CardSkillProps) => {
  return (
    <Container>
      <ContentImage>
        <Image src={imgcontainer}></Image>
        <Icon src={skill.imageURL} />
      </ContentImage>
      <Title>{skill.title}</Title>
      <Text>{skill.text}</Text>
    </Container>
  );
};
