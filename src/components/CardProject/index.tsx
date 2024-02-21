import { FaGithub } from "react-icons/fa";

import { CardButton } from "../Button/styles";

import {
  ContainerImg,
  Content,
  Img,
  TextBox,
  Title,
  Text,
  Buttons,
  Link,
  ContentIcon,
} from "./styles";

interface CardProjectProps {
  project: any;
}

export const CardProject = ({ project }: CardProjectProps) => {
  return (
    <Content>
      <ContainerImg>
        <Img src={project.imageURL} />
      </ContainerImg>
      <TextBox>
        <Title>{project.title}</Title>
        <Text>{project.text}</Text>
        <Buttons>
          <Link target="_blank" href={project.link}>
            <CardButton>ver projeto</CardButton>
          </Link>
          <Link target="_blank" href={project.github}>
            <ContentIcon>
              <FaGithub />
            </ContentIcon>
          </Link>
        </Buttons>
      </TextBox>
    </Content>
  );
};
