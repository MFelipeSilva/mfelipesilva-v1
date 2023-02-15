import React from 'react';
import { Container, TitleHeader, Title } from './styles';

type PropsText = {
  text: string
}

export const TitleHome = () => {
  return (
    <Container>
      <TitleHeader FontSize='clamp(0.9em, 0.3em + 1.5vw, 3em)' FontWeight='300'>Olá, me chamo</TitleHeader>
      <TitleHeader FontSize='clamp(1em, 1em + 3.5vw, 4.1em)'FontWeight='900'>FELIPE DA SILVA</TitleHeader>
      <TitleHeader FontSize='clamp(0.7em, 0.5em + 1.6vw, 2em)' FontWeight='400'>DESENVOLVEDOR WEB FRONT-END</TitleHeader>
    </Container>
  )  
};

export const TitleDefaulted = ({text}: PropsText) => {
  return (
    <Title>
      {text}
    </Title>
  )
}