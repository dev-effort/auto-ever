import styled from "@emotion/styled";
import { useState } from "react";
import { Label } from "../../components/label/Label";
import { FaqListFilters } from "../../repositories/faqRepository/faq.types";
import { useGetFaqList } from "../../queryHooks/useFaq";
import { useGetCategories } from "../../queryHooks/useCategory";
import { AccordionContent } from "../../components/accordion/Accordion";

export const Faq = () => {
  const [queries, setQueries] = useState<FaqListFilters>({
    tab: "CONSULT",
    faqCategoryID: undefined,
    limit: 10,
    offset: 0,
  });

  const [activeFaq, setActiveFaq] = useState<number>(-1);
  const [searchText, setSearchText] = useState<string>("");

  const { data: categories } = useGetCategories({ tab: queries.tab });
  const { data: faqs } = useGetFaqList(queries);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const clearSearch = () => {
    setSearchText("");
  };

  return (
    <Container>
      <Title>
        자주 묻는 질문
        <TitleDescription>궁금하신 내용을 빠르게 찾아보세요.</TitleDescription>
      </Title>

      <Tabs>
        <Tab
          active={queries.tab === "CONSULT"}
          onClick={() => setQueries({ ...queries, tab: "CONSULT" })}
        >
          서비스 도입
        </Tab>
        <Tab
          active={queries.tab === "USAGE"}
          onClick={() => setQueries({ ...queries, tab: "USAGE" })}
        >
          서비스 이용
        </Tab>
      </Tabs>

      <SearchForm>
        <SearchWrapper>
          <SearchInputWrapper>
            <SearchInput
              placeholder="찾으시는 내용을 입력해 주세요"
              type="text"
              value={searchText}
              onChange={handleSearchChange}
            />
            {searchText && <ClearButton onClick={clearSearch} />}
            <SearchButton />
          </SearchInputWrapper>
        </SearchWrapper>
      </SearchForm>

      <FilterWrapper className="filter">
        <Label
          htmlFor="all"
          checked={queries.faqCategoryID === undefined}
          onClick={() => setQueries({ ...queries, faqCategoryID: undefined })}
        >
          전체
        </Label>
        {categories?.map((category) => {
          return (
            <Label
              key={category.categoryID}
              htmlFor={category.categoryID}
              checked={queries.faqCategoryID === category.categoryID}
              onClick={() =>
                setQueries({ ...queries, faqCategoryID: category.categoryID })
              }
            >
              {category.name}
            </Label>
          );
        })}
      </FilterWrapper>

      <FaqListWrapper>
        {faqs?.items.map((item) => (
          <FaqItem key={item.id}>
            <FaqItemTitle active={item.id === activeFaq}>
              <FaqItemButton
                active={item.id === activeFaq}
                onClick={() => {
                  if (item.id === activeFaq) {
                    setActiveFaq(-1);
                  } else {
                    setActiveFaq(item.id);
                  }
                }}
              >
                {queries.tab === "USAGE" && <em>{item.categoryName}</em>}
                <em>{item.subCategoryName}</em>
                <strong>{item.question}</strong>
              </FaqItemButton>
            </FaqItemTitle>
            <AccordionContent isOpen={item.id === activeFaq}>
              <FaqItemInner dangerouslySetInnerHTML={{ __html: item.answer }} />
            </AccordionContent>
          </FaqItem>
        ))}
      </FaqListWrapper>
      <SubHeadline>서비스 문의</SubHeadline>
      <InquiryInfo>
        <InquiryButton
          download="기아 비즈 서비스 제안서.pdf"
          href="/public/기아 비즈 서비스 제안서.pdf"
        >
          <i className="document" />
          <span>서비스 제안서 다운로드</span>
        </InquiryButton>
        <InquiryButton>
          <i className="write" />
          <span>상담문의 등록하기</span>
        </InquiryButton>
        <InquiryButton>
          <i className="chat"></i>
          <span>
            카톡으로 문의하기
            <em>ID : 기아 비즈</em>
          </span>
        </InquiryButton>
      </InquiryInfo>

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
      <AppInfo>
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
      </AppInfo>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  max-width: 1240px;
`;

const Title = styled.h1`
  display: flex;
  flex-direction: column;
  font-size: 48px;
  height: 222px;
  justify-content: center;
  line-height: 1.4;
  margin: 0;
  font-weight: 600;
`;

const TitleDescription = styled.em`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.6;
  margin-top: 0.4em;
  word-break: keep-all;
`;

const Tabs = styled.ul`
  display: flex;
  margin-bottom: 48px;
`;

const Tab = styled.li<{ active: boolean }>`
  background-color: ${(props) =>
    props.active
      ? props.theme.colors.bg.inverse
      : props.theme.colors.bg.primary};
  border: 1px solid
    ${(props) =>
      props.active
        ? props.theme.colors.border.primary
        : props.theme.colors.border.secondary};
  padding: 16px 24px;
  font-size: 20px;
  font-weight: ${(props) => (props.active ? 600 : 400)};
  position: relative;
  flex: 1;
  min-height: 56px;
  align-items: center;
  display: flex;
  justify-content: center;
  cursor: pointer;
  color: ${(props) =>
    props.active
      ? props.theme.colors.text.inverse
      : props.theme.colors.text.primary};
`;

const SearchForm = styled.form`
  display: block;
  margin-top: 0em;
`;

const SearchWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.bg.secondary};
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
  padding: 24px;
`;

const SearchInputWrapper = styled.div`
  width: 100%;
  --clear-space: 16px;
  position: relative;
`;

const SearchInput = styled.input`
  border: 1px solid ${(props) => props.theme.colors.border.primary};
  font-size: 18px;
  height: 56px;
  padding-left: 16px;
  padding-right: calc(24px + 16px + 56px - 2px);
  width: 100%;
  outline: none;

  ::placeholder {
    color: ${(props) => props.theme.colors.text.hint};
    font-size: 18px;
  }
`;

const ClearButton = styled.button`
  right: 55px;
  align-items: center;
  display: flex;
  font-size: 0;
  height: calc(100% - 2px);
  justify-content: center;
  position: absolute;
  top: 1px;
  width: 40px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  ::before {
    background: url("/public/clear.svg") no-repeat;
    background-size: auto 100%;
    content: "";
    height: 24px;
    width: 24px;
  }
`;

const SearchButton = styled.button`
  align-items: center;
  display: flex;
  font-size: 0;
  height: calc(100% - 2px);
  justify-content: center;
  position: absolute;
  right: 1px;
  top: 1px;
  width: calc(56px - 2px);
  background: none;
  border: none;
  padding: 0;

  ::before {
    background: url("/search.svg") no-repeat;
    background-color: ${(props) => props.theme.colors.bg.primary};
    background-size: auto 100%;
    content: "검색";
    height: 32px;
    width: 32px;
    cursor: pointer;
  }
`;

const FilterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 24px;
  margin-right: -2px;
`;

const FaqListWrapper = styled.ul`
  border-top: 2px solid ${(props) => props.theme.colors.border.primary};
  margin: 0;
  list-style: none;
  padding: 0;
`;

const FaqItem = styled.li`
  border-bottom: 1px solid ${(props) => props.theme.colors.border.secondary};
`;

const FaqItemTitle = styled.h4<{ active: boolean }>`
  background-color: ${(props) =>
    props.active
      ? props.theme.colors.bg.secondary
      : props.theme.colors.bg.primary};
  margin: 0;
`;

const FaqItemButton = styled.button<{ active: boolean }>`
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  display: flex;
  font-size: 20px;
  line-height: 1.4;
  overflow: hidden;
  padding: 24px 0;
  padding-right: 76px + 1.6em;
  position: relative;
  width: 100%;
  cursor: pointer;
  background: none;
  border: none;
  & > em {
    box-sizing: initial;
    color: ${(props) => props.theme.colors.text.secondary};
    padding: 0 24px;
    width: 8em;
  }
  & > em + em {
    width: 6em;
  }
  & > strong {
    flex: 1 1;
    padding-left: 24px;
    text-align: left;
    font-weight: 600;
  }
  ::after {
    background: url("/arrow.svg") no-repeat;
    background-size: auto 100%;
    content: "";
    height: 32px;
    position: absolute;
    right: 22px;
    transition: transform 0.4s cubic-bezier(1, 0, 0.2, 1),
      -webkit-transform 0.4s cubic-bezier(1, 0, 0.2, 1);
    width: 32px;
    transform: ${(props) => (props.active ? "rotate(180deg)" : "rotate(0deg)")};
  }
`;

const FaqItemInner = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.border.tertiary};
  font-size: 18px !important;
  line-height: 1.8;
  overflow-x: scroll;
  padding: 32px 40px;
  * {
    all: revert;
  }
`;

const SubHeadline = styled.h2`
  line-height: 1.4;
  font-size: 24px;
  font-weight: 600;
  margin: 64px 0 24px;
`;

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
    &:not(:first-child) {
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

const AppInfo = styled.div`
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
