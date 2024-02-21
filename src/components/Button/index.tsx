import { Container, CustomButton } from "./styles";

type ButtonProps = {
  label: string;
};

export const Button = ({ label }: ButtonProps) => {
  return (
    <Container>
      <CustomButton>{label}</CustomButton>
    </Container>
  );
};
