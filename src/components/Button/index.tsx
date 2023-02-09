import {  Container, CustomButton } from './styles';

type PropsText = {
  label: string
};

export const Button = ( {label}: PropsText) => {
  return (
    <Container>
      <CustomButton>
        {label}
      </CustomButton>
    </Container>
  )
};