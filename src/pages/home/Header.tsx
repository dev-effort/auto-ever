import styled from "@emotion/styled";

export const Header = () => {
  return (
    <Container>
      <HeaderInner>
        <Logo />
        <Navigation>
          <Ul>
            <Li>
              <Menu href="/Guide">서비스 소개</Menu>
            </Li>
            <Li>
              <Menu href="/FAQ">자주 묻는 질문</Menu>
            </Li>
            <Li>
              <Menu href="/News">새소식</Menu>
            </Li>
            <Li>
              <Menu href="/Counsel">상담문의</Menu>
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
`;
const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  height: 80px;
  margin: 0 82px;
  box-sizing: border-box;
  max-width: 1660px;
`;

const Logo = styled.a`
  background-image: url("/public/logo.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 140px;
`;

const Navigation = styled.nav`
  flex: 1 1;
  margin-right: -20px;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
`;

const Li = styled.li`
  margin: 0 16px;
  list-style: none;
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
`;
