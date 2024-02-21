import { useState } from "react";

import projects from "../../data/projects";

import { TitleDefaulted } from "../../components/Title";
import { CardProject } from "../../components/CardProject";

import { Container, EffectShadow, Button, CardContent } from "./styles";

export const Project = () => {
  const [showCard, setShowCard] = useState(false);

  return (
    <Container id="projetos">
      <TitleDefaulted text="Projetos" />
      <CardContent show={showCard}>
        {projects.map((project) => (
          <CardProject key={project.id} project={project} />
        ))}
        <EffectShadow>
          <Button onClick={() => setShowCard(true)}>Ver mais</Button>
        </EffectShadow>
      </CardContent>
    </Container>
  );
};
