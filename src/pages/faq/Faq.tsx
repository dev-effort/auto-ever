import styled from "@emotion/styled";
import { useState } from "react";
import { Label } from "../../components/label/Label";
import { FaqListFilters } from "../../repositories/faqRepository/faq.types";
import { useGetFaqList } from "../../queryHooks/useFaq";
import { useGetCategories } from "../../queryHooks/useCategory";
import { AccordionContent } from "../../components/accordion/Accordion";
import { ServiceInquiry } from "./ServiceInquiry";
import { Process } from "./Process";
import { AppInfo } from "./AppInfo";

export const Faq = () => {
  // faq api query
  const [queries, setQueries] = useState<FaqListFilters>({
    tab: "CONSULT",
    faqCategoryID: undefined,
    limit: 10,
    offset: 0,
    question: undefined,
  });

  // faq 상세 페이지 제어
  const [activeFaq, setActiveFaq] = useState<number>(-1);

  // 검색어 value
  const [searchText, setSearchText] = useState<string | undefined>();

  // 카테고리 목록 조회
  const { data: categories } = useGetCategories({ tab: queries.tab });

  // faq 목록 조회
  const { data: faqs } = useGetFaqList(queries);

  // 검색어 변경
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  // 검색 초기화
  const clearSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setSearchText(undefined);
  };

  // 검색을 수행
  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setQueries({ ...queries, question: searchText });
  };

  // 검색 input에서 enter키 입력하여 검색 수행
  const handleKeyDownSearch = (
    e: React.KeyboardEvent<HTMLInputElement> | undefined
  ) => {
    if (e?.key === "Enter") {
      setQueries({ ...queries, question: searchText });
    }
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
              value={searchText || ""}
              onKeyDown={handleKeyDownSearch}
              onChange={handleSearchChange}
            />
            {searchText && <ClearButton onClick={clearSearch} />}
            <SearchButton type="button" onClick={handleSearch} />
          </SearchInputWrapper>
        </SearchWrapper>
      </SearchForm>

      {queries?.question && (
        <SearchInfo>
          <h2>
            검색결과 총 <em>{faqs?.pageInfo.totalRecord}</em>건
          </h2>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSearchText(undefined);
              setQueries({ ...queries, question: undefined });
            }}
          >
            검색 초기화
          </button>
        </SearchInfo>
      )}

      <FilterWrapper className="filter">
        <Label
          htmlFor="all"
          checked={queries.faqCategoryID === undefined}
          onChange={() => setQueries({ ...queries, faqCategoryID: undefined })}
        >
          전체
        </Label>
        {categories?.map((category) => {
          return (
            <Label
              key={category.categoryID}
              htmlFor={category.categoryID}
              checked={queries.faqCategoryID === category.categoryID}
              onChange={() =>
                setQueries({ ...queries, faqCategoryID: category.categoryID })
              }
            >
              {category.name}
            </Label>
          );
        })}
      </FilterWrapper>

      <FaqListWrapper>
        {faqs?.pageInfo.totalRecord !== 0 ? (
          faqs?.items.map((item) => (
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
                <FaqItemInner
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              </AccordionContent>
            </FaqItem>
          ))
        ) : (
          <NoResult>
            <p>검색 결과가 없습니다</p>
          </NoResult>
        )}
      </FaqListWrapper>

      <ServiceInquiry />

      <Process />

      <AppInfo />
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

const SearchForm = styled.div`
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

const SearchInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 0;

  & > h2 {
    margin: 0;
    font-size: 24px;
    line-height: 1.4;
    font-weight: 600;
    & > em {
      color: ${(props) => props.theme.colors.text.primary};
    }
  }
  & > button {
    align-items: center;
    display: flex;
    font-size: 16px;
    padding: 0 4px;
    cursor: pointer;
    background: none;
    border: none;
    ::before {
      background: url("/refresh.svg") no-repeat;
      background-size: auto 100%;
      content: "";
      height: 24px;
      margin-right: 2px;
      width: 24px;
    }
  }
`;

const NoResult = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.border.secondary};
  padding: 160px 0;
  text-align: center;
  ::before {
    background: url("/error.svg") no-repeat;
    background-size: auto 100%;
    content: "";
    display: block;
    height: 64px;
    margin: 0 auto 16px;
    width: 64px;
  }
  & > p {
    color: ${(props) => props.theme.colors.text.secondary};
    line-height: 1.6;
    margin-top: 16px;
    word-break: keep-all;
  }
`;
