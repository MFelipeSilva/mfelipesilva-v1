import { Button } from "../../components/Button";
import { TitleHome } from "../../components/Title";

import bannerformat from "../../assets/bannerformat.svg";

import { Container, ContentHeader, Img, Link } from "./styles";

export const Home = () => {
  return (
    <Container>
      <ContentHeader>
        <TitleHome />
        <Link
          target="_blank"
          href="https://drive.google.com/file/d/14l8NZRRPHmUBVJ2YEfhmCh_JdsUH1Uer/view?usp=sharing"
        >
          <Button label="Currículo </>"></Button>
        </Link>
      </ContentHeader>
      <Img src={bannerformat} alt="my portfolio banner" />
    </Container>
  );
};
