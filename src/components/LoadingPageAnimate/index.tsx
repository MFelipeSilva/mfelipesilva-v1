import { Container, ImgAnimate } from "./styles";

import LogoAnimated from "../../assets/logo-animate.gif";

export const LoadingPageAnimate = () => {
  return (
    <Container>
      <ImgAnimate src={LogoAnimated} />
    </Container>
  );
};
