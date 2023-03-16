import React from 'react'
import * as Styles from "./styles";

interface Props {
  project: any
}

export const ProjectItem = ({ project }: Props) => {
  return (
    <Styles.Content>
      <Styles.ContainerImg>
        <Styles.Link>
          <Styles.Img src={project.imageURL}></Styles.Img>
        </Styles.Link>
      </Styles.ContainerImg>

      <Styles.TextBox>
        <Styles.Title>{project.title}</Styles.Title>
        <Styles.Text>{project.text}</Styles.Text>
      </Styles.TextBox>
    </Styles.Content>
  )
}

