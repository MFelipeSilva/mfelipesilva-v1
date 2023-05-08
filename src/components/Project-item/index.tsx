import React from "react";
import { CardButton } from "../Button/styles";
import { FaGithub } from "react-icons/fa";

import * as Styles from "./styles";

interface Props {
  project: any;
}

export const ProjectItem = ({ project }: Props) => {
  return (
    <Styles.Content>
      <Styles.ContainerImg>
        <Styles.Img src={project.imageURL}></Styles.Img>
      </Styles.ContainerImg>

      <Styles.TextBox>
        <Styles.Title>{project.title}</Styles.Title>
        <Styles.Text>{project.text}</Styles.Text>

        <Styles.Buttons>
          <Styles.Link target="_blank" href={project.link}>
            <CardButton>ver projeto</CardButton>
          </Styles.Link>  

          <Styles.Link target="_blank" href={project.github}>
            <Styles.ContentIcon>
              <FaGithub color="#000000"/>  
            </Styles.ContentIcon>
          </Styles.Link>     
        </Styles.Buttons>
      </Styles.TextBox>
    </Styles.Content>
  );
};
