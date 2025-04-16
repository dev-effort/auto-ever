import styled from "@emotion/styled";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";

export const Home = () => {
  return (
    <Container>
      <Header />
      <BodyWrapper>
        <Outlet />
      </BodyWrapper>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.bg.primary};
  box-sizing: border-box;
`;

const BodyWrapper = styled.div`
  padding: 0 48px 96px;
  min-height: calc(100vh - 80px - 176px);
`;
