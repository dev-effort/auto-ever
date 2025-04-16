import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <Container>
      <HeaderInner>
        <Logo />
        <Navigation>
          <Ul>
            <Li>
              <Menu onClick={() => handleClick("/Guide")}>서비스 소개</Menu>
            </Li>
            <Li>
              <Menu onClick={() => handleClick("/FAQ")}>자주 묻는 질문</Menu>
            </Li>
            <Li>
              <Menu onClick={() => handleClick("/News")}>새소식</Menu>
            </Li>
            <Li>
              <Menu onClick={() => handleClick("/Counsel")}>상담문의</Menu>
            </Li>
          </Ul>
        </Navigation>
      </HeaderInner>
    </Container>
  );
};

const Container = styled.header`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: 0 48px;
  position: sticky;
  top: 0;
  z-index: 100;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  height: 80px;
  margin: 0 auto;
  box-sizing: border-box;
  max-width: 1660px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    margin: 0;
    padding: 20px 0;
  }
`;

const Logo = styled.a`
  background-image: url("/logo.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 140px;

  @media (max-width: 768px) {
    height: 60px;
    margin-bottom: 10px;
  }
`;

const Navigation = styled.nav`
  flex: 1 1;
  margin-right: -20px;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
  }
`;

const Ul = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Li = styled.li`
  margin: 0 16px;
  list-style: none;

  @media (max-width: 768px) {
    margin: 0;
    width: 100%;
    text-align: center;
  }
`;

const Menu = styled.a`
  color: ${(props) => props.theme.colors.text.primary};
  display: block;
  font-size: 18px;
  font-weight: 600;
  line-height: 80px;
  padding: 0 4px;
  position: relative;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    line-height: 50px;
    padding: 0;
  }
`;
