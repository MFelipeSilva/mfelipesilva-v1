import {
  Container,
  CardContent,
  CardCustom,
  ContainerImg,
  Img,
  Icon,
  Title,
  Text,
} from "./styles";

import { Card } from "../../components/Cardbox/styles";
import { TitleDefault } from "../../components/Title";
import logots from "../../assets/logots.svg";
import logoreact from "../../assets/logoreact.svg";
import logohtml from "../../assets/logohtml.svg";
import imgcontainer from "../../assets/imgcontainer.svg";

export const Skills = () => {
  return (
    <Container id="habilidades">
      <TitleDefault text="Habilidades" />

      <CardContent>
        <CardCustom>
          <ContainerImg>
            <Img src={imgcontainer} alt="imgcontainer" />
            <Icon src={logots} Width="40px" Height="40" alt="logots" />
          </ContainerImg>

          <Title>Typescript</Title>

          <Text>
            Utilizar typescript nos projetos é uma das maiores vantagens que eu
            já tive, ajuda evitar problemas que podem ocorrer no código.
          </Text>
        </CardCustom>

        <CardCustom>
          <ContainerImg>
            <Img src={imgcontainer} alt="imgcontainer" />
            <Icon src={logoreact} Width="50px" Height="50px" alt="logoreact" />
          </ContainerImg>

          <Title>ReactJS</Title>

          <Text>
            Um framework excelente para quem trabalha na áera do Frontend, você
            é capaz de criar interfaces ótimas e eficiente.
          </Text>
        </CardCustom>

        <CardCustom>
          <ContainerImg>
            <Img src={imgcontainer} alt="imgcontainer" />
            <Icon src={logohtml} Width="45px" Height="45px" alt="logohtml" />
          </ContainerImg>

          <Title>Html & CSS</Title>

          <Text>
            São as principais linguagens para se criar sites estilizados, são
            muito fáceis de serem aprendidas e utilizá-las trás um bom
            resultado.
          </Text>
        </CardCustom>
      </CardContent>
    </Container>
  );
};
