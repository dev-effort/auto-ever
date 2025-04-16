import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

export const ServiceInquiry = () => {
  const navigate = useNavigate();
  return (
    <>
      <SubHeadline>서비스 문의</SubHeadline>
      <InquiryInfo>
        <InquiryButton
          download="기아 비즈 서비스 제안서.pdf"
          href="/public/기아 비즈 서비스 제안서.pdf"
        >
          <i className="document" />
          <span>서비스 제안서 다운로드</span>
        </InquiryButton>
        <InquiryButton onClick={() => navigate("/Counsel")}>
          <i className="write" />
          <span>상담문의 등록하기</span>
        </InquiryButton>
        <InquiryButton href="https://pf.kakao.com/_xfLxjdb" target="_blank">
          <i className="chat"></i>
          <span>
            카톡으로 문의하기
            <em>ID : 기아 비즈</em>
          </span>
        </InquiryButton>
      </InquiryInfo>
    </>
  );
};

const InquiryInfo = styled.div`
  display: flex;
  margin: 0 -16px;
`;

const InquiryButton = styled.a`
  flex: 1 1;
  margin: 0 16px;
  background-color: ${(props) => props.theme.colors.bg.primary};
  border: 1px solid ${(props) => props.theme.colors.border.primary};

  font-size: 18px;
  height: 80px;
  min-height: 80px;
  padding: 0 1.4em;

  align-items: center;
  display: inline-flex;
  font-weight: 600;
  justify-content: center;

  color: ${(props) => props.theme.colors.text.primary};
  text-decoration: none;

  cursor: pointer;

  & > i {
    background-repeat: no-repeat;
    background-size: auto 100%;
    flex-shrink: 0;
    height: 48px;
    margin-right: 8px;
    width: 48px;
  }
  & .document {
    background-image: url("/document.svg");
  }
  & .write {
    background-image: url("/write.svg");
  }
  & .chat {
    background-image: url("/kakao.svg");
  }
  & > span {
    line-height: 1.4;
    & > em {
      color: ${(props) => props.theme.colors.text.secondary};
      display: block;
      font-size: 14px;
      font-weight: 400;
      font-style: normal;
    }
  }
`;

const SubHeadline = styled.h2`
  line-height: 1.4;
  font-size: 24px;
  font-weight: 600;
  margin: 64px 0 24px;
`;
