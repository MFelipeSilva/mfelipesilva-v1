import { Container, ContentHeader, Img, Link } from "./styles";

import { Button } from "../../components/Button";

import { TitleHome } from "../../components/Title";

import bannerformat from "../../assets/bannerformat.svg";

export const Home = () => {
  return (
    <Container>
      <ContentHeader>
        <TitleHome />
        <Link
          target="_blank"
          href="https://drive.google.com/file/d/1RM1XBt8i4Rxg7KBcsaPZkFa3xkrMJhrU/view"
        >
          <Button label="Currículo </>"></Button>
        </Link>
      </ContentHeader>
      <Img src={bannerformat} alt="my portfolio banner" />
    </Container>
  );
};
