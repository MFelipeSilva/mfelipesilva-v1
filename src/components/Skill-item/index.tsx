import { CardCustom, ContainerImg, Icon, Img, Title, Text } from "./styles";

import imgcontainer from "../../assets/imgcontainer.svg";

interface Props {
  skill: any;
}

export const SkillItem = ({ skill }: Props) => {
  return (
    <CardCustom>
      <ContainerImg>
        <Img src={imgcontainer}></Img>
        <Icon src={skill.imageURL} />
      </ContainerImg>
      <Title>{skill.title}</Title>
      <Text>{skill.text}</Text>
    </CardCustom>
  );
};
