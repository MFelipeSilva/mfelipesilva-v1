import LogoAnimated from "../../assets/logo-animate.gif";

import { Container, ImgAnimate } from "./styles";

export const LoadingPageAnimate = () => {
  return (
    <Container>
      <ImgAnimate src={LogoAnimated} />
    </Container>
  );
};
