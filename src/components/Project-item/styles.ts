import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (max-width: 1072px) {

  }
`;

export const ContainerImg = styled.div`
  margin-bottom: 30px;
  z-index: 1;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #000;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  max-width: 668px;
  min-height: 390px;
  object-fit: cover;
  border-radius: 10px;
  

  @media (max-width: 1280px) {
    width: 95%;
    max-width: 580px;
    min-height: 300px;
  }
`;

export const TextBox = styled.div`
  display: flex;
  margin-left: -20px;
  margin-top: 80px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  
  border: 2px solid ${({ theme }) => theme.COLORS.TEXTBOX};
  border-radius: 10px;
  padding: 50px;
  
  &:hover {
    
    h1 {
      color: ${({ theme }) => theme.COLORS.SECONDARY}
    }
    ;
  }


  @media (max-width: 1200px) {
    padding: 30px;
  }

  @media (max-width: 1135px) {
    padding: 25px;
    margin: 0;
  }

  @media (max-width: 550px) {
    padding: 15px;
    margin: 0 5px 0 5px;
  } ;
`;

export const Title = styled.h1`
  font-size: 2.1rem;
  font-weight: 500;
  font-family: Montserrat;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.COLORS.PRIMARY};

  @media (max-width: 1200px) {
    font-size: 1.8rem;
  };

  @media (max-width: 550px) {
    font-size: 1.5rem;
  };
`;
export const Text = styled.p`
  max-width: 500px;
  font-size: 1.1rem;
  line-height: 160%;
  text-align: start;
  opacity: 0.8;
  font-weight: 100;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.KARLA};

  @media (max-width: 1200px) {
    font-size: 1rem;
  };
  @media (max-width: 550px) {
    font-size: 0.9rem;
  };
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  margin: 40px 0 0 ;
  opacity: 0.9;
`;

export const ContentIcon = styled.button`
  display: flex;
  width: 80px;
  height: max(38px, 2.5vw);
  border: none;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
  transition: transform .3s;

  &:hover {
    transform: translateY(-4px)
  }


  cursor: pointer;
  margin-left: 15px;
  border-radius: 5px;

  svg {
    font-size: 18pt;
  }
`
