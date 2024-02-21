import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import { TitleDefaulted } from "../../components/Title";

import {
  Container,
  Content,
  Textbox,
  Icons,
  Links,
  SubTitle,
  Title,
  TextOr,
} from "./styles";

export const Contact = () => {
  return (
    <Container id="contato">
      <TitleDefaulted text="Contato" />
      <Content>
        <Textbox>
          <SubTitle>Para contato, envie nesse e-mail</SubTitle>
          <Title>silvaafelipe016@gmail.com</Title>
        </Textbox>
        <TextOr>ou</TextOr>
        <Icons>
          <Links target="_blank" href="https://github.com/mfelipesilva/">
            <FaGithub fontSize={25} />
          </Links>
          <Links
            target="_blank"
            href="https://www.instagram.com/_silvafelipeey/"
          >
            <FaInstagram fontSize={25} />
          </Links>
          <Links
            target="_blank"
            href="https://www.linkedin.com/in/mfelipesilva/"
          >
            <FaLinkedin fontSize={25} />
          </Links>
        </Icons>
      </Content>
    </Container>
  );
};
