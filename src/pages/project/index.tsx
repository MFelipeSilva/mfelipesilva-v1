import * as Styles from './styles';
import { TitleDefaulted } from '../../components/Title';

import projects from '../../data/projects';
import { ProjectItem } from '../../components/Project-item';

export const Project = () => {
  return (
    <Styles.Container id="projetos">
      <TitleDefaulted text='Projetos'/> 

    {projects.map((project) => (
      <ProjectItem project={project} key={project.id}/>
    ))};

    </Styles.Container>
  )
}