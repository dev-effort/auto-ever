import styled from "@emotion/styled";

export const Process = () => {
  return (
    <>
      <SubHeadline>이용 프로세스 안내</SubHeadline>
      <ProcessInfo>
        <li>
          <i className="process-1" />
          <span>
            <strong>문의 등록</strong>
            <em>
              상담 문의를 등록해 주시면, 담당자가 맞춤형 상담을 제공합니다.
            </em>
          </span>
        </li>
        <li>
          <i className="process-2" />
          <span>
            <strong>관리자 설정</strong>
            <em style={{ maxWidth: "225px" }}>
              관리자 Web 접속 후 결제방식 및 회사정보를 설정합니다.
            </em>
          </span>
        </li>
        <li>
          <i className="process-3" />
          <span>
            <strong>임직원 가입</strong>
            <em style={{ maxWidth: "200px" }}>
              이용자 App에서 회원가입 후 소속 회사 인증을 진행합니다.
            </em>
          </span>
        </li>
        <li>
          <i className="process-4" />
          <span>
            <strong>서비스 이용</strong>
            <em style={{ maxWidth: "230px" }}>
              이용자 App에서 차량 예약을 하고 K존에서 바로 이용하세요!
            </em>
          </span>
        </li>
      </ProcessInfo>
    </>
  );
};

const SubHeadline = styled.h2`
  line-height: 1.4;
  font-size: 24px;
  font-weight: 600;
  margin: 64px 0 24px;
`;

const ProcessInfo = styled.ol`
  counter-reset: li;
  display: flex;
  line-height: 1.4;
  margin: 0 -16px;
  list-style: none;
  padding: 0;
  & > li {
    flex: 1 1;
    margin: 0 16px;
    padding: 0 0 0 24px;
    &:not(:first-of-type) {
      & > span {
        display: block;
        position: relative;
        ::before {
          background: url("/stepArrow.svg") no-repeat;
          background-size: auto 100%;
          content: "";
          height: 24px;
          left: -36px;
          position: absolute;
          top: 0;
          width: 24px;
        }
        & > strong {
          display: block;
          font-size: 18px;
          ::before {
            content: counter(li) ". ";
            counter-increment: li;
          }
        }
        & > em {
          color: #37434c;
          display: block;
          font-size: 16px;
          margin-top: 8px;
        }
      }
    }
    & > span {
      display: block;
      position: relative;
      & > strong {
        display: block;
        font-size: 18px;
        font-weight: 600;
        ::before {
          content: counter(li) ". ";
          counter-increment: li;
        }
      }
      & > em {
        color: #37434c;
        display: block;
        font-size: 16px;
        margin-top: 8px;
      }
    }
    & > i {
      display: block;
      height: 56px;
      margin-bottom: 8px;
      width: 56px;
      background-repeat: no-repeat;
      background-size: auto 100%;
      flex-shrink: 0;
      font-style: normal;
    }
    & .process-1 {
      background-image: url("/process1.svg");
    }
    & .process-2 {
      background-image: url("/process2.svg");
    }
    & .process-3 {
      background-image: url("/process3.svg");
    }
    & .process-4 {
      background-image: url("/process4.svg");
    }
  }
`;
