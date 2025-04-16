import styled from "@emotion/styled";

export const AppInfo = () => {
  return (
    <Container>
      <h2>
        <em>기아 비즈 App</em> 지금 만나보세요!
      </h2>
      <a
        className="google"
        href="https://play.google.com/store/apps/details?id=kor.mop.user.app"
        target="_blank"
      >
        Google Play
      </a>
      <a
        className="appstore"
        href="https://apps.apple.com/kr/app/%EC%9C%84%EB%B8%94-%EB%B9%84%EC%A6%88/id1598065794"
        target="_blank"
      >
        App Store
      </a>
    </Container>
  );
};

const Container = styled.div`
  @media (min-width: 1440px) {
    margin-top: 64px;
    padding: 40px;
  }
  background-color: ${(props) => props.theme.colors.bg.secondary};
  border-radius: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 48px;
  overflow: hidden;
  padding: 32px;

  & > h2 {
    @media (min-width: 1440px) {
      font-size: 32px;
      margin-bottom: 32px;
    }
    & > em {
      color: ${(props) => props.theme.colors.text.primary};
      font-style: normal;
      font-weight: 600;
    }
    font-weight: 600;
    width: 100%;
    line-height: 1.4;
    text-align: center;
    margin: 0;
  }

  & > a {
    @media (min-width: 1440px) {
      font-size: 18px;
      height: 64px;
      margin: 0 16px;
      width: 392px;
      ::before {
        height: 32px;
        width: 32px;
      }
    }
    align-items: center;
    background: #fff;
    border-radius: 8px;
    display: flex;
    font-size: 16px;
    font-weight: 600;
    height: 60px;
    justify-content: center;
    margin: 0 8px;
    width: 296px;
    color: ${(props) => props.theme.colors.text.primary};
    text-decoration: none;
    cursor: pointer;

    ::before {
      background-repeat: no-repeat;
      background-size: auto 100%;
      content: "";
      height: 28px;
      margin-right: 4px;
      width: 28px;
    }
  }

  & .google {
    ::before {
      background-image: url("/google.svg");
    }
  }
  & .appstore {
    ::before {
      background-image: url("/apple.svg");
    }
  }
`;
