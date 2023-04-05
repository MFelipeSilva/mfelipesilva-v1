
import myface from '../../assets/myface.webp'
import { TitleDefaulted } from "../../components/Title";
import * as Styles from "./styles";

export const About = () =>  {
  return (
    <Styles.Container id="sobre">
      <TitleDefaulted text='Sobre mim'/>  
        
      <Styles.Content>
        <Styles.CardCompartiment />

        <Styles.TextCard>
          <Styles.Img src={myface} alt="my picture"></Styles.Img>

          <Styles.Text>
            Olá, sou conhecido como Felipe, tenho 17 anos de idade, e estou estudando para ser um desenvolvedor Fullstack,
            já que gosto do Frontend e do Backend. Ainda não tenho nenhuma experiência de trabalho, mas já
            fiz diversos projetos utilizando HTML/CSS e ReactJS/Native, também dei início a área do back desenvolvendo algumas APIs.
            <br></br>
            <br></br>
            Atualmente faço projetos com código aberto no Github, desde projetos simples até os mais complexos,
            programar com certeza foi uma das melhores escolhas que fiz, e com certeza irei a cada dia buscar melhoria.
          </Styles.Text>
        </Styles.TextCard>
      </Styles.Content>
    </Styles.Container>
  )
};