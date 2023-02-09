import { TitleDefault } from "../../components/Title";
import { Container, Content , Text, Icons, Links, Textbox } from './styles';

import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

export const Contact = () => {
  return (
    <Container id="contato">
      <TitleDefault text='Contato'/>

      <Content>
        <Textbox>
          <Text FontSize="12pt" FontWeight="">
            Para contato, envie nesse e-mail
          </Text>
          <Text FontSize="22pt" FontWeight="600">
            silvaafelipe016@gmail.com
          </Text>
        </Textbox>
        

        <Text FontSize="12pt" FontWeight="">
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