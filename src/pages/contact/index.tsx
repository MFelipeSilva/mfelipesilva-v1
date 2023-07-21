import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import { Container, Content, Textbox, Text, Icons, Links } from "./styles";

import { TitleDefaulted } from "../../components/Title";

export const Contact = () => {
  return (
    <Container id="contato">
      <TitleDefaulted text="Contato" />
      <Content>
        <Textbox>
          <Text FontSize="clamp(0.7em, 0.3em + 1vw, 2.5em)" FontWeight="">
            Para contato, envie nesse e-mail
          </Text>
          <Text FontSize="clamp(0.8em, 0.8em + 1.5vw, 3em)" FontWeight="600">
            silvaafelipe016@gmail.com
          </Text>
        </Textbox>
        <Text FontSize="clamp(0.7em, 0.3em + 1vw, 2.5em)" FontWeight="">
          ou
        </Text>
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
