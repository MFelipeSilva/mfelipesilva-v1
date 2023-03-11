import { Container, Content, ContainerImg, Link, Img, Title, Text, TextBox } from './styles';
import screenregister from '../../assets/gifscreenregister.gif';
import searchgithub from '../../assets/gifsearchgithub.gif';
import screenstopwatch from '../../assets/imagescreenstopwatch.png';
import { TitleDefaulted } from '../../components/Title';

export const Project = () => {
  return (
    <Container id="projetos">
      <TitleDefaulted text='Projetos'/> 

      <Content>
        <ContainerImg>
          <Link href='https://github.com/mutadofs/page-registration-login' target="_blank">
            <Img src={screenregister} alt="projectlogin"></Img>
          </Link>
          
        </ContainerImg>
      
        <TextBox>
          <Title>Paginas de cadastro e login</Title>

          <Text>
            Um projeto simples aonde utilizei um sistema de cadastro com
            banco de dados mySQL, um Frontend básico e com validações nos 
            campos de cadastro e login.
          </Text>
        </TextBox>
      </Content>

      <Content>
        <ContainerImg>
          <Link href='https://search-github-mu.vercel.app/' target="_blank">
            <Img src={searchgithub} alt="projectlogin"></Img>
          </Link>
        </ContainerImg>

        <TextBox>
          <Title>Em breve</Title>

          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ea, voluptatum! Facere quo numquam unde aliquid corrupti dolore fugit officia consequuntur amet, blanditiis totam vitae. 
            Vel libero cupiditate sequi voluptatum quis.
          </Text>
        </TextBox>

      </Content>

      <Content>
        <ContainerImg>
          <Link href='//mutadofs.github.io/web-stopwatch/'>
            <Img src={screenstopwatch} alt="projectlogin"></Img>
          </Link>
        </ContainerImg>

        <TextBox>
          <Title>Em breve</Title>

          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ea, voluptatum! Facere quo numquam unde aliquid corrupti dolore fugit officia consequuntur amet, blanditiis totam vitae. 
            Vel libero cupiditate sequi voluptatum quis.
          </Text>
        </TextBox>

      </Content>
    </Container>
  )
}