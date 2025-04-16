import styled from "@emotion/styled";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { useCallback, useState, useEffect } from "react";

export const Home = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <Header />
      <BodyWrapper>
        <Outlet />
      </BodyWrapper>
      <Footer />
      <FloatingButtonWrapper>
        <div>
          <FloatingButton
            onClick={scrollToTop}
            className={showButton ? "visible" : "hidden"}
          />
        </div>
      </FloatingButtonWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.bg.primary};
  box-sizing: border-box;
  position: relative;
`;

const BodyWrapper = styled.div`
  padding: 0 48px 96px;
  min-height: calc(100vh - 80px - 176px);
`;

const FloatingButtonWrapper = styled.div`
  bottom: 0;
  left: 0;
  pointer-events: none;
  position: -webkit-sticky;
  position: sticky;
  width: 100%;
  z-index: 99;
  & > div {
    align-items: center;
    bottom: 40px;
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 32px;
    -webkit-transform: scale3d(1);
    transform: scale3d(1);
    transform-origin: 100% 100%;
    width: 56px;
  }
`;

const FloatingButton = styled.button`
  background-color: #fff;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 28px;
  border-radius: 50%;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.12);
  font-size: 0;
  height: 50px;
  margin-top: 8px;
  opacity: 0;
  pointer-events: none;
  position: relative;
  transition-duration: 0.4s;
  transition-property: width, height, margin, background-position, opacity;
  transition-timing-function: cubic-bezier(1, 0, 0.2, 1);
  width: 50px;
  background-image: url("/arrowTop.svg");
  border: none;
  cursor: pointer;
  padding: 0;

  &.visible {
    opacity: 1;
    pointer-events: all;
  }

  &.hidden {
    opacity: 0;
    pointer-events: none;
  }
`;
