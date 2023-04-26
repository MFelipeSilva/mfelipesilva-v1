import { TitleDefaulted } from "../../components/Title";
import * as Styles from './styles';

import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

export const Contact = () => {
  return (
    <Styles.Container id="contato">
      <TitleDefaulted text='Contato'/>

      <Styles.Content>
        <Styles.Textbox>
          <Styles.Text FontSize="clamp(0.7em, 0.3em + 1vw, 2.5em)" FontWeight="">
            Para contato, envie nesse e-mail
          </Styles.Text>
          <Styles.Text FontSize="clamp(0.8em, 0.8em + 1.5vw, 3em)" FontWeight="600">
            silvaafelipe016@gmail.com
          </Styles.Text>
        </Styles.Textbox>
        

        <Styles.Text FontSize="clamp(0.7em, 0.3em + 1vw, 2.5em)" FontWeight="">
          ou
        </Styles.Text>

        <Styles.Icons>
          <Styles.Links target="_blank" href="https://github.com/mfelipesilva/">
            <FaGithub fontSize={25}/>
          </Styles.Links>
          <Styles.Links target="_blank" href="https://www.instagram.com/_silvafelipeey/">
            <FaInstagram fontSize={25}/>
          </Styles.Links>
          <Styles.Links target="_blank" href="https://www.linkedin.com/in/mfelipesilva/">
            <FaLinkedin fontSize={25}/>
          </Styles.Links>
        </Styles.Icons>
      </Styles.Content>
      
      
    </Styles.Container>
  )
}