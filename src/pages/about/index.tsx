import { TitleDefaulted } from "../../components/Title";

import myface from "../../assets/myface.webp";

import {
  CardCompartiment,
  Container,
  Content,
  TextCard,
  Img,
  Text,
} from "./styles";

export const About = () => {
  return (
    <Container id="sobre">
      <TitleDefaulted text="Sobre mim" />
      <Content>
        <CardCompartiment>
          <TextCard>
            <Img src={myface} alt="my face"></Img>
            <Text>
              Meu nome é Mauricio Felipe da Silva, tenho 18 anos e atualmente
              estou focado em me tornar um desenvolvedor full-stack. Sempre tive
              uma facilidade para criar interfaces criativas e atraentes. Além
              disso, tive a oportunidade de compartilhar meu conhecimento por
              meio de um canal, onde ensinava sobre tecnologia, criando minhas
              próprias thumbnails, logos e outros elementos visuais.
              <br />
              <br />
              Foi através desse canal que mergulhei no mundo do desenvolvimento
              web. Desde o início, me apaixonei pelo frontend e sua capacidade
              de criar experiências interativas e envolventes para os usuários.
              Ao mesmo tempo, fui atraído pela complexidade e desafios do
              backend, percebendo que queria mais do que simplesmente criar
              interfaces.
              <br />
              <br />
              Agora, estou dedicado a aprimorar minhas habilidades em ambas as
              áreas, buscando um equilíbrio entre a criatividade do frontend e a
              funcionalidade robusta do backend. Estou animado para explorar
              novos projetos e aprender continuamente enquanto caminho para me
              tornar um desenvolvedor full-stack de sucesso
            </Text>
          </TextCard>
        </CardCompartiment>
      </Content>
    </Container>
  );
};
