import styled from "@emotion/styled";

export const Footer = () => {
  return (
    <Container>
      <Inner>
        <div>
          <span>
            <button type="button">
              <b>개인정보 처리방침</b>
            </button>
            <button type="button">이용약관</button>
          </span>
          <address>
            <span>
              서울특별시 서초구 헌릉로 12
              <em>기아㈜</em>
            </span>
            <br />
            <span>
              대표:
              <i>송호성, 최준영</i>
            </span>
            <br />
            <span>
              사업자등록번호:
              <i>119-81-02316</i>
            </span>
            <br />
            <span>
              통신판매번호:
              <i>2006-07935</i>
            </span>
            <br />
            <span>
              고객센터:
              <i>1833-4964</i>
            </span>
            <br />
            <span>
              제휴문의:
              <a href="mailto:kiabiz@kia.com">kiabiz@kia.com</a>
            </span>
          </address>
        </div>
        <p>© 2023 KIA CORP. All Rights Reserved.</p>
      </Inner>
    </Container>
  );
};

const Container = styled.footer`
  background-color: ${(props) => props.theme.colors.border.primary};
  color: #82898f;
  padding: 0 48px;
  position: relative;
`;

const Inner = styled.div`
  @media (min-width: 1024px) {
    align-items: center;
    flex-direction: row-reverse;
  }

  display: flex;
  font-size: 14px;
  height: 176px;
  justify-content: space-between;
  line-height: 24px;
  margin: 0 auto;
  max-width: 1660px;

  & > p {
    margin: 0;
    ::before {
      @media (min-width: 1024px) {
        height: 56px;
        margin-bottom: 2px;
      }
      background-image: url("/kia.svg");
      background-repeat: no-repeat;
      background-size: auto 100%;
      content: "";
      display: block;
    }
  }

  & > div {
    display: flex;
    flex-direction: column;
    & > span {
      display: flex;
      @media (min-width: 1024px) {
        justify-content: flex-end;
        margin-bottom: 10px;
      }

      & > button {
        @media (min-width: 1024px) {
          line-height: 24px;
          margin-left: 24px;
        }
        color: ${(props) => props.theme.colors.text.inverse};
        font-size: 16px;
        cursor: pointer;
        background: none;
        border: none;
        padding: 0;
        font-weight: 600;
      }
    }
    & > address {
      display: flex;
      @media (min-width: 1024px) {
        text-align: right;
      }
      font-style: normal;
      & > span {
        @media (min-width: 1024px) {
          margin-left: 12px;
        }
        display: inline-flex;
        & > em {
          margin-left: 12px;
          font-style: normal;
        }
        & > i {
          margin-left: 4px;
          font-style: normal;
        }
        & > a {
          color: inherit;
          text-decoration: underline;
          margin-left: 4px;
          cursor: pointer;
        }
      }
    }
  }
`;
