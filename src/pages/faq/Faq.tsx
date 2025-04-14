import styled from "@emotion/styled";
import { useState } from "react";

type Tab = "service" | "usage";

export const Faq = () => {
  const [activeTab, setActiveTab] = useState<Tab>("service");

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
              placeholder="찾으시는 내용을 입력해주세요"
              type="text"
            />
            <SearchButton />
          </SearchInputWrapper>
        </SearchWrapper>
      </SearchForm>
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
  font-size: 1rem;
  height: 56px;
  padding-left: 16px;
  padding-right: calc(24px + 16px + 56px - 2px);
  width: 100%;
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

  ::before {
    background: url("/public/search.svg") no-repeat;
    background-color: ${(props) => props.theme.colors.bg.primary};
    background-size: auto 100%;
    content: "검색";
    height: 32px;
    width: 32px;
  }
`;
