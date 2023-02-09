import { Container, CardCustom, Content, ContainerImg, Img, Title, Text, TextBox } from './styles';
import projectlogin from '../../assets/projectlogin.gif'
import { TitleDefault } from '../../components/Title';

export const Project = () => {
  return (
    <Container id="projetos">
      <TitleDefault text='Projetos'/> 

      <Content>
        <ContainerImg>
          <Img src={projectlogin} alt="projectlogin"></Img>
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
        <CardCustom>

        </CardCustom>

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
        <CardCustom>

        </CardCustom>

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