import React from "react";
import * as Styles from "./styles";

import { Button } from "../../components/Button";
import { TitleHome } from "../../components/Title";

import bannerformat from "../../assets/bannerformat.svg";


export const Home = () => {
  return (
    <Styles.Container>
      <Styles.ContentHeader>
        <TitleHome />

          <Styles.Link target="_blank" href="https://drive.google.com/file/d/1RM1XBt8i4Rxg7KBcsaPZkFa3xkrMJhrU/view">
            <Button label="Currículo </>"></Button>
          </Styles.Link>          
      </Styles.ContentHeader>
  
        <Styles.Img src={bannerformat} alt="my portfolio banner" />
    </Styles.Container>
  );
};
