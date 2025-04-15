import styled from "@emotion/styled";
import { useState } from "react";
import { Label } from "../../components/label/Label";

type Tab = "service" | "usage";

export const Faq = () => {
  const [activeTab, setActiveTab] = useState<Tab>("service");
  const [searchText, setSearchText] = useState<string>("");

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
          active={activeTab === "service"}
          onClick={() => setActiveTab("service")}
        >
          서비스 도입
        </Tab>
        <Tab
          active={activeTab === "usage"}
          onClick={() => setActiveTab("usage")}
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
        <Label htmlFor="all">전체</Label>
        <Label htmlFor="service">서비스 상품</Label>
        <Label htmlFor="consulting">도입 상담</Label>
        <Label htmlFor="contract">계약</Label>
      </FilterWrapper>
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
    background: url("/public/search.svg") no-repeat;
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
