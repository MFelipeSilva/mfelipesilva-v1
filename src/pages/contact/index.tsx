import { TitleDefaulted } from "../../components/Title";
import { Container, Content , Text, Icons, Links, Textbox } from './styles';

import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

export const Contact = () => {
  return (
    <Container id="contato">
      <TitleDefaulted text='Contato'/>

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
          <Links href="https://github.com/mutadofs/">
            <FaGithub fontSize={25}/>
          </Links>
          <Links href="https://www.instagram.com/_silvafelipeey/">
            <FaInstagram fontSize={25}/>
          </Links>
          <Links href="https://www.linkedin.com/in/mutadofs/">
            <FaLinkedin fontSize={25}/>
          </Links>
        </Icons>
      </Content>
      
      
    </Container>
  )
}