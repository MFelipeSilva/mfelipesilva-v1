import React from "react";

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

interface Props {
  project: any;
}

export const ProjectItem = ({ project }: Props) => {
  return (
    <Content>
      <ContainerImg>
        <Img src={project.imageURL}></Img>
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
              <FaGithub color="#000000" />
            </ContentIcon>
          </Link>
        </Buttons>
      </TextBox>
    </Content>
  );
};
