import React from 'react';
import { Container, TitleHeader, Title } from './styles';

type PropsText = {
  text: string
}

export const TitleHome = () => {
  return (
    <Container>
      <TitleHeader FontSize='2vw' FontWeight='300'>Olá, me chamo</TitleHeader>
      <TitleHeader FontSize='4.1vw'FontWeight='900'>FELIPE DA SILVA</TitleHeader>
      <TitleHeader FontSize='2vw' FontWeight='400'>DESENVOLVEDOR WEB FRONT-END</TitleHeader>
    </Container>
  )  
};

export const TitleDefault = ({text}: PropsText) => {
  return (
    <Title>
      {text}
    </Title>
  )
}