import { TitleDefault } from "../../components/Title";
import image from '../../assets/image.webp'
import { Container, CardCompartiment, Text, TextCard, Img, Content } from "./styles";

export const About = () =>  {
  return (
    <Container id="sobre">
      <TitleDefault text='Sobre mim'/>  
      

      <Content>
        <CardCompartiment>
        </CardCompartiment>

        <TextCard>
          <Img src={image} alt="image"></Img>

          <Text>
            Olá, sou conhecido como mutadofs, tenho 16 anos de idade, e estou estudando para ser um desenvolvedor Fullstack,
            já que gosto do Frontend e do Backend. Ainda não tenho nenhuma experiência de trabalho, mas já
            fiz diversos projetos utilizando HTML/CSS e ReactJS/Native, também dei início a área do back desenvolvendo algumas APIs.
            <br></br>
            <br></br>
            Atualmente faço projetos com código aberto no Github, desde projetos simples até os mais complexos,
            programar com certeza foi uma das melhores escolhas que fiz, e com certeza irei a cada dia buscar melhoria.
          </Text>
        </TextCard>
      </Content>
      
    </Container>
  )
};