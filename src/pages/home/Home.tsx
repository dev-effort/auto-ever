import styled from "@emotion/styled";
import { Header } from "./Header";

export const Home = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.bg.primary};
  box-sizing: border-box;
`;
