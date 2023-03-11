import { Container, Content, ContainerImg, Link, Img, Title, Text, TextBox } from './styles';
import screenregister from '../../assets/gifscreenregister.gif';
import searchgithub from '../../assets/gifsearchgithub.gif';
import clonetesla from '../../assets/gifclonetesla.gif';
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
            <Img src={searchgithub} alt="projectgithub"></Img>
          </Link>
        </ContainerImg>

        <TextBox>
          <Title>Search github</Title>

          <Text>
            Site onde você poderá buscar usuários do github de maneira fácil e rápido, também terá acesso aos 
            últimos repositórios, e aos seus dados.
          </Text>
        </TextBox>

      </Content>

      <Content>
        <ContainerImg>
        <Link href='https://clonedtesla.vercel.app/' target="_blank">
            <Img src={clonetesla} alt="projectclonetesla"></Img>
        </Link>
        </ContainerImg>

        <TextBox>
          <Title>Clone tesla</Title>

          <Text>
            Projeto no qual repliquei a página inicial da tesla, o desafio era deixar o mais igual possível,
            as animações complexas, e a interface do site original.
          </Text>
        </TextBox>

      </Content>
    </Container>
  )
}